<template>
    <div class="grid-content bg-purple-light">
            <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
          <div>
          <img :src="img" class="img-profile" width="70px" alt="">
          </div>
        <span> {{ name }} {{ lastName }} </span>
        <br class="mb-2">
        <div class="rating">
        <el-rate id="rating-star" v-model="rating" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
        </div>
        <div class="bottom clearfix">
          <el-button @click="$router.push(`/freelancer/${idUser}`)" type="text" class="button">Ver</el-button>
        </div>
      </div>
    </el-card>
    </div>
</template>

<script>
export default {
  props:['name' , 'lastName' , 'rating' , 'img' , 'idUser'],
  data(){
    return{
      //rating:3.0
    }
  }
};
</script>

<style scoped>
.button{
  color: #5a75e6 !important;
}
.img-profile{
    border-radius: 50px;
}
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
.tag {
  font-family: "Roboto", sans-serif;
  background: #5a75e6;
  color: #fff;
  border: none;
  height: 30px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
