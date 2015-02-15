PointMall.controller("MallExchangeCtrl",function($state,$timeout,$stateParams,$scope,$rootScope,Util,MallSev){

    $scope.posts = [];


    $scope.moredata =false;

    $scope.fm = {
        "queryTime" : 0
    }


    $scope.isSubmit = false;



    //获得商品详情
    $scope.getDetail = function(obj){
        obj.isSubmit = true;

        MallSev.getProductDetail(obj.productionId).then(function(res){
            console.log(res);
            if(res.rtnCode == "0000000"){
                Util.setSgObj("product",res.bizData);
                 obj.isSubmit = false;
                $timeout(function(){
                    $state.go("mall.detail");
                },300);

                return;
            }
            else{
                alert(res.msg);
            }
            obj.isSubmit = false;
        },function(err){
            obj.isSubmit = false;
        });
    }



    //刷新
    $scope.refresh = function () {

        MallSev.getExchange($rootScope.token, $scope.fm.queryTime).then(function(res){
            $scope.$broadcast('scroll.refreshComplete');

            if(res.rtnCode == "0000000"){
                $scope.posts = res.bizData;
            }
            else{
                alert(res.msg);
            }
        },function(err){
            $scope.$broadcast('scroll.refreshComplete');
        });
    }

    $scope.loadMore = function(){
        console.log("dd");
        $scope.$apply(function(){
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });

    }

    $scope.refresh();

});