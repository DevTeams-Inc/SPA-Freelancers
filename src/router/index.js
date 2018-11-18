import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/Home"
import Login from '@/components/auth/Login'
import Register from "@/components/auth/Register"
import Proyects from "@/components/proyect/Proyects"
import ProyectPost from "@/components/proyect/ProyectPost/Post"
import FreelancerUser from '@/components/user/FreelancerUser'
import Freelancers from '@/components/freelancers/Freelancers'
import SendEmail from '@/components/email/SendEmail'
import EmailValidation from "@/components/email/EmailConfirmed";

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: Home,
      meta: {
        requiresVisitor: true // si no necesita autenticacion y  requiresAuth: true // si necesita autenticacion
      }
    },
    {
      path: "/inicio",
      name: "Home",
      component: Home,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/proyectos",
      name: "Proyects",
      component: Proyects,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/proyecto/publicar",
      name: "ProyectPost",
      component: ProyectPost,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/registro",
      name: "register",
      component: Register,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/freelancers",
      name: "freelancers",
      component: Freelancers,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/freelancer/nombre",
      name: "freelancer",
      component: FreelancerUser,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/email/validacion",
      name: "email/validate",
      component: SendEmail,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/email/confirmacion/val=:id",
      name: "email/confirmed",
      component: EmailValidation,
      props:true,
      meta: {
        requiresVisitor: true
      }
    }
  ],
  mode: "history"
});
