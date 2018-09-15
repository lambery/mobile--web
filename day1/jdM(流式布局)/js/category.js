window.onload=function () {

    //找到大容器，然后写写
    new IScroll(document.querySelector('.jd_cateLeft'),{
        scrollX:false,
        scrollY:true
    });
    new IScroll(document.querySelector('.jd_cateRight'),{
        scrollX:false,
        scrollY:true
    });
};
