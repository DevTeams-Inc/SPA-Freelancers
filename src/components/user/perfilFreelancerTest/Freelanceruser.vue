<template>
  <el-row class=" p-0" :style="{position:'absolute',width:'100%',background: '#f7f7f7'}" :gutter="40">
       <div class="Etiqueta">
         <div class="texto-etiqueta">
           <h2 class="h2-etiqueta">Mi Perfil</h2>
           <p class="p-etiqueta"> Imagina un mundo de posibilidades y nada adio.</p>
         </div>
         </div>
      <div class="container-PerfilFreelancer">
           <div class="left-PerfilFreelancer">
              <mini-perfil-user></mini-perfil-user>
           </div>
           <div class="right-PerfilFreelancer">
               <rating-coments></rating-coments>
               <proyects-c-p></proyects-c-p>
           </div>
      </div>
  </el-row>
</template>

<script>
//right-PerfilFreelancer
import MiniPerfilUser from "../perfilFreelancerTest/MiniPerfilUser";

//right-PerfilFreelancer
import RatingComents from "../perfilFreelancerTest/RatingComents";
import ProyectsCP from "../perfilFreelancerTest/ProyectsCP";
export default {
      components:{MiniPerfilUser,RatingComents,ProyectsCP},
}
</script>

<style>
.container-PerfilFreelancer{
   position: relative;
    width: 90%;
    max-width: 1100px;
    min-width: 1300px;
    height: auto;
    /* max-width: 1370px;
    min-width: 1350px; */
    display: flex;
    margin:0 auto; 
    margin-bottom: 100px;

}
.left-PerfilFreelancer{
    width: 53%;
}
.right-PerfilFreelancer{
    width: 47%;
}
.Etiqueta{
  padding-top:10px;
  padding-bottom: 0.5px; 
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
</style>
