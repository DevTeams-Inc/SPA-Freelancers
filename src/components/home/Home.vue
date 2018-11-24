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
            <el-col v-for="(item , index) in categories" :key="index" class="mt-1" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
                <Category :title="item.name" ></Category>
            </el-col>
        </el-row>
        </div>  
    </div>
        <div class="cards-carousel">
    <el-carousel :interval="4000"  type="card" height="200px">
        <el-carousel-item :style="{background:'#fff'}" v-for="(item , index) in categories" :key="index">
                <Category  :title="item.name" ></Category>                
        </el-carousel-item>
    </el-carousel>
    </div> 
         <Freelancer :data ="freelancer"></Freelancer>
    </div>
</template>
<script>
import Category from "./Category";
import Carousel from "./Carousel";
import Freelancer from "./Freelancers";
export default {
  components: { Category, Carousel, Freelancer },
  data() {
    return {
      categories: [],
      freelancer:[]
    };
  },
  mounted() {
    this.getCategories();
    this.getFreelancers();
  },
  methods: {
    getCategories() {
      let self = this;
      self.$store.state.services.homeService
        .getCategories()
        .then(r => {
          self.categories = r.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getFreelancers() {
      let self = this;
      self.$store.state.services.homeService
        .getFreelancers()
        .then(r => {
          self.freelancer = r.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
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
