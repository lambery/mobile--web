$(function () {

    banner();
    
    
});

var banner=function () {
    //   轮播图
    var getData=function (callback) {//拿数据
        if(window.data){
           callback&&callback(window.data);
        }else {
            $.ajax({
                type:'get',
                url:'js/data.json',
                dataType:'json',
                data:'',
                success:function (data) {
                    window.data=data;//缓存数据 避免多次请求
                    callback&&callback(window.data);
                }
            });
        }
    };


    var render=function () {
        getData(function (data) { //被callback的函数 ，，渲染数据
            var isMobile=$(window).width()<768?true:false;
            console.log($(window).width());

            var pointHtml=template('pointTemplate',{list:data}); //data数组转为对象
            var imageHtml=template('imageTemplate',{list:data, isMobile:isMobile});//这对象里面有两个数组

            //console.log(pointHtml);
            //console.log(imageHtml);

            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        });
    };

    render();
    //测试功能
    $(window).on('resize',function () {
        render();
    }).trigger('resize');

    //手势切换
    var startX=0;
    var distanceX=0;
    var isMove=false;
    $('.wjs_banner').on('touchstart',function (e) {
        startX=e.originalEvent.touches[0].clientX;

    }).on('touchmove',function (e) {
        var moveX=e.originalEvent.touches[0].clientX;
        distanceX=moveX-startX;
        isMove=true;

    }).on('touchend',function (e) {
        if(isMove&&Math.abs(distanceX)>50){
            if(distanceX<0){
                $('.carousel').carousel('next');
            }else{
                $('.carousel').carousel('prev');
            }
        }
        startX=0;
        distanceX=0;
        isMove=false;
    });

};

