<template>
   <el-row class="p-0 " :style="{background:'#f7f7f7', height:'630px'}" :gutter="40">
   <div class="containerDashboard">
       <div class="containerMenu">
           <MenuDashboard></MenuDashboard>
       </div>
       <div class="containerPage">
            <ContentPage></ContentPage>
       </div>
   </div>
   </el-row>
</template>

<style>
.containerDashboard{
    margin-top: 40px;
    display: flex;
    
}
.containerPage{
    width: 100%;
    margin: 0;
  

}

</style>

<script>
import  MenuDashboard  from "./MenuDashboard";
import ContentPage from "./ContentPage";
export default {
    components:{MenuDashboard,ContentPage}
}
</script>



