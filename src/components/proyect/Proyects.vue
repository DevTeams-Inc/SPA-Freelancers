<template  >
    <el-row class=" p-0" :style="{background: '#f7f7f7'}" :gutter="40">
       <div class="Etiqueta">
         <div class="texto-etiqueta">
           <h2 class="h2-etiqueta">Proyectos</h2>
           <p class="p-etiqueta"> Imagina un mundo de posibilidades y nada adios.</p>
         </div>
         </div>
      <div class="search">  
        <search-proyect></search-proyect>
      </div>  
      <div class="container-proyect">
        <FilterProyects></FilterProyects> 
        <ListProyect></ListProyect>   
      </div>

    </el-row>
</template>

<script>
import FilterProyects from "./FilterProyects";
import Footer from "../shared/Footer";
import ListProyect from "./ListProyect";
import SearchProyect  from "./SearchProyect";
export default {
components:{FilterProyects, Footer, ListProyect, SearchProyect}
}
</script>


<style>

.container-proyect{
    position: relative;
    width: 90%;
    max-width: 1100px;
    min-width: 1300px;
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
    min-width: 1300px;
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



</style>
