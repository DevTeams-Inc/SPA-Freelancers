<template>
  <div>
    <div v-loading="loading" v-if="existe" class="container-MiniPerfil">
      <div class="miniPerfil">
        <div class="topMiniPerfil">
          <div class="leftTop-MiniPerfil">
            <div class="container-pic-freelancer">
              <a v-if="id == UserId" @click="dialogFormVisible=true">
                <span class="img-freelancer">
                  <img class="img-pic-freelancer" height="100px" :src="data.avatar">
                  <i id="icon" class="el-icon-upload2"></i>
                </span>
              </a>
              <span v-else>
                <img class="img-pic-freelancer" height="100px" :src="data.avatar">
              </span>
            </div>
            <div class="rating-mini">
              <el-rate id="rating-star"  disabled show-score text-color="#ff9900" score-template></el-rate>
            </div>
            <div class="ciudad-mini">
              <div class="address">
                <i class="el-icon-location">{{data.address}}</i> 
              </div>
       
              
            </div>
            <div class="category-Mini">
       
                <h4>{{data.profesion}}</h4>
              
            </div>
            <div class="contact-Mini">
              <h4>
                <i style="padding-right:5px;" class="el-icon-phone-outline"></i>
              </h4>
              <p>{{data.phoneNumber}}</p>
              <h4 style="padding-left:10px;">
                <i style="padding-right:10px;" class="fas fa-language"></i>
              </h4>
              <p>{{data.lenguaje}}</p>
            </div>
          </div>

          <div class="rightTop-MiniPerfil">
            <div class="texto-mini">
              <h4>{{data.name}} {{data.lastName}}</h4>
              <p>{{data.biography}}</p>
            </div>
          </div>
        </div>
        <div class="bottomMiniPerfil">
          <div class="skills-MiniPerfil" >
            <h4>Habilidades</h4>
            <el-tag
              v-if="id == UserId"
              v-for="(hability, index) in data.habilities"
              :key="index"
              closable
              size="mini"
              class="mb-2 ml-1"
              @close="removeHability(hability.id , data.id)"
              type="primary"
            >{{hability.title}}</el-tag>
            <el-tag
             v-else
              :key="index"
              size="mini"
              class="mb-2 ml-1"
              type="primary">
              {{hability.title}}
              </el-tag>
          </div>
          <div class="contactar-MiniPerfil">
            <router-link :to="`/edit/registro/${data.id}`">
              <el-button
                style="width:45px;margin-left:90px;"
                v-if="id == UserId"
                type="primary"
                icon="el-icon-edit"
                circle
              ></el-button>
            </router-link>
            <el-button style="margin-left:90px;" v-if="id != UserId" type="primary">Contactar</el-button>
          </div>
        </div>
      </div>
      <div class="priceHour">
        <div class="price">
          <h4>Precio Por Hora:</h4>
          <p>${{data.priceHour}}</p>
        </div>
        <div class="icono-price">
          <p>$</p>
        </div>
      </div>
      <div class="componenteUbicacion">
        <h4>Ubicacion</h4>
        <gmap-map :center="center" :zoom="10" style="height: 300px;">
          {{this.UserId}}
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click=" toggleInfoWindow(m, index)"
          ></gmap-marker>

          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWindowOpen"
            @closeclick="infoWindowOpen=false"
          >
            <img :src="infoImg" width="100px" class="img-map" alt>
            <p class="mt-1">{{infoContent}}</p>
          </gmap-info-window>
        </gmap-map>
      </div>
      <!-- el form para la imagen -->
      <el-dialog title="Actualizar Imagen" :visible.sync="dialogFormVisible">
        <div class="large-12 medium-12 small-12 cell">
          <label>Imagen</label>
          <div>
            <input type="file" id="file" ref="file" @change="handleFileUpload()">
          </div>
          <button class="btn mt-4 el-button btn-primary" @click="submitFile()">Subir imagen</button>
        </div>
      </el-dialog>
    </div>
    <div class="validCRegistro" v-if="existe===false">
      <div class="img-v-R">
        <img src="@/assets/img/avisoRegister.png" style="width:250px;" alt>
      </div>
      <div class="texto-button-validR">
        <p>Si deseas acceder a tu perfil, debes completar el registro y unirte a nuestra comunidad!</p>
        <router-link :to="`/completar/registro/${id}`">
          <el-button style="margin-top:5px;">Completar registro</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../../../helpers/event-bus";
