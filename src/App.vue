<template>
   <div id="app" class="layout">
          <Header></Header>
      <el-main class="main">
        <router-view/>
      </el-main>
       <Footer v-if="!$route.meta.hideFooter"></Footer>
  </div>
</template>
<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default {
  components: { Header, Footer },
  name: "App",
  data() {
    return {};
  }
};
</script>
<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
body {
  min-height:100%;
}


</style>
