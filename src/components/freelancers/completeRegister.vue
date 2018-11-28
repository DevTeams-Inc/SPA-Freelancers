<template>
  <div>
    <el-card class="mt-5 p-1 m-4">
      <el-row class="p-1 m-4">
        <el-row class="mb-5">
          <el-col :span="12" :offset="6">
            <span class="title-register">Completar Registro</span>
          </el-col>
        </el-row>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-col :span="12">
            <el-form-item label="Foto" prop="foto">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="Ubicacion" prop="ubicacion">
                  <div>
                    <label>
                      {{markers}}
                      <gmap-autocomplete
                        class="ubicacion"
                        v-model="ruleForm.ubicacion"
                        @place_changed="setPlace"
                      ></gmap-autocomplete>
                    </label>
                  </div>
                  {{ruleForm.lat}}
                  {{ruleForm.long}}

                </el-form-item>
              </el-col>
            </el-row>
            <el-col :span="12">
              <el-form-item label="Habilidad" prop="habilities">
                <el-select v-model="searchHability" filterable multiple placeholder="Seleciona">
                  <el-option
                    v-for="hability in habilities"
                    :key="hability.id"
                    :label="hability.title"
                    :value="hability.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Interes" prop="interest">
                <el-select v-model="ruleForm.interest" placeholder="Seleciona">
                  <el-option
                    v-for="hability in habilities"
                    :key="hability.id"
                    :label="hability.title"
                    :value="hability.title"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Idioma" prop="lenguaje">
                <el-select v-model="ruleForm.lenguaje" placeholder="Seleciona">
                  <el-option label="Español" value="Español"></el-option>
                  <el-option label="Ingles" value="Ingles"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Telefono" prop="telefono">
                <el-input v-model="ruleForm.telefono"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="12" class="coll">
            <el-form-item label="biografia" prop="biography" class="mb-5">
              <el-input type="textarea" :rows="4" v-model="ruleForm.biography"></el-input>
            </el-form-item>
            <el-form-item label="profesion" prop="profesion">
              <el-input v-model="ruleForm.profesion" placeholder="e.j Web developer"></el-input>
            </el-form-item>
            <el-row>
              <el-col>
                <el-form-item label="Precio por hora" prop="priceHour">
                  <el-input
                    type="number"
                    v-model="ruleForm.priceHour"
                    min="0"
                    placeholder="e.j 520"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item class="mt-2">
                  <el-button class="complete" @click="submitForm('ruleForm')">Completar</el-button>
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-form>
      </el-row>
      <span
        class="nota"
      >Nota: si no introduce una ubicacion, se tomará la ubicacion por defecto de su dispositivo.</span>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      habilities: [],
      HabilidadesSelect: [],
      currentPlace: null,
      searchHability: "",
      ruleForm: {
        lenguaje: "",
        telefono: "",
        biography: "",
        profesion: "",
        interest: "",
        priceHour: "",
        ubicacion: "",
        avatar: "",
        long: "",
        lat: ""
      },
      rules: {
        habilities: [
          {
            required: true,
            message: "Ingrese una habilidad",
            trigger: "blur"
          }
          // { min: 3, max: 30, message: 'Length should be 3 to 5', trigger: 'change' }
        ],
        lenguaje: [
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
        biography: [
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
        priceHour: [
          {
            required: true,

            message: "Ingrese un precio por hora.",
            trigger: "change"
          }
        ]
      }
    };
  },

  mounted() {
    let self = this;
    self.geolocate();
    self.getAll();
  },
  methods: {
    /**
     * Obtener foto
     */
    handleAvatarSuccess(res, file) {
      this.ruleForm.avatar = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$notify.error({
          title: "Error",
          message: "La imagen debe estar en formato JPG!",
          offset: 50,
          duration: 2200
        });
      }
      if (!isLt2M) {
        this.$notify.error({
          title: "Error",
          message: "La imagen excede los 2MB!",
          offset: 50,
          duration: 2200
        });
      }
      return isJPG && isLt2M;
    },
    getAll() {
      let self = this;
      self.$store.state.services.habilityService
        .getAll()
        .then(r => {
          /**
           * r respuesta del servidor
           */
          self.habilities = r.data;
          console.log(self.habilities.id);
        })
        .catch(e => {
          alert("error" + e);
        });
    },
    /**
     *Agrega la ubicacion al input
     */
    setPlace(place) {
      this.currentPlace = place;
    },
    /**
     * Obtiene la latitud y longitud del navegador
     */
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let p = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markers.push({ position: p });
      });
    },
    submitForm(formhabilities) {
      this.$refs[formhabilities].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        if (this.markers == null) {
          this.markers.push({ position: marker });
        } else {
          this.markers.shift();
          this.markers.push({ position: marker });
          this.ruleForm.lat = marker.lat;
          this.ruleForm.long = marker.lng;          
          this.zoom = 15;
        }
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    resetForm(formhabilities) {
      this.$refs[formhabilities].resetFields();
    }
  }
};
</script>

<style>
.coll {
  position: relative;
  left: 20px;
  top: 2px;
}
.title-register {
  color: rgb(105, 105, 105);
}
.complete {
  background-color: #5a75e6;
  color: white;
}
.complete:hover {
  background-color: #5a76e6ec;
  color: white;
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
.ubicacion {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 422px;
}
.ubicacion:hover {
  color: #909399;
}
.ubicacion::-webkit-input-placeholder {
  color: #c0c4cc;
}
.nota {
  color: #8c939d;
  font-size: 11px;
}
</style>
