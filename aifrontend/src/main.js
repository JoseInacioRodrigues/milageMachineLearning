import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue  from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/js/bootstrap.js';
import jQuery from 'jquery';
global.$ = jQuery;

import { createStore } from 'vuex';
const store = createStore({
     state() {
         return {
             counter: 0
         }
     }
});

import UiLogin from './UI/UiLogin.vue';

import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: UiLogin },
    ]
});

const app = createApp(App).use(i18n).use(i18n);
app.use(BootstrapVue);
app.use(store);
//app.use(BootstrapVueIcons);
app.use(router);

app.mount('#app');

