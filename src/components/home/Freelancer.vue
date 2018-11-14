<template>
<el-row class="freelancer-content ml-1" justify="center" :gutter="10">
  <h1 class="mt-5 mb-5">Nuestros mejores freelancers</h1>
  <div class="freelancer-div">
  <el-col class="mb-2" :xs="24" :sm="8" :md="8" :lg="8" :xl="10">
    <div class="grid-content bg-purple-light">
      <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
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
    </el-col>
  <el-col class="mb-2" :xs="24" :sm="8" :md="8" :lg="8" :xl="10">
    <div class="grid-content bg-purple-light">
      <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
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
    </el-col>
  <el-col class="mb-2" :xs="24" :sm="8" :md="8" :lg="8" :xl="10">
    <div class="grid-content bg-purple-light">
      <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
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
    </el-col>
    </div>
</el-row>
</template>
<script>
export default {
  name: "Freelancer",
  data() {
    return {};
  }
};
</script>
<style>
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

.tag {
  font-family: "Roboto", sans-serif;
  background: #5a75e6;
  color: #fff;
  border: none;
  height: 30px;
}

.image {
  width: 75px;
  display: block;
  border-radius: 40px;
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
