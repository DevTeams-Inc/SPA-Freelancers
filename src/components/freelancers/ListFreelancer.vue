<template>
    <div class="containerListaFreelancer">
        <div class="Item-Freelancer">

            <div class="top-Item-Freelancer">
                <div class="top-left-item-Freelancer">
                   <div class="texto-freelancer">
                       <a href=""><h2>Lony S. Mejia Ramirez</h2></a>
                        <div class="frase"><p>Contactame Puto!!</p></div>
                        <div class="descripcionMini-Freelancer">
                          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae quam delectus aperiam
                             consectetur veniam enim autem distinctio adipisci magni voluptates nostrum incidunt modi repellendus,
                             ullam natus? A, soluta qui?
                        </P>
                        </div>
                   </div>

                   <div class="botones-Freelancer">
                         <el-button type="primary"  id="boton-freelancer">Contratar</el-button>
                         <el-button type="secondary" id="boton-freelancer" >Ubicacion</el-button>
                   </div>

                </div>
                <div class="top-right-item-Freelancer">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" src="@/assets/pic2.jpeg" />
                    </div>
                    <div class="rating">
                         <el-rate id="rating-star" v-model="ratingFreelancer" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
                    </div>
                    <div class="trofeoANDciudad">
                          <div class="icon-trofeo"></div>
                          <a href=""><h4>Rep. Dom.</h4></a>
                     </div>
                </div>
            </div>

            <div class="bottom-Item-Freelancer">
                <div class="skills">
                    <h4>Habilidades</h4>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                </div>
                <div class="pricehour">
                    <h4 >Precio por Hora</h4>
                    <h4>$500.00</h4>
                </div>
            </div>
        </div>

    <!-- Item de prueba -->
        <div class="Item-Freelancer">

            <div class="top-Item-Freelancer">
                <div class="top-left-item-Freelancer">
                   <div class="texto-freelancer">
                       <a href=""><h2>Lony S. Mejia Ramirez</h2></a>
                        <div class="frase"><p>Contactame Puto!!</p></div>
                        <div class="descripcionMini-Freelancer">
                          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae quam delectus aperiam
                             consectetur veniam enim autem distinctio adipisci magni voluptates nostrum incidunt modi repellendus,
                             ullam natus? A, soluta qui?
                        </P>
                        </div>
                   </div>

                   <div class="botones-Freelancer">
                         <el-button type="primary"  id="boton-freelancer">Contratar</el-button>
                         <el-button type="secondary" id="boton-freelancer" >Ubicacion</el-button>
                   </div>

                </div>
                <div class="top-right-item-Freelancer">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" src="@/assets/pic2.jpeg" />
                    </div>
                    <div class="rating">
                         <el-rate id="rating-star" v-model="ratingFreelancer" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
                    </div>
                    <div class="trofeoANDciudad">
                          <div class="icon-trofeo"></div>
                          <a href=""><h4>Rep. Dom.</h4></a>
                     </div>
                </div>
            </div>

            <div class="bottom-Item-Freelancer">
                <div class="skills">
                    <h4>Habilidades</h4>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                    <el-tag size="mini"><a href="">habilidad 1</a></el-tag>
                </div>
                <div class="pricehour">
                    <h4 >Precio por Hora</h4>
                    <h4>$500.00</h4>
                </div>
            </div>
        </div>
        <!-- Item de prueba -->
    </div>
</template>
<style>
.containerListaFreelancer
{
    width: 70%;
   
      /* background-color: blueviolet; */
}
.Item-Freelancer:nth-child(1)
{
   margin-top: 0px;
}
.Item-Freelancer
{
    /* background-color: azure; */
    background: white;
    border-radius:2px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin-top: 20px;
    margin-left: 30px;

}
.top-Item-Freelancer{
    width: 100%;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(240, 240, 240);
    /* background-color: blue; */
}
.top-left-item-Freelancer
{
   width: 80%;
   text-align: left;
   /* background-color: brown; */
}
.texto-freelancer h2{
 font-size:20px; 
}
.frase p
{
 font-size: 15px;
 color:gray;
}
.descripcionMini-Freelancer p{
text-align: justify;
width: 90%;
font-size: 15px;
}
.botones-Freelancer{
    display: flex;
    width: 50%;
    /* background-color: bisque; */
}
.top-right-item-Freelancer{
  width: 20%;
  /* background-color: cadetblue; */
}
.container-pic-freelancer{
  
    
}
.img-pic-freelancer{
 border-radius:100%;
 width: 100px;
 
}
.bottom-Item-Freelancer{
    display: flex;

}
.skills{
      width: 80%;
      padding: 15px;
     display: flex;
}
.skills a{
  margin-left: 10px;
  margin-bottom:-5px; 
  font-size: 12px;
}
.skills a:hover{
    text-decoration: none;
}
.el-tag{
    margin-left: 5px;
    border-radius:300px; 
}
.pricehour {
    width: 20%;
   
}
.pricehour h4{
     font-size: 14px;  
     margin-top:5px; 
 
}
.pricehour h4:nth-child(1){
    color: #304ab3;
}
.pricehour h4:nth-child(2){
    color: #10df90;
}


/* Media queries */
@media (min-width: 1106px) and (max-width: 1320px)
 {
.descripcionMini-Freelancer p{
width: 100%;
font-size: 14px;
}
 }
 @media (max-width: 1105px)
{
.descripcionMini-Freelancer p{
  
width: 95%;
font-size: 12px;
}
#boton-freelancer{
   font-size: 12px;
   height: 35px;
}
.skills h4{
  font-size:14px; 
}

#rating-star{
 width: 120px;
}
}

@media  (max-width: 929px) {
   .containerListaFreelancer{
    width: 100%;

   }
   .Item-Freelancer{
       margin-left: 0px;
   }
 #rating-star{
 width: 130px;
}
 }

 @media (max-width: 669px) {

.Item-Proyect
{
  margin-left: 0px;
  height: auto;

}
.top-Item-Freelancer{

    flex-direction: column-reverse;
}
.top-right-item-Freelancer{
    width: 100%;
}
.top-left-item-Freelancer{
    width: 100%;
}
.top-left-item-Freelancer h2{
  text-align: center;
}


 #rating-star{
 width: 100%;

}
.skills{
    display: none;
}
.pricehour {
    text-align: center;
    width: 100%;

}
.botones-Freelancer{
    width: 100%;
}
#boton-freelancer{
width: 50%;
}
}
</style>


<script>
export default {
    data(){
        return{
            ratingFreelancer:4.5,
        }
    }
}
</script>
