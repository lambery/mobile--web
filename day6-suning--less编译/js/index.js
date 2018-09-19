$(function () {
   //手势切换轮播图  自动轮动 点变化 手势切换
    var $banner=$('.sn_banner');
    var width=$banner.width();

    var $imageBox=$banner.find('ul:first');
    var $pointBox=$banner.find('ul:last');
    var $points=$pointBox.find('li');



    var animationFuc=function () {
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},500 ,function () {
            if (index >= 9) {
                index = 1;
                $imageBox.css('transform', 'translateX(' + (-index * width) + 'px)');
            }
            if (index <= 0) {
                index = 8;
                $imageBox.css('transform', 'translateX(' + (-index * width) + 'px)');
            }

            $points.removeClass('now').eq(index - 1).addClass('now');
        })
    };


    var index=1;
    var timer=setInterval(function () {
        index++;

        animationFuc();
    },3000);



     $banner.on('swipeLeft',function () {
         index ++;
         animationFuc();
     });

     $banner.on('swipeRight',function () {
         index --;
         animationFuc();
     });


});