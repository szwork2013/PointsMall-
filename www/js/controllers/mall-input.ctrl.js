PointMall.controller("MallInputCtrl",function($state,$rootScope,$scope,Util,MallSev){

        var  product = Util.getSgObj("product");

    //参数
    $scope.fm = {
        "phone" : "",
        "productionId" : product.productionId
    }

    $scope.isSubmit = false;


    //加载列表
    $scope.exchange = function(){
        $scope.isSubmit = true;
        MallSev.exchange($rootScope.token,$scope.fm.productionId,$scope.fm.phone).then(function(res){
            console.log(res);
            if(res.rtnCode == "0000000"){
                alert("兑换成功!");
            }
            else{
                alert(res.msg);
            }
            $scope.isSubmit = false;
        },function(err){
            $scope.isSubmit = false;
        });
    }




});