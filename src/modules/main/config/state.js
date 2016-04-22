
import sub1View from '../../sub1/views/main.jade';
import sub1Ctrl from '../../sub1/controllers/MainController.js';
//===== import the views for each state


export default function state($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sub1', {
            url: "/sub1",
            template: sub1View,
            controller: sub1Ctrl,
            onEnter: ["$rootScope", "$stateParams", ($rootScope, $stateParams) => {
            }]
        });

    $urlRouterProvider.otherwise(($injector, $location) =>{
        console.log("Could not find " + $location.$$path);
        $location.path('/sub1');
    });
}

state.$inject =[
    '$stateProvider',
    '$urlRouterProvider'
];