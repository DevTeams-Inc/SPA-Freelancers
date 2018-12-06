<template>
  <div>
    <el-card class="mt-5 p-2 m-4" v-loading="loading">
      <el-row class="p-3 m-5">
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
          enctype="multiple/form-data"
        >
          <el-col :span="12">
            <el-row>
              <el-col>
                <el-form-item label="Biografia" prop="biography" class="mb-5">
                  <el-input type="textarea" :rows="4" v-model="ruleForm.biography"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-col :span="12">
              <el-form-item label="Idioma" prop="lenguaje">
                <el-select v-model="ruleForm.lenguaje" placeholder="Seleciona">
                  <el-option label="Español" value="Español"></el-option>
                  <el-option label="Ingles" value="Ingles"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Interes" prop="interest">
                <el-select v-model="ruleForm.interest" placeholder="Seleciona">
                  <el-option
                    v-for="hability in allHabilities"
                    :key="hability.id"
                    :label="hability.title"
                    :value="hability.title"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Habilidad" prop="habilities">
                <div class="counter" v-if="i >0">
                  {{i}}
                  <span v-if="i > 1">habilidades</span>
                  <span v-else>habilidad</span>
                </div>
                <el-select
                  v-model="id"
                  @change="ya(id)"
                  filterable
                  multiple
                  placeholder="Seleciona"
                >
                  <el-option
                    v-for="hability in allHabilities"
                    :key="hability.id"
                    :label="`${hability.title}`"
                    :value="hability.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="Precio por hora" prop="priceHour">
                <el-input type="number" v-model="ruleForm.priceHour" min="0" placeholder="e.j 520"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="12" class="coll">
            <el-form-item label="Ubicacion" prop="address">
              <div>
                <label>
                  <gmap-autocomplete
                    class="ubicacion"
                    v-model="ruleForm.address"
                    @place_changed="setPlace"
                    placeholder="Introduce una ubicacion"
                  ></gmap-autocomplete>
                </label>
              </div>
            </el-form-item>
            <el-form-item label="Profesion" prop="profesion">
              <el-input v-model="ruleForm.profesion" placeholder="e.j Web developer"></el-input>
            </el-form-item>
            <el-row>
              <el-col>
                <el-form-item label="Telefono" prop="phoneNumber">
                  <vue-tel-input
                    v-model="ruleForm.phoneNumber"
                    class="phone"
                    @onInput="onInput"
                    placeholder
                  ></vue-tel-input>
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
      {{ruleForm.address}}
    </el-card>
  </div>
