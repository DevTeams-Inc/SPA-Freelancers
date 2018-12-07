<template>
  <div class="SearchContainer">
     <div class="left-search">
        <el-switch  class="jh" @change="redirect"  style="margin-top:8px;" active-color="#409EFF"  inactive-color="#409EFF" 
         v-model="FreelancerPresencial" active-text="Proyectos" inactive-text="Freelancers">
        </el-switch>
     </div>
     <div class="right-search">
         <!-- esta barra de busqueda es para los freelancers -->
             <el-input v-show="FreelancerPresencial == false" @change="search" placeholder="Palabras claves, Ejemplo: mecanico"
              v-model="query" class="input-with-select"  >
             <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <!-- esta barra de busqueda es para los proyectos -->
            <el-input v-show="FreelancerPresencial == true" placeholder="Palabras claves, Ejemplo: pintar casa"
              v-model="query" class="input-with-select"  >
             <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
     </div>
   </div>
</template>
<script>
import {EventBus} from '../../helpers/event-bus'
export default {
  data() {
    return {
      query: null,
      FreelancerPresencial:false, 
      searchBar:false
    }
  },
  created(){
   this.cambiarRuta();
  },
  methods:{
    redirect() 
    {
         if(this.FreelancerPresencial===true){ this.$router.push('/proyectos');}else if(this.FreelancerPresencial===false){  this.$router.push('/freelancers');}
    },
    cambiarRuta()
    {
         if( this.$router.currentRoute.fullPath==='/proyectos'){return this.FreelancerPresencial=true;}else if(this.$router.currentRoute.fullPath==='/freelancers'){return this.FreelancerPresencial=false}  
    },
    search(){
        if(this.query == ''){
            console.log(this.query)
            this.query = "";
          EventBus.$emit('search', this.query);
        }else{
         EventBus.$emit('search', this.query);
        }
    }
  },
}
</script>
<style>
.jh{
    color: aliceblue;
}
.SearchContainer{
    color: white;
    display: flex;
}
.left-search{
 background-color: #5a75e6 !important;
 
 width: 30.5%;

}
.el-switch__label{
    color: #fff !important;
}
.right-search{
    width: 69.5%;
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


</style>
