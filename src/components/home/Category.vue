<template>
<div>
       <el-card shadow="hover">
       <slot>
         <div class="text-primary">
         <h1 :class="icon"></h1>
         </div>
        <h6 class="mt-2">{{title}}</h6>
       </slot>
     </el-card>
</div>     
</template>
<script>
export default {
  props:['title' , 'icon' , 'id'],
  name: "Category",
  data() {
    return {
    };
  }
};
</script>

<style>
h6 {
  color: #808695;
  font-family: "Roboto", sans-serif;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
