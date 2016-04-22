
import angular from 'angular';

export default class mainController {
    constructor($scope){
        angular.merge($scope,{
            test: "test data is here",
            popupText: (x)=>{
                alert(x);
            }
        });
    }
}


mainController.$inject = ['$scope'];