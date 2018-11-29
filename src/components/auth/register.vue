<template>
<el-row :gutter="10" class="mt-5 p-2 " justify="space-around" type="flex">
 <el-col class="hidden-sm-and-down">
        <img  src="@/assets/img/speedwork.svg" width="100%" alt="" >
    </el-col> 
<el-col>
<el-row type="flex" justify="center">
  <el-col :xs="40" :sm="20" :md="20" :lg="16" :xl="40">
    <el-card class="box-card card">
<!-- <div class="mt-3 p-4"> -->
    <el-form
     :model="ruleForm"
     :rules="rules"
     ref="ruleForm" 
     >
      <el-form-item clas="hidden-md-and-down"> 
        <el-row clas="hidden-md-and-down">
            <img  src="@/assets/img/id-card.svg" width="70px" alt="">
        </el-row>
        <el-row>
            <span class="spam-title">Registrarse</span>
        </el-row>
      </el-form-item>
       <el-row type="flex" justify="center">
         <el-col>
          <el-form-item prop="name">
            <el-input
                v-model="ruleForm.name"
                placeholder="Nombre"
                size="medium">
            </el-input>
          </el-form-item>
          <el-form-item prop="lastName">
            <el-input
                v-model="ruleForm.lastName"
                placeholder="Apellido"
                size="medium">
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
                v-model="ruleForm.email"
                placeholder="Email"
                size="medium">
            </el-input>
           </el-form-item>
           <el-form-item prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    placeholder="Contraseña"
                    size="medium">
                </el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
                <el-input
                    v-model="ruleForm.confirmPassword"
                    type="password"
                    placeholder="Confirmar contraseña"
                    size="medium">
                </el-input>
            </el-form-item>
         </el-col>
       </el-row>
       <el-form-item>
              <el-button type="primary" v-loading="loading" class="btn btn-block btn-login " @click="submitForm('ruleForm')">Entrar</el-button>
          </el-form-item>
       <!-- <el-row class="mt-4">
              <el-col>
                <el-form-item>
                    <span ><img class="span-img" src="@/assets/img/facebook.svg" width="30px" alt="Facebook"></span>
                    <span class=" ml-2"><img class="span-img" src="@/assets/img/search.svg" width="30px" alt="Google"></span>
                </el-form-item>
              </el-col>
          </el-row> -->
      <span @click="redirect('/login')" class="span-register">¿Tienes cuenta? Click aquí</span>
     </el-form>
    </el-card>
   </el-col>
  </el-row>
 </el-col>  
</el-row>
    <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        name: [
          { required: true, message: "Ingrese su nombre.", trigger: "blur" }
        ],
        lastName: [
          { required: true, message: "Ingrese su apellido.", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "Ingrese la direccion email.",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Ingrese la contraseña", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "Confirme la contraseña", trigger: "blur" }
        ]
      },
      loading: false
    };
  },
  methods: {
    redirect(path) {
      if (path === undefined) return;
      this.$router.push(path);
    },
    submitForm(formName) {
      //Validar Contraseña
      if (this.ruleForm.password != this.ruleForm.confirmPassword) {
        this.$notify.error({
          title: "Error",
          message: "La contraseña no coincide!",
          offset: 50,
          duration: 3000
        });
      } else {
        let self = this;
        self.$refs[formName].validate(valid => {
          if (valid) {
           self.loading = true;
            self.$store.state.services.authService
              .register(self.ruleForm)
              .then(r => {
                self.loading = false;
               
              })
              .catch(e => {
                self.$notify.error({
                  title: "Lo sentimos",
                  message: "Ha ocurrido un problema, porfavor intente de nuevo",
                  offset: 50,
                  duration: 3000
                });
                self.loading=false;
              });
          } else {
            return false;
          }
        });
      }
    }
  }
};
</script>

<style>
.spam-title {
  font-family: Roboto;
  font-size: 1.3em;
}
.btn-login {
  background-color: #5a75e6;
  color: white;
  outline: none;
}
.btn-login:hover {
  background-color: rgb(140, 161, 245);
  color: white;
}
.span-register {
  color: #5a75e6;
  cursor: pointer;
}
</style>
