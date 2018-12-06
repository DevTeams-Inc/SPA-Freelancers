<template>
    <div class="size text">
        <el-row :gutter="10" class="text " >
          <el-col :xs="24" :sm="12" :md="40" :lg="40" :xl="12" >
              <img  src="@/assets/img/message.svg" class="img-logo" width="50%" alt="">
         </el-col> 
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-1">
              <!-- <img  src="@/assets/img/message.svg" width="30%" alt="" class="hidden-sm-and-up"> -->
                <h4 class="head">Confirma tu cuenta</h4>
                  <el-row>
                    <span class="span">Estas a un solo paso de registrase, por favor revise su correo.</span>
                    <span class="span">No te tomará mucho tiempo!</span>
                  </el-row> 
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.size {
  margin: 14%;
  padding: 0.8%;
}
.span{
  color: #59607e;
}
.head{
  color: rgb(151, 151, 151);
}

@media (min-width: 400px) {
  .text {
    margin-top: 12%;
  }
  .text-1{
    margin-top: 10%;
  }
  .img-logo{
    width: 50%;
  }
}
@media (max-width: 400px) {
  .text {
    margin-top: 30%;
  }
  .text-1{
    margin-top: 11.5%;
  }
  .img-logo{
    width: 50%;
  }
}
</style>
