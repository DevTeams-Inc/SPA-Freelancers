<template>
    <div class="container-dataHabilidades">
        <h4>Habilidades existentes</h4>
             <div class="table-habilidades">
                 <el-table empty-text="No se encontraron resultados" height="280" :data="habilities.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"  style="width: 98%;margin-left:10px;;">
                     <el-table-column  label="Nombre" prop="title"> </el-table-column>
                     <el-table-column  label="Descripcion"  prop="description"></el-table-column>
                     <el-table-column  align="right">
                          <template slot="header" slot-scope="scope">
                               <el-input   v-model="search"   size="mini"  placeholder="buscar"/>
                          </template>
                          <template slot-scope="scope">
                            <div class="botones-table-habilidad" prop="id">
                              <el-button id="botonesDialog" size="mini" @click="dialogFormEditarVisible=true , id = scope.row.id , getById()">editar</el-button>
                              <el-button  id="botonesDialog" size="mini"  type="danger"  @click="dialogFormEliminarVisible=true , id = scope.row.id" >Eliminar</el-button>
                            </div>
                          </template>
                          
                     </el-table-column>
                  </el-table>
                    <el-dialog title="Realmente deseas eliminar esta habilidad?" :visible.sync="dialogFormEliminarVisible">
                   <div class="botones-dialog">
                    <el-button id="botonesDialog" @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button id="botonesDialog" @click="remove() , dialogFormEliminarVisible = false" type="primary">Si</el-button>
                   </div>
                 </el-dialog>
                   <el-dialog title="Editar Habilidad" :visible.sync="dialogFormEditarVisible">
                        <el-form :model="model" :rules="rules" ref="model">
                            <el-form-item prop="title">
                               <el-input   v-model="model.title"   placeholder="Nombre de la habilidad"   size="medium">
                               </el-input>
                             </el-form-item>
                            <el-form-item prop="description">
                                 <el-input  v-model="model.description"  placeholder="Descripcion de la habilidad"  size="medium"  type="textarea">
                                 </el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                          <div class="botones-dialog">
                            <el-button id="botonesDialog" @click="dialogFormEditarVisible = false">Cancel</el-button>
                            <el-button id="botonesDialog" @click="dialogFormEditarVisible = false ,edit('model')" type="primary">Guardar Cambios</el-button>
                          </div>
                        </span>
                 </el-dialog>
                      </div>
              </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormEditarVisible: false,
      dialogFormEliminarVisible: false,
      id: 0,
      habilities: [],
      search: "",
      model: {
        id: 0,
        title: null,
        description: null
      },
      rules: {
        title: {
          required: true,
          message: "nombre habilidad no puede estar vacio",
          trigger: "blur"
        }
      }
    };
  },
  mounted() {
    let self = this;
    self.getAll();
  },
  updated() {
    let self = this;
    self.getAll();
  },
  methods: {
    getAll() {
      let self = this;
      self.$store.state.services.habilityService
        .getAll()
        .then(r => {
          self.habilities = r.data;
        })
        .catch(e => {});
    },
    remove() {
      let self = this;
      self.$store.state.services.habilityService
        .remove(self.id)
        .then(r => {
          self.$notify({
            title: "Eliminado",
            message: "Se ha eliminado la habilidad",
            type: "success"
          });
        })
        .catch(e => {
          self.$notify({
            title: "Error",
            message: "No se ha podido eliminar la habilidad",
            type: "Error"
          });
        });
    },
    getById() {
      let self = this;
      self.$store.state.services.habilityService
        .getById(this.id)
        .then(r => {
          self.model.title = r.data.title;
          self.model.description = r.data.description;
          self.model.id = r.data.id;
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
          self.$store.state.services.habilityService
            .edit(self.model)
            .then(r => {
              self.$notify({
                title: "Exito",
                message: "Habilidad editada con exito",
                type: "success"
              });
            })
            .catch(e => {
              self.$notify({
                title: "Error",
                message: "No se ha podido editar la habilidad",
                type: "Error"
              });
            });
        }
      });
    }
  }
};
</script>
<style>
.container-dataHabilidades {
  margin-top: 20px;
  width: 70%;
}
.container-dataHabilidades h4 {
  text-align: left;
  font-size: 15px;
  color: gray;
}
.table-Habilidades {
  background-color: white;
  border-radius: 5px;
  width: 100%;
}
.el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-track {
  background-color: #fce8e8;
  border-radius: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: rgb(245, 108, 108);
  border-radius: 10px;
}
.botones-table-habilidad {
  display: flex;
  width: 100%;
}
.botones-dialog {
  display: flex;
  width: 100%;
}
#botonesDialog {
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
