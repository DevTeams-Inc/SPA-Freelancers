import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

Vue.use(Vuex)

const state = {
    services
}

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('access_token'),
        userName: localStorage.getItem("user_info"),
        services:services 
    },
    //es como una propiedad computada pero compartida funciona para 
    //revisar si el usuario esta logueado o no
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        UserInfo(state){
            return state.userName 
        }
    }
})