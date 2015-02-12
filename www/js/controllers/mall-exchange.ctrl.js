PointMall.controller("MallExchangeCtrl",function($state,$timeout,$stateParams,$scope,$rootScope,Util,MallSev){

    $scope.posts = [];


    $scope.moredata =false;

    $scope.fm = {
        "queryTime" : 0
    }

    $scope.loadList = function(){
        MallSev.getExchange($rootScope.token, $scope.fm.queryTime).then(function(res){

            $scope.$broadcast('scroll.infiniteScrollComplete');

            if(res.rtnCode == "0000000"){
                $scope.posts = res.bizData;
            }
            else{
                alert(res.msg);
            }
            console.log(res);
        },function(err){

        });
    }



    //刷新
    $scope.refresh = function () {
        $timeout(function(){
            $scope.$broadcast('scroll.refreshComplete');
        },2000);
    }

    $scope.loadMore = function(){

            console.log("dd");

        $scope.$apply(function(){
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });

    }

    $scope.loadList();
});