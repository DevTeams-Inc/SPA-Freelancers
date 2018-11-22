<template>
    <div class="containerListaFreelancer">
        <div  v-for="(i , index) in data" :key="index" class="Item-Freelancer">

            <div class="top-Item-Freelancer">
                <div class="top-left-item-Freelancer">
                   <div class="texto-freelancer">
                       <router-link tag="a" :to="`/freelancer/${i.applicationUserId}`">
                       <h2 @click="sendId(i.id)">{{i.name}} {{i.lastName}}</h2>
                        </router-link>
                        <div class="frase"><p>Contactame</p></div>
                        <div class="descripcionMini-Freelancer">
                          <P>{{i.biography}}
                        </P>
                        </div>
                   </div>
                   <div class="botones-Freelancer">
                         <el-button type="primary"  id="boton-freelancer">Contratar</el-button>
                         <el-button type="secondary" id="boton-freelancer" >Ubicacion</el-button>
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
                    <el-tag size="mini" v-for="hability in i.habilities" :key="hability"><a href="">
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
                {{i}}
            </div>
            <div class="col-2">
                <el-button type="primary" @click="nextPage()" id="boton-freelancer">Siguiente</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ratingFreelancer: 4.5,
      data: [],
      totalOfRegister: null,
      index: 1
    };
  },
  mounted() {
    this.getAll(this.index);
  },
  methods: {
    getAll(index) {
      let self = this;
      self.$store.state.services.freelancerService
        .getAll(index)
        .then(r => {
          self.data = r.data.entities;
          self.totalOfRegister = r.data.totalOfRegister;
        })
        .catch(e => {
          console.log("error :" + e);
        });
    },
    beforePage() {
      if (this.index > 1) {
        this.index--;
        this.getAll(this.index);
      }
    },
    nextPage() {
      if (this.totalOfRegister > 0) {
        this.index++;
        this.getAll(this.index);
      } else {
        this.beforePage();
      }
    }
  },
  computed: {
    i() {
      if (this.totalOfRegister <= 0) {
        return this.beforePage();
      }
    }
  }
};
</script>
<style>
.containerListaFreelancer {
  width: 70%;

  /* background-color: blueviolet; */
}
.Item-Freelancer:nth-child(1) {
  margin-top: 0px;
}
.Item-Freelancer {
  /* background-color: azure; */
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
  /* background-color: blue; */
}
.top-left-item-Freelancer {
  width: 80%;
  text-align: left;
  /* background-color: brown; */
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
  /* background-color: bisque; */
}
.top-right-item-Freelancer {
  width: 20%;
  /* background-color: cadetblue; */
}
.container-pic-freelancer {
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



