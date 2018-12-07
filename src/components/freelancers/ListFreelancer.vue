<template>
    <div v-loading="loading" class="containerListaFreelancer">
              {{noData}}  <el-button v-show="noData" class="btn-home" @click="getAll(1) , noData = null" size="mini">volver </el-button> 
        <div   v-for="(i , index) in data" :key="index" class="Item-Freelancer">
            <div class="top-Item-Freelancer">
                <div class="top-left-item-Freelancer">
                   <div class="texto-freelancer">
                       <router-link tag="a" :to="`/freelancer/${i.applicationUserId}`" class="link-freelancer">
                       <h2>{{i.name}} {{i.lastName}}</h2>
                        </router-link>
                        <div class="frase"><p>{{i.profesion}}</p></div>
                        <div><i class="fas fa-map-marker-alt text-primary"> </i> {{i.address}}</div>
                        <div class="descripcionMini-Freelancer">
                          <p class="text-justify">{{i.biography}}
                        </p>
                        </div>
                   </div>
                   <div class="botones-Freelancer">
                         <el-button class="button-freelancer" type="primary" @click="openDialog(), freelancer = i.name + ' ' + i.lastName, email = i.email, form.applicationUserId = i.applicationUserId" id="boton-freelancer">Contactar</el-button>
                   </div>
                </div>
                <div class="top-right-item-Freelancer">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" height="100px" :src="i.avatar" />
                    </div>
                    <div class="rating">
                         <el-rate id="rating-star" v-model="i.rating" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
                    </div>
                    <div class="trofeoANDciudad">
                          <div class="icon-trofeo"></div>
                     </div>
                </div>
            </div>
            <div class="bottom-Item-Freelancer">
                <div class="skills">
                    <h4>Habilidades</h4>
                    <el-tag size="mini" v-for="(hability , index) in i.habilities" :key="index"><a href="">
                        {{hability.title}}
                    </a></el-tag>
                </div>
                <div class="pricehour">
                    <h4 >Precio por Hora</h4>
                    <h4>${{i.priceHour}}</h4>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-2">
                <el-button class="button-freelancer" type="primary" @click="beforePage()"  id="boton-freelancer">Anterior</el-button>
                <!-- propiedad computada que se activa cuando se va a 
                traer mas datos para evitar que se sigan haciendo gets a la 
                api si no hay mas datos -->
                {{i}}
            </div>
            <div class="col-2">
                <el-button class="button-freelancer"  type="primary" @click="nextPage()" id="boton-freelancer">Siguiente</el-button>
            </div>
        </div>

        <div>
        <el-dialog :title="`Contactar a ${freelancer}`" :visible.sync="contactForm" ref="contactForm">
          <el-form :model="form" :rules="rules" ref="form">
              <el-form-item label="Nombre Completo:" prop="fullName" v-show="!this.UserId">
                <el-input v-model="form.fullName" autocomplete="off" placeholder="Flash"></el-input>
              </el-form-item>
              <el-form-item label="Email" prop="emailFrom" v-show="!this.UserId">
                <el-input v-model="form.emailFrom" autocomplete="off" placeholder="barry@flash.com"></el-input>
              </el-form-item>
              <el-form-item label="Mensaje:" prop="message">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="El hombre más veloz que existe..."
                  v-model="form.message">
                </el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
              <el-button @click="contactForm = false">Cancelar</el-button>
              <el-button type="primary"  v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="Estamos enviando su mensaje..." @click="contactFreelancer('form') ,  form.emailDestiny = email">Enviar</el-button>
          </span>
          </el-dialog>
      </div>
    </div>
    
