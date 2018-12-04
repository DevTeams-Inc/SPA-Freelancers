<template>
     <div class="container-AdminHabilidades">
       <div class="showYadd-Habilidades">

           <data-habilidades></data-habilidades>
           <add-habilidades></add-habilidades>
       </div>
       <data-o-habilidades></data-o-habilidades>
     </div>
</template>

<style>
.container-AdminHabilidades{
 margin-top: 20px;
 width: 75%;
 padding-bottom:20px; 
 margin-left: 23%;
 }
 .showYadd-Habilidades{
     width: 100%;
     display: flex;
 }
</style>

<script>
import DataHabilidades from "./DataHabilidades";
import DataOHabilidades from "./DataOHabilidades";
import AddHabilidades from "./AddHabilidades";

export default {
    components:{DataHabilidades,DataOHabilidades,AddHabilidades}
}
</script>

