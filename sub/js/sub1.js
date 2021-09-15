//sub1.js

$(function(){
	
	//탭 메뉴
	$('.attr_tab > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');

    });
	
    $('.attr_tab>li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#adventure, #character, #tomorrow, #samchulli').hide();

        $('#world').show();

    });

    $('.attr_tab>li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#world,  #character, #tomorrow, #samchulli').hide();

        $('#adventure').show();
    });

    $('.attr_tab>li:nth-child(3) a').click(function (e) {
        e.preventDefault();

        $('#world, #adventure, #tomorrow, #samchulli').hide();

        $('#character').show();
    });
	
	$('.attr_tab>li:nth-child(4) a').click(function (e) {
        e.preventDefault();

        $('#world, #adventure, #character, #samchulli').hide();

        $('#tomorrow').show();
    });
	
	$('.attr_tab>li:nth-child(5) a').click(function (e) {
        e.preventDefault();

        $('#world, #character, #adventure, #tomorrow').hide();

        $('#samchulli').show();
    }); 
	
	//loadmore
	
	$('.attr_box').slice(0,1).show();
			
			$('#loadMore').on('click', function(e){
				
				e.preventDefault();
				
				$('.attr_box:hidden').slice(0,1).slideDown();
				
				if($('.attr_box:hidden').length === 0) {
					
					$('#loadMore').fadeOut();
				}
				$('html,body').animate({
					scrollTop: $(this).offset().top
				}, 1500);
				
			});
	
	
}); //jQuery