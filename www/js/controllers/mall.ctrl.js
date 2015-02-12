PointMall.controller("MallCtrl",function($state,$rootScope){

        $rootScope.go = function(stateName){
            $state.go(stateName);
        }

        $rootScope.goCicadaVal = function(){
            console.log(window.cicadaStore);
            window.cicadaStore.gotoActiveValue();

        }

    $rootScope.goCicadaBack = function(){
        window.cicadaStore.back()
    }
});