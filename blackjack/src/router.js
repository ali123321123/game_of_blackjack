import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'


const routes = [{
path: '/',
name: 'Home',
component: Home
},
{
        path: "/game",
        name: "Game",
        component: Game
      
}
];

const router = new VueRouter({routes})

export default router