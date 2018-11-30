<template>
    <div class="container-AddCategories">
         <h4>Agregar categoria</h4>
         <div class="item-Addcategorie">
             <a @click="dialogFormVisible=true" class="add-icon"><i class="el-icon-plus"></i></a>
             <el-dialog title="Agregar Categoria" :visible.sync="dialogFormVisible">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                      <el-form-item prop="name">
                         <el-input
                            v-model="ruleForm.name"
                            placeholder="Nombre de la categoria"
                            size="medium">
                         </el-input>
                       </el-form-item>
                      <el-form-item prop="Descripcion">
                         <el-input
                            v-model="ruleForm.Descripcion"
                            placeholder="Descripcion de la categoria"
                            size="medium"  type="textarea">
                         </el-input>
                       </el-form-item>
                      <el-form-item prop="Img">
                         <el-input
                            v-model="ruleForm.Img"
                            placeholder="icono de la categoria"
                            size="medium">
                         </el-input>
                       </el-form-item>
                
               </el-form>
            <span slot="footer" class="dialog-footer">
              <div class="botones-dialog">
               <el-button id="botonesDialog" @click="dialogFormVisible = false">Cancel</el-button>
               <el-button id="botonesDialog" @click="submitForm('rules')" type="primary">Agregar</el-button>
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
   background-color: rgb(226, 226, 226);
    border-radius:100%; 
    padding: 10px;
}
.add-icon i:hover{
  background-color: #7992f8;
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
                name:null,
               Descripcion:null,
                Img:null
            },
            rules:{
                name:{required:true,
                message:"nombre categoria",
                trigger:"blur"},

               Descripcion:{
                  required:true,
                  message:"descripcion categoria",
                  trigger:"blur"},
                  
                Img:{required:true,
                message:"icono categoria",
                trigger:"blur"}
            }
         }
      },

       updated() {
    let self = this;
    self.getAll();
  },

     methods:{
      submitForm(formName) {
      let self = this;
      self.$refs['ruleForm'].validate(valid => {
        if (valid) {
          self.$store.state.services.categoryService
            .add(self.ruleForm)
            .then(r => {
     
              self.$notify({
                title: "Exito",
                message: "Categoria registrada",
                type: "success"
              });
            })
            .catch(e => {
                self.$notify({
                title: "Error",
                message: "No se ha podido agregar la categoria",
                type: "Error"
              });
            });
          self.dialogFormVisible = false;
        } else {
          return false;
        }
      });
    },


    
}
}
</script>