</template>
<script>
import { EventBus } from "../../helpers/event-bus";
export default {
  data() {
    return {
      contactForm: false,
      fullscreenLoading:false,
      form: {
        fullName: '',
        message: '',
        emailDestiny: '',
        emailFrom: '',
        fromId:'',
        applicationUserId:''
      },
      rules: {
        fullName: [
          { required: true, message: "Ingrese su nombre y apellido", trigger: "blur" }
        ],
        message: [
          { required: true, message: "Ingrese un mensaje para flash", trigger: "blur" }
        ],
        emailFrom: [
          {
            type: "email",
            required: true,
            message: "Ingrese su direccion email.",
            trigger: "blur"
          }
        ],
      },
      freelancer:null,
      ratingFreelancer: 4.5,
      data: [],
      totalOfRegister: null,
      index: 1,
      loading: true,
      noData: null
    };
  },
  mounted() {
    this.getAll(this.index);
    EventBus.$on("filter", (query) => {
      this.filter(query.id,query.rating);
    });
    EventBus.$on("search", (query) => {
      this.search(query);
    });
  },
  methods: {
    /**
     * obtiene todos los freelancers
     * @param index el numero de pagina en el que nos encontramos
     */
    getAll(index) {
      let self = this;
      self.$store.state.services.freelancerService
        .getAll(index)
        .then(r => {
          this.loading = false;
          /**
           * remueve el usuario logueado de la lista de
           * freelancers
           */
          self.data = r.data.entities.filter((c, i, arr) => {
            return c.applicationUserId != localStorage.getItem("user_id");
          });
          self.totalOfRegister = r.data.totalOfRegister;
        })
        .catch(e => {
          console.log("error :" + e);
        });
    },
    contactFreelancer(form){

           this.fullscreenLoading=true;
        let self = this;
        if(self.UserId){
          self.form.fullName = localStorage.getItem('user_info')
          self.form.emailFrom = localStorage.getItem('user_email')
          //con este freelancerid yo tomo el id del user real
          self.form.fromId = localStorage.getItem('user_id');
        }
        self.$refs[form].validate(valid => {
            if(valid) {
              self.$store.state.services.freelancerService.sendMessage(self.form)
                .then(result => {
                    self.contactForm = false
                    self.$notify.success({
                      title: "Mensaje enviado",
                      message: "Su mensaje ha sido enviado.",
                      offset: 50,
                      duration: 2000
                    });
               
                    self.form.fullName = ''
                    self.form.emailFrom = ''
                    self.form.emailDestiny = ''
                      this.fullscreenLoading=false;
                }).catch(err => {
                      this.fullscreenLoading=false;
                    self.$notify.error({
                      title: "Lo sentimos",
                      message: "Ha ocurrido un problema, porfavor intente de nuevo.",
                      offset: 50,
                      duration: 3000
                    });
                 
                });
             
            } else {
              return false;
            }
        })
    },
    search(query) {
      let self = this;
      self.loading = true;
      self.$store.state.services.freelancerService
        .search(query)
        .then(r => {
          if (query != null) {
            if(r.data.length == 0){
              self.data = null;
              self.loading = false;
              self.noData = 'no se encontraron resultados';
            }else{
            self.loading = false;
            /**
             * este filtro es para traer los que son diferentes del usuario 
             * logueado
             */
            self.data = r.data.filter((value, i, arr) => {
              return value.applicationUserId != localStorage.getItem("user_id");
            });
            self.totalOfRegister = r.data.totalOfRegister;
            self.noData = null;
            }
          } 
          else {
            self.getAll(1);
            self.loading = false;
          }
        })
        .catch(e => {
          if (e.response.data) {
            self.data = null;
            self.loading = false;
            self.noData = e.response.data;
          }
        });
    },
    /**
     * pagina anterior para la paginacion
     */
    beforePage() {
      if (this.index > 1) {
        this.index--;
        this.getAll(this.index);
      }
    },
    /**
     * pagina siguiente en la paginacion
     */
    nextPage() {
      if (this.totalOfRegister > 0) {
        this.index++;
        this.getAll(this.index);
      } else {
        this.beforePage();
      }
    },
    openDialog(){
        this.contactForm = true
    },
    filter(id,rating){
      let self = this
      self.$store.state.services.freelancerService
      .filter(id ,rating)
      .then(r =>{
        self.data = r.data
      })
      .catch(e =>{
      })

    }
  },
  computed: {
    /**
     * verifica el total de registros
     */
    i() {
      if (this.totalOfRegister <= 0) {
        return this.beforePage();
      }
    },
    /**
     * Me permite obtener el id del usuario logeado del localStorage
     */
    UserId() {
      return localStorage.getItem('user_id') ? true : false
    }
  }
};
</script>
<style scoped>
.link-freelancer {
  color: #4764da;
}
.link-freelancer:hover{
  color: #3350c5;
  text-decoration: none;
}
.btn-home {
  width: 85px;
}
.containerListaFreelancer {
  width: 70%;
  margin-top: -20px;
}
.Item-Freelancer:nth-child(1) {
  margin-top: -30px;
}
.Item-Freelancer {
  background: white;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 20px;
  margin-left: 30px;
}
.top-Item-Freelancer {
  width: 100%;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.top-left-item-Freelancer {
  width: 80%;
  text-align: left;
}
.texto-freelancer h2 {
  font-size: 20px;
}
.frase p {
  font-size: 15px;
  color: gray;
}
.descripcionMini-Freelancer p {
  text-align: justify;
  width: 90%;
  font-size: 15px;
}
.botones-Freelancer {
  display: flex;
  width: 50%;
}
.button-freelancer {
  background-color: #5a75e6;
}
.button-freelancer:hover{
  background-color: #3350c5;
}
.top-right-item-Freelancer {
  width: 20%;
}
.img-pic-freelancer {
  border-radius: 100%;
  width: 100px;
}
.bottom-Item-Freelancer {
  display: flex;
}
.skills {
  width: 80%;
  padding: 15px;
  display: flex;
}
.skills a {
  margin-left: 10px;
  margin-bottom: -5px;
  font-size: 12px;
}
.skills h4{
  font-size: 15px;
}
.skills a:hover {
  text-decoration: none;
}
.el-tag {
  margin-left: 5px;
  border-radius: 300px;
}
.pricehour {
  width: 20%;
}
.pricehour h4 {
  font-size: 14px;
  margin-top: 5px;
  color: #4764da;
}
.pricehour h4:nth-child(1) {
  color: #304ab3;
}
.pricehour h4:nth-child(2) {
  color: #10df90;
}

/* Media queries */
@media (min-width: 1106px) and (max-width: 1320px) {
  .descripcionMini-Freelancer p {
    width: 100%;
    font-size: 14px;
  }

}
@media (max-width: 1105px) {
  .descripcionMini-Freelancer p {
    width: 95%;
    font-size: 12px;
  }
  #boton-freelancer {
    font-size: 12px;
    height: 35px;
  }
  .skills h4 {
    font-size: 14px;
  }

  #rating-star {
    width: 120px;
  }
}

@media (max-width: 929px) {
    .containerListaFreelancer{
    margin-top: 10px;
  }
  .containerListaFreelancer {
    width: 100%;
  }
  .Item-Freelancer {
    margin-left: 0px;
  }
  #rating-star {
    width: 130px;
  }
}

@media (max-width: 669px) {
  .Item-Proyect {
    margin-left: 0px;
    height: auto;
  }
  .top-Item-Freelancer {
    flex-direction: column-reverse;
  }
  .top-right-item-Freelancer {
    width: 100%;
  }
  .top-left-item-Freelancer {
    width: 100%;
  }
  .top-left-item-Freelancer h2 {
    text-align: center;
  }

  #rating-star {
    width: 100%;
  }
  .skills {
    display: none;
  }
  .pricehour {
    text-align: center;
    width: 100%;
  }
  .botones-Freelancer {
    width: 100%;
  }
  #boton-freelancer {
    width: 50%;
  }
}
</style>



