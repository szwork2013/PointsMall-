PointMall.controller("MallListCtrl",function($state,$rootScope,$scope,Util,MallSev){
        $scope.posts = [
        ];

    //参数
    $scope.fm = {
        queryTime : 0
    }


    //加载列表
    $scope.loadList = function(){

        MallSev.getProduct($rootScope.token,$scope.fm.queryTime).then(function(res){
            console.log(res);
            if(res.rtnCode == "0000000"){
                $scope.posts = res.bizData;
            }
            else{
                alert(res.msg);
            }
        },function(err){
        });
    }



    $scope.goDetail = function(post){
        Util.setSgObj("product",post);
        $state.go("mall.detail");
    }


    $scope.loadList();
});