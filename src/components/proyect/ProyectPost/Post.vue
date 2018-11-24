<template>

     <el-row class=" p-0" :style="{background: '#f7f7f7'}" :gutter="40">
         <div class="Etiqueta">
           <div class="texto-etiqueta">
             <h2 class="h2-etiqueta">Publicar Proyecto</h2>
               <p class="p-etiqueta"> Sigue los pasos para publicar el proyecto.</p>
           </div>
          </div>
         <div class="ContainerProyectPost" >
          <el-row type="flex" justify="center">
            <el-col :xs="40" :sm="40" :md="12" :lg="12" :xl="12" style="margin-top: 50px;">
              <div class="indicador"> 
               <el-steps style="text-align:left;" :active="active"  >
                  <el-step title="Paso 1" description="Nombra tu proyecto" ></el-step>
                  <el-step title="Paso 2" description="Seleciona una categoria y demas." ></el-step>
                  <el-step title="Publicar" ></el-step>
              </el-steps>
              </div>
                   <el-form class="form " :model="ruleForm" :rules="rules" ref="ruleForm">
                     <div class="indicador-Paso1 " v-if="mostrarPaso1">
                       
                        <p>Llena los siguientes campos</p>
                     
                      <el-form-item prop="nombreProyecto">
                         <el-input
                            v-model="ruleForm.nombreProyecto"
                            placeholder="Nombre del proyecto"
                            size="medium">
                         </el-input>
                       </el-form-item>
                     
                       <el-form-item prop="descripcion">
                         <el-input 
                            v-model="ruleForm.descripcion"
                            placeholder="Descripcion"
                            size="medium" type="textarea">
                         </el-input>
                       </el-form-item>
                    
                       <el-form-item label="Tipo de Proyecto" prop="modoProyecto">
                         <div @click="VerificandoModoProyecto">
                         <el-radio-group v-model="ruleForm.modoProyecto">
                           <el-radio label="Presencial"></el-radio>
                           <el-radio label="Remoto"></el-radio>
                        </el-radio-group>
                           <div v-if="modoPresencial" class="ubicacion">
                              aqui de alguna manera obtendremos la ublicacion del cliente
                           </div>
                         </div>
                      </el-form-item>
                   </div>
                    <div class="button-siguiente">
                     <el-button v-if="publicar===false" @click="submitForm('ruleForm')"  type="primary">Siquiente</el-button>
                    </div>
                   </el-form>
                    <el-form class="form " :model="ruleForm" :rules="rules2" ref="ruleForm2">

                       <div v-if="mostrarPaso2" class="Section-Paso2 ">
                             <div class="indicador-Paso2">

                     </div>
                      
                       <div class="categorias" >
                         <div class="item" v-for="l in 10">
                       <input type="radio" name="radio1" :id="l" value="Idcategoria"><label class="categoria-label" :for="l">	<br><span>icon</span><br> Categoria {{l}}</label>
                            </div>
                       </div>
                      <el-form-item prop="requiredSkill"> 
                         <el-input
                            v-model="ruleForm.requiredSkill"
                            placeholder="habilidades Requeridas"
                            size="medium">
                         </el-input>
                       </el-form-item>
                              <el-form-item prop="scope">
                         <el-input
                            v-model="ruleForm.scope"
                            placeholder="Alcance del proyecto"
                            size="medium">
                         </el-input>
                       </el-form-item>
                          <el-form-item prop="price">
                   
                          <el-select style="width:100%;"  placeholder="Precio estimado" v-model="ruleForm.price" >
                           <el-option  value="Menos de RD$ 15,000"></el-option>
                           <el-option  value="RD$ 20,000-25,000"></el-option>
                           <el-option  value="RD$ 30,000-50,000"></el-option>
                           <el-option  value="Mas de RD$ 60,000"></el-option>
                        </el-select>
                       </el-form-item>
                       </div>
                       <div class="button-siguiente">
                       <el-button v-if="publicar" @click="submitForm2('ruleForm2')" type="primary">Siguiente</el-button>
                       </div>

                   </el-form>
            </el-col>
          </el-row>
         </div>  
     </el-row>
</template>

<style>
.ContainerProyectPost{
}
.Etiqueta{
  padding-top:10px;
  padding-bottom: 10px; 
  position: relative;
   width: 100%;
  background-color: #304ab3;
  margin-top: 40px;
  color: white;
  text-align: left;
}
.texto-etiqueta{
  margin-left:30px; 
}
.texto-etiqueta h2{
  font-size:20px; 
}
.indicador{
  margin-bottom: 20px;
  width: 100%;
}
.categorias{
min-width: 500px;
display: flex;
flex-wrap: wrap;
width: 100%;
margin-bottom: 20px;
}
.categoria-label{
background-color: white;
border: 1px solid gainsboro;
 width: 110px;
margin-top: 5px;
cursor: pointer;
margin-bottom: 5px;

height: 100px;
margin-left: 10px;
 border: 1px solid rgb(240, 240, 240);
 -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
 box-sizing: border-box;
}

.categorias  input:checked + label
{     
  color: white;   
  background-color: #40a8fd;
     transition: all 0.20s ease-in;
}
input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}        
.categoria-label h4{
    font-size: 15px;
}


.indicador-Paso1{
 
  text-align: left;
}
.indicador-Paso2{
 
  text-align: left;
  margin-top: 30px;
  padding-top:20px; 


}
.el-step{
  z-index: 0;
}
.button-siguiente{
  float:right;
  margin-top:50px; 
  margin-bottom: 20px;
}
</style>
<script>
export default {
      data() {
    return {
      optionPrice:[],
      mostrarPaso2:false,
      mostrarPaso1:true,
      publicar:false,
       modoPresencial:false,
       active:1,

      ruleForm: {
        nombreProyecto: null,
        descripcion: null,
        modoProyecto:null,

      },
          ruleForm2: {
       
      
        requiredSkill:null,
        scope:null,
      
       price:null,
      },
      rules: {
        nombreProyecto: [
          {
            required: true, message: "Introduce el nombre del proyecto", trigger: "blur"
          }
        ],
        descripcion: [
          { required: true, message: "Descripcion del proyecto", trigger: "blur" }
        ],
     
        modoProyecto: [
          { required: true, message: "Seleccion el modo del proyect", trigger: "blur" }
        ],
      },
      rules2:{
         requiredSkill: [
          { required: true, message: "Habilidades Requeridas", trigger: "blur" }
        ],
        scope: [
          { required: true, message: "Alcance del proyecto", trigger: "blur" }
        ],
         price: [
          { required: true, message: "Seleccione un precio estimado", trigger: "blur" }
        ]
      }

    };
  },
  methods:{
      submitForm2(formName){
       
              this.$refs[formName].validate((valid) => {
                       if (valid) {
                      
                        }else { return false;}
        });
      
    },
          submitForm(formName) {
       if(formName==="ruleForm"){
                this.$refs[formName].validate((valid) => {
                     if (valid) {
                        if(this.mostrarPaso2===false){
                            this.active++;
                            this.mostrarPaso1=false;
                            this.mostrarPaso2=true;
                            this.publicar=true; 
                          }else if(this.mostrarPaso2===true){ }
                        }else { return false;}
        });
       }

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
          VerificandoModoProyecto(event){
          let condicion=event.target.value;
          if(condicion==='Presencial'){
       
             this.modoPresencial=true;
             
          }else if(condicion==='Remoto'){
              this.modoPresencial=false;
          }
        
      },
           
  }
  
  }

</script>


