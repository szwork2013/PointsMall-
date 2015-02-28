var PointMall = angular.module('pointMall', ['ionic']);

PointMall.config(function($ionicConfigProvider) {
//    if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})

PointMall.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state("mall", {
                url: "/mall",
                abstract: true,
                templateUrl: "tpls/mall.html"
            })
            //积分商城
            .state("mall.list", {
                url: "/list",
                templateUrl: "tpls/mall-list.html",
                controller: "MallListCtrl"
            })
            //商品信息
            .state("mall.detail", {
                url: "/detail",
                templateUrl: "tpls/mall-detail.html",
                controller: "MallDetailCtrl"

            })
            //输入手机号
            .state("mall.input", {
                url: "/input",
                templateUrl: "tpls/mall-input.html",
                controller: "MallInputCtrl"
            })

            //兑换记录
            .state("mall.exchange", {
                url: "/exchange",
                templateUrl: "tpls/exchange.html",
                controller: "MallExchangeCtrl"
            })

        //默认路径
        $urlRouterProvider.otherwise('/mall/list');

    })


//配置http 拦截器
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("AjaxInterceptors");

    })
    //设置SEVER地址
    .constant('SERVER', {
        url: {
//            mall: "http://172.16.130.43:8086/credit"
            mall: "http://10.10.68.11:10000/credit"
//            mall: "/PointsMall-/www/data"
//            mall: "/credit"
        }
    })
