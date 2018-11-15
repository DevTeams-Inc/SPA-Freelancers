<template>
    <div class="grid-content bg-purple-light">
            <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
          <div>
          <img src="@/assets/logo.png" class="img-profile" width="50px" alt="">
          </div>
        <span>Yummy hamburger</span>
        <br class="mb-2">
        <el-tag class="tag">Tag One</el-tag>
        <el-tag class="tag">Tag One</el-tag>
        <el-tag class="tag">Tag One</el-tag>
        <div class="bottom clearfix">
          <el-button @click="$router.push('/freelancer/nombre')" type="text" class="button">Operating button</el-button>
        </div>
      </div>
    </el-card>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.img-profile{
    border-radius: 50px;
}
.freelancer-content {
  width: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bottom {
  margin-top: 13px;
  font-family: "Roboto", sans-serif;
  line-height: 12px;
}
.image {
  width: 75px;
  display: block;
  border-radius: 40px;
}
.tag {
  font-family: "Roboto", sans-serif;
  background: #5a75e6;
  color: #fff;
  border: none;
  height: 30px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
