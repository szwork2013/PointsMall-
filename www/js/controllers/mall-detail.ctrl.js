PointMall.controller("MallDetailCtrl",function($state,$stateParams,$scope,Util){
    $scope.post = Util.getSgObj("product");
    console.log($scope.post);
});