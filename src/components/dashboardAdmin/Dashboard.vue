<template>
   <el-row class="p-0 " :style="{position:'absolute',background:'#f7f7f7',width:'100%', height:'97%'}" :gutter="40">
   <div class="containerDashboard">
       <div class="containerMenu">
           <MenuDashboard></MenuDashboard>
       </div>
       <div class="containerPage">
            <ContentPage></ContentPage>
       </div>
   </div>
   <div class="DimensionLimite">
       <h4>No se puede acceder al dashboard Admin desde esta resolucion</h4>
   </div>
   </el-row>
</template>

<style>
.DimensionLimite{
    display: none;
}
.containerDashboard{
    margin-top: 40px;
    display: flex;
    
}
.containerPage{
    width: 100%;
    margin: 0;
  
}

@media (max-width: 940px){
 .containerDashboard{
     display: none;
 }
 .DimensionLimite{
     margin-top: 250px;
     display: block;
 }
}
</style>

<script>
import  MenuDashboard  from "./MenuDashboard";
import ContentPage from "./ContentPage";
export default {
    components:{MenuDashboard,ContentPage}
}
</script>



