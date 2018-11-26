<template>
           <div class="FcontainerFiltro">
                <div class="container-FiltroFreelancersResponsive">
                  <el-collapse >
                   <el-collapse-item title="Filtro " name="1">
                                     <h2 class="h2-Filtro">Freelancers Profesionales</h2>
               <div class="All-filtro-freelancers">
                 <div class="section-FiltroCategoria-freelancers">
                   <h4 class="h4-Categoria">Actividad de freelancer</h4>
                      <!--Esto se va a generar con un bucle-->
                    <el-select v-model="ActividadSelect" clearable placeholder="selecciona actividad requerida">
                          <el-option  v-for="item in Actividades" :key="item.value" :label="item.label" :value="item.value">
                          </el-option>
                    </el-select>   
                  </div>

                  <div class="section-FiltroHabilidades-freelancers">
                    <h4>Habilidades</h4>
                    <el-select v-model="HabilidadesSelect" multiple filterable  allow-create  placeholder="selecciona habilidades"> 
                      <el-option  v-for="item in Habilidades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                    </el-select>
                   </div>
                   <div class="section-FiltroUbicacion-freelancers">
                      <h4>Ubicacion del Freelancer</h4>
                      <el-select v-model="CiudadSelect" clearable placeholder="selecciona la ciudad"> 
                        <el-option  v-for="item in Ciudades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select><br>
                      <el-select v-model="RangoSelect"  clearable placeholder="rango de distancia" style="margin-top:10px;"> 
                         <el-option  v-for="item in Rangos" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select>
                     </div>
                    <div class="section-FiltroRating-freelancers">
                      <h4>Clasificacion</h4>
                      <el-checkbox style="display:none;" :label="city" :key="city"> </el-checkbox>
                      <el-checkbox  :label="city" :key="city">
                        <el-rate v-model="rating1" disabled  show-score text-color="#ff9900" score-template="{value} puntos" ></el-rate>
                     </el-checkbox>
                     <el-checkbox  :label="city" :key="city">
                       <el-rate v-model="rating2" disabled  show-score text-color="#ff9900" score-template="{value} puntos" ></el-rate>
                     </el-checkbox>
                    <el-checkbox  :label="city" :key="city">
                       <el-rate v-model="rating3" disabled  show-score text-color="#ff9900"  score-template="{value} puntos"></el-rate>
                    </el-checkbox>    
                   </div>
             </div>
                    </el-collapse-item>
                  </el-collapse>
                </div>     
             <div class="container-FiltroFreelancers">
               <h2 class="h2-Filtro">Freelancers Profesionales</h2>
               <div class="All-filtro-freelancers">
                 <div class="section-FiltroCategoria-freelancers">
                   <h4 class="h4-Categoria">Actividad de freelancer</h4>
                      <!--Esto se va a generar con un bucle-->
                    <el-select v-model="ActividadSelect" clearable placeholder="selecciona actividad requerida">
                          <el-option  v-for="item in Actividades" :key="item.value" :label="item.label" :value="item.value">
                          </el-option>
                    </el-select>   
                  </div>

                  <div class="section-FiltroHabilidades-freelancers">
                    <h4>Habilidades</h4>
                    <el-select v-model="HabilidadesSelect" multiple filterable  allow-create  placeholder="selecciona habilidades"> 
                      <el-option  v-for="item in Habilidades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                    </el-select>
                   </div>
                   <div class="section-FiltroUbicacion-freelancers">
                      <h4>Ubicacion del Freelancer</h4>
                      <el-select v-model="CiudadSelect" clearable placeholder="selecciona la ciudad"> 
                        <el-option  v-for="item in Ciudades" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select><br>
                      <el-select v-model="RangoSelect"  clearable placeholder="rango de distancia" style="margin-top:10px;"> 
                         <el-option  v-for="item in Rangos" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                      </el-select>
                     </div>
                    <div class="section-FiltroRating-freelancers">
                      <h4>Clasificacion</h4>
                      <el-checkbox style="display:none;" :label="city" :key="city"> </el-checkbox>
                      <el-checkbox  :label="city" :key="city">
                        <el-rate v-model="rating1" disabled  show-score text-color="#ff9900" score-template="{value} puntos" ></el-rate>
                     </el-checkbox>
                     <el-checkbox  :label="city" :key="city">
                       <el-rate v-model="rating2" disabled  show-score text-color="#ff9900" score-template="{value} puntos" ></el-rate>
                     </el-checkbox>
                    <el-checkbox  :label="city" :key="city">
                       <el-rate v-model="rating3" disabled  show-score text-color="#ff9900"  score-template="{value} puntos"></el-rate>
                    </el-checkbox>    
                   </div>
             </div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating1: 3.5,
      rating2: 4.0,
      rating3: 5,
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
      Habilidades: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],

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
  mounted(){

  },
  methods(){
    
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

