<template>
    <div class="container-dataFreelancers">
         <h4>Freelancers registrados</h4>
         <div class="table-freelancers">
             <el-table empty-text="No se encontraron resultados" height="280" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  v-loading="loading" style="width: 98%;margin-left:10px;;">
                 <el-table-column label="Nombre" prop="name"> </el-table-column>
                 <el-table-column label="Apellido" prop="lastName"> </el-table-column>
                 <el-table-column label="Email" prop="email"> </el-table-column>
                 <el-table-column  align="right">
                 <template slot="header" slot-scope="scope">
                     <el-input v-model="search" size="mini" placeholder="buscar"/>
                 </template>
                 <template slot-scope="scope">
                   <div class="botones-table">
                     <el-button  size="mini"  @click="dialogFormBloquearVisible=true">Bloquear</el-button>
                     <el-button size="mini" type="danger"  @click="dialogFormEliminarVisible=true,id=scope.row.freelancerId">Eliminar</el-button>
                   </div>
                  </template>
                 </el-table-column>
               </el-table> 
               <div class="DialogInterative">
                <!-- Dialogo de ocultar -->
                 <el-dialog title="Realmente deseas bloquear este freelancer?" :visible.sync="dialogFormBloquearVisible">
                    <div class="botones-dialog">
                     <el-button  id="botonesDialog" @click="dialogFormBloquearVisible = false">No</el-button>
                     <el-button  id="botonesDialog" @click="submitForm('ruleForm')" type="primary">Si</el-button>
                    </div>
                 </el-dialog>
                   <!-- dialogo de Eliminar -->
                 <el-dialog title="Realmente deseas eliminar este freelancer?" :visible.sync="dialogFormEliminarVisible">
                   <div class="botones-dialog">
                    <el-button id="botonesDialog" @click="dialogFormEliminarVisible = false">No</el-button>
                    <el-button id="botonesDialog" @click="dialogFormEliminarVisible = false, remove()" type="primary">Si</el-button>
                   </div>
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
        background-color: #f5f5f5;
        border-radius: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {

      background-color: rgb(226, 226, 226);
      	border-radius: 10px;

} 

.botones-table{
  display: flex;

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
        dialogFormBloquearVisible:false,
        dialogFormEliminarVisible:false,
        id:0,
        tableData: [],
        search: '',
        loading:false,
      }
    },
    
    mounted (){

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
      this.loading=true;
      self.$store.state.services.freelancerService
        .getAdmin()
        .then(r => {
          self.tableData = r.data;
          this.loading=false;
  
        })


     },
     remove(){
       let self =this;
      this.loading=true;
       self.$store.state.services.freelancerService
       .remove(self.id)
       .then(r=>{
         self.$notify({
           title:"Eliminado",
           message:"Se ha eliminado el freelancer",
           type:"success"
         });
         this.loading=false;
         self.getAll()
       })
       .catch(e=>{
         self.$notify({
           title:"Error",
           message:"No se ha podido eliminar el freelancer",
           type:"Error"
         });
       });
     }
    },


     
  }
</script>