<template>
  <div class="space p-2 m-2" >
    <el-row class="mb-3 mt-5" >
      <el-col :span="7" :offset="2">
        <div @click="$router.push('/dashboardAdmin/proyectos')">
          <el-card class="card card-1" shadow="hover">
            <h4>Proyectos publicados</h4>
            <i class="fas fa-rocket fa-2x" style="margin-top:12px;"></i>
            <br>
            <br>
            <span>{{data1}}</span>
          </el-card>
        </div>
      </el-col>
      <el-col :span="7" :offset="2">
        <div @click="$router.push('/dashboardAdmin/freelancers')">
          <el-card class="card card-2" shadow="hover">
            <h4>Freelancers Registrados</h4>
            <i class="fas fa-user-tie fa-2x" style="margin-top:12px;"></i>
            <br>
            <br>
            <span>{{data}}</span>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row class="">
      <el-col :span="7" :offset="2">
        <div @click="$router.push('/dashboardAdmin/categorias')">
          <el-card class="card card-3" shadow="hover">
            <h4>Categorias Creadas</h4>
            <i class="fas fa-flag fa-2x" style="margin-top:12px;"></i>
            <br>
            <br>
            <span>{{data2}}</span>
          </el-card>
        </div>
      </el-col>
      <el-col :span="7" :offset="2">
        <div @click="$router.push('/dashboardAdmin/habilidades')">
          <el-card class="card card-4" shadow="hover" body-style=" ">
            <h4>Habilidades Creadas</h4>
            <i class="fas fa-info fa-2x" style="margin-top:12px;"></i>
            <br>
            <br>
            <span>{{data3}}</span>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 0,
      data1: 0,
      data2: 0,
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
      });
    },

    countProyects() {
      let self = this;
      self.$store.state.services.adminService.countProyects().then(r => {
        self.data1 = r.data;
      });
    },

    countCategory() {
      let self = this;
      self.$store.state.services.adminService.countCategory().then(r => {
        self.data2 = r.data;
      });
    },

    countHability() {
      let self = this;
      self.$store.state.services.adminService.countHability().then(r => {
        self.data3 = r.data;
      });
    }
  }
};
</script>
<style>
h4 {
  /* margin-right: 67%; */
  font-size: 16px;
  color: gray;
}
i {
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5b86e5, rgb(18, 103, 173));
  background: linear-gradient(to right, #5b86e5, rgb(18, 103, 173));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card {
  padding: 10%;
}
.space{
  position: relative;
  left: 22%;
}
</style>