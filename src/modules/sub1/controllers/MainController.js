
import angular from 'angular';

class mainController {
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

export default mainController;