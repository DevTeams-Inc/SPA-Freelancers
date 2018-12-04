<template>
    <div class="container-MiniPerfil">
          <div class="miniPerfil">
             <div class="topMiniPerfil">
                <div class="leftTop-MiniPerfil">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" height="100px" src="@/assets/pic2.jpeg" />
                    </div>
                    <div class="rating-mini">
                         <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
                    </div>
                    <div class="ciudad-mini">
                          <div class="icon-trofeo"></div>
                          <a href=""><h4>Republica Dominicana</h4></a>
                     </div>
                    <div class="category-Mini">
                          <a href=""><h4>Medicina</h4></a>
                     </div>
                    <div class="contact-Mini">
                        <h4> <i style="padding-right:5px;" class="el-icon-phone-outline"></i> </h4><p >80952105204</p>
                        <h4><i style="padding-right:10px;" class="fas fa-language"></i></h4><p>Español</p>
                     </div>
                    
                </div>

                <div class="rightTop-MiniPerfil">
                   <div class="texto-mini">
                        <h4>Lony S. Mejia Ramirez</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non sequi provident veniam, eos ex blanditiis eveniet quidem,
                         ea aut at libero? Natus facilis blanditiis possimus vitae aut saepe laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima atque delectus obcaecati similique laborum impedit hic consequuntu.
                        </p>
                   </div>
                </div>
             </div>
             <div class="bottomMiniPerfil">
                <div class="skills-MiniPerfil">
                      <h4>Habilidades</h4>
                      <el-tag size="mini" closable><a href=""> Doctor </a></el-tag>
                      <el-tag size="mini" closable><a href=""> Doctor </a></el-tag>
                      <el-tag size="mini" closable><a href=""> Doctor </a></el-tag>
                </div>
                <div class="contactar-MiniPerfil">
           
                       <el-button style="width:45px;margin-left:90px;" type="secondary" icon="el-icon-edit" circle></el-button>
                        <!-- <el-button  style="margin-left:90px;" type="primary">Contactar</el-button>  -->
                </div>
             </div>
          </div>
          <div class="priceHour">
              <div class="price">
                   <h4>Precio Hora:</h4>
                   <p>500.00</p>
              </div>
              <div class="icono-price">
                <p>$</p>
              </div>
          </div>
            <div class="componenteUbicacion">
               <h4>Ubicacion</h4>
               <!-- aqui va el componente -->
           </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style >
.container-MiniPerfil{
    margin-top:20px; 

}
.miniPerfil{
     position: relative;
     height: 300px;
     background-color: white;
     padding: 20px;
}

.priceHour{
     margin-top: 20px;
     background-color: white;
     display: flex;
}
.contact-Mini{
     display: flex;
     color: #409eff;;
}
.contact-Mini h4{
 font-size: 15px;
padding-left: 20px;
}
.contact-Mini p{
 font-size: 12.7px;
}
.price{
     padding-top: 15px;
     text-align: left;
     padding-left: 15px;
     width: 92%;
;
     display: flex; 
}
.price p{
     font-size: 15px;
     margin-left:10px;
}
.price h4{
     font-size: 17px;
    color: rgb(104, 104, 104);
}
.icono-price{
     width: 3.5%;
}
.icono-price p{ 
  color: white;   
  background-color: #409eff;
  height: 25px;
  border-radius:50%;;  margin-top: 13px;}
.topMiniPerfil{
     display: flex;
}
.leftTop-MiniPerfil{
        width: 30%;
}
/* ------ */
.img-pic-freelancer{
 border-radius:100%;
 width: 100px;
}
.ciudad-mini{
     margin-top: 5px;
}
.ciudad-mini h4 {
     font-size:15px; 
}
.category-Mini h4{
     font-size: 15px;
}


.rightTop-MiniPerfil{
     width: 70%;

}
.rightTop-MiniPerfil .texto-mini {
     text-align: left;
     font-size:13px; 
     margin-top: 20px;
}
.texto-mini p{
     width: 100%;
     text-align: justify;
     padding-right: 5px;
     color: rgb(97, 97, 97);
}
.texto-mini h4{
     font-size:17px; 
}

.bottomMiniPerfil{
     display: flex;
     border-top:1px solid rgb(241, 241, 241); 
     padding-top: 10px;
}
.skills-MiniPerfil{
     text-align: left;
     width: 80%;
}
.skills-MiniPerfil h4{font-size: 17px;color: rgb(128, 128, 128);}
.contactar-MiniPerfil{
     display: flex;
 margin-top:7px; 
}

.componenteUbicacion{
    padding-top:10px; 
    padding-left: 15px;
    margin-top: 20px;
    background-color: white;
    height: 200px;
    border: 1px solid rgb(246, 246, 246);
}
.componenteUbicacion h4{
    font-size: 17px;
    text-align: left;
    color: rgb(104, 104, 104);
}

</style>
