<template>
    <div class="container-RatingComents">
        <div class="ratingComents">
            <h4>Rating y comentarios</h4>
            <div style="display:flex;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" src="@/assets/pic2.jpeg" />
                </div>
                <div class="Info-Rating">
                      <h4>Lony S. Mejia Ramirez</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos facilis esse commodi fugiat" 
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
            <div style="display:flex;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" src="@/assets/pic2.jpeg" />
                </div>
                <div class="Info-Rating">
                      <h4>Lony S. Mejia Ramirez</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos facilis esse commodi fugiat" 
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
            <div style="display:flex;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" src="@/assets/pic2.jpeg" />
                </div>
                <div class="Info-Rating">
                      <h4>Lony S. Mejia Ramirez</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos facilis esse commodi fugiat" 
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
            <div style="display:flex;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" src="@/assets/pic2.jpeg" />
                </div>
                <div class="Info-Rating">
                      <h4>Lony S. Mejia Ramirez</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos facilis esse commodi fugiat" 
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
            <div style="display:flex;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" src="@/assets/pic2.jpeg" />
                </div>
                <div class="Info-Rating">
                      <h4>Lony S. Mejia Ramirez</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos facilis esse commodi fugiat" 
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style>
.container-RatingComents{
margin-top: 20px;
margin-left: 20px;
height: 230px;
background-color: blanchedalmond;
overflow-y: scroll;
}
.container-RatingComents::-webkit-scrollbar {
    width: 10px;
}
.container-RatingComents::-webkit-scrollbar-track {
        background-color: #f3f3f3;
  border-radius: 10px;
}
.container-RatingComents::-webkit-scrollbar-thumb {
        background-color: #8194e9;
  border-radius: 10px;
}

.ratingComents{
    background-color: white;
    padding: 10px;
    height: auto;
}
.ratingComents h4{
    text-align: left;
    font-size: 17px;
    color: #4764da;
}
.left-RatingComents{
    display: flex;
    width:70% ;
 
}
.right-RatingComents{
    width: 30%;;
}
.img-Rating{
    width: 100px;
}
.Info-Rating{

}
.Info-Rating h4{
    font-size: 12px;
}
.Info-Rating p{
    margin-top: -5px;
    font-size: 10px;
    width: 90%;
    text-align: justify;
}
</style>
