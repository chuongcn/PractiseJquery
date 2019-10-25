$(function () {
    // TweenMax.to(tencuaphantu,thoigian,{tenthuoctinh:giatri,tentt:giatri});

    // TweenMax.to($('.btn2'), 1, { y: 200, opacity: 0 });

    // TweenMax.from($('.btn1'),1,{x:-200,opacity:0,scale:2});

    // TweenMax.from($('.btn2'),1,{y:200,opacity:0,scale:1});

    // TweenMax.from($('.btn3'),1,{x:200,opacity:0,scale:2});

    // TweenMax.fromTo($('.btn1'),2,{x:-400},{x:400});

    $('.btn2').click(function () {
        TweenMax.fromTo($('.btn1'), 2, { x: -400 }, { x: 400 });
        TweenMax.to($(this), 1, { y: "+=100" });
        TweenMax.to($('.btn3'), 1, {scale:"+=0.3" });
    });

});