
<template>
    <div class="Container-ListaProyect">
           <div class="Item-Proyect" v-for="(i,index) in proyects" :key="index">
              <div class="Top-Item" >
                  <h2>{{i.title}}</h2>
                  <div class="Top-Left-Img">
                       <!-- Aqui va un div o una etiqueta img(Proximamente) -->
                        <h4>{{i.userName}}</h4>
                  </div>
              </div>
              <div class="Center-Item">
                 <div class="Left-Item">
                     <div class="details-item">
                   <h4>Publicado el 6 de Agosto</h4>
                   <h4>{{i.nameCategory}}</h4>
                   <a  href="#">Rep. Dom.</a>
                   </div>
                     <div class="botones-proyect">
                         <el-button id="boton-proyect" type="primary" >Aplicar</el-button><br><br>
                         <el-button id="boton-proyect" type="secondary" >Ubicacion</el-button>
                     </div>
                 </div>
                <div class="CenterRight-Item">
                    <p>
                     {{i.description}}
                    </p>
                    <div class="Tag-Habilidades">
                          <h4><b>Habilidades Requeridas</b> <a class="a-jobs-badge" href="">{{i.required_Skill}} </a></h4>
                         
                    </div>
                </div>
              </div>  
          </div>
           <!-- <div class="Item-Proyect">
              <div class="Top-Item">
                  <h2>Programador en Asp.net C# y Vue.js</h2>
                  <div class="Top-Left-Img">
                     
                        <h4>Soitsa</h4>
                  </div>
              </div>
            
              <div class="Center-Item">
                 <div class="Left-Item">
                     <div class="details-item">
                   <h4>Publicado el 6 de Agosto</h4>
                   <h4>Categoria</h4>
                   <a  href="#">Rep. Dom.</a>
                   </div>
                     <div class="botones-proyect">
                         <el-button id="boton-proyect" type="primary" >Aplicar</el-button><br><br>
                         <el-button id="boton-proyect" type="secondary" >Ubicacion</el-button>
                     </div>
                 </div>
                <div class="CenterRight-Item">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus delectus eligendi natus maxime, libero, 
                      explicabo rerum atque aspernatur at non possimus deserunt incidunt fuga, ut veritatis numquam sapiente ex velit?Lorem ipsum dolor sit amet 
                      consectetur adipisicing elit. Beatae reprehenderit corporis quibusdam sed necessitatibus praesentium totam in, labore inventore minima quod accusamus, ducimus architecto nam. Unde debitis mollitia consectetur fugiat.</p>
                    <div class="Tag-Habilidades">
                          <h4><b>Habilidades Requeridas</b> <a class="a-jobs-badge" href="">Comer mucho  </a></h4>
                         
                    </div>
                </div>
              </div>  
          </div>
           <div class="Item-Proyect">
              <div class="Top-Item">
                  <h2>Programador en Asp.net C# y Vue.js</h2>
                  <div class="Top-Left-Img">
            
                        <h4>Soitsa</h4>
                  </div>
              </div>
            
              <div class="Center-Item">
                 <div class="Left-Item">
                     <div class="details-item">
                   <h4>Publicado el 6 de Agosto</h4>
                   <h4>Categoria</h4>
                   <a  href="#">Rep. Dom.</a>
                   </div>
                     <div class="botones-proyect">
                         <el-button id="boton-proyect" type="primary" >Aplicar</el-button><br><br>
                         <el-button id="boton-proyect" type="secondary" >Ubicacion</el-button>
                     </div>
                 </div>
                <div class="CenterRight-Item">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus delectus eligendi natus maxime, libero, 
                      explicabo rerum atque aspernatur at non possimus deserunt incidunt fuga, ut veritatis numquam sapiente ex velit?Lorem ipsum dolor sit amet 
                      consectetur adipisicing elit. Beatae reprehenderit corporis quibusdam sed necessitatibus praesentium totam in, labore inventore minima quod accusamus, ducimus architecto nam. Unde debitis mollitia consectetur fugiat.</p>
                    <div class="Tag-Habilidades">
                          <h4><b>Habilidades Requeridas</b> <a class="a-jobs-badge" href="">Comer mucho  </a></h4>
                         
                    </div>
                </div>
              </div>  
          </div> -->

    </div>
</template>





<style>
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

.botones-proyect{
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
#boton-proyect{
 
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
.botones-proyect{
    
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
.botones-proyect{
    
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
 .botones-proyect{
     margin-top: 5px;
     width: 50%;
     margin-left: 70px;

   
 }
 }


 
</style>

<script>

export default {
     data(){
         return{
             proyects:[],
         }
     },
     mounted(){
         this.getProyects();
     },
    methods:{
        getProyects(){
            let self = this;
            self.$store.state.services.proyectService
            .getAllProyects()
            .then(r=>{
                this.proyects= r.data.entities;
                console.log(this.proyects);
            })
        }
    }
}

</script>

