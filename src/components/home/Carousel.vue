<template>

        <div class="mt-5" height="600px">
        <div class="row justify-content-around">
            <div class="col mt-5">
                <div class="title" >
                            <h1>Eslogan de la pagina web</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Nesciunt dolorem similique reiciendis voluptatibus molestiae. 
                            Reiciendis eveniet dolores placeat nihil fugiat esse officia ab, 
                            deserunt similique quod illo eum nemo repellat.</p>
                            <button class="btn btn-primary btn-search">Buscar Freelancers</button>
                    </div>
            </div>
            <div class="col">
            <img class="img-carousel" src="@/assets/img/3.svg" alt="" width="685px">               
            </div>
        </div>
         </div>
</template>

<script>
export default {
  name: "Carousel",
  date() {
    return {};
  }
};
</script>

<style>
.el-carousel__item  {
  color: #80869b;
}

.title{
    margin-top: 100px;
}

@media only screen and (max-width: 600px) {
    .title {
        margin-top: -50px;
    }
    .img-carousel {
        margin-top: 50px;
        width: 300px;
    }
}
.btn-search{
    border: none;
    outline: none;
}
.btn-search:hover{
    background: #4960bb;

}
</style>
