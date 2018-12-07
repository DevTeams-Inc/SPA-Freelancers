<template>
     <div class="container-adminProyects">
             <top-proyects></top-proyects>
             <data-proyects></data-proyects>
             <!-- <report-proyects></report-proyects>            -->
     </div>
</template>

<style>
.container-adminProyects{

 margin-top: 20px;
 width: 75%;
 padding-bottom:20px; 
 margin-left: 23%;

}
</style>

<script>
import TopProyects from "./TopProyects";
import DataProyects from "./DataProyects";
import ReportProyects from "./ReportProyects";
export default {
    components:{TopProyects,DataProyects,ReportProyects},
}
</script>

