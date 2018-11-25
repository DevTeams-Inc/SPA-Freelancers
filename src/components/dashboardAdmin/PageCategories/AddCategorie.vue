<template>
    <div class="container-AddCategories">
         <h4>Agregar categoria</h4>
         <div class="item-Addcategorie">
             <a @click="dialogFormVisible=true" class="add-icon"><i class="el-icon-plus"></i></a>
             <el-dialog title="Agregar Categoria" :visible.sync="dialogFormVisible">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                      <el-form-item prop="nombreCategoria">
                         <el-input
                            v-model="ruleForm.nombreCategoria"
                            placeholder="Nombre de la categoria"
                            size="medium">
                         </el-input>
                       </el-form-item>
                      <el-form-item prop="descripcionCategoria">
                         <el-input
                            v-model="ruleForm.descripcionCategoria"
                            placeholder="Descripcion de la categoria"
                            size="medium"  type="textarea">
                         </el-input>
                       </el-form-item>
                      <el-form-item prop="iconoCategoria">
                         <el-input
                            v-model="ruleForm.iconoCategoria"
                            placeholder="icono de la categoria"
                            size="medium">
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
.container-AddCategories{
    margin-top:20px; 
    width: 20%;
    min-width: 200px;
    margin-left: 2%;

}
.container-AddCategories h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.item-Addcategorie{
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
                nombreCategoria:null,
                descripcionCategoria:null,
                iconoCategoria:null
            },
            rules:{
                nombreCategoria:{required:true,message:"nombre categoria",trigger:"blur"},
                descripcionCategoria:{required:true,message:"descripcion categoria",trigger:"blur"},
                iconoCategoria:{required:true,message:"icono categoria",trigger:"blur"}
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


