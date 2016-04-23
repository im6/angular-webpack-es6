
export default ['$scope','Main1Service', ($scope, Main1Service) =>{
    $scope.name = "world123";
    Main1Service.do1();
}];