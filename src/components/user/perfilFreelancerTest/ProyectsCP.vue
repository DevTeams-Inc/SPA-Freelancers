<template>
   <div class="container-Proyects-Interesados">
     <div class="container-ProyectsCP">
         <div class="proyectsCP">
                <div class="interesados">
                   <h4>Interesados en tu servicio</h4>
                 <div style="display:flex;">
                    <div class="left-InteresadoFreelancers">
                      <div class="Info-Interesado">
                          <h4>Lony S. Mejia Ramirez</h4>
                           <p>Revisa tu correo
                           </p>
                       </div>
                      </div>
                      <div class="right-InteresadoFreelancers">
                        <div class="buttons-Action">
                            <el-button id="button-interesado" type="secondary">Descartar</el-button>
                            <el-button id="button-interesado"  type="primary">Ver perfil</el-button>
                         </div>
                       </div>
                    </div>
                </div>  
         </div>
     </div>
     <div class="container-ProyectsCP">
         <div class="proyectsCP">
                <div class="interesados">
                   <h4>Proyectos Publicados</h4>
                 <div style="display:flex;">
                    <div class="left-InteresadoFreelancers">
                      <div class="Info-Interesado">
                          <h4>Nombre del Proyecto</h4>
                           <p>Categoria
                           </p>
                       </div>
                      </div>
                      <div class="right-InteresadoFreelancers">
                        <div class="buttons-Action">
                            <el-button id="button-interesado" type="secondary">Editar</el-button>
                            <el-button id="button-interesado"  type="primary">Eliminar</el-button>
                         </div>
                       </div>
                    </div>
                </div>  
         </div>
     </div>
   </div> 
</template>

<script>
export default {

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
}
.Info-Interesado p{
    margin-top: -5px;
    font-size: 13px;
    width: 90%;
    text-align: justify;
}

</style>
