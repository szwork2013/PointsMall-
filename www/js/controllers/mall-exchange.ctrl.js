PointMall.controller("MallExchangeCtrl",function($state,$timeout,$stateParams,$scope,Util){

    //刷新
    $scope.refresh = function () {
        $timeout(function(){
            $scope.$broadcast('scroll.refreshComplete');
        },2000);
    }

    $scope.loadMoreData = function(){
        $timeout(function(){
            $scope.$broadcast('scroll.infiniteScrollComplete');
        },2000);

    }
});