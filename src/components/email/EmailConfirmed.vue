<template>
  <div class="size text">
    <el-row :gutter="10" class="text">
      <el-col :xs="24" :sm="12" :md="40" :lg="40" :xl="12">
        <img v-if="img === 1" src="@/assets/img/imglogin.svg" class="img-logo" width="50%" alt>
        <img v-else src="@/assets/img/cross.svg" class="img-logo" width="30%" alt>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-1">
        <div class>
          <h2 class="head">{{text1}}</h2>
          <el-row>
            <span class="span">{{text2}}</span>
            <span class="span">{{text3}}</span>
            <br>
            <button
              v-show="btn"
              class="btn btn-primary mt-2"
              @click="$router.push('/login')"
            >Ir al login</button>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { EventBus } from '../../helpers/event-bus';
export default {
  props: ["id"],
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      btn: null,
      img: null
    };
  },
  mounted() {
    // localStorage.removeItem();
    let self = this;
    self.$store.state.services.authService
      .email(self.id)
      .then(result => {
        this.text1 = "Gracias por confirmar";
        this.text2 = "Animo ya estas listo,";
        this.text3 =
          "logueate y comienza a encontrar trabajo o freelancers como tu";
        (this.btn = true), (this.img = 1);
      })
      .catch(err => {
        this.text1 = "Lo sentimos!";
        this.text2 = "";
        this.text3 = "ha ocurrido un problema intenta de nuevo";
        this.btn = false;
        this.img = 2;
      });
      // this.logout();
  },
  methods:{
    logout(){   
        EventBus.$emit('reset')
        //removemos del localStorage
       localStorage.removeItem('user_token')
       localStorage.removeItem('user_info')
      //  localStorage.removeItem('user_role')
      //  localStorage.removeItem('user_id')
      //  localStorage.removeItem('user_email')
      //  return true
    }
  }
};
</script>

<style scoped>
.size {
  margin: 9%;
  padding: 0.1%;
}
.btn-primary {
  background: #5a75e6;
  border-radius: 25px;
}
@media (min-width: 400px) {
  .text {
    margin-top: 7.3%;
  }
  .text-1 {
    margin-top: 10%;
  }
  .img-logo {
    width: 70%;
  }
}
@media (max-width: 400px) {
  .text {
    margin-top: 20%;
  }
  .text-1 {
    margin-top: 10%;
  }
  .img-logo {
    width: 70%;
  }
}

.span {
  color: #59607e;
}
.head {
  color: rgb(151, 151, 151);
}
</style>
