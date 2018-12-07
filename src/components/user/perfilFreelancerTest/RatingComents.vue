<template>
    <div class="container-RatingComents">
        <div class="ratingComents">
            <div class="dRating" style="display:flex;" v-loading="loading">
            <h4>Rating y comentarios</h4>
            <a  v-if="id !== UserId" class="btn-rating"  @click="dialogRatingVisible = true" style="cursor:pointer;" >Dar rating</a>
            </div>
            <div  v-for="(i,index) in rating_user" :key="index"   style="display:flex;margin-top:10px;">
            <div class="left-RatingComents">
                <div class="img-Rating">
                        <img class="img-pic-freelancer" style="width:50%;" :src="i.avatar" />
                </div>
                <div class="Info-Rating">
                      <h4>{{i.fullName}}</h4>
                      <p>{{i.coments}}
                      </p>
                </div>
            </div>
            <div class="right-RatingComents">
               <div class="rating-mini">
                 <el-rate id="rating-star" v-model="i.rating" disabled show-score text-color="#ff9900" score-template="" ></el-rate>
              </div>
            </div>
        </div>
        </div>
        <el-dialog title="Dar puntuacion a freelancer" :visible.sync="dialogRatingVisible">
           <el-form :model="formRating" :rules="rules" ref="formRating">
                 <el-form-item style="margin-top:-20px;" >
                  <span class="demonstration">Indicar Rating</span>
                   <el-rate v-model="value1"></el-rate>
                  </el-form-item>
                <el-form-item props="Coments"  >
               <el-input type="textarea"  autosize  placeholder="Recomendacion o comentario"  v-model="formRating.Coments"> </el-input>
             </el-form-item>
             <el-button type="secondary" @click="dialogRatingVisible = false">Cancelar</el-button>
             <el-button type="primary" @click="submitForm('formRating')">Dar rating</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { EventBus } from "../../../helpers/event-bus";
export default {
      props: ["id"],
    data(){
        return{
            dialogRatingVisible:false,
            value1:0,
            rate:1,
            rating_user:[],
            loading:false,
            formRating:{
                Coments:null,
            },
          rules: {
          Coments: 
          [  { required: true, message: 'Requiere un comentario', trigger: 'blur' }, ],
         },
            model:{
              ApplicationUserId:0,
              FreelancerId:0,  
              Rate:0,
              Comment:null
            },
            modelExist:{
               FreelancerId:0,
                UserId:0,
            }
            }
    },
    mounted(){
          
           EventBus.$on("idFrelancerLogeado", idf => {  
                this.model.FreelancerId=idf;
                this.getAllRating(idf);
                this.modelExist.FreelancerId=idf;
                this.modelExist.UserId=localStorage.getItem("user_id");
                this.exist(this.modelExist);
            }); 
    },
    computed:{
      UserId() {
         return localStorage.getItem("user_id");
       }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {  
            let  iduser= localStorage.getItem("user_id");
              this.model.ApplicationUserId=iduser;
              this.model.Comment= this.formRating.Coments;
              this.model.Rate=this.value1;
              this.addRating(this.model);  
              EventBus.$on("idFrelancerLogeado", idf => {  
               
                this.getAllRating(idf);
            });
            location.reload(); 
          } else {
       
            return false;
          }
        });
      },
        addRating(model){
              let self= this;
              self.$store.state.services.ratingService
              .add(model)
              .then(r => {
                      self.$notify({
                       title: "Rating",
                       message: "Se ha aplicado correctamente el rating",
                       type: "success"
                          });
                     this.value1='';
                     this.formRating.Coments=''; 
                     this.dialogRatingVisible=false;
                 })
              .catch(e => 
               {
                         self.$notify({
                       title: "Error",
                       message: "No se ha aplicado el rating",
                       type: "error"
                          });
               });
        },
        getAllRating(id){
            this.loading=true;
            let self =this;
            self.$store.state.services.ratingService.getAllRating(id)
            .then(r=>{
                this.rating_user=r.data;
               this.loading=false;
            })
    
        },
        exist(model){
           let self = this;
           self.$store.state.services.contactService.exist(model)
           .then(r=>{
               console.log(r.data)
           })
        }
    }
    
}
</script>

<style>
.container-RatingComents{
margin-top: 20px;
margin-left: 20px;
height: 230px;
background-color: white;
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
.dRating{
 
}
.dRating a{
      margin-left: 50%;

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
