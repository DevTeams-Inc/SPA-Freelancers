<template>
    <div class="container-AddHabilidad">
         <h4>Agregar habilidad</h4>
         <div class="item-Addhabilidad">
             <a @click="dialogFormVisible=true" class="add-icon"><i class="el-icon-plus"></i></a>
             <el-dialog title="Agregar Habilidad" :visible.sync="dialogFormVisible">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                      <el-form-item prop="nombreHabilidad">
                         <el-input
                            v-model="ruleForm.nombreHabilidad"
                            placeholder="Nombre de la habilidad"
                            size="medium">
                         </el-input>
                       </el-form-item>
                      <el-form-item prop="descripcionHabilidad">
                         <el-input
                            v-model="ruleForm.descripcionHabilidad"
                            placeholder="Descripcion de la habilidad"
                            size="medium"  type="textarea">
                         </el-input>
                       </el-form-item> 
               </el-form>
            <span slot="footer" class="dialog-footer">
              <div class="botones-dialog">
               <el-button id="botonesDialog" @click="dialogFormVisible = false">Cancel</el-button>
               <el-button id="botonesDialog" @click="submitForm('ruleForm')" type="primary">Agregar</el-button>
              </div>
            </span>
           </el-dialog>
         </div>
    </div>
</template>
<style>
.container-AddHabilidad{
    margin-top:20px; 
    width: 20%;
    min-width: 200px;
    margin-left: 2%;

}
.container-AddHabilidad h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.item-Addhabilidad{
   background-color: white;
   border-radius:5px; 
   height: 278px;;
   
}
.add-icon{
    cursor: pointer;
}
.add-icon i{
    margin-top: 100px;
    font-size: 30px;
    color:white;
    background-color:  rgb(245, 108, 108);
    border-radius:100%; 
    padding: 10px;
}
.add-icon i:hover{
    background-color:rgb(235, 149, 149)
}
.botones-dialog{
  display: flex;
  width: 100%;
}
#botonesDialog{
  width: 100%;
}
</style>
<script>
export default {
     data(){
         return{
            dialogFormVisible: false,
            ruleForm:{
                nombreHabilidad:null,
                descripcionHabilidad:null,
            },
            rules:{
                nombreHabilidad:{required:true,message:"nombre habilidad",trigger:"blur"},
                descripcionHabilidad:{required:true,message:"descripcion habilidad",trigger:"blur"}
            }
         }
     },
     methods:{
       submitForm(formName){
         this.$refs[formName].validate((valid) => {
           if (valid) {
               //si el proceso se completa correctamente

               this.dialogFormVisible=false;
            }else { return false;}
        });
     }
}
}
</script>


