<template>
<div class="home">
    <div>
        <div>
            <Carousel></Carousel>   
        </div>
    </div>
    <div class="mt-5">
            <h1>Explora nuestras categorias</h1>
    </div>
    <div class=" cards-category row mt-5 p-5" >
        <div class="col">
            <el-row  :gutter="10">
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
                <Category></Category>
            </el-col>
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
                <Category></Category>                
            </el-col>
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <Category></Category>
            </el-col>
        </el-row>
            <el-row  :gutter="10">
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
                <Category></Category>
            </el-col>
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
                <Category></Category>                
            </el-col>
            <el-col class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <Category></Category>
            </el-col>
        </el-row>
        </div>  
    </div>

        <div class="cards-carousel">
    <el-carousel :interval="4000"  type="card" height="200px">
        <el-carousel-item :style="{background:'#fff'}" v-for="item in 6" :key="item">
                <Category :key="item"></Category>                
        </el-carousel-item>
    </el-carousel>
    </div> 
         <Freelancer></Freelancer>
    </div>
</template>
<script>
import Category from "./Category";
import Carousel from "./Carousel";
import Freelancer from "./Freelancers";
export default {
  components: { Category, Carousel, Freelancer },
  data() {
    return {};
  }
};
</script>
<style>
.btn-primary {
  background: #5a75e6;
  border-radius: 25px;
}
.home {
  background: #fff;
}
@media (max-width: 800px) {
  .cards-category {
    display: none;
  }
}
.cards-carousel {
  background: #fff;
}
@media (max-width: 800px) {
  .cards-carousel {
    margin-top: 100px;
    background: #fff;
  }
}
@media (min-width: 800px) {
  .cards-carousel {
    display: none;
  }
}
</style>
