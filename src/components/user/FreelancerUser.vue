<template>
  <div class="pt-5">
    <el-row type="flex" class="pl-4" justify="start">
      <el-col v-loading="loadingprofile" :span="18" class="mt-4">
        <el-row type="flex">
          <el-card class="box-card">
            <el-col :span="5">
              <div class="grid-content bg-purple mt-4">
                <slot>
                  <img
                    class="freelancer-image"
                    v-loading="loading"
                    :src="data.avatar"
                    height="75px"
                  >
                </slot>
                <el-button
                  type="primary"
                  @click="dialogFormVisible=true"
                  v-show="id == UserId"
                  icon="el-icon-picture-outline"
                  circle
                ></el-button>
                <el-row>
                  <el-col class="mt-2" v-if="this.UserId">
                    <p
                      class="text-color el-icon-phone"
                      style="font-size: 12px;"
                      
                      v-if="data.phoneNumber !== null"
                    >{{data.phoneNumber}}</p>
                  </el-col>
                  <el-col class=" mt-2" v-if="this.UserId">
                      <i class="fas fa-language"><small> {{data.lenguaje}}</small></i>
                      </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h5 class="mt-2">{{data.name}} {{data.lastName}}</h5>
                <p class="text-color">P/H : ${{data.priceHour}}</p>
                <p class="text-color">
                  <small>{{data.biography}}</small>
                </p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="ml-4 grid-content bg-purple mb-2">
                <h5 class="mt-2">Habilidades</h5>
                <div class="hability-tag mt-5">
                  <el-tag
                    v-for="(hability, index) in data.habilities"
                    :key="index"
                    class="mb-2"
                    type="success"
                  >{{hability.title}}</el-tag>
                </div>
              </div>
            </el-col>
            <el-col :span="24" class="mb-3 mt-2">
              <el-row type="flex" class justify="center">
                <el-col :span="12">
                  <span>
                    <b>Valoracion</b>
                  </span>
                  <el-rate v-model="rating" disabled show-score text-color="#ff9900" score-template></el-rate>
                </el-col>
                <el-col :span="2" class="ml-4" v-if="id != UserId">
                  <el-button
                    type="primary"
                    class="contact-button"
                    @click="dialogTableVisible = true"
                    round>
                    Contáctame</el-button>
                </el-col>
              </el-row>
              <el-row type="flex" justify="end">
                <el-col :span="26">
                  <router-link :to="`/completar/registro/${data.id}/${data.applicationUserId}`">
                    <el-button type="info" v-if="id == UserId" icon="el-icon-setting" circle></el-button>
                  </router-link>
                </el-col>
              </el-row>
            </el-col>
          </el-card>
        </el-row>
        <el-row type="flex" class justify="space-center" v-if="this.UserId">
          <el-col :span="24" class="mt-4">
            <el-card class="box-card-habilities">
              <el-col :span="24">
                <div class="grid-content bg-purple mb-2">
                  <h5 class="mt-2 ml-4">Ubicacion</h5>
                  <div class="map mt-3 mb-4">
                    <gmap-map :center="center" :zoom="10" style="height: 300px;">
                      {{this.UserId}}
                      <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="false"
                        @click="center=m.position , toggleInfoWindow(m, index)"
                      ></gmap-marker>

                      <gmap-info-window
                        :options="infoOptions"
                        :position="infoWindowPos"
                        :opened="infoWindowOpen"
                        @closeclick="infoWindowOpen=false"
                      >
                        <img :src="infoImg" class="img-map" alt>
                        <p class="mt-1">{{infoContent}}</p>
                      </gmap-info-window>
                    </gmap-map>
                  </div>
                </div>
              </el-col>
            </el-card>
          </el-col>
        </el-row>

        <el-row type="flex" class justify="space-around">
          <el-col :span="24" class="mt-4">
            <el-card class="box-card-habilities">
              <el-col :span="22">
                <div class="grid-content bg-purple mb-2">
                  <h5 class="mt-2 ml-4">Proyectos Publicados</h5>
                  <div class="hability-tag mt-3 mb-4">
                    <el-row type="flex" justify="start">
                      <el-col :span="10" class="ml-5">
                        <el-card shadow="hover">
                          <slot>
                            <img src="@/assets/logo.png" height="45px">
                            <h6 class="mt-2">Punto de Venta</h6>
                          </slot>
                        </el-card>
                      </el-col>
                      <el-col :span="10" class="ml-5">
                        <el-card shadow="hover">
                          <slot>
                            <img src="@/assets/logo.png" height="45px">
                            <h6 class="mt-2">Maquetacion Sitio Web</h6>
                          </slot>
                        </el-card>
                      </el-col>
                      <el-col :span="10" class="ml-5">
                        <el-card shadow="hover">
                          <slot>
                            <img src="@/assets/logo.png" height="45px">
                            <h6 class="mt-2">API RESTful Node.JS</h6>
                          </slot>
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <slot>
            <img class src="@/assets/img/imglogin.svg" height="425px">
          </slot>
        </div>
      </el-col>
    </el-row>
    <!-- el form para la imagen -->
    <el-dialog title="Actualizar Imagen" :visible.sync="dialogFormVisible">
      <div class="large-12 medium-12 small-12 cell">
        <label>Imagen</label>
        <div>
          <input type="file" id="file" ref="file" @change="handleFileUpload()">
        </div>
        <button class="btn mt-4 el-button primary" @click="submitFile()">Submit</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { EventBus } from "../../helpers/event-bus";
