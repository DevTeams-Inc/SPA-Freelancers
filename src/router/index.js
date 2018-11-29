import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import completeRegister from "@/components/freelancers/completeRegister";

import googlemap from "@/components/location/googleMap";
import autocomplete from "@/components/location/autocomplete";

import Proyects from "@/components/proyect/Proyects";
import ProyectPost from "@/components/proyect/ProyectPost/Post";

import FreelancerUser from "@/components/user/FreelancerUser";
import Freelancers from "@/components/freelancers/Freelancers";

import SendEmail from "@/components/email/SendEmail";
import EmailValidation from "@/components/email/EmailConfirmed";

import DashboardAdmin from "@/components/dashboardAdmin/Dashboard";
import DashboardIndex from "@/components/dashboardAdmin/PageIndex/Index";
import DashboardProyects from "@/components/dashboardAdmin/PageProyects/Proyects";
import DashboardFreelancers from "@/components/dashboardAdmin/PageFreelancers/Freelancers";
import DashboardCategories from "@/components/dashboardAdmin/PageCategories/Categories";
import DashboardHabilidades from "@/components/dashboardAdmin/PageHabilidades/Habilidades";
import DashboardReports from "@/components/dashboardAdmin/PageReports/Reports";

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
        requiresAuth: true,
        requiresVisitor: false
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
      path: "/completar/registro/:keyFreelancer/:keyUser",
      props:true,
      name: "completeregister",
      component: completeRegister,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/map",
      name: "map",
      component: googlemap,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/autocomplete",
      name: "autocomplete",
      component: autocomplete,
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
      path: "/freelancer/:id",
      name: "freelancer",
      props: true,
      component: FreelancerUser,
      meta: {
        requiresAuth: true
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
      props: true,
      meta: {
        requiresVisitor: true
      }
    },
    //Ruteo de administrador//
    {
      path: "/dashboardAdmin",
      name: "dashboardAdmin",
      redirect: "/dashboardAdmin/inicio",
      component: DashboardAdmin,
      props: true,
      meta: {
        hideFooter: true,
        requiresAuth: true,
        adminAuth: true //adminAuth si se necesita autenticacion como administrador
      },
      children: [
        {
          path: "inicio",
          name: "dashboardInicio",
          component: DashboardIndex,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        },
        {
          path: "proyectos",
          name: "dashboardProyects",
          component: DashboardProyects,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        },
        {
          path: "freelancers",
          name: "dashboardFreelancers",
          component: DashboardFreelancers,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        },
        {
          path: "categorias",
          name: "dashboardCategories",
          component: DashboardCategories,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        },
        {
          path: "habilidades",
          name: "dashboardHabilidades",
          component: DashboardHabilidades,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        },
        {
          path: "/dashboardAdmin/reportes",
          name: "dashboardReports",
          component: DashboardReports,
          meta: {
            hideFooter: true,
            requiresVisitor: false,
            adminAuth: true,
            requiresAuth: true
          }
        }
      ]
    }
  ],
  mode: "history"
});
