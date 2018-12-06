    <template>
<el-row :gutter="10" class="mt-5 p-3 " justify="space-around" type="flex">
   
<el-col>
<el-row type="flex" justify="center">
  <el-col class="form mt-4" :xs="40" :sm="20" :md="14" :lg="10" :xl="40">
    <el-card class="box-card p-4 card">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item > 
        <el-row>
            <img  src="@/assets/img/bloquear.svg" width="70px" alt="">
        </el-row>
        <el-row>
            <span class="spam-title">Resetear Contraseña</span>
        </el-row>
      </el-form-item>
       <el-row type="flex" justify="center">
         <el-col >
          <el-form-item prop="newPassword">
              
            <el-input
                v-model="ruleForm.newPassword"
                placeholder="Nueva Contraseña"
                prefix-icon="el-icon-question"
                size="medium"
                type="password">
                
            </el-input>

           </el-form-item>
            <el-form-item prop="confirmPassword">
                <el-input
                    v-model="ruleForm.confimPassword"
                    type="password"
                    placeholder="Confirmar Nueva Contraseña"
                    prefix-icon="el-icon-question"
                    size="medium">
                </el-input>
                
            </el-form-item>
            <el-form-item>
                    <el-button type="primary" v-loading="loading" class="btn btn-block btn-login " @click="submitForm('ruleForm')">Aceptar</el-button>
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
      loading: false,
      ruleForm: {
        newPassword: null,
        confirmpassword: null
      },
     
      
    };
  },
   methods: {
   
   
  }
};
</script>

<style scoped>
.form{
  margin-bottom: 80px;
   
}
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
