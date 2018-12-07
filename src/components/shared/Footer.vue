<template>
    <div class="p-3 layout-footer-center">
        <footer>
        {{time}} &copy; DevTeams Inc.
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            time:(new Date().getFullYear())
        }
    }
}
</script>

<style scoped>
.layout-footer-center{
    text-align: center; 
    color: #fff;   
    background: #5a75e6;
    width: 100%;
      clear: both;
}
</style>
