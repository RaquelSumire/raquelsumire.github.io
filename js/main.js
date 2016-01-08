$(document).ready(init);
	function init()
	{
		//inicio de aplicación
		$("#bs-example-navbar-collapse-1 ul li a").click(selectMenu);
        $("#boton a").click(selectboton);
	};
	
	function selectMenu()
	{
	$("#bs-example-navbar-collapse-1 ul li a").removeClass("active");
	$(this).addClass("active");
    };

    function selectboton()
	{
	$("#boton a").removeClass("active");
	$(this).addClass("active");
    };

//goto top
    $('gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    $(document).ready(initPage);
    	function initPage(){
    		$('#arrow-up').click(irArriba);
            
            TweenMax.to('body, html')
    	}
    	function irArriba(evt){
    		TweenMax.to('body, html', 5 , {  scrollTo:{y:0},ease:Quart.easeOut});
            evt.preventDefault();
        }