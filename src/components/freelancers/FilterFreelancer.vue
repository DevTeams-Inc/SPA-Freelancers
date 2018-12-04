<template>
  <div class="FcontainerFiltro">
    <div class="container-FiltroFreelancersResponsive">
      <el-collapse>
        <el-collapse-item title="Filtro " name="1">
          <h2 class="h2-Filtro">Freelancers Profesionales</h2>
          <div class="All-filtro-freelancers">
            <div class="section-FiltroCategoria-freelancers">
                   <h4 class="h4-Categoria">Actividad de freelancer</h4>
                    <el-select v-model="ActividadSelect" clearable placeholder="selecciona actividad requerida">
                          <el-option  v-for="item in Actividades" 
                          :key="item.value" 
                          :label="item.label" 
                          :value="item.value">
                          </el-option>
                    </el-select>   
            </div>
           <div class="section-FiltroHabilidades-freelancers">
             <h4>Habilidades</h4>
             <el-select v-model="searchHability" filterable placeholder="Habilidad">
                <el-option v-for="hability in habilities" :key="hability.id" :label="hability.title" :value="hability.id"></el-option>
              </el-select>
           </div>

           <div class="section-FiltroUbicacion-freelancers">
              <h4>Ubicacion del Freelancer</h4>
                      <el-select v-model="CiudadSelect" clearable placeholder="selecciona la ciudad"> 
                        <el-option  v-for="item in Ciudades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select><br>
                  
            </div>
            <div class="section-FiltroRating-freelancers">
                      <h4>Clasificacion</h4>
             <el-rate  @change="search(rating)" v-model="rating"></el-rate>

            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="container-FiltroFreelancers">
      <h2 class="h2-Filtro">Freelancers Profesionales</h2>
      <div class="All-filtro-freelancers">
        <div class="section-FiltroCategoria-freelancers">
                   <h4 class="h4-Categoria">Area del freelancer</h4>
                    <el-select @clear="removeHabilitySelect" @change="ShowHabilities(ActividadSelect)" v-model="ActividadSelect" clearable placeholder="selecciona actividad requerida">
                          <el-option   v-for="item in Areas" :key="item.id" :label="item.name" :value="item.id">
                          </el-option>
            </el-select>   
        </div>
        <div class="section-FiltroHabilidades-freelancers">
          <h4>Habilidades</h4>
          <el-select
            v-model="searchHability"
            @change="search(searchHability)"
            filterable
            placeholder="Habilidad"  >
            <el-option
              v-for="(hability, index) in habilities"
              :key="index"
              :label="hability.title"
              :value="hability.title"
            ></el-option>
          </el-select>
        </div>
        <div class="section-FiltroUbicacion-freelancers">
                      <h4>Ubicacion del Freelancer</h4>
                      <el-select v-model="CiudadSelect" clearable placeholder="selecciona la ciudad"> 
                        <el-option  v-for="item in Ciudades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select><br>
                 
        </div>
        <div class="mt-5 section-FiltroRating-freelancers">
          <h4 class>filter por clasificacion</h4>
          <div class="ml-2 mblock">
            <el-rate  @change="search(rating)" v-model="rating"></el-rate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../../helpers/event-bus";
export default {
  data() {
    return {
      rating:0,
      searchHability: "",
      Areas:[],
      Actividades: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      ActividadSelect: "",
      habilities: [],
      Ciudades: [
        {
          value: "idAzua",
          label: "Azua"
        },
        {
          value: "idHiguey",
          label: "Higuey"
        },
        {
          value: "idRomana",
          label: "Romana"
        }
      ],
      CiudadSelect: [],
      Rangos: [
        {
          value: "id10",
          label: "10 min"
        },
        {
          value: "id30",
          label: "30 min"
        },
        {
          value: "id50",
          label: "50 min"
        }
      ],
      RangoSelect: [],
      HabilidadesSelect: [],
      Ubicacion: [],
      city: []
    };
  },
  mounted() {
    let self = this;
    self.getAllCategorias();
  },
  methods: {
    /*
     *Habilidades
     */
    getAll(idCategory) {
      let self = this;
      self.$store.state.services.habilityService
        .getAllCategory(idCategory)
        .then(r => {
          self.habilities = r.data;
        })
        .catch(e => {});
    },
    getAllCategorias(){
          let self = this;
          self.$store.state.services.categoryService
        .getAll()
        .then(r => {
          self.Areas = r.data;
        })
        .catch(e => {});
    },
    search(value) {
      console.log(value)
      // EventBus.$emit("search", value);
    },
    filter(){

    },
    ShowHabilities(idCategory){
      this.searchHability='';
       this.getAll(idCategory);
    },
    removeHabilitySelect(){
      this.searchHability='';
    }
  }
};
</script>
<style scoped>
.container-FiltroFreelancersResponsive {
  display: none;
}
.container-FiltroFreelancers {
  height: 600px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: "Roboto", sans-serif;
  background: white;
  border-radius: 2px;
  width: 365px;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.All-filtro-freelancers {
  width: 100%;
}
.h2-Filtro {
  font-size: 20px;
  text-align: center;
}
.section-FiltroCategoria-freelancers {
  margin-top: 20px;
}
.All-filtro-freelancers {
  position: relative;
  width: 300px;
  margin-left: 33px;
  margin-right: 33px;
}
.h4-Categoria {
  margin-bottom: 10px;
}
h4 {
  font-size: 16px;
  color: rgb(95, 94, 94);
}

/*Estilos section-FiltroHabilidades*/
.section-FiltroHabilidades-freelancers {
  margin-top: 20px;
}

/*Estilos section-FiltroUbicacion*/
.section-FiltroUbicacion-freelancers {
  margin-top: 20px;
}
/*Estilos section-FiltroRating-freelancers*/
.section-FiltroRating-freelancers {
  position: relative;
  margin-top: 20px;
  width: 100%;
}
.el-select {
  font-size: 18px;
  width: 100%;
}
.el-checkbox {
  right: 30px;
  z-index: 0;
}

/* Media queries */
@media (min-width: 930px) and (max-width: 1105px) {
  .container-FiltroFreelancers {
    width: 330px;
  }
  .All-filtro-freelancers {
    width: 80%;
  }
}
@media (max-width: 929px) {
  .container-FiltroFreelancers {
    display: none;
  }
  .container-FiltroFreelancersResponsive {
    display: block;
    margin-bottom: 10px;
  }
}
</style>

