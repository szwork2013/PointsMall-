PointMall
    .factory("Util", function ($window, $q,$ionicHistory) {

        return {

            getSgObj: function (key) {
                var obj = $window.sessionStorage.getItem(key);
                return  JSON.parse(obj);
            },
            setSgObj: function (key, value) {
                return $window.sessionStorage.setItem(key, JSON.stringify(value));
            },

            getSg: function (key) {
                $window.sessionStorage.getItem(key);
            },

            setSg: function (key, value) {
                $window.sessionStorage.setItem(key, value);
            },
            remove : function(key){
                $window.sessionStorage.removeItem(key);
            },

            backToView : function(stateName){
                var historyId = $ionicHistory.currentHistoryId();
                var history = $ionicHistory.viewHistory().histories[historyId];
                for (var i = history.stack.length - 1; i >= 0; i--){
                    if (history.stack[i].stateName == stateName){
                        $ionicHistory.backView(history.stack[i]);
                        $ionicHistory.goBack();
                    }
                }
            },

            parseParams : function(paramsUrl){

                    var  paramsArray  = paramsUrl.split("&");
                    var  newParams = [];
                    for(var i =0; i<paramsArray.length;i++){
                        var objs = paramsArray[i].split("=");
                        var tt = '{"'+objs[0]+'": "'+objs[1]+'" }';
                        var newObj = JSON.parse(tt);
                        newParams.push(newObj);
                    }
                return newParams;

            },

            getParam : function(key,array){
                for(var i =0; i<array.length;i++){
                    var objs = array[i];
                    if(objs[key]){
                        return  objs[key];
                    }

                }
                return "";
            }
        }
    })

    .factory("MallSev",function($http,$q,SERVER){

        var  MallSev  =  {

            //获得商品列表
            getProduct : function(token,queryTime){
                var defer = $q.defer();
               $http.post(SERVER.url.mall+"/credit/getProductionList",{
                   "style" : "",
                   "clientInfo" : {},
                   "data" : {
                       "token" : token,
                       "queryTime" : queryTime
                   }
               }).success(function(res){
                    defer.resolve(res);
               }).error(function(error){
                    defer.reject(error);
               });

                return defer.promise;

            },
            getProductDetail : function(productionId){
                var defer = $q.defer();
                $http.post(SERVER.url.mall+"/credit/queryProductionDetailById",{
                    "style" : "",
                    "clientInfo" : {},
                    "data" : {
                        "productionId": productionId
                    }
                }).success(function(res){
                    defer.resolve(res);
                }).error(function(error){
                    defer.reject(error);
                });

                return defer.promise;
            },
            //兑换
            exchange : function(token,productionId,phone){
                var defer = $q.defer();
                $http.post(SERVER.url.mall+"/credit/exchangeProduction",{
                    "style" : "",
                    "clientInfo" : {},
                    "data" : {
                        "token" : token,
                        "productionId" : productionId,
                        "comment" : phone
                    }
                }).success(function(res){
                    defer.resolve(res);
                }).error(function(error){
                    defer.reject(error);
                });

                return defer.promise;
            },

            //获得兑换列表
            getExchange : function(token,queryTime){
                var defer = $q.defer();
                $http.post(SERVER.url.mall+"/credit/queryExchangeProductionListByUserId",{
                    "style" : "",
                    "clientInfo" : {},
                    "data" : {
                        "token" : token,
                        "queryTime" : queryTime
                    }
                }).success(function(res){
                    defer.resolve(res);
                }).error(function(error){
                    defer.reject(error);
                });

                return defer.promise;
            },

            //获得用户积分
            getUserCreadit : function(token){
                var defer = $q.defer();
                $http.post(SERVER.url.mall+"/credit/getUserCreditByUserId",{
                    "style" : "",
                    "clientInfo" : {},
                    "data" : {
                        "token" : token
                    }
                }).success(function(res){
                    defer.resolve(res);
                }).error(function(error){
                    defer.reject(error);
                });
                return defer.promise;
            }

        };

        return MallSev;

    })

.filter("exchangeStatus",function(){
        return function(status) {
            if (status == 0) {
                return "进行中";
            }
            else {
                return "已完成";
            }
        }


 });

