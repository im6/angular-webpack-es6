import tpl from './tpl/HelloWorld.jade';
export default ['$rootScope', ($rootScope) => {
    return {
        restrict: "AE",
        template: tpl
    };
}];