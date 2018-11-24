<template>
    <div class="menu-Dashboard">
         <div class="top-Menu">
             <div class="container-pic-admin"><img class="pic-admin" src="@/assets/pic2.jpeg" alt=""></div>
             <div class="date-admin">
                  <h4>Lony Stewart</h4>
                   <P>admin</P>
                   <a href=""><h4 class="a-perfil" style="font-size:11px;">Actualizar Perfil</h4></a>
              </div>
          </div>
          <div class="bottom-Menu">
              <div class="nav-nenu-dashboard-admin">
                   <nav>
                       <ul>
                           <a @click="$router.push('/dashboardAdmin/inicio')"><li>Inicio</li></a>
                           <a @click="$router.push('/dashboardAdmin/proyectos')"><li>Proyectos</li></a>
                           <a @click="$router.push('/dashboardAdmin/freelancers')" ><li>Freelancers</li></a>
                           <a @click="$router.push('/dashboardAdmin/categorias')"><li>Categorias</li></a>
                           <a @click="$router.push('/dashboardAdmin/reportes')" ><li>Reportes</li></a>
                           <a @click="$router.push('/dashboardAdmin/proyectos')" ><li>Configuracion</li></a>
                       </ul>
                   </nav>
              </div>
          </div>
    </div>
</template>

<style>
.menu-Dashboard{
position: fixed;
width: 280px;
background-color: #304ab3;
padding-top:30px;
padding-bottom: 30px;
height: 100%;;
}
/* Este clase existe por alguna emergencia de estilo */
.top-Menu{
   
}
/* ------ */
.pic-admin{
 border-radius:100%;
 width: 100px;
}

.date-admin h4{
 font-size:15px; 
 color: white;
 margin: 0;
}
.date-admin p{
 color:rgb(107, 204,249);
 font-size:10px; 
 margin: 0;
}
.date-admin a{
text-decoration: none;
}
.a-perfil{
    border: 1px solid rgb(107, 204,249);  
    display: inline;
    padding: 5px;
    border-radius:150px; 
    text-decoration: none;
}
.a-perfil:hover{
background:white; 
border: none;  
text-decoration: none;
color:#304ab3;
}

.bottom-Menu{

    margin-top: 20px;
    width: 100%;
}
.nav-nenu-dashboard-admin{
   
}
.nav-nenu-dashboard-admin nav ul {
padding: 0;
margin: 0;
}
.nav-nenu-dashboard-admin nav ul a{
text-decoration: none;
cursor: pointer;
}

.nav-nenu-dashboard-admin nav ul li{
    color: white;
    list-style: none;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  
}
.nav-nenu-dashboard-admin nav ul li:hover{
  background-color: #142e95;
  transition: all 0.5s ease;
}

@media (max-width: 1258px){
.menu-Dashboard{
    width: 200px;
}
}
</style>

<script>
export default {
    
}
</script>

