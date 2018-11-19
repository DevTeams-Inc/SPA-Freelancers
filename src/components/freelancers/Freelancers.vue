<template>
    <el-row class=" p-0" :style="{position:'absolute',width:'100%',background: '#f7f7f7'}" :gutter="40">
        <div class="Etiqueta-freelancers">
            <div class="texto-etiqueta">
               <h2 class="h2-etiqueta">Freelancers</h2>
               <p class="p-etiqueta"> Imagina un mundo de posibilidades y nada adios.</p>
            </div>
        </div>
      <div class="search-freelancers">  
        <SearchProyect></SearchProyect>
      </div>  
        <div class="container-freelancers">
           <FilterFreelancer></FilterFreelancer> 
           <ListFreelancer></ListFreelancer>   
        </div>
        <Footer></Footer>
    </el-row>
</template>

<style>
.container-freelancers{
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
.Etiqueta-freelancers{
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

.search-freelancers{
 
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

@media (min-width: 1106px) and (max-width: 1320px)
 {
 .container-freelancers
   {
     min-width: 1100px;
   }
.search-freelancers
 {
   
  min-width: 1100px;
 }
 }
 @media (min-width: 930px) and (max-width: 1105px) {
.container-freelancers
{
    min-width: 900px;
}  
.search-freelancers
{
min-width: 900px;
 }
 
 }
@media (max-width: 929px) {


  .container-freelancers
{
    min-width: 90%;
    display: block;
 
} 
.search-freelancers
{
      min-width: 90%;
      margin-top: 80px;
 }
 .Etiqueta-freelancers{
  display: none;
}
 }
@media (max-width: 669px) {

.search-freelancers
{
      min-width: 90%;
      margin-top: 80px;
 }
 }

</style>

<script>
import  FilterFreelancer  from "./FilterFreelancer";
import  ListFreelancer  from "./ListFreelancer";
import SearchProyect  from "../proyect/SearchProyect";
import Footer from "../shared/Footer"
export default {
    components:{FilterFreelancer,ListFreelancer,SearchProyect,Footer}
}
</script>

