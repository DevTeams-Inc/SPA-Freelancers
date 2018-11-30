<template  >
    <el-row class=" p-0" :style="{position:'absolute',width:'100%',background: '#f7f7f7'}" :gutter="40">
       <div class="Etiqueta">
         <div class="texto-etiqueta">
           <h2 class="h2-etiqueta">Busca Freelancers</h2>
           <p class="p-etiqueta"> Busca freelancer cerca de tu comunidad.</p>
         </div>
         </div>
      <div class="search">  
        <div class="SearchContainer">
            <div class="left-search">
                
            </div>
            <div class="right-search">
                    <gmap-autocomplete
                    @place_changed="getFreelancer"
                    class="ubicacion"
                    >
                    </gmap-autocomplete>
            </div>
        </div>
      </div>  
      <div class="container-proyect" v-loading="loading" element-loading-text="Estamos obteniendo información..."> 
            <gmap-map
                :center="center"
                :zoom="10"
                style="height: 400px; width: 100%;"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="center=m.position , toggleInfoWindow(m, index)"
                >
                </gmap-marker>

                <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWindowOpen"
                @closeclick="infoWindowOpen=false">
                <img :src="infoImg" class="img-map" alt="user-avatar">
                <router-link tag="a" :to="`/freelancer/${freelancerId}`">
                <p class="mt-1">{{infoContent}}</p>
                </router-link>
                <p class="mt-1"><b>Profesión:</b> <el-tag>{{infoProfession}}</el-tag></p>
                </gmap-info-window>

            </gmap-map>
      </div>
      <br><br><br>
     <Footer></Footer>
    </el-row>
</template>

<script>
import FilterProyects from "../proyect/FilterProyects";
import Footer from "../shared/Footer";
import ListProyect from "../proyect/ListProyect";
import SearchProyect  from "../proyect/SearchProyect";
export default {
components:{FilterProyects,Footer, ListProyect, SearchProyect},
 data() {
     return {
         loading:false,
         options: [{
          value: 10,
          label: '10 millas'
        }, {
          value: 30,
          label: '30 millas'
        }, {
          value: 50,
          label: '50 millas'
        }, {
          value: 100,
          label: '100 millas'
        }],
        value: '',
        center: {lat: 42.363211, lng: -105.071875},
        markers: [
        {
          position: { lat: 0, lng: 0 },
          name:'Mi Posicion',
          img:'',
        }
      ],
        radiusOptions: [10, 30, 50, 100],
        radius: 50,
        freelancerMap: [],
         infoWindowPos:{
            lat: 0,
            lng: 0 
        },
        infoWindowOpen:false,
        currentMidx: null,
        infoOptions:{
            pixelOffeset:{
                width:0,
                height:-35
            }
        },
        infoImg:'',
        infoContent:'',
        infoProfession: '',
        freelancerId: null,
     }
 },
 mounted() {
     this.getMap(),
     this.getLocation()
 },
 methods: {
     getFreelancer(place){
         let center = {
             lat: place.geometry.location.lat(),
             lng: place.geometry.location.lng()
         }
         this.center = center;
     },
     getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
    /**
     * muestra mi posicion y la centra en el mapa
     * y luego le asigna a markers[0].position 
     * a mi primera posicion mi longitud y latitud para ubicarme en el mapa
     * @param position posicion 
     */
    showPosition(position){  
       this.markers[0].position = {
           lat : position.coords.latitude,
           lng : position.coords.longitude
       }
       this.center.lat = position.coords.latitude
       this.center.lng = position.coords.longitude
    },

    getMap(){
        let self = this
        self.loading = true,
        self.$store.state.services.freelancerService.getMap()
        .then((result) => {
            self.freelancerMap = result.data 
            self.freelancerMap.forEach(element => {
                self.markers.push({
                    position: {lat: element.lat, lng: element.long}, 
                    name: element.fullName,
                    img: element.avatar,
                    profession: element.profession,
                    freelancerId: element.id
                })
            });
            self.loading = false
        }).catch((err) => {
            
        });
    },
    toggleInfoWindow(marker , idx){
        this.infoWindowPos = marker.position
        this.infoContent = marker.name
        this.infoImg = marker.img
        this.infoProfession = marker.profession
        this.freelancerId = marker.freelancerId
        if(this.currentMidx == idx){
            this.infoWindowOpen = !this.infoWindowOpen
        }
        else{
            this.infoWindowOpen = false;
            this.currentMidx = idx
        }
    },
 }
}
</script>

<style scoped>
.SearchContainer{
    color: white;
    display: flex;
}
.img-map{
    height: 60px;
    border-radius: 40%;
}
.left-search{
 background-color: #304ab3;
 width: 30.5%;
}
.right-search{
    width: 65.5%;
    padding-left: 10px;
}
.right-search .el-input__inner{
    border: none;
}
.right-search  .el-input-group__append{
 border: none;
 background-color: white;
}
@media (min-width: 1106px) and (max-width: 1320px) {
    .left-search{
        width: 34.6%;
    }
 }
 @media (min-width: 930px) and (max-width: 1105px) {
 .left-search{

     min-width:317px ;
  
 }
 .el-switch span {
     font-size: 13px;
 }
 }

  @media (min-width: 670px) and (max-width: 929px) {
 .el-switch span{
     font-size: 11px;
 }

 }
 @media (max-width: 669px) {
 .SearchContainer{
     display: block;
 }
 .left-search{

 width: 100%;
height: 36px;
 margin-bottom:10px; 

}
.right-search{
    width: 100%;
}
 }