</template>
<script>
export default {
  props: ["keyUser"],
  data() {
    return {
      center: { lat: 18.4855, lng: -69.8731 },
      markers: [],
      places: [],
      allHabilities: [],
      loading: false,
      currentPlace: null,
      id: 0,
      i: 0,
      habi: [],
      file: null,
      ruleForm: {
        address: null,
        id: 0,
        name: null,
        lastName: null,
        habilities: [],
        direccion: null,
        lenguaje: null,
        phoneNumber: null,
        biography: null,
        profesion: null,
        interest: null,
        priceHour: null,
        long: null,
        lat: null,
        applicationUserId: localStorage.getItem("user_id")
      },
      rules: {
        address: {
          required: true,
          message: "Ingrese una ubicacion",
          trigger: "blur"
        },
        habilities: {
          required: true,
          message: "Ingrese una habilidad",
          trigger: "blur"
        },
        lenguaje: {
          required: true,
          message: "Selecione un idioma.",
          trigger: "blur"
        },
        phoneNumber: {
          required: true,
          message: "Ingrese un numero de telefono.",
          trigger: "blur"
        },
        biography: {
          required: true,
          min: 8,
          max: 260,
          message: "Debes tener de 8 a 260 caracteres.",
          trigger: "change"
        },
        profesion: {
          required: true,
          message: "Ingrese su profesion.",
          trigger: "blur"
        },
        priceHour: {
          required: true,
          message: "Ingrese un precio por hora.",
          trigger: "blur"
        }
      }
    };
  },
  beforeCreate(){
    },
  created() {
    this.getHabilities();
          

  },
  mounted() {
    this.geolocate();
          this.getById(this.keyUser);
    
  },
  methods: {
    ya(c) {
      /**
       * let p guardo el elemento que me manda el select
       */
      let p = c.pop();

      if (this.habilityExist(p)) {
        //si existe obtenemos el valor que teniamos
        var index = this.ruleForm.habilities.indexOf(p);
        //si retorna mayor a => -1 existe
        if (index >= -1) {
          //como existe con splice lo eliminamos
          /**
           * @param index indica en la posicion que esta
           * ponemos 1 por defecto
           */
          this.i--;
          this.ruleForm.habilities.splice(index, 1);
        }
      } else {
        this.i++;
        this.ruleForm.habilities.push({ id: p });
      }
    },
    /**
     * verifica si existe en el array
     * @param id indica el valor que verificara si existe
     */
    habilityExist(id) {
      return this.ruleForm.habilities.some(el => {
        return el.id === id;
      });
    },

    /**
     * Obtener todas las habilidades
     */
    getHabilities() {
      let self = this;
      self.$store.state.services.habilityService
        .getAll()
        .then(r => {
          /**
           * r respuesta del servidor
           */
          self.allHabilities = r.data;
        })
        .catch(e => {
          self.$notify.error({
            message: "Error en obtener allHabilities ",
            offset: 45
          });
        });
    },
    /**
     *Agrega la ubicacion al input
     */
    setPlace(place) {
      this.currentPlace = place;
      try {
        this.ruleForm.address =
          place.name + ", " + place.address_components[2].short_name;
      } catch (error) {
        this.ruleForm.address =
          place.name + ", " + place.address_components[1].short_name;
      }
    },
    /**
     * Obtiene la latitud y longitud del navegador
     */
    geolocate: function() {
      if (self.keyUser !== null) {
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
          this.ruleForm.long = position.coords.longitude;
          this.ruleForm.lat = position.coords.latitude;
        });
      } else {
        console.log("desde el else geococate()");
      }
    },
    getById(id){
      let self = this;
      self.$store.state.services.accountService
      .exist(id)
      .then( r =>{
      })
      .catch(e => {
        
                this.$router.push(`/inicio`);      
        

        });

    },
    submitForm(form) {
      let self = this;
      self.$refs[form].validate(valid => {
        if (valid) {
          /**
           * Agregar freelancers
           */
          self.$store.state.services.freelancerService
            .add(self.ruleForm)
            .then(r => {
              self.$router.push(
                `/freelancer/${self.ruleForm.applicationUserId}`
              );
            })
            .catch(e => {
              self.$notify.error({
                message: "Error al completar registro, intente de nuevo!",
                offset: 45
              });
            });
        } else {
          self.$notify.error({
            message: "Intente de nuevo!",
            offset: 45
          });
          return false;
        }
      });
      if (self.currentPlace) {
        const marker = {
          lat: self.currentPlace.geometry.location.lat(),
          lng: self.currentPlace.geometry.location.lng()
        };
        if (self.markers == null) {
          self.markers.push({ position: marker });
        } else {
          self.markers.shift();
          self.markers.push({ position: marker });
          self.ruleForm.lat = marker.lat;
          self.ruleForm.long = marker.lng;
          self.zoom = 15;
        }
        self.places.push(self.currentPlace);
        self.center = marker;
        self.currentPlace = null;
      }
    },
    resetForm(formallHabilities) {
      let self = this;

      self.$refs[formallHabilities].resetFields();
      // this.id = 0
    },
    //validar que el numero exista en su region
    onInput({ number, isValid, country }) {
      console.log(number, isValid, country);
    }
  }
};
</script>

<style scope>
.coll {
  position: relative;
  left: 20px;
  top: 2px;
}
.title-register {
  color: rgb(105, 105, 105);
}
.complete {
  background: #5a75e6;
  color: #fff;
  border: none;
  font-family: "Roboto", sans-serif;
  outline: none;
}
.complete:hover {
  background-color: #5a76e6ec;
  color: white;
}
.ubicacion {
  position: relative;
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
  width: 418px;
  /* right: 42px; */
}
.phone {
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
.counter {
  background: #f5f7fa;
  color: #909399;
  border-radius: 4%;
}
</style>
