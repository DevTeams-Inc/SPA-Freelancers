<template>
  <el-row
    class="p-0"
    :style="{position:'absolute',width:'100%',height:'97%',background: '#f7f7f7'}"
    :gutter="40"
  >
    <div class="Etiqueta">
      <div class="texto-etiqueta">
        <h2 class="h2-etiqueta">Publicar Proyecto</h2>
        <p class="p-etiqueta">Sigue los pasos para publicar el proyecto.</p>
      </div>
    </div>
    <div class="ContainerProyectPost">
      <el-row type="flex" justify="center">
        <el-col :xs="40" :sm="40" :md="12" :lg="12" :xl="12" style="margin-top: 20px;">
          <div class="indicador" v-if="indicador">
            <el-steps style="text-align:left;" :active="active">
              <el-step title="Paso 1" description="Nombra tu proyecto"></el-step>
              <el-step title="Paso 2" description="Seleciona una categoria y demas."></el-step>
              <el-step title="Publicar"></el-step>
            </el-steps>
          </div>
          <el-form class="form" :model="ruleForm" :rules="rules" ref="ruleForm">
            <div class="indicador-Paso1" v-if="mostrarPaso1">
              <p>Llena los siguientes campos</p>
              <el-form-item prop="Title">
                <el-input v-model="ruleForm.Title" placeholder="Nombre del proyecto" size="medium"></el-input>
              </el-form-item>
              <el-form-item prop="Description">
                <el-input
                  v-model="ruleForm.Description"
                  placeholder="Descripcion"
                  size="medium"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </div>
            <div class="button-siguiente">
              <el-button
                v-if="mostrarPaso1"
                @click="submitForm('ruleForm')"
                type="primary"
              >Siguiente</el-button>
            </div>
          </el-form>
          <div v-show="mostrarPaso2" class="Section-Paso2">
            <div class="indicador-Paso2" animated fadeInRight></div>
            <div class="categorias">
              <div class="item" v-for="categoria in categories">
                <input
                  @click="validCategorie"
                  type="radio"
                  name="radio1"
                  :id="categoria.id"
                  value="Idcategoria"
                >
                <label class="categoria-label" :for="categoria.id">
                  <br>
                  <i :class="categoria.img"></i>
                  <br>
                  {{categoria.name}}
                </label>
              </div>
            </div>
          </div>
          <div class="button-siguienteP">
            <el-button v-if="mostrarPaso2" @click="BackP2" type="secondary">Atras</el-button>
            <el-button v-if="mostrarPaso2" @click="validCategorieButton" type="primary">Siguiente</el-button>
          </div>

          <el-form class="form" :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <div class="Publicar-section3" v-if="mostrarPaso3">
              <el-form-item prop="Required_Skill">
                <el-select
                  style="width:100%;"
                  placeholder="Habilidad requerida"
                  v-model="ruleForm2.Required_Skill"
                >
                  <el-option v-for="(skill,index) in skills" :key="index" :value="skill.title"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="Scope">
                <el-input
                  v-model="ruleForm2.Scope"
                  placeholder="Tiempo estimado del Proyecto"
                  size="medium"
                ></el-input>
              </el-form-item>

              <el-form-item prop="Price">
                <el-input
                  v-model="ruleForm2.Price"
                  placeholder="Costo del proyecto"
                  type="number"
                  size="medium"
                ></el-input>
              </el-form-item>
            </div>
            <div class="button-siguiente">
              <el-button v-if="mostrarPaso3" @click="BackP3" type="secondary">Atras</el-button>
              <el-button
                v-if="mostrarPaso3"
                @click="submitForm2('ruleForm2')"
                type="primary"
              >Publicar</el-button>
            </div>
          </el-form>
          <div class="sectionPublicado" v-if="publicado">
            <h4 class="h4-SpeedWork">SpeedWork</h4>
            <h4>Tu proyecto ha sido publicado correctamente!</h4>
            <p>Puedes ver la lista de todos los proyectos publicados</p>
            <el-button @click="$router.push('/proyectos')" type="primary">Ver Proyectos publicados</el-button>
          </div>
          <div class="sectionError" v-if="ErrorPost">
            <h4 class="h4-SpeedWorkEr">SpeedWork</h4>
            <h4>ha ocurrido un error el proyecto no se ha podido publicar!</h4>
            <p>Intentalo de nuevo!</p>
            <el-button @click="$router.push('/proyectos')" type="primary">Intentar de nuevo</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<style>
