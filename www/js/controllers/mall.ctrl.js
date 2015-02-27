PointMall.controller("MallCtrl", function ($state, $stateParams, $location, $scope, $timeout, $rootScope, $ionicPopup, Util, MallSev) {
//        console.log($location.$$url);

    //获得token
    var paramsUrl;
    if ($location.$$absUrl.indexOf("#") == -1) {
        paramsUrl = $location.$$absUrl.substring($location.$$absUrl.indexOf("?") + 1, $location.$$absUrl.length);

    }
    else {
        paramsUrl = $location.$$absUrl.substring($location.$$absUrl.indexOf("?") + 1, $location.$$absUrl.indexOf("#"));
    }

    paramsUrl = Util.parseParams(paramsUrl);
    var token = Util.getParam("token", paramsUrl);
    if (!token) {
        alert("token为空!");
        return;
    }


   // alert(JSON.stringify(paramsUrl));

    $rootScope.isLoadingVal = false;
//        $rootScope.token = "251ad9b65d4a79fcd2d09a244f01ea8a";
    $rootScope.token = token;
    console.log($rootScope.token);


    //全局机型
    $rootScope.MOBILE = {
        version : Util.getParam("version", paramsUrl) || "",
        clientType : Util.getParam("clientType", paramsUrl) || ""
    }


    console.log($rootScope.MOBILE);

    $rootScope.user = {
        credit: ""
    }

    if (!$rootScope.token) {
        alert("token失效");
    }

    //返回某个state
    $rootScope.backToView = function (stateName) {
        Util.backToView(stateName);
    }

    $rootScope.go = function (stateName) {
        $state.go(stateName);
    }


    //全局弹出
    $rootScope.alert = function (title, template) {
        $ionicPopup.alert({
            title: title || "",
            template: template,
            okText: "确定"

        });

    }


    //计算banner宽高比
    var screenWidth = document.body.clientWidth;
    var bannerScale = 750 / 340;
    $scope.bannerHeight = screenWidth / bannerScale;


    //获得用户活跃
    $rootScope.getUser = function (token) {
        $rootScope.isLoadingVal = true;
        MallSev.getUserCreadit(token).then(function (res) {
            $rootScope.isLoadingVal = false;
            $rootScope.user.credit = res.bizData.credit;

        }, function (err) {
            $rootScope.isLoadingVal = false;
        });
    }


    //获得用户列表
    $rootScope.getUser($rootScope.token);

    $rootScope.goCicadaVal = function () {

        if($rootScope.MOBILE.clientType == "iOS"){
            cicadaStore.gotoActiveValue();
        }
        else{
            window.cicadaStore.gotoActiveValue();
        }

    }

    $rootScope.goCicadaBack = function () {

        if($rootScope.MOBILE.clientType == "iOS"){
            cicadaStore.back();
        }
        else{
            window.cicadaStore.back();
        }

    }
});