.container-proyect{
    position: relative;
    width: 90%;
    max-width: 1100px;
    min-width: 1200px;
    height: auto;
    /* max-width: 1370px;
    min-width: 1350px; */
    margin:0 auto; 
    margin-bottom: 100px;

  display: flex;
}
.search{
 
    position: relative;
    width: 90%;
    max-width: 1100px;
    min-width: 1200px;
    height: auto;
    /* max-width: 1370px;
    min-width: 1350px; */
    margin:0 auto; 
    margin-top: 20px;
    margin-bottom: 10px;
}
.container-color{
  margin: 0 auto;
}
.Etiqueta{
  padding-top:10px;
  padding-bottom: 10px; 
  position: relative;
   width: 100%;
  background-color: #304ab3;
  margin-top: 40px;
  color: white;
  text-align: left;
}
.texto-etiqueta{
  margin-left:30px; 
}
.texto-etiqueta h2{
  font-size:20px; 
}
@media (min-width: 1106px) and (max-width: 1320px) {
  .container-proyect{
   
       min-width: 1100px;
   
    }
    .search{
      min-width: 1100px;
    }
 }
 @media (min-width: 930px) and (max-width: 1105px) {
  .container-proyect{
       min-width: 900px;
    }
    .search{
      min-width: 900px;
    }
 
 }
  @media (min-width: 670px) and (max-width: 929px) {
.container-proyect
{ 
  min-width: 90%;
  display: block;
}
.search{
      min-width: 90%;
      margin-top: 80px;
    }
   
.Etiqueta{
  display: none;
}
 
 }
@media (max-width: 669px) {
.container-proyect
{ 
  min-width: 90%;
  display: block;
}
.Etiqueta{
  display: none;
}
.search{
      min-width: 90%;
      margin-top: 80px;
    }
 
 }

.Container-ListaProyect{
    width: 70%;
}
.Item-Proyect:nth-child(1){
      margin-top: 0px;
}
.Item-Proyect{
    margin-top: 20px;
    margin-left: 30px;
    height: 330px;
    background: white;
    border-radius:2px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding-top:10px; 
    
}
.Top-Item{
    width: 100%;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgb(240, 240, 240);
}
.Top-Item > h2{ 
    font-size:20px;
    text-align: left; 
    width: 50%;
}
.Top-Item  .Top-Left-Img{
width: 50%;
text-align: right;

}

.Center-Item{
  width: 100%;
  display: flex;    
}
.Left-Item{
   
    width: 30%;
    text-align: left;
    box-sizing: border-box;
    padding: 20px;
    border-right: 1px solid rgb(240, 240, 240);
}
.Left-Item > h4{
  margin-top: 10px;
}

.botones{
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
.el-button{
 
    width: 100%;
}
.CenterRight-Item{
    box-sizing:border-box;
    padding: 20px;
    width: 70%;
    text-align: left;   
   
}



/* Media queries */
@media (min-width: 1106px) and (max-width: 1320px) {
.CenterRight-Item p{
    font-size: 15px;
    
}
.Left-Item h4{
  font-size: 15px;
}
.botones{
    
    margin-top: 15px;
}
 }


 @media (min-width: 600px) and (max-width: 1105px) {
 .CenterRight-Item p{
    font-size: 12px;
    
}
.Left-Item h4{
  font-size: 12px;
}
.Left-Item a{
  font-size: 12px;
}
.botones{
    
    margin-top: 10px;
}
.Top-Item > h2{ 
    font-size:15px;
}
.Item-Proyect{
    margin-top: 10px;
    margin-left: 10px;
    height: 300px;
    background: white;
    border-radius:2px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding-top:10px; 
    
}
 }
  @media (min-width: 300px) and (max-width: 929px) {
   .Container-ListaProyect{
    width: 100%;

   }
   .Item-Proyect{
       margin-left: 0px;
   }
 
 }

@media (max-width: 669px) {
.Container-ListaProyect
{
 width: 100%;
 
 
}
.Item-Proyect
{
  margin-left: 0px;
  height: auto;

}
.Top-Item > h2{ 
    font-size:13px;
    text-align: left; 
    width: 100%;
}
 .CenterRight-Item p{
    font-size: 12px;
    
}
.Left-Item h4{
  font-size: 12px;
}
.Top-Left-Img h4{
     font-size: 12px; 
}
.Left-Item a{
  font-size: 12px;
}
.Tag-Habilidades h4{
   font-size: 12px;
}
.Center-Item{
  width: 100%;
  flex-direction:column-reverse ;

}
.CenterRight-Item
{
 
width: 100%;
}
 .Left-Item{
    
     width: 100%;
     border: none;
     border-top: 1px solid rgb(240, 236, 236);
       margin-top: -15px;
       display: flex;
 }
 .details-item{
     margin-top: 5px;
 }
 .botones{
     margin-top: 5px;
     width: 50%;
     margin-left: 70px;

   
 }
 }

 .ubicacion {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  position: relative;
  right: px;
}
.ubicacion:hover {
  color: #909399;
}
.ubicacion::-webkit-input-placeholder {
  color: #c0c4cc;
}

</style>
