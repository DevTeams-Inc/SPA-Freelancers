<template>
<div class="pt-5">

<el-row type="flex" class="pl-4" justify="start">
    <el-col :span="18" class="mt-4">
        <el-row type="flex">
            <el-card class="box-card">
    <el-col :span="5">
        <div class="grid-content bg-purple mt-4">
            <slot>
            <img class="freelancer-image" src="@/assets/logo.png" height="75px">
            </slot>
        </div>
    </el-col>
    <el-col :span="12">
        <div class="grid-content bg-purple-light">
            <h5 class="mt-2">Nombre Completo</h5>
            <p>Otras descripciones</p>
            <p><small> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime, odit ea. Exercitationem quia perspiciatis optio illo. </small></p>
        </div>
    </el-col>
    <el-col :span="5">
        <div class="ml-4 grid-content bg-purple mb-2">
            <h5 class="mt-2">Habilidades</h5>
            <div class="hability-tag mt-5">
                <el-tag class="mb-2" type="success">VueJS</el-tag>
                <el-tag class="mb-2">CSS</el-tag>
                <el-tag class="mb-2" type="warning">JS</el-tag>
                <el-tag class="mb-2" type="danger">Laravel</el-tag>
            </div>
        </div>
    </el-col>
    <el-col span="12" class="mb-3 mt-2">
      <el-row type="flex" class="" justify="end">
        <el-col :span="26">
          <p><b>Valoracion</b></p>
            <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="">
            </el-rate> 
        </el-col>

        <el-col :span="2" class="ml-4">
        <el-button type="primary" class="btn-nav contact-button" round>Contáctame</el-button>
        </el-col>
      </el-row>
    </el-col>
  
    </el-card>
        </el-row>

    <el-row type="flex" class="" justify="space-around">
        <el-col :span="24" class="mt-4">
            <el-card class="box-card-habilities">
        <el-col :span="22">
            <div class="grid-content bg-purple mb-2">
                <h5 class="mt-2 ml-4">Proyectos Realizados</h5>
                <div class="hability-tag mt-3 mb-4">
                    <el-row type="flex" justify="start">
                        <el-col span="10" class="ml-5">
                            <el-card shadow="hover">
                                <slot>
                                    <img src="@/assets/logo.png" height="45px">
                                    <h6 class="mt-2">Punto de Venta</h6>
                                </slot>
                            </el-card>
                        </el-col>
                        <el-col span="10" class="ml-5">
                            <el-card shadow="hover">
                                <slot>
                                    <img src="@/assets/logo.png" height="45px">
                                    <h6 class="mt-2">Maquetacion Sitio Web</h6>
                                </slot>
                            </el-card>
                        </el-col>
                        <el-col span="10" class="ml-5">
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
            <img class="" src="@/assets/img/imglogin.svg" height="425px">
            </slot>
        </div>
    </el-col>    
</el-row>


</div>

</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      city: null,
      value5: 3.7
    };
  }
};
</script>
<style scope>
.freelancer-image {
    padding: 10px 0;
    margin-right: 10px;
    border-radius: 40px;
    height: 125px;
}
.contact-button {
  margin-left: 75px;
}
.box-card {
  width: 95%;
}
.box-card-habilities{
    width: 95%;
}
h6 {
  color: #808695;
  font-family: "Roboto", sans-serif;
}
.btn-nav {
  background: #5a75e6;
  color: #fff;
  border: none;
  font-family: "Roboto", sans-serif;
}
</style>


