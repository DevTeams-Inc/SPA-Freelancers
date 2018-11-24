<template>
    <div class="container-dataCategories">
        <h4>Categorias existentes</h4>
             <div class="table-categories">
                 <el-table empty-text="No se encontraron resultados" height="280" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  style="width: 98%;margin-left:10px;;">
                     <el-table-column  label="Nombre" prop="date"> </el-table-column>
                     <el-table-column  label="Descripcion"  prop="name"></el-table-column>

                     <el-table-column  align="right">
                          <template slot="header" slot-scope="scope">
                               <el-input   v-model="search"   size="mini"  placeholder="buscar"/>
                          </template>

                          <template slot-scope="scope">
                              <el-button size="mini" @click="dialogFormEditarVisible=true">editar</el-button>
                              <el-button  size="mini"  type="danger"  @click="dialogFormEliminarVisible=true">Eliminar</el-button>
                          </template>
                     </el-table-column>
                  </el-table>
               
                   <el-dialog title="Editar Categoria" :visible.sync="dialogFormEditarVisible">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                            <el-form-item prop="nombreCategoria">
                               <el-input   v-model="ruleForm.nombreCategoria"   placeholder="Nombre de la categoria"   size="medium">
                               </el-input>
                             </el-form-item>
                            <el-form-item prop="descripcionCategoria">
                                 <el-input  v-model="ruleForm.descripcionCategoria"  placeholder="Descripcion de la categoria"  size="medium"  type="textarea">
                                 </el-input>
                            </el-form-item>
                            <el-form-item prop="iconoCategoria">
                               <el-input  v-model="ruleForm.iconoCategoria"  placeholder="icono de la categoria"  size="medium">
                               </el-input>
                             </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormEditarVisible = false">Cancel</el-button>
                          <el-button @click="submitForm('ruleForm')" type="primary">Guardar Cambios</el-button>
                        </span>
                 </el-dialog>
                 <el-dialog title="Realmente deseas eliminar esta categoria?" :visible.sync="dialogFormEliminarVisible">
                    <el-button @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button @click="submitForm('ruleForm')" type="primary">Si</el-button>
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
      background-color: #fce8e8;
        border-radius: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
      background-color:rgb(245, 108, 108);
      	border-radius: 10px;

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
        tableData: [
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, 
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, 
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, 
        {
          date: '2016-05-04',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-01',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-03',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles',
        }],
        search: '',
        ruleForm:{
            nombreCategoria:null,
            descripcionCategoria:null,
            iconoCategoria:null,
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>