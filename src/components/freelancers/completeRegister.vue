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
        <el-col :span="12">
         <el-form-item label="Habilidades" prop="habilidades" >
           <el-select
          v-model="ruleForm.habilidades"
          multiple
          collapse-tags
          placeholder="Seleciona">
            <el-option
              v-for="item in opcion"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
        </el-col>
          <el-col :span="12">
          <el-form-item label="Interes" prop="interes">
            <el-select v-model="ruleForm.interes" placeholder="Seleciona">
              <el-option label="Desarrollo web" value="web developer"></el-option>
              <el-option label="Powerpoint" value="owerpoint"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Idioma" prop="idioma">
            <el-select v-model="ruleForm.idioma" placeholder="Seleciona">
              <el-option label="Español" value="Español"></el-option>
              <el-option label="Ingles" value="Ingles"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
        <el-col :span="12">
          <el-form-item label="Telefono" prop="telefono" >
            <el-input v-model="ruleForm.telefono"></el-input>
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
        <el-col>
          <el-form-item label="Precio por hora" prop="ph">
            <el-input type="number" v-model="ruleForm.ph"  min="0" placeholder="e.j 520"></el-input>
          </el-form-item> 
        </el-col>
         </el-row>
        <el-row>
          <el-col >
         <el-form-item class="mt-2">
          <el-button type="primary" @click="submitForm('ruleForm')">Completar</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
        </el-col >
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
      imageUrl: '',
      ubicacion: '',
      ruleForm: {
        habilidades: '',
        idioma: '',
        telefono: '',
        foto: '',
        biografia: '',
        profesio: '',
        interes: '',
        ph: ''
      },
      rules: {
        habilidades: [
          {
            required: true,
            message: "Ingrese una habilidad",
            trigger: "blur"
          }
          // { min: 3, max: 30, message: 'Length should be 3 to 5', trigger: 'change' }
        ],
        idioma: [
          {
            required: true,
            message: "Selecione un idioma.",
            trigger: "blur"
          }
        ],
        telefono: [
          {
            required: true,
            message: "Ingrese un numero de telefono.",
            trigger: "blur"
          }
          // {type: 'number', message: 'El telefono solo debe tener numeros.',trigger: 'blur'}
        ],
        biografia: [
          {
            required: true,
            min: 5,
            max: 200,
            message: "Debes tener de 5 a 200 caracteres.",
            trigger: "blur"
          }
        ],
        profesion: [
          {
            required: true,
            message: "Ingrese su profesion.",
            trigger: "blur"
          }
        ],
        ph: [
          {
            required: true,
           
            message: "Ingrese un precio por hora.",
            trigger: "change"
          },
          
        ]
      },
       opcion: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }
        ],
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
          this.$notify.error({
          title: 'Error',
          message: 'La imagen debe estar en formato JPG!',
          offset: 50,
          duration: 2200
        });
        }
        else if (!isLt2M) {
          this.$notify.error({
          title: 'Error',
          message: 'La imagen excede los 2MB!',
          offset: 50,
          duration: 2200
        });
        }
        return isJPG && isLt2M;
      },
    submitForm(formhabilidades) {
      this.$refs[formhabilidades].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formhabilidades) {
      this.$refs[formhabilidades].resetFields();
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
