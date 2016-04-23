
export default ['$scope','MainService', ($scope, MainService) =>{
    $scope.name = "world123";
    MainService.do1();
}];