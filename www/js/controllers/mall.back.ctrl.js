PointMall.controller("MallCtrl",function($state,$stateParams,$location,$scope,$timeout,$rootScope,$ionicPopup,Util,MallSev){
//        console.log($location.$$url);

        //获得token
        var token;
        if($location.$$absUrl.indexOf("#") ==  -1){
            token = $location.$$absUrl.substring($location.$$absUrl.indexOf("token"),$location.$$absUrl.length);

        }
        else{
            token =  $location.$$absUrl.substring($location.$$absUrl.indexOf("token"),$location.$$absUrl.indexOf("#"));
        }

        if(!token){
            alert("token为空!");
            return;
        }

        


        $rootScope.isLoadingVal = false;
        $rootScope.token = token.split("=")[1];
//        $rootScope.token = "251ad9b65d4a79fcd2d09a244f01ea8a";

        console.log($rootScope.token);

        $rootScope.user = {
            credit : ""
        }

        if(!$rootScope.token){
            alert("token失效");
        }

        //返回某个state
        $rootScope.backToView = function(stateName){
          Util.backToView(stateName);
        }

    $rootScope.go = function(stateName){
        $state.go(stateName);
    }

        $rootScope.goCicadaVal = function(){
            console.log(window.cicadaStore);
            window.cicadaStore.gotoActiveValue();

        }

        //全局弹出
        $rootScope.alert = function(title,template){
            $ionicPopup.alert({
                title : title  || "",
                template : template,
                okText : "确定"

            });

        }




        //计算banner宽高比
        var screenWidth =  document.body.clientWidth;
        var bannerScale = 750/340;
        $scope.bannerHeight = screenWidth / bannerScale;




        //获得用户活跃
        $rootScope.getUser = function(token){
            $rootScope.isLoadingVal = true;
            MallSev.getUserCreadit(token).then(function(res){
                    $rootScope.isLoadingVal = false;
                    $rootScope.user.credit =  res.bizData.credit;

            },function(err){
                $rootScope.isLoadingVal = false;
            });
        }


        //获得用户列表
    $rootScope.getUser($rootScope.token);

    $rootScope.goCicadaBack = function(){
        window.cicadaStore.back()
    }
});