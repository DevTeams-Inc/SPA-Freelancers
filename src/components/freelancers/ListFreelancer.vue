<template>
    <div v-loading="loading" class="containerListaFreelancer">
              {{noData}}  <el-button v-show="noData" class="btn-home" @click="getAll(1) , noData = null" size="mini">volver </el-button> 
        <div   v-for="(i , index) in data" :key="index" class="Item-Freelancer">
            <div class="top-Item-Freelancer">
                <div class="top-left-item-Freelancer">
                   <div class="texto-freelancer">
                       <router-link tag="a" :to="`/freelancer/${i.applicationUserId}`">
                       <h2 >{{i.name}} {{i.lastName}}</h2>
                        </router-link>
                        <div class="frase"><p>{{i.profesion}}</p></div>
                        <div class="descripcionMini-Freelancer">
                          <p>{{i.biography}}
                        </p>
                        </div>
                   </div>
                   <div class="botones-Freelancer">
                         <el-button type="primary" @click="openDialog(), freelancer = i.name + ' ' + i.lastName" id="boton-freelancer">Contactar</el-button>
                   </div>
                </div>
                <div class="top-right-item-Freelancer">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" height="80px" :src="i.avatar" />
                    </div>
                    <div class="rating">
                         <el-rate id="rating-star" v-model="i.rating" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
                    </div>
                    <div class="trofeoANDciudad">
                          <div class="icon-trofeo"></div>
                          <a href=""><h4>{{i.address}}</h4></a>
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
                <el-button type="primary" @click="beforePage()"  id="boton-freelancer">Anterior</el-button>
                <!-- propiedad computada que se activa cuando se va a 
                traer mas datos para evitar que se sigan haciendo gets a la 
                api si no hay mas datos -->
                {{i}}
            </div>
            <div class="col-2">
                <el-button type="primary" @click="nextPage()" id="boton-freelancer">Siguiente</el-button>
            </div>
        </div>

        <div>
        <el-dialog :title="`Contactar a ${freelancer}`" :visible.sync="contactForm" ref="contactForm">
          <el-form :model="form">
              <el-form-item label="Nombre Completo:">
                <el-input v-model="form.fullName" autocomplete="off" placeholder="Batman"></el-input>
              </el-form-item>
              <el-form-item label="Mensaje:">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Eres un ser asombroso..."
                  v-model="form.message">
                </el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
              <el-button @click="contactForm = false">Cancelar</el-button>
              <el-button type="primary" @click="contactForm = false">Enviar</el-button>
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
      form: {
        fullName: '',
        message: '',
        emailDestiny: ''
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
  },
  updated() {
    EventBus.$once("search", query => {
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
    }
  }
};
</script>
<style scoped>
.btn-home {
  width: 85px;
}
.containerListaFreelancer {
  width: 70%;
}
.Item-Freelancer:nth-child(1) {
  margin-top: 0px;
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



