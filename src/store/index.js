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
        userId: localStorage.getItem('user_id'),
        role: localStorage.getItem('user_role'),
        emailUser:localStorage.getItem('user_email'),
        services:services,
        existe:null
    },
    //es como una propiedad computada pero compartida funciona para 
    //revisar si el usuario esta logueado o no
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        UserInfo(state){
            return state.userName 
        },
        UserId(state){
            return state.userId
        },
        userRole(state){
            return state.role
        },
        existUser(state){
            return state.existe
        }
    }
})