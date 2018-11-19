<template>
  <div class="content-admin-Index">
       <div class="container-cont">
          <div class="item-cont">
             <h4>Proyectos publicados</h4>
             <i class="fas fa-rocket fa-2x" style="margin-top:12px;"></i><br><br>
             <span>5000</span>
          </div>
          <div class="item-cont">
              <h4>Freelancers Registrados</h4>
              <i class="fas fa-user-tie fa-2x" style="margin-top:12px;"></i><br><br>
              <span>5000</span>
          </div>
          <div class="item-cont">
            <h4>Reportes hechos</h4>
           <i class="fas fa-flag fa-2x" style="margin-top:12px;"></i><br><br>
            <span>5000</span>
          </div>
       </div>
       <div class="container-categoriesTop">
          <h4>Categorias Populares</h4>
         <div class="item-categories">
         
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
          <div class="item-categorie-top">
              <span>Icon</span>
              <p>Categoria 1</p>
          </div>
       </div>
       </div>
       <div class="reports">
          <h4>Reportes Recientes</h4>
          <el-table :data="tableData"  border style="width: 88%; margin-left:8%;">
             <el-table-column prop="date" label="Fecha"  width="180"> 
             </el-table-column>
             <el-table-column  prop="name"  label="Nombre"  width="180">
             </el-table-column>
             <el-table-column   prop="address"  label="Dirección">
             </el-table-column>
          </el-table>
       </div>
  </div>
</template>

<style>
.content-admin-Index{
 margin-top: 20px;
 width: 75%;
 padding-bottom:20px; 
 margin-left: 22%;
  
}
.container-cont{
  display: flex;
  justify-content: center;
}
.item-cont{
  width: 250px;;
  background-color: white;
  height: 150px;
  background: white;
  border-radius:2px; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding-top:10px; 
  margin-left: 30px;
  cursor: pointer;

}
.item-cont h4{
  font-size: 15px;
  color: gray;
}
.item-cont i{
background: #36D1DC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5B86E5, rgb(18, 103, 173));  
background: linear-gradient(to right,  #5B86E5, rgb(18, 103, 173));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.container-categoriesTop{
  margin-top: 40px;
  
}
.item-categories{
    display: flex;
    justify-content: center; 
}
.container-categoriesTop h4{
   margin-right: 67%;
  font-size: 15px;
  color:gray;
}
.item-categorie-top{
margin-top:20px; 
background-color:white;
width: 100px;
margin-left: 8px;
height: 100px;
border-radius: 100%;
  
}

.reports{
background-color:white;
 margin-top: 40px;
width: 85.4%;
position: relative;
left: 9.7%;
border-radius:2px; 
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
padding: 10px; 
}
.reports h4{
  text-align: left;
  font-size: 15px;
  color :gray;
}
</style>

<script>
  export default {
    data() {
      return {
      
      }
    }
  }
</script>