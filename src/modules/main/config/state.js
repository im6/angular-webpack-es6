import mainView from '../views/main.jade';
import appController from '../controllers/appController.js';

import sub1View from '../../sub1/views/main.jade';
import sub1Ctrl from '../../sub1/controllers/MainController.js';


const state = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        url: "/",
        template: mainView,
        controller: appController,
        onEnter: ["$rootScope", "$stateParams", ($rootScope, $stateParams) => {
        }]
      })
      .state('sub1', {
          url: "/sub1",
          template: sub1View,
          controller: sub1Ctrl,
          onEnter: ["$rootScope", "$stateParams", ($rootScope, $stateParams) => {
          }]
      });

    $urlRouterProvider.otherwise(($injector, $location) =>{
        console.log("Could not find " + $location.$$path);
        $location.path('/');
    });
};

state.$inject =[
    '$stateProvider',
    '$urlRouterProvider'
];

export default state