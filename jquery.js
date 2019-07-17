'use strict'
$(document).ready(()=>{
/* Menu STICKY----------------------------------------------------------------------
$(window).scroll(()=>{
	
		var position = $('#menu').offset().top;

		if ($(window).scrollTop() > position) {
			$('#menu').css('position', 'fixed').css('width','70%').css('top', '0');
		}
		else {
			
				
			}

});----------------------------------------------------------------------
*/
//Slider----------------------------------------------------------------------

if(window.location.href.indexOf('index') > -1){
  $('.SliderPlu').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    auto:true,
    autoStar:true,
    speed:500,
    autoDelay:10,
    pager:false
    });
}
//Slider fin----------------------------------------------------------------------

//post con Json----------------------------------------------------------------------

if(window.location.href.indexOf('index') > -1){

var post = [
{
Titulo: 'Post Dinamicos con JSON  ', 
Date: 'Publicado el '+moment().format('DD')+' de '+moment().format('MMMM')+' de '+moment().format('YYYY')+' Plugin Moment para Horas',
Content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
},

{
Titulo: 'Post Dinamicos con JSON  2', 
Date:'Publicado el '+moment().format('DD')+' de '+moment().format('MMMM')+' de '+moment().format('YYYY')+' Plugin Moment para Horas',
Content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
},

{
Titulo: 'Post Dinamicos con JSON  3', 
Date:'Publicado el '+moment().format('DD')+' de '+moment().format('MMMM')+' de '+moment().format('YYYY')+' Plugin Moment para Horas',
Content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
},

{
Titulo: 'Post Dinamicos con JSON  4', 
Date:'Publicado el '+moment().format('DD')+' de '+moment().format('MMMM')+' de '+moment().format('YYYY')+' Plugin Moment para Horas',
Content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
},

{
Titulo: 'Post Dinamicos con JSON  5', 
Date:'Publicado el '+moment().format('DD')+' de '+moment().format('MMMM')+' de '+moment().format('YYYY')+' Plugin Moment para Horas',
Content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
}
];

for(var poste in post){
var plantilla = `
				<article class="post">
					<h2>${post[poste].Titulo}</h2>
					<span class="date">${post[poste].Date}</span> 
					<p>
						${post[poste].Content}
					</p>
					<a href="" class="button-more">Leer mas</a>
				</article>`;



$('#post').append(plantilla);
};

}
//FIn de post JSON----------------------------------------------------------------------


//selector the thema----------------------------------------------------------------------
var theme = $('#theme');


$('#green').click(()=>{
theme.attr('href','green.css');
});

$('#red').click(()=>{
theme.attr('href','red.css');
});

$('#blue').click(()=>{
theme.attr('href','blue.css');
});

//Scroll Arriba----------------------------------------------------------------------
$('.subir').click(()=>{
	

	$('html','body').animate({
		scrollTop:0,
	},500);

	
});


//Login Falso----------------------------------------------------------------------
$('#login form').submit(()=>{
	var nombreForm = $('#_name').val();

	localStorage.setItem('form_name',nombreForm);
});

var formName = localStorage.getItem('form_name');



if(formName != null && formName != 'undefined'){
	var about = $('#about p');

	about.html('<br><b>Bienvenido '+ formName + '<br> Datos Guardados con localStorage ' +'</b>');
	about.append('<br><a href="#" id="logout">Cerrar Sesion</a>');

	$('#login').hide();
	$('#logout').click(()=>{
		localStorage.clear();
		location.reload();
	});
}


//Acorderon----------------------------------------------------------------------
if(window.location.href.indexOf('about') > -1){
$('#acordeon').accordion();
}



// reloj
if(window.location.href.indexOf('reloj') > -1){

	setInterval(()=>{
	var reloj = moment().format('h:mm:ss');
	$('#reloj').html(reloj);
	},1000);


}

//validador de contacto
if(window.location.href.indexOf('contact') > -1){



$.validate({
	lang: 'es',
	
});
}



//Fin del Jquery Document
});