export default {
  props: ["id"],
  data() {
    return {
      exist: null,
      applicationUserId: localStorage.getItem("user_id"),
      loading: false,
      dialogFormVisible: false,
      loadingprofile: false,
      loading: false,
      file: "",
      idFrelancer:null,
      infoContent: "",
      infoImg: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWindowOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffeset: {
          width: 0,
          height: -35
        }
      },
      latitude: null,
      longitude: null,
      rating: 0,
      data: [],
      freelancer: [],
      center: { lat: 0, lng: 0 },
      markers: [
        {
          position: { lat: 0, lng: 0 },
          name: "Mi Posicion",
          img: ""
        },
        {
          position: { lat: 0, lng: 0 },
          name: "",
          img: ""
        }
      ],
      deleteHability: {
        freelancer: null,
        hability: null
      }
    };
  },
  created() {
    this.getUser(this.id);
  

  },
  mounted() {
    let self = this;
    self.getLocation();
    EventBus.$once("profile", id => {
      self.loadingprofile = true;
      self.isFreelancer(id);
      if (self.$store.state.existe) {
        self.getUser(id);
      }
    });
  },
  methods: {
    getUser(id) {
      let self = this;
      self.loading = true;
      self.$store.state.services.freelancerService
        .getById(id)
        .then(r => {
          self.data = r.data;
          self.rating = r.data.rating;
          self.markers[1].name = r.data.name + " " + r.data.lastName;
          self.markers[1].img = r.data.avatar;
          self.center.lat = r.data.lat;
          self.center.lng = r.data.long;
          self.markers[1].position.lng = r.data.long;
          self.markers[1].position.lat = r.data.lat;
          EventBus.$emit("idFrelancerLogeado",(r.data.id));
          this.loading = false;
        })
        .catch(e => {

          this.$router.push(`/completar/registro/${id}`);
        });
    },
    /**
     * obtienen la ubicacion de donde estas conectado
     */
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
    showPosition(position) {
      this.markers[0].position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    },
    /**
     * me permite mostrar una pequeña descripcion
     * en el mapa del usuario y mi posicion
     */
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.name;
      this.infoImg = marker.img;

      if (this.currentMidx == idx) {
        this.infoWindowOpen = !this.infoWindowOpen;
      } else {
        this.infoWindowOpen = false;
        this.currentMidx = idx;
      }
    },
    /**
     * metodo para asignarle el valor del input a la variable de tipo file
     */
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    /**
     * sube la imagen
     */
    submitFile() {
      let self = this;
      self.loading = false;
      //creamos un form data
      let formData = new FormData();
      formData.append("file", self.file);
      formData.append("id", localStorage.getItem("user_id"));
      //utilizamos axios para subirla
      self.$store.state.services.accountService
        .submitImg(formData)
        .then(r => {
          self.dialogFormVisible = false;
          self.file = null;
          self.loading = false;
          this.getUser(this.id);
        })
        .catch(e => {
         self.$notify.error({
            title: "Error",
            message: `${e.response.data}`,
            offset: 50,
            duration: 2200
          });
        });
    },
    /**
     * metodo para eliminar la habilidad
     * @param hability id de la habilidad a eliminar
     * @param freelancer id del freelancer de donde se va a eliminar
     */
    removeHability(hability, freelancer) {
      let self = this;
      console.log(hability);
      console.log(freelancer);
      self.deleteHability.freelancer = freelancer;
      self.deleteHability.hability = hability;
      console.log(self.deleteHability);
      self.$store.state.services.freelancerService
        .deleteHability(self.deleteHability)
        .then(r => {
          self.getUser(this.id);
        })
        .catch(e => {
          self.$notify.error({
            title: "Error",
            message: "No se pudo eliminar la habilida",
            offset: 50,
            duration: 2200
          });
        });
    },
    /**
     * verificar si el usuario completo su perfil
     * @param id id del usuario
     */
    isFreelancer(id) {
      let self = this;
      self.$store.state.services.freelancerService
        .userExist(id)
        .then(r => {
          if (r.data === true) {
            self.$store.state.existe = true;
          } else {
            self.$store.state.existe = false;
          }
        })
        .catch(e => {
          self.exist = false;
        });
    }
  },
  computed: {
    /**
     * Me permite obtener el id del usuario logeado del localStorage
     */
    UserId() {
      return localStorage.getItem("user_id");
    },
    existe() {
      return this.$store.state.existe;
    }
  }
};
</script>

