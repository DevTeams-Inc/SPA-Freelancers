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
                    <el-input placeholder="Palabras claves, Ejemplo: pintar casa"
                    v-model="search" class="input-with-select"  >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
            </div>
        </div>
      </div>  
      <div class="container-proyect">
        <FilterProyects></FilterProyects> 
        <ListProyect></ListProyect>   
      </div>
     <Footer></Footer>
    </el-row>
</template>

<script>
import FilterProyects from "../proyect/FilterProyects";
import Footer from "../shared/Footer";
import ListProyect from "../proyect/ListProyect";
import SearchProyect  from "../proyect/SearchProyect";
export default {
components:{FilterProyects,Footer, ListProyect, SearchProyect}
}
</script>

<style scoped>
.SearchContainer{
    color: white;
    display: flex;
}
.left-search{
 background-color: #304ab3;
 width: 30.5%;

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



</style>