export default {
  props: ["id"],
  data() {
    return {
      dialogFormVisible: false,
      infoContent: "",
      loadingprofile: false,
      infoImg: "",
      loading: false,
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWindowOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffeset: {
          width: 0,
          height: -35
        }
      },
      file: "",
      latitude: null,
      longitude: null,
      rating: 0,
      data: [],
      center: { lat: 0, lng: 0 },
      markers: [
        {
          position: { lat: 0, lng: 0 },
          name: "Mi Posicion",
          img: ""
        },
        {
          position: { lat: 0, lng: 0 },
          name: "",
          img: ""
        }
      ]
    };
  },
  mounted() {
    this.getUser(this.id);
    this.getLocation();
    EventBus.$once("profile", id => {
      this.loadingprofile = true;
      this.getUser(id);
    });
  },
  updated() {
    this.getUser(this.id);
  },
  methods: {
    getUser(id) {
      let self = this;
      self.$store.state.services.freelancerService
        .getById(id)
        .then(r => {
          self.data = r.data;
          self.rating = r.data.rating;
          self.markers[1].name = r.data.name + " " + r.data.lastName;
          self.markers[1].img = r.data.avatar;
          self.center.lat = r.data.lat;
          self.center.lng = r.data.long;
          self.markers[1].position.lng = r.data.long;
          self.markers[1].position.lat = r.data.lat;
          this.loadingprofile = false;
        })
        .catch(e => {});
    },
    /**
     * obtienen la ubicacion de donde estas conectado
     */
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
    /**
     * muestra mi posicion y la centra en el mapa
     * y luego le asigna a markers[0].position
     * a mi primera posicion mi longitud y latitud para ubicarme en el mapa
     * @param position posicion
     */
    showPosition(position) {
      this.markers[0].position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    },
    /**
     * me permite mostrar una pequeña descripcion
     * en el mapa del usuario y mi posicion
     */
    toggleInfoWindow(marker , idx){
        this.infoWindowPos = marker.position
        this.infoContent = marker.name
        this.infoImg = marker.img

        if(this.currentMidx == idx){
            this.infoWindowOpen = !this.infoWindowOpen
        }
        else{
            this.infoWindowOpen = false;
            this.currentMidx = idx
        }
    },
    /**
     * metodo para asignarle el valor del input a la variable de tipo file
     */
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      let self = this;
      self.loading = false;
      //creamos un form data
      let formData = new FormData();
      formData.append("file", self.file);
      formData.append("id", localStorage.getItem("user_id"));
      //utilizamos axios para subirla
      self.$store.state.services.accountService
        .submitImg(formData)
        .then(r => {
          self.dialogFormVisible = false;
          self.file = null;
          self.loading = false;
        })
        .catch(e => {
          console.log("no funciono");
        });
    }
  },
  computed: {
    /**
     * Me permite obtener el id del usuario logeado del localStorage
     */
    UserId() {
      return localStorage.getItem('user_id');
    }
  }
};
</script>
<style scoped>
h6 {
  color: #808695;
  font-family: "Roboto", sans-serif;
}
h5,
span b {
  color: #606266;
}
i span{
    font-size: 12px;
}
.fa-language{
  /* font-size: 22px; */
  color: #606266;
}
.text-color {
  color: #606266;
}
.img-map {
  height: 60px;
  border-radius: 40%;
}
.map {
  width: 100%;
}
.freelancer-image {
  padding: 10px 0;
  margin-right: 10px;
  border-radius: 70px;
  height: 125px;
  width: 120px;
}
.contact-button {
  outline: none;
}
.contact-button:hover {
  font-size: 14.2px;
}
.box-card {
  width: 95%;
}
.box-card-habilities {
  width: 95%;
}
.btn-nav {
  background: #5a75e6;
  color: #fff;
  border: none;
  font-family: "Roboto", sans-serif;
}
</style>


