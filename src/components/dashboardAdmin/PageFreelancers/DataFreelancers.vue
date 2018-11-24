<template>
    <div class="container-dataFreelancers">
         <h4>Freelancers registrados</h4>
         <div class="table-freelancers">
             <el-table empty-text="No se encontraron resultados" height="280" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  style="width: 98%;margin-left:10px;;">
                 <el-table-column label="Date" prop="date">
                 </el-table-column>
                 <el-table-column label="Name" prop="name">
                 </el-table-column>
                 <el-table-column  align="right">
                 <template slot="header" slot-scope="scope">
                     <el-input v-model="search" size="mini" placeholder="buscar"/>
                 </template>
                 <template slot-scope="scope">
                     <el-button  size="mini"  @click="dialogFormBloquearVisible=true">Bloquear</el-button>
                     <el-button size="mini" type="danger"  @click="dialogFormEliminarVisible=true">Eliminar</el-button>
                  </template>
                 </el-table-column>
               </el-table>
               <div class="DialogInterative">
                <!-- Dialogo de eliminar -->
                 <el-dialog title="Realmente deseas bloquear este freelancer?" :visible.sync="dialogFormBloquearVisible">
                    <el-button @click="dialogFormBloquearVisible = false">No</el-button>
                    <el-button @click="submitForm('ruleForm')" type="primary">Si</el-button>
                 </el-dialog>
                   <!-- dialogo de Ocultar -->
                 <el-dialog title="Realmente deseas eliminar este freelancer?" :visible.sync="dialogFormEliminarVisible">
                    <el-button @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button @click="submitForm('ruleForm')" type="primary">Si</el-button>
                 </el-dialog>
              </div>
          </div>
     </div>
</template>
<style>
.container-dataFreelancers{
margin-top:20px; 
}
.container-dataFreelancers h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.table-freelancers{
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
        dialogFormBloquearVisible:false,
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