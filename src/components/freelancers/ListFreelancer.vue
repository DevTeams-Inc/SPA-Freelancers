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
                         <el-button type="primary" >Contratar</el-button>
                         <el-button type="secondary" >Ubicacion</el-button>
                   </div>

                </div>
                <div class="top-right-item-Freelancer">
                    <div class="container-pic-freelancer" >
                         <img class="img-pic-freelancer" src="@/assets/logo.png" />
                    </div>
                    <div class="rating">
                         <el-rate v-model="ratingFreelancer" disabled  show-score text-color="#ff9900" score-template="" ></el-rate>
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
                    <a>habilidad 1</a>
                    <a>habilidad 1</a>
                    <a>habilidad 1</a>
                    <a>habilidad 1</a>
                </div>
                <div class="pricehour">
                    <h4 >Precio por Hora</h4>
                    <h4>$500.00</h4>
                </div>
            </div>
        </div>
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
    width: 90%;
    background-color: rgb(124, 82, 31);
     border-radius:100%;
}
.img-pic-freelancer{
    width: 100%;
    background-color: aliceblue;
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
