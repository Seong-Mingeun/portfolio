//index.js

$(function () {

    //팝업 창 사라지게하기
    $('.top_banner a').click(function (e) {

        e.preventDefault();
        $('.top_banner').slideUp(400);

        $('header').css({
            top: 0,
            transition: "all .4s",
        });

        $('.slider_box').css('margin-top', '100px');


    }); //배너 창


    //서브 메뉴
    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();


    });

    $('.sub_wrap').mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴



    //슬라이더

    //1) 오른쪽으로 이동하는 함수 만들기

    //초기설정
    $('.slider>li:last').insertBefore($('.slider>li:first'));
    $('.slider').css('margin-left', '-100%');

    //슬라이딩 함수 만들기
    function move() {
        $('.slider').animate({
            marginLeft: '-200%'
        }, 800, function () {
            $('.slider>li:first').insertAfter($('.slider>li:last'));
            $('.slider').css('margin-left', '-100%');
        });

        //블릿 변경 함수 실행
        var bseq = $('.slider').find('li').eq(2).attr('data-seq');
        chgB();
        chgB(bseq);

    }

    //자동 슬라이드 함수
    function autoplay() {
        setInterval(move, 3000);
    }
    autoplay();

    //블릿 변경함수
    var chgB = function (n) {
        $('.btnGroup li').eq(n).addClass('selB').siblings().removeClass('selB');
    };

    //3) 멈춤 버튼 클릭 시 재생 버튼으로 변경
    var click = 0;

    $('.btnBox a img').click(function (e) {
        e.preventDefault();

        if (click === 0) {
            $(this).attr({
                src: "img/icon_play.png",
                alt: "슬라이더 재생"
            });
            click++;

        } else {
            $(this).attr({
                src: "img/media_pause_icon.png",
                alt: "슬라이더 멈춤"
            });
            click--;
        };

    });



    //4) 블릿 버튼 클릭 시, 빨간색으로 변경되고 해당 이미지 표시
    $('.btnGroup li a').click(function (e) {
        e.preventDefault();

        gbtn = $(this).attr('class');
        gbtn = Number(gbtn.substr(3, 1)); //btn1
        console.log(gbtn);

        $('.btnGroup li').css({
            color: '#333'
        });

        $(this).css({
            color: '#e16254'
        });

        $('.slider').animate({
            left: 100 + "%" * -gbtn
        });


    });

    //탭메뉴
    $('.tabmenu > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

    });
    $('.tabmenu>li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#family-course, #couple-course').hide();

        $('#child-course').show();

    });

    $('.tabmenu>li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#child-course, #couple-course').hide();

        $('#family-course').show();
    });

    $('.tabmenu>li:nth-child(3) a').click(function (e) {
        e.preventDefault();

        $('#child-course, #family-course').hide();

        $('#couple-course').show();
    });


    //드래그바
    $('.bar').draggable({
        axis: 'x', //x축 고정
        containment: 'parent' //작동범위를 부모요소로 한정, 부모요소는 #scrollBar
    });

 
    //위치값 설정 변수
    var barmax = 360; //바의 최대 이동값
    var barpos; //바의 이동값
    var imgmax = 954; //사진 최대 이동값
    var imgpos; //사진 이동값

    //바를 드래그(이벤트) 할 때 함수구현
    $('.bar').on('drag', function () {

        //현재 바의 이동값
        barpos = $(this).offset().left;
        console.log(barpos);

        //사진 이동값 = 바의 이동값 * 사진의 최대 이동값 / 바의 최대 이동값
        imgpos = barpos * imgmax / barmax;

        $('.festival_slider').css({
            left: -imgpos + 'px'
        });
    });


    //인스타
    var acall;

    acall = setInterval(flowImg, 30)

    //마우스 오버시 멈춤, 아웃시 다시 실행
    $('.flowImg li').hover(function () {
        clearInterval(acall); 	
    }, function () { 
        acall = setInterval(flowImg, 30);
    });


    var fnum = 0; //이동픽셀수
    function flowImg() {

        fnum++;

        var fw = $('.flowImg li').first().width();

        if (fnum > fw) {
            $('.flowImg').append($('.flowImg li').first()).css({
                left: 0
            });

            fnum = 0;
        } else {
            $('.flowImg').css({
                left: -fnum + 'px'
            });
        }
    }

    
    //탑 버튼
  
    var tbpos = $(window).height() * -3.8;
    
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        
        console.log(scTop);
        
                if(scTop > 200) {
        $('.totop').show().css({
            top: tbpos +'px'
        });
    }
        
    });
   


}); //jQuery
