<template>
    <div class="container-filtro">
          <div class="container-FiltroProyectsResponsive">
               <el-collapse >
                  <el-collapse-item title="Filtro " name="1">
                       <h2 class="h2-Filtro">Puedes filtrar segun tus necesidades</h2>
                          <div class="All-filtro">
                            <div class="section-FiltroCategoria">
                               <h4 class="h4-Categoria">Categoria de Proyectos</h4>
                                <!--Esto se va a generar con un bucle-->
                               <el-checkbox style="display:none;" :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                               <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                             </div>
                            <div class="section-FiltroFecha">
                                <h4>Fecha de Publicacion</h4>
                                <el-select v-model="value4" clearable placeholder="Select">
                                  <!--v-for="item in options" -->
                                  <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                  </el-option>
                               </el-select>
                            </div>
                          <div class="section-FiltroHabilidades">
                               <h4>Habilidades</h4>
                               <el-select v-model="Habilidades" multiple filterable  allow-create placeholder="Choose tags for your article"> 
                                 <el-option  v-for="item in options5" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                               </el-select>
                          </div>
                           <div class="section-FiltroUbicacion">
                               <h4>Ubicacion del Cliente</h4>
                               <el-select v-model="Ubicacion" multiple filterable  allow-create placeholder="Choose tags for your article"> 
                                  <el-option  v-for="item in options5" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
                               </el-select>
                           </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
           </div>
     <div class="container-FiltroProyects">
           <h2 class="h2-Filtro">Puedes filtrar segun tus necesidades</h2>
              <div class="All-filtro">
           <div class="section-FiltroCategoria">
             <h4 class="h4-Categoria">Categoria de Proyectos</h4>
                 <!--Esto se va a generar con un bucle-->
                   <el-checkbox style="display:none;" :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
                   <el-checkbox  :label="city" :key="city">Desarrollo de Software</el-checkbox>
            </div>
          <div class="section-FiltroFecha">
             
                <h4>Fecha de Publicacion</h4>
                   <el-select v-model="value4" clearable placeholder="Select">
                    <!--v-for="item in options" -->
                     <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                     </el-option>
                   </el-select>
          </div>
          <div class="section-FiltroHabilidades">
              <h4>Habilidades</h4>
              <el-select v-model="Habilidades" multiple filterable  allow-create placeholder="Choose tags for your article"> 
               <el-option  v-for="item in options5" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
              </el-select>
          </div>
          <div class="section-FiltroUbicacion">
              <h4>Ubicacion del Cliente</h4>
               <el-select v-model="Ubicacion" multiple filterable  allow-create placeholder="Choose tags for your article"> 
               <el-option  v-for="item in options5" :key="item.value"   :label="item.label"  :value="item.value"></el-option>
              </el-select>
          </div>
      </div>
   </div>
   </div>
</template>

<style >
.container-FiltroProyectsResponsive{
  display: none;
}
 .container-FiltroProyects
 {
 height: 600px;
padding-top: 30px;
padding-bottom: 30px;
font-family: 'Roboto',sans-serif;
background: white;
border-radius:2px; 
width: 365px;
text-align: left;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
 transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }
 .h2-Filtro{
     font-size: 20px;
      text-align: center;
 }
 .section-FiltroCategoria
 {
  margin-top: 20px;
 }
.All-filtro{
 position: relative;
 width: 300px;

 margin-left:40px; 
}
.h4-Categoria{
  margin-bottom: 10px;
}
 h4{
     font-size: 16px;   
     color: rgb(95, 94, 94);
 }
.el-checkbox {
    color: rgb(95, 94, 94);
    right: 30px;
    font:caption;
    z-index: 0;
}

/*Estilos section-FiltroFecha*/
.section-FiltroFecha{
  width: 100%;
    margin-top: 20px;

}
.el-select{
  width: 100%;
    font-size: 18px;
  
}

/*Estilos section-FiltroHabilidades*/
.section-FiltroHabilidades{
       margin-top: 20px;
}

/*Estilos section-FiltroUbicacion*/
.section-FiltroUbicacion{
      margin-top: 20px;
}




/* Media queries */
 @media  (max-width: 1105px) {
.container-FiltroProyects
 {

width: 330px;
 }
 .container-FiltroProyects h4{
   font-size: 13px;
 }

.All-filtro
{
 width: 250px;
}
 .h2-Filtro{
     font-size: 15px;
      text-align: center;
 }
 .el-checkbox .el-checkbox__label{
   font-size: 13px;
}

 
 }
   @media (min-width: 670px) and (max-width: 929px) {
    .container-FiltroProyects{
      display: none;
    }
 
 }
    @media(max-width: 669px) {
    .container-FiltroProyects{
      display: none;
    }
    .container-FiltroProyectsResponsive{
      display: block;
      margin-bottom: 10px;
      
    }
    .All-filtro{
      width: 70%;
      margin-left: 60px;;
    }
    .All-filtro h4{
      font-size:14px; 
    }
   .section-FiltroCategoria{
     width: 100%;
   }
 
 }

</style>

<script>
export default {
       data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value4: '',
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
         Habilidades: [],
         Ubicacion: [],
         city:[]

      }
    }
}
</script>
