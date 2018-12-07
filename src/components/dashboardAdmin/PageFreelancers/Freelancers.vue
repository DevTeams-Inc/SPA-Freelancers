<template>
     <div class="container-adminFreelancers">
             <top-freelancers></top-freelancers>
             <data-freelancers></data-freelancers>
             <!-- <report-freelancers></report-freelancers>      -->
     </div>
</template>

<style>
.container-adminFreelancers{

 margin-top: 20px;
 width: 75%;
 padding-bottom:20px; 
 margin-left: 23%;

}
</style>

<script>
import TopFreelancers from "./TopFreelancers";
import DataFreelancers from "./DataFreelancers";
import ReportFreelancers from "./ReportFreelancers";
export default {
    components:{TopFreelancers,DataFreelancers,ReportFreelancers},
}
</script>

