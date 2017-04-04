const mainService = ['$rootScope', ($rootScope) =>{
    $rootScope.rootName = "This is the root";
    let output = {
        do1: ()=> {
            console.log(123);
        }
    };

    return output;
}];

export default mainService;