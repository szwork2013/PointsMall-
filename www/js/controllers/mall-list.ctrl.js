PointMall.controller("MallListCtrl",function($state,$scope,Util){
        $scope.posts = [
            {
                "name" : "10元充值话费",
                "icon" : "img/product/phone/10rmb.png",
                "iconDetail" : "img/product/phone/10detail.png",
                "point" : "3000",
                "time" : "2015年3月",
                "range" : "全国",
                "arrtive": "实时到账",
                "exchange" : "点击“立即兑换”>输入手机号码>点击“确认”显示充值进行中，充值成功兑换状态显示“已完成”",
                "type" : "话费充值卡（联通移动电信通用）"
            },
            {
                "name" : "50元充值话费",
                "icon" : "img/product/phone/50rmb.png",
                "iconDetail" : "img/product/phone/50detail.png",
                "point" : "5000",
                "time" : "2015年3月",
                "range" : "全国",
                "arrtive": "实时到账",
                "exchange" : "点击“立即兑换”>输入手机号码>点击“确认”显示充值进行中，充值成功兑换状态显示“已完成”",
                "type" : "话费充值卡（联通移动电信通用）"
            },
            {
                "name" : "100元充值话费",
                "icon" : "img/product/phone/100rmb.png",
                "iconDetail" : "img/product/phone/100detail.png",
                "point" : "5000"
            }
        ];

    $scope.goDetail = function(post){
        Util.setSgObj("product",post);
        $state.go("mall.detail");
    }
});