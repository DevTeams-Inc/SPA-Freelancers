<template>
    <div class="container-dataProyects">
         <h4>Proyectos publicados</h4>
         <div class="table-proyects">
               <el-table empty-text="No se encontraron resultados" height="280" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  style="width: 98%;margin-left:10px;;">
                  <el-table-column label="Date" prop="date"></el-table-column>
                  <el-table-column  label="Name"  prop="name"> </el-table-column>
                  <el-table-column  label="Name"  prop="name"> </el-table-column>
                  <el-table-column  label="Name"  prop="name"> </el-table-column>
         
                  <el-table-column align="right">
                    <template slot="header" slot-scope="scope">
                      <el-input v-model="search" size="mini" placeholder="buscar"/>
                    </template>
                    <template slot-scope="scope">
                     <div class="botones-table">
                      <el-button  size="mini" @click="dialogFormOcultarVisible=true">Ocultar</el-button>
                      <el-button size="mini" type="danger" @click="dialogFormEliminarVisible=true">Eliminar</el-button>
                     </div>
                    </template>
                  </el-table-column>
              </el-table>
              <div class="DialogInterative">
                <!-- Dialogo de eliminar -->
                 <el-dialog title="Realmente deseas ocultar este proyecto?" :visible.sync="dialogFormOcultarVisible">
                   <div class="botones-dialog">
                    <el-button  id="botonesDialog" @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button   id="botonesDialog" @click="submitForm('ruleForm')" type="primary">Si</el-button>
                   </div>
                 </el-dialog>
                   <!-- dialogo de Ocultar -->
                 <el-dialog title="Realmente deseas eliminar este proyecto?" :visible.sync="dialogFormEliminarVisible">
                   <div class="botones-dialog">
                    <el-button  id="botonesDialog" @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button  id="botonesDialog" @click="submitForm('ruleForm')" type="primary">Si</el-button>
                   </div>
                 </el-dialog>
              </div>
         </div>
   </div>
</template>
<style>
.container-dataProyects{
margin-top:20px; 
}
.container-dataProyects h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.table-proyects{
    background-color: white;
    border-radius: 5px;
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
.botones-table{
  display: flex;

}
.botones-dialog{
  display: flex;

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
        dialogFormEliminarVisible:false,
        dialogFormOcultarVisible:false,
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
        search: ''
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