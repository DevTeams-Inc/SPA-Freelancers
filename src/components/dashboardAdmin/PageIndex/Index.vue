<template>
  <div class="content-admin-Index">
    <div class="container-cont">
      <div class="item-cont">
        <h4>Proyectos publicados</h4>
        <i class="fas fa-rocket fa-2x" style="margin-top:12px;"></i>
        <br>
        <br>
        <span>{{data1}}</span>
      </div>
      <div class="item-cont">
        <h4>Freelancers Registrados</h4>
        <i class="fas fa-user-tie fa-2x" style="margin-top:12px;"></i>
        <br>
        <br>
        <span>{{data}}</span>
      </div>

    
      <div class="item-cont">
        <h4>Categorias Creadas</h4>
        <i class="fas fa-flag fa-2x" style="margin-top:12px;"></i>
        <br>
        <br>
        <span>{{data2}}</span>
         </div>

        <div class="item-cont">
        <h4>Habilidades Creadas</h4>
        <i class="fas fa-info fa-2x" style="margin-top:12px;"></i>
        <br>
        <br>
        <span>{{data3}}</span>
      </div>

     
    </div>
    

  </div>
</template>

<style>
.content-admin-Index {
  margin-top: 20px;
  width: 75%;
  padding-bottom: 20px;
  margin-left: 22%;
}
.container-cont {
  display: flex;
  justify-content: center;
}
.item-cont {
  width: 250px;
  background-color: white;
  height: 150px;
  background: white;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding-top: 10px;
  margin-left: 30px;
  cursor: pointer;
}

.item-cont h4 {
  font-size: 15px;
  color: gray;
}
.item-cont i {
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5b86e5, rgb(18, 103, 173));
  background: linear-gradient(to right, #5b86e5, rgb(18, 103, 173));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.container-categoriesTop-index {
  margin-top: 40px;
}
.item-categories-index {
  display: flex;
  justify-content: center;
}
.container-categoriesTop-index h4 {
  margin-right: 67%;
  font-size: 15px;
  color: gray;
}
.item-categorie-top-index {
  margin-top: 20px;
  background-color: white;
  width: 100px;
  margin-left: 8px;
  height: 100px;
  border-radius: 100%;
  cursor: pointer;
}
.item-categorie-top-index:hover {
  background-color: #40a8fd;
  color: white;
  transition: all 0.2s ease;
}
.reports {
  background-color: white;
  margin-top: 40px;
  width: 85.4%;
  position: relative;
  left: 9.7%;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
}
.reports h4 {
  text-align: left;
  font-size: 15px;
  color: gray;
}
</style>

<script>
export default {
  data() {
    return {
      data: 0,
      data1:0,
      data2:0,
      data3: 0
    };
  },

  mounted() {
    this.countFreelancer();
     this.countProyects();
     this.countCategory();
     this.countHability();
    
  },

  methods: {
    countFreelancer() {
         let self = this;
        self.$store.state.services.adminService.countFreelancer().then(r => {
        self.data = r.data;
        console.log(r.data);
      });
    },

       countProyects() {
         let self = this;
        self.$store.state.services.adminService.countProyects().then(r => {
        self.data1 = r.data;
        console.log(r.data);
      });
    },

       countCategory() {
         let self = this;
        self.$store.state.services.adminService.countCategory().then(r => {
        self.data2 = r.data;
        console.log(r.data);
      });
    },

           countHability() {
         let self = this;
        self.$store.state.services.adminService.countHability().then(r => {
        self.data3 = r.data;
        console.log(r.data);
      });
    },

  }
};
</script>