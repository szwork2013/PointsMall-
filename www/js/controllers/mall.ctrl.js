PointMall.controller("MallCtrl",function($state,$stateParams,$rootScope,MallSev){

        //加载token
//        $rootScope.token = $stateParams.token;

      console.log($stateParams);

        $rootScope.token = "251ad9b65d4a79fcd2d09a244f01ea8a";
        $rootScope.user = {
            credit : ""
        }

        if(!$rootScope.token){
            alert("token失效");
        }

        $rootScope.go = function(stateName){
            $state.go(stateName);
        }

        $rootScope.goCicadaVal = function(){
            console.log(window.cicadaStore);
            window.cicadaStore.gotoActiveValue();

        }


        var  getUser = function(token){
            MallSev.getUserCreadit(token).then(function(res){
               $rootScope.user.credit =  res.bizData.credit;
            },function(err){
            });
        }

        //获得用户列表
        getUser($rootScope.token);


    $rootScope.goCicadaBack = function(){
        window.cicadaStore.back()
    }
});