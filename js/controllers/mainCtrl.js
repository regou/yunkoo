app.controller("mainCtrl", function ($scope,$location,localStorageService,userInfo) {
    $scope.islogged=true;
    $scope.pre=function(){
        if(userInfo.get()){
            $scope.islogged=true;
            $scope.mainpageContent="你已经登录。"
        }else{
            $scope.islogged=false;
            $scope.mainpageContent="你还没登录。"
        }
    };

    $scope.mainsearch=function(){
        var key=$scope.mainSearch;
        if(key){
            var str=JSON.stringify({'k':key});
             $location.path("/search/"+str)
        }
    }

});