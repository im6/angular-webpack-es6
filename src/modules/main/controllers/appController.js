
const appController =  ['$scope','mainService', ($scope, mainService) =>{
  $scope.name = "world123";
  mainService.do1();
}];
export default appController;