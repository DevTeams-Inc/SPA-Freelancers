<template>
    <div class="container-dataCategories">
        <h4>Categorias existentes</h4>
             <div class="table-categories">
                 <el-table empty-text="No se encontraron resultados" height="280" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  style="width: 98%;margin-left:10px;">
                  <el-table-column label="Nombre" prop="name"></el-table-column>
                  <el-table-column  label="descripcion"  prop="descripcion"> </el-table-column>
                  <el-table-column  label="Icono"  prop="img"> </el-table-column>

                     <el-table-column  align="right">
                          <template slot="header" slot-scope="scope">
                               <el-input   v-model="search"   size="mini"  placeholder="buscar"/>
                          </template>

                          <template slot-scope="scope">
                            <div class="botones-table-categorie" prop="id">
                              <el-button id="botonesDialog" size="mini" @click="dialogFormEditarVisible=true, id = scope.row.id , getById()">editar</el-button>
                              <el-button  id="botonesDialog" size="mini"  type="danger"  @click="dialogFormEliminarVisible=true, id=scope.row.id">Eliminar</el-button>
                            </div>
                          </template>
                     </el-table-column>
                  </el-table>
               
                   <el-dialog title="Editar Categoria" :visible.sync="dialogFormEditarVisible">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                            <el-form-item prop="name">
                               <el-input   v-model="ruleForm.name"   placeholder="Nombre de la categoria"   size="medium">
                               </el-input>
                             </el-form-item>
                            <el-form-item prop="descripcion">
                                 <el-input  v-model="ruleForm.descripcion"  placeholder="descripcion de la categoria"  size="medium"  type="textarea">
                                 </el-input>
                            </el-form-item>
                            <el-form-item prop="img">
                               <el-input  v-model="ruleForm.img"  placeholder="icono de la categoria"  size="medium">
                               </el-input>
                             </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                          <div class="botones-dialog">
                            <el-button id="botonesDialog" @click="dialogFormEditarVisible = false">Cancel</el-button>
                            <el-button id="botonesDialog" @click=" edit('ruleForm') , dialogoFormEditarVisible=false" type="primary">Guardar Cambios</el-button>
                          </div>
                        </span>
                 </el-dialog>
                 <el-dialog title="Realmente deseas eliminar esta categoria?" :visible.sync="dialogFormEliminarVisible">
                   <div class="botones-dialog">
                    <el-button id="botonesDialog" @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button id="botonesDialog" @click="remove(), dialogFormEliminarVisible = false" type="primary">Si</el-button>
                   </div>
                 </el-dialog>
                 
                      </div>
              </div>
</template>
<style>
.container-dataCategories{
margin-top:20px; 
width: 70%;
}
.container-dataCategories h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.table-categories{
    background-color: white;
    border-radius: 5px;
    width: 100%;
}
.el-table__body-wrapper::-webkit-scrollbar {
      width: 10px;
	
      
}
.el-table__body-wrapper::-webkit-scrollbar-track{
      background-color: #f5f5f5;
        border-radius: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
      background-color: rgb(226, 226, 226);
      	border-radius: 10px;

} 
.botones-table-categorie{
  display: flex;  
  width: 100%;

}
.botones-dialog{
  display: flex;
  width: 100%;
}
#botonesDialog{
  width: 100%;
}

/* .el-table::-webkit-scrollbar-track {
      background-color: blue;
} 
.el-table::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
} 
.el-table::-webkit-scrollbar-button {
      background-color: navy;
}
.el-table::-webkit-scrollbar-corner {
      background-color: black;
} */
</style>

<script>
  export default {
    data() {
      return {
        dialogFormEditarVisible:false,
        dialogFormEliminarVisible:false,
              id: 0,
       tableData: [],
        search: '',



        ruleForm:{
            id: 0,
            name:null,
            descripcion:null,
            img:null,
        },   rules: {
          
          name: {
          required: true,
          message: "nombre categoria no puede estar vacio",
          trigger: "blur"
        },
            descripcion: {
          required: true,
          message: "descripcion categoria no puede estar vacio",
          trigger: "blur"
        },
           img: {
          required: true,
          message: "La imagen categoria no puede estar vacio",
          trigger: "blur"
        },
         

      }

      }
    },

    mounted (){

     this.getAll();  
      
      },
    
 beforeUpdate() {
    this.getAll();
  },


    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

      getAll() {
      let self = this;
      self.$store.state.services.categoryService
        .getAll()
        .then(r => {
          self.tableData = r.data;
       
    
        })
           },

      remove() {
      let self = this;
      self.$store.state.services.categoryService
        .remove(self.id)
        .then(r => {
          self.$notify({
            title: "Eliminado",
            message: "Se ha eliminado la categoria",
            type: "success"
          });
        })
        .catch(e => {
          self.$notify({
            title: "Error",
            message: "No se ha podido eliminar la categoria",
            type: "Error"
          });
        });
    },

     getById() {
      let self = this;
      self.$store.state.services.categoryService
        .getById(this.id)
        .then(r => {
                    
          self.ruleForm.id = r.data.id;
          self.ruleForm.name = r.data.name;
          self.ruleForm.descripcion = r.data.descripcion;
          self.ruleForm.img = r.data.img;
        })
        .catch(e => {
          console.log(e);
        });
    },

        edit(formName) {
      let self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let self = this;
          self.$store.state.services.categoryService
            .edit(self.ruleForm)
            .then(r => {
              self.$notify({
                title: "Exito",
                message: "Categoria editada con exito",
                type: "success"
              });
            })
            .catch(e => {
              self.$notify({
                title: "Error",
                message: "No se ha podido editar la categoria",
                type: "Error"
              });
            });
        }
      });
    }


    },
  }
</script>