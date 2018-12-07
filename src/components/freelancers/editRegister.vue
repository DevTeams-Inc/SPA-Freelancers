<template>
  <div>
    <el-card class="mt-5 p-2 m-4" v-loading="loading">
      <el-row class="p-1 m-4">
        <el-row class="mb-5">
          <el-col :span="12" :offset="6">
            <span class="title-register">Editar Registro</span>
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
                  <!-- <input type="textarea" v-model="ruleForm.biography" class="mt-5"> -->
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
                    v-for="interest in allInterest"
                    :key="interest.id"
                    :label="interest.name"
                    :value="interest.name"
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
            <el-row>
              <el-col :span="12">
                <el-form-item label="Nombre" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Apellido" prop="lastName">
                  <el-input v-model="ruleForm.lastName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="Ubicacion" prop="address" v-show="show">
              <div>
                <el-row>
                  <el-col :span="18">
                    <label>
                      <gmap-autocomplete
                        class="ubicacion"
                        v-model="ruleForm.address"
                        @place_changed="setPlace"
                      ></gmap-autocomplete>
                    </label>
                  </el-col>
                  <el-col :span="5">
                    <el-button type="primary" plain @click="hideAddress()" class="ml-2">Cancelar</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-form-item>
            <el-form-item label="Ubicacion" prop="address" v-show="!show">
              <el-row>
                <el-col :span="18">
                  <el-input v-model="ruleForm.address" readonly></el-input>
                </el-col>
                <el-col :span="5">
                  <el-button type="primary" plain @click="showAddress()" class="ml-1">Cambiar</el-button>
                </el-col>
              </el-row>
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
                  <el-button class="complete" @click="submitForm('ruleForm')">Actualizar</el-button>
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  props: ["keyFreelancer"],
  data() {
    return {
      center: { lat: 18.4855, lng: -69.8731 },
      markers: [],
      places: [],
      allHabilities: [],
      allInterest:[],
      show: false,
      ubi: null,
      loading: true,
      currentPlace: null,
      id: 0,
      i: 0,
      habi: [],
      file: null,
      ruleForm: {
        id: 0,
        address: null,
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
        ubicacion: null,
        long: null,
        lat: null,
        applicationUserId: localStorage.getItem("user_id")
      },
      rules: {
        interest:{
          required: true,
          message: "Seleccione un interes",
          trigger: "changer"
        },
        address: {
          required: true,
          message: "Ingrese una Ubicacion",
          trigger: "changer"
        },
        name: {
          required: true,
          message: "Ingrese un nombre",
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
          // required: true,
       
          // message: "Debes tener de 8 a 260 caracteres.",
          // trigger: "blur"
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
  created() {
    let self = this;

    self.getHabilities();
    self.getAllCategory();
    /**
     * Solo se obtiene los datos si existe el id del freelancer
     * de lo contrario se reedireciona al inicio
     * */
    if (self.keyFreelancer > 0) {
      self.getById(self.keyFreelancer);
    } else {
      self.$router.push("/inicio");
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
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
          console.log("Error en obtener Habilities " + e);
        });
    },
    /**
     * Obtener todas las categorias
     */

    getAllCategory() {
      let self = this;
      self.$store.state.services.categoryService
        .getAll()
        .then(r => {
          self.allInterest = r.data;
        })
        .catch(e => {
          console.log("Error en obtener categorias " + e);
        });
    },
    /**
     * Obtener freelancer por id
     */
    getById(key) {
      let self = this;
      self.$store.state.services.freelancerService
        .getByIdFreelancer(key)
        .then(r => {
          self.loading = false;
          self.ruleForm.name = r.data.name;
          self.ruleForm.lastName = r.data.lastName;
          self.ruleForm.biography = r.data.biography;
          self.ruleForm.lat = r.data.lat;
          self.ruleForm.long = r.data.long;
          self.ruleForm.interest = r.data.interest;
          self.ruleForm.id = r.data.id;
          r.data.habilities.forEach(element => {
            self.ruleForm.habilities.push({ id: element.id });
            this.i++;
          });

          self.ruleForm.lenguaje = r.data.lenguaje;
          self.ruleForm.profesion = r.data.profesion;
          self.ruleForm.priceHour = r.data.priceHour;
          self.ruleForm.phoneNumber = r.data.phoneNumber;
          self.ruleForm.address = r.data.address;
        })
        .catch(e => {
          //si no me trae dato estamos completando registro
          // self.$router.push("/inicio");
        });
    },
    submitForm(form) {
      let self = this;
      self.$refs[form].validate(valid => {
        if (valid) {
          /**
           * Editar freelancers
           */
          self.$store.state.services.freelancerService
            .update(self.ruleForm)
            .then(r => {
              self.$notify.success({
                message: "Su registro ha sido actualizado!",
                offset: 45
              });
              self.$router.push(
                `/freelancer/${self.ruleForm.applicationUserId}`
              );
            })
            .catch(e => {
              self.$notify.erro({
                message: "Su registro no ha sido actualizado!",
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
        this.ruleForm.address = place.formatted_address;
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
     *Agrega la ubicacion al input
     */
    setPlace(place) {
      this.currentPlace = place;
      try {
        this.ruleForm.address =
          place.name + ", " + place.address_components[2].short_name;
      } catch (error) {
        if (this.ruleForm.address != null) {
          this.ruleForm.address = place.formatted_address;
        } else {
          this.ruleForm.address =
            place.name + ", " + place.address_components[1].short_name;
        }
      }
      this.ruleForm.lat = place.geometry.location.lat();
      this.ruleForm.long = place.geometry.location.lng();
    },
    /**
     * Obtiene la latitud y longitud del navegador
     */
    geolocate: function() {
      if (self.keyFreelancer > 0) {
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
      }
    },
    /**
     * Mostrar el input de autocompletar ubicacion
     */
    showAddress() {
      this.show = true;
      this.ubi = this.ruleForm.address;
    },
     /**
     * ocultar el input de autocompletar ubicacion
     */
    hideAddress() {
      this.show = false;
      this.ruleForm.address = this.ubi;
    },
    /**
     * Limpiar el formulario
     */
    resetForm(formallHabilities) {
      let self = this;

      self.$refs[formallHabilities].resetFields();
    },
    /**
     * Valida el numero y la region del numero de telejo
     */
    onInput({ number, isValid, country }) {
      console.log(number, isValid, country);
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
  font-size: 19px;
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
  width: 320px;
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

.counter {
  background: #f5f7fa;
  color: #909399;
  border-radius: 4%;
}
</style>
