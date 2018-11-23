<template>
<div>
 <el-card class="mt-5 p-1 m-4">
  <el-row class=" p-1 m-4">
     <el-row class="mb-5">
    <el-col :span="12" :offset="6">
      <span class="title-register">Completar Registro</span>
      <p>{{ubicacion}}</p>
    </el-col>
  </el-row>
  <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-col :span="12">
       <el-form-item label="Foto" prop=foto>
      <el-upload
       v-model="ruleForm.foto"
        action="https://jsonplaceholder.typicode.com/posts/"
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="Direccion" prop="direccion">
        <el-input v-model="ruleForm.direccion"></el-input>
      </el-form-item>
        <el-col :span="12">
          <el-form-item label="Telefono" prop="telefono" >
            <el-input v-model="ruleForm.telefono"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Idioma" prop="idioma">
            <el-select v-model="ruleForm.idioma" placeholder="">
              <el-option label="Español" value="Español"></el-option>
              <el-option label="Ingles" value="Ingles"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
    </el-col>
    <el-col :span="12" class="coll">
      <el-form-item label="Biografia" prop="biografia" class="mb-5">
        <el-input type="textarea"
        :rows="4" v-model="ruleForm.biografia"></el-input>
      </el-form-item>
      <el-form-item label="Profesion" prop="profesion">
        <el-input v-model="ruleForm.profesion" placeholder="e.j Web developer"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="Interes" prop="interes">
            <el-select v-model="ruleForm.interes" placeholder="">
              <el-option label="Desarrollo web" value="web developer"></el-option>
              <el-option label="Powerpoint" value="owerpoint"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Precio por hora" prop="ph">
            <el-input type="ph" v-model="ruleForm.ph"></el-input>
          </el-form-item> 
        </el-col>
         <el-form-item class="mt-2">
          <el-button type="primary" @click="submitForm('ruleForm')">Completar</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-row>
    </el-col>
  </el-form>
  </el-row>
 </el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      // top: 'top',
      imageUrl: null,
      ubicacion: '',
      ruleForm: {
        direccion: null,
        idioma: null,
        telefono: null,
        foto: null,
        biografia: null,
        profesio: null,
        interes: null,
        ph: null
      },
      rules: {
        direccion: [
          {
            required: true,
            message: "Ingrese una direccion",
            trigger: "change"
          }
          // { min: 3, max: 30, message: 'Length should be 3 to 5', trigger: 'change' }
        ],
        idioma: [
          {
            required: true,
            message: "Selecione un idioma.",
            trigger: "change"
          }
        ],
        telefono: [
          {
            required: true,
            message: "Ingrese un numero de telefono.",
            trigger: "change"
          }
          // {type: 'number', message: 'El telefono solo debe tener numeros.',trigger: 'blur'}
        ],
        biografia: [
          {
            min: 5,
            max: 200,
            message: "Debes tener de 5 a 200 caracteres.",
            trigger: "change"
          }
        ],
        profesion: [
          {
            required: true,
            message: "Ingrese su profesion.",
            trigger: "change"
          }
        ],
        ph: [
          // {
          //   required: true,
          //   message: "Ingrese un precio por hora.",
          //   trigger: "change"
          // },
          { type: "number",
            message: "Solo numero." 
          }
        ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('La imagen debe estar en formato JPG!');
        }
        if (!isLt2M) {
          this.$message.error('La imagen excede los 2MB!');
        }
        return isJPG && isLt2M;
      },
    submitForm(formdireccion) {
      this.$refs[formdireccion].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formdireccion) {
      this.$refs[formdireccion].resetFields();
    }
  }
};
</script>

<style>
.coll{
  position: relative;
  left: 20px;
  top: 2px;
}
.title-register {
  color: rgb(105, 105, 105);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 108px;
  height: 108px;
  line-height: 108px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
