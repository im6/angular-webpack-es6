const AppName = "app";

import 'angular-material/angular-material.min.css';
import '../../style/global.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import state from './config/state';
import appController from './controllers/appController';
import mainService from './services/mainService';
import helloWorld from './directives/HelloWorld';
import footerDirective from './views/layout/footer/footerDirective';

const App = angular.module(AppName, [
    uiRouter,
    ngMaterial
])
  .config(state)
  .service('mainService', mainService)
  .controller("appController", appController)
  .directive("helloWorld", helloWorld)
  .directive("footerDirective", footerDirective)
  .name;


export default App