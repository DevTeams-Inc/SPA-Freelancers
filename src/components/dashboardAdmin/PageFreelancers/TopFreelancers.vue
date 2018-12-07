<template>
            <div class="container-freelancersTop">
                      <h4>Freelancers Populares</h4>
                           <div class="item-freelancers">
                                <div class="item-freelancer-top" v-for="Tfreelancers in data">
                                     <img :src="Tfreelancers.avatar" class="pic-admin">
                                     <label>{{Tfreelancers.name}}, {{Tfreelancers.lastName}}</label>
                                 </div>
                                 
                          </div>
                    </div>
    

</template>
<style>
.container-freelancersTop{
  margin-top: 10px;
 
  
}
.item-freelancers{
    display: flex;
    justify-content: center; 
}
.container-freelancersTop h4{
  text-align: left;
  font-size: 15px;
  color:gray;
}
.item-freelancer-top{
margin-top:5px; 
background-color:white;
width: 100px;
margin-left: 4px;
margin-right: 4px;
height: 100px;
cursor: pointer;
border-radius:100%; 
  
}
.item-freelancer-top:hover{
  background-color:#40a8fd;
  color:white;
  transition: all 0.2s ease;
 
}


.pic-admin{
 border-radius:100%;
 width: 100px;
}
</style>
<script>
export default {
  
  data(){
   return {
   data:[],

    }


  },

 mounted (){

     this.topFreelancer();  

    },

  methods:{


  topFreelancer() {
        let self = this;
        self.$store.state.services.adminService.topFreelancer().then(r => {
        self.data = r.data;
       
      });
    }

  }
}
</script>