<style>
.address{
  font-family: "Roboto", sans-serif;
  color: #409eff;
  font-size: 14px;
 
}
.contact-Mini {
  display: flex;
  color: #4764da;
  width: 300px;
}
.contact-Mini h4 {
  font-size: 15px;
}
.contact-Mini p {
  font-size: 12.7px;
}
.container-MiniPerfil {
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
}
.miniPerfil {
  position: relative;

  background-color: white;
  padding: 20px;
}

.priceHour {
  margin-top: 20px;
  background-color: white;
  display: flex;
}
.price {
  padding-top: 15px;
  text-align: left;
  padding-left: 15px;
  width: 92%;
  display: flex;
}
.price p {
  font-size: 15px;
  margin-left: 10px;
  color: #10df90;
}
.price h4 {
  font-size: 17px;
  color: #4764da;
}
.icono-price {
  width: 3.5%;
}
.icono-price p {
  color: white;
  background-color: #409eff;
  height: 25px;
  border-radius: 50%;
  margin-top: 13px;
}
.topMiniPerfil {
  display: flex;
}
.leftTop-MiniPerfil {
  width: 30%;
}
/* ------ */
#icon {
  position: absolute;
  font-size: 20px;
  font: bold;
  top: 60px;
  color: black;
  right: 560px;
  display: none;
}
.img-freelancer img {
  filter: alpha(opacity=100) 3000;
  -moz-opacity: 1;
  opacity: 1;
}
.img-freelancer:hover img {
  filter: alpha(opacity=50);
  -moz-opacity: 0.5;
  opacity: 0.5;
  cursor: pointer;
}
.img-freelancer:hover #icon {
  display: inline-block;
  cursor: pointer;
}
.img-pic-freelancer {
  border-radius: 100%;
  width: 100px;
}
.ciudad-mini {
  margin-top: 5px;
}
.ciudad-mini h4 {
  font-size: 15px;
}
.category-Mini h4 {
  font-size: 15px;
  color: #4764da;
}

.rightTop-MiniPerfil {
  width: 70%;
}
.rightTop-MiniPerfil .texto-mini {
  text-align: left;
  font-size: 13px;
  margin-top: 20px;
}
.texto-mini p {
  width: 100%;
  text-align: justify;
  padding-right: 5px;
  color: rgb(97, 97, 97);
}
.texto-mini h4 {
  font-size: 17px;
}

.bottomMiniPerfil {
  display: flex;
  border-top: 1px solid rgb(241, 241, 241);
  padding-top: 10px;
}
.skills-MiniPerfil {
  text-align: left;
  width: 80%;
}
.skills-MiniPerfil h4 {
  font-size: 17px;
  color: rgb(128, 128, 128);
}

.componenteUbicacion {
  padding: 15px;
  margin-top: 20px;
  background-color: white;

  border: 1px solid rgb(246, 246, 246);
}
.componenteUbicacion h4 {
  font-size: 17px;
  text-align: left;
  color: #4764da;
}
.validCRegistro {
  background-color: white;
  margin-top: 20px;
  padding-bottom: 50px;
  border-radius: 3px;
  border: 1px solid rgb(240, 237, 255);
}
.texto-button-validR {
  margin-top: 10px;
}

.texto-button-validR p {
  width: 80%;
  margin: 0 auto;
}
</style>
