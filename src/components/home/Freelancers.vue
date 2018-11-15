<template>
<el-row class="freelancer-content ml-1" justify="center" :gutter="10">
  <h1 class="mt-5 mb-5">Nuestros mejores freelancers</h1>
  <div class="freelancer-div">
  <el-col v-for="i in 3" :key="i" class="mb-2" :xs="24" :sm="8" :md="8" :lg="8" :xl="10">
    <freelancer ></freelancer>
    </el-col>
    </div> 
</el-row>
</template>
<script>
import freelancer from '../freelancers/FreelancerHome'
export default {
  components:{freelancer},
  name: "Freelancers",
  data() {
    return {
    };
  }
};
</script>
<style scope>
.freelancer-content {
  width: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bottom {
  margin-top: 13px;
  font-family: "Roboto", sans-serif;
  line-height: 12px;
}

.image {
  width: 75px;
  display: block;
  border-radius: 40px;
}


</style>
