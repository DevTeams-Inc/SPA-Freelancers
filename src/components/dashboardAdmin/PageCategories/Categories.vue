<template>
     <div class="container-AdminCategories">
       <top-categories></top-categories>
       <div class="showYadd-Categories">
           <data-categories></data-categories>
           <add-categorie></add-categorie>
       </div>
       <report-categories></report-categories>
     </div>
</template>

<style>
.container-AdminCategories{
 margin-top: 20px;
 width: 75%;
 padding-bottom:20px; 
 margin-left: 23%;
 }
 .showYadd-Categories{
     width: 100%;
     display: flex;
  
  
 }
</style>

<script>
import TopCategories from "./TopCategories";
import DataCategories from "./DataCategories";
import AddCategorie from "./AddCategorie";
import ReportCategories from "./ReportCategories";

export default {
    components:{TopCategories,DataCategories,AddCategorie,ReportCategories},
}
</script>

