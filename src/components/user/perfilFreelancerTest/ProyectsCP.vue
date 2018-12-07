<template>
   <div class="container-Proyects-Interesados">
     <div class="container-ProyectsCP">
         <div class="proyectsCP">
                <div class="interesados">
                   <h4>Interesados en tu servicio</h4>
                 <div v-for="(i,index) in interesados" v-loading="loading" :key="index" style="display:flex;" >
                    <div class="left-InteresadoFreelancers">
                      <div class="Info-Interesado">
                          <h4>{{i.fullName}}</h4>
                           <p>Revisa tu correo
                           </p>
                       </div>
                      </div>
                      <div class="right-InteresadoFreelancers">
                        <div class="buttons-Action">
                            <el-button id="button-interesado" @click="descart(i.id)" type="secondary">Descartar</el-button>
                            <el-button id="button-interesado"   @click="(ir(i.applicationUserId))" type="primary">Ver perfil</el-button>
                         
                         </div>
                       </div>
                    </div>
                </div>  
         </div>
     </div>
     <div class="container-ProyectsCP">
         <div class="proyectsCP">
                <div class="interesados">
                   <h4>Freelancers Contactados</h4>
                 <div style="display:flex;" v-for="(i,index) in contacted" v-loading="loading" :key="index" >
                    <div class="left-InteresadoFreelancers">
                      <div class="Info-Interesado">
                          <h4>{{i.fullName}}</h4>
                           <p>Personas contactadas</p>
                       </div>
                      </div>
                      <div class="right-InteresadoFreelancers">
                        <div class="buttons-Action">
                            <el-button id="button-interesado" @click="descart(i.id)" type="secondary">Eliminar</el-button>
                            <el-button id="button-interesado" @click="(ir(i.applicationUserId))"  type="primary">Ver Perfil</el-button>
                         </div>
                       </div>
                    </div>
                </div>  
         </div>
     </div>
   </div> 
</template>

<script>
import {EventBus} from "../../../helpers/event-bus";
export default {
       data(){
           return{
               interesados:[],
               contacted:[],
               applicationUserId: localStorage.getItem("user_id"),
               idFreelancerLog:null,
               loading:false
           }

       },
       mounted(){
           this.getAllContactInterested(this.applicationUserId);
             
                EventBus.$on("idFrelancerLogeado", idf => {  
                this.idFreelancerLog=idf;
              this.getAllContacted(idf);
              
            }); 

       },
       created(){

       },
       methods:{
           getAllContactInterested(id){
               let self= this;
               self.$store.state.services.contactService
               .getContactInterested(id)
               .then(r=>{
                   self.interesados=r.data;
               })
           },
         getAllContacted(id){
               let self= this;
               this.loading=true;
               self.$store.state.services.contactService
               .getContacted(id)
               .then(r=>{
                   self.contacted=r.data;
                this.loading=false;
             
               })
           },
           descart(id){
              let self= this;
              this.loading=true;
              self.$store.state.services.contactService
              .contactInterestedDescart(id)
                   .then(r => {
                       self.$notify({
                       title: "Descartado",
                       message: "Se ha descartado corrrectamente",
                       type: "success"
                          });
                           this.getAllContactInterested(this.applicationUserId);
                           this.getAllContacted(this.idFreelancerLog);
                           this.loading=false;
                        })
                     .catch(e => {
                     self.$notify({
                     title: "Error",
                     message: "No se ha descartado la solicitud",
                     type: "Error"
                 });
                 this.loading=false;
        });
           },
           ir(id){
               let self=this;
             self.$router.replace(`/freelancervisitor/${id}`);
           
           }
           
       }
}
</script>

<style>
.container-ProyectsCP{
margin-top: 20px;
margin-left: 20px;
height: 230px;
background-color: rgb(255, 255, 255);
overflow-y: scroll;
}
.buttons-Action{
   display: flex;
   width: 100%;

}
.button-interesado{
    width: 20%;
}
.container-ProyectsCP::-webkit-scrollbar {
    width: 10px;
}
.container-ProyectsCP::-webkit-scrollbar-track {
        background-color: #f3f3f3;
  border-radius: 10px;
}
.container-ProyectsCP::-webkit-scrollbar-thumb {
        background-color: #8194e9;
  border-radius: 10px;
}

.proyectsCP{
    background-color: white;
    padding: 10px;
    height: auto;

}
.proyectsCP h4{
    text-align: left;
    font-size: 17px;
    color: #4764da;
}
.left-InteresadoFreelancers{
    display: flex;
    width:90% ;
}
.right-InteresadoFreelancers{
    width: 50%;
}
#button-interesado{
    width: 50%;
}
.Info-Interesado h4{
    font-size: 15px;
    color: dodgerblue;
}
.Info-Interesado p{
    margin-top: -5px;
    font-size: 13px;
    width: 100%;
    text-align: justify;
}

</style>
