
const AppName = "app";

import 'angular-material/angular-material.min.css';
import '../../style/global.less';

//============== css reference END

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

// ================ module include END

import state from './config/state';
import ctr from './controllers/AppController';
import mainService from './services/mainService';
import helloWorld from './directives/HelloWorld';

//================= Main Component definition END

export default angular.module(AppName, [
    uiRouter,
    ngMaterial
])
    .config(state)
    .service('mainService', mainService)
    .controller("AppController", ctr)
    .directive("helloWorld", helloWorld)
    .name;