.Etiqueta {
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  width: 100%;
  background-color: #304ab3;
  margin-top: 40px;
  color: white;
  text-align: left;
}
.texto-etiqueta {
  margin-left: 30px;
}
.texto-etiqueta h2 {
  font-size: 20px;
}
.indicador {
  margin-bottom: 20px;
  width: 100%;
}
.categorias {
  min-width: 500px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
}
.categoria-label {
  background-color: white;
  border: 1px solid gainsboro;
  width: 120px;
  margin-top: 5px;
  cursor: pointer;
  margin-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  height: 100px;
  margin-left: 10px;
  border: 1px solid rgb(240, 240, 240);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.categorias input:checked + label {
  color: white;
  background-color: #40a8fd;
  transition: all 0.2s ease-in;
}
input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.categoria-label h4 {
  font-size: 12px;
}

.indicador-Paso1 {
  text-align: left;
}
.indicador-Paso2 {
  text-align: left;
  margin-top: 10px;
  padding-top: 20px;
}
.el-step {
  z-index: 0;
}
.button-siguiente {
  float: right;
  margin-top: 30px;
  margin-bottom: 20px;
}
.button-siguienteP {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 50%;
}
.sectionPublicado {
  margin-left: 27%;
  margin-top: 70px;
  text-align: left;
}
.sectionPublicado .h4-SpeedWork {
  color: #304ab3;

  font-size: 25px;
}
.sectionPublicado h4 {
  color: rgb(71, 71, 71);
  font-size: 20px;
}
.sectionError {
  margin-left: 27%;
  margin-top: 70px;
  text-align: left;
}
.sectionError .h4-SpeedWorkEr {
  color: #304ab3;

  font-size: 25px;
}
.sectionError h4 {
  color: rgb(71, 71, 71);
  font-size: 20px;
}
.categorias .item i {
  font-size: 20px;
}
</style>
<script>
import Footer from "@/components/shared/Footer";
import { type } from "os";
export default {
  components: { Footer },
  data() {
    return {
      skills: [],
      optionPrice: [],
      categories: [],
      categoriaId: 0,
      mostrarPaso2: false,
      mostrarPaso3: false,
      mostrarPaso1: true,
      publicar: false,
      publicado: false,
      indicador: true,
      ErrorPost: false,
      active: 1,

      ruleForm: {
        Title: null,
        Description: null
      },
      ruleForm2: {
        Required_Skill: null,
        Scope: null,
        Price: null
      },
      rules: {
        Title: [
          {
            required: true,
            message: "Introduce el nombre del proyecto",
            trigger: "blur"
          }
        ],
        Description: [
          { required: true, message: "Campo requerido", trigger: "blur" }
        ]
      },
      rules2: {
        Required_Skill: [
          { required: true, message: "Campo requerido", trigger: "blur" }
        ],
        Scope: [
          { required: true, message: "Campo requerido", trigger: "blur" }
        ],
        Price: [{ required: true, message: "Campo requerido", trigger: "blur" }]
      },
      model: {
        ApplicationUserId: 0,
        Title: null,
        Description: null,
        Required_Skill: null,
        Scope: null,
        price: null,
        CategoryId: null
      }
    };
  },
  mounted() {
    this.getHabilidades();
    this.getCategorias();
    console.log(localStorage.getItem("user_id"));
  },
  methods: {
    submitForm2(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let idUser = localStorage.getItem("user_id");
          (this.model.ApplicationUserId = idUser),
            (this.model.Title = this.ruleForm.Title);
          this.model.Description = this.ruleForm.Description;
          this.model.Required_Skill = this.ruleForm2.Required_Skill;
          this.model.Scope = this.ruleForm2.Scope;
          this.model.price = this.ruleForm2.Price;
          this.model.CategoryId = this.categoriaId;
          this.postProyect(this.model);

          console.log("hecho");
        } else {
          return false;
        }
      });
    },
    submitForm(formName) {
      if (formName === "ruleForm") {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (this.mostrarPaso2 === false) {
              this.active++;
              this.mostrarPaso1 = false;
              this.mostrarPaso2 = true;
            } else if (this.mostrarPaso2 === true) {
            }
          } else {
            return false;
          }
        });
      }
    },
    validCategorie(event) {
      let idElement = event.target.id;
      let IdParseado = parseInt(idElement);
      if (IdParseado > 0) {
        this.categoriaId = IdParseado;
      } else {
        console.log("no sucedio");
      }
    },
    validCategorieButton() {
      if (this.categoriaId > 0) {
        this.mostrarPaso2 = false;
        this.mostrarPaso3 = true;
        this.active++;
      } else {
        console.log("validacion");
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCategorias() {
      let self = this;
      self.$store.state.services.categoryService.getAll().then(r => {
        this.categories = r.data;
        console.log(this.categories);
      });
    },
    getHabilidades() {
      let self = this;
      self.$store.state.services.habilityService
        .getAll()
        .then(r => {
          self.skills = r.data;
        })
        .catch(e => {});
    },
    postProyect(model) {
      let self = this;
      self.$store.state.services.proyectService
        .add(model)
        .then(r => {
          this.publicado = true;
          this.mostrarPaso3 = false;
          this.indicador = false;
        })
        .catch(e => {
          this.ErrorPost = true;
        });
    },
    BackP2() {
      this.active--;
      this.mostrarPaso2 = false;
      this.mostrarPaso1 = true;
    },
    BackP3() {
      this.active--;
      this.mostrarPaso2 = true;
      this.mostrarPaso3 = false;
    }
  }
};
</script>


