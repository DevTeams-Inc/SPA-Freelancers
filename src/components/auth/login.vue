    <template>
<el-row :gutter="10" class="mt-5 p-3 " justify="space-around" type="flex">
    <el-col class="hidden-sm-and-down">
        <img  src="@/assets/img/logindesing.svg" width="550px" alt="" >
    </el-col>
<el-col>
<el-row type="flex" justify="center">
  <el-col :xs="40" :sm="20" :md="20" :lg="16" :xl="40">
    <el-card class="box-card p-4 card">
    <el-form class="form " :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item > 
        <el-row>
            <img  src="@/assets/img/lock.svg" width="70px" alt="">
        </el-row>
        <el-row>
            <span class="spam-title">Iniciar Sesion</span>
        </el-row>
      </el-form-item>
       <el-row type="flex" justify="center">
         <el-col >
          <el-form-item prop="email">
              
            <el-input
                v-model="ruleForm.email"
                placeholder="Email"
                prefix-icon="el-icon-message"
                size="medium"
                type="email">
                
            </el-input>

           </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    placeholder="Contraseña"
                    prefix-icon="el-icon-question"
                    size="medium">
                </el-input>
                
            </el-form-item>
            <el-form-item>
                    <el-button type="primary" class="btn btn-block btn-login " @click="submitForm('ruleForm')">Entrar</el-button>
            </el-form-item>
         </el-col>
       </el-row>
          <!-- <el-row class="mt-4">
              <el-col>
                <el-form-item>
                    <span ><img class="span-img" src="@/assets/img/facebook.svg" width="30px" alt="Facebook"></span>
                    <span class=" ml-2"><img class="span-img" src="@/assets/img/search.svg" width="30px" alt="Google"></span>
                </el-form-item>
              </el-col>
          </el-row> -->
      <span @click="redirect('/registro')" class="span-register">¿No tienes cuenta? Click aquí.</span>
    </el-form>
    </el-card>
    </el-col>
    </el-row>
</el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: null,
        password: null
      },
      rules: {
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
        ]
      },
      token: localStorage.getItem("access_token") || null,
      user: localStorage.getItem("user_info") || null,
      idUser: localStorage.getItem("user_id") || null,
      role: localStorage.getItem("user_role") || null
    };
  },
  methods: {
    redirect(path) {
      if (path === undefined) return;
      this.$router.push(path);
    },
    submitForm(formName) {
      let self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.$store.state.services.authService
            .login(self.ruleForm)
            .then(r => {
              //obtenemos el token
              self.token = r.data.token;
              self.user = `${r.data.user.name} ${r.data.user.lastName}`;
              self.idUser = r.data.user.id;
              self.role = r.data.user.role;
              //guardamos en el localStorage
              //accedemos al state y le asignamos el token
              self.$store.state.token = localStorage.setItem(
                "access_token",
                self.token
              );
              self.$store.state.user = localStorage.setItem(
                "user_info",
                self.user
              );
              self.$store.state.idUser = localStorage.setItem(
                "user_id",
                self.idUser
              );
              self.$store.state.role = localStorage.setItem(
                "user_role",
                self.role
              );
            })
            .then(r => {
              if (self.role == 1) {
                self.redirect("/freelancers");
              } else if (self.role == 2) {
                self.redirect("/dashboardAdmin");
              }
            })
            .catch(e => {
              self.$notify.error({
                title: "Error",
                message: "Porfavor revise sus credenciales"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.spam-title {
  font-family: Roboto;
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
.btn-fb {
  background-color: #475a93;
  color: white;
}
.btn-gl {
  background-color: #d62d20;
  color: white;
}
.span-img {
  cursor: pointer;
}
.font {
  background: #f7f7f7;
}
</style>
