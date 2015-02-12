PointMall.controller("MallDetailCtrl",function($state,$stateParams,$scope,$rootScope,Util){
   var  product = Util.getSgObj("product");
        product.comment =  JSON.parse(product.comment);
        $scope.post = product;


     //兑换状态
     $scope.notExchange = true;
     $scope.isExchangeMsg = "不足兑换";



    if($rootScope.user.credit   -  product.credit  >= 0){
        $scope.notExchange = false;
        $scope.isExchangeMsg = "兑换";
    }

    console.log($scope.post);
});