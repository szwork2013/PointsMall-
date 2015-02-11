PointMall.controller("MallCtrl",function($state,$rootScope){

        $rootScope.go = function(stateName){
            $state.go(stateName);
        }
});