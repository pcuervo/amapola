// JS para sitio web Amapola

(function () {
	$('.js-bxslider').bxSlider({
		auto:false,
		controls:true,
		pager:false,
		infiniteLoop:true,
		hideControlOnEnd:true,
		pagerCustom: '.js-paginador'
	});
})();

function validateEmail(email)
{
	// Función para validar correo con respecto a regex específico.
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validacion(este)
{
	var email = '';
	var valor = $(este).val();
	var con_valor = true;


	// Si está vacio
	if( valor === "")
	{

		$(este).addClass("error");
		$(este).removeClass("correcto");

	// Si no está vacio
	} else {

		if ( este === "#form-email")
		{
			email = $(este).val();
			if ( validateEmail(email) )
			{
				$(este).addClass("correcto");
				$(este).removeClass("error");
				return con_valor;
			} else {
				$(este).addClass("error");
				$(este).removeClass("correcto");
			}
		} else {
			$(este).addClass("correcto");
			$(este).removeClass("error");
			return con_valor;
		}
	}
}

function enviando () {
	// Función para enviar formulario.
	// Captura de valores.
	// Validación de campos.
	// Envío con Ajax.
	var form_nombre = document.querySelector("#form-nombre").value;
	var form_correo = document.querySelector("#form-email").value;
	var form_comentarios = document.querySelector("#form-comentarios").value;

	// Validar los campos
	validacion('#form-nombre');
	validacion('#form-email');

	// Si los campos son válidos, mandar correo
	if (
		validacion('#form-nombre') &&
		validacion('#form-email')
	)
	{
		$('.js-mensaje').html('<p>Enviando...</p>');
		var data =
		"&nombre=" + form_nombre +
		"&correo=" + form_correo +
		"&comentarios=" + form_comentarios;

		$.ajax({
			type: "POST",
			url: url_blog+'/send-mail.php',
			data: data,
			error: function () {
				$('.js-mensaje').html('<p>Tu mensaje no pudo ser enviado. Por favor intenta de nuevo.</p>');
			},
			success: function(){
				$('.js-mensaje').html('<p>Su mensaje ha sido enviado, nos contactaremos a la brevedad.<br/>Si desea enviar otro mensaje llene de nuevo el formulario.</p>');
				borrar();
			}
		});

	} else {
		$('.js-mensaje').html('<p>Por favor completa todos los campos requeridos.</p>');
	}
}

function validar(){
	var campo = this.getAttribute("id");
	var email = '';
	var valor = this.value;

	if( valor !== ""){

		if ( campo === "form-correo"){
			email = this.value;
			if ( validateEmail(email) ) {
				this.classList.add("correcto");
				this.classList.remove("error");
			} else {
				this.classList.add("error");
				this.classList.remove("correcto");
				var texto_mensaje = $('.js-mensaje').text();
				$('.js-mensaje').html('<p>'+texto_mensaje+' Introduce un correo correcto</p>');
			}
		} else {
			this.classList.add("correcto");
			this.classList.remove("error");
		}

	} else {
		if (campo !== "form-correo") {
			this.classList.add("error");
			this.classList.remove("correcto");
		}
	}

	// Checar si está el mensaje de alerta, y si ya están todos los campos, y ya tienen valor, desaparece la alerta
	if( $('.js-mensaje').html('<p>Por favor completa todos los campos requeridos.</p>') )
	{
		if( ( campo === "form-correo" || campo === "form-telefono" ) && valor !== ""  )
		{
			$('.js-mensaje').html('');
		}
	}
}

function borrar () {
	$("#formulario input, #formulario textarea").val("");
}
function func_submenus () {
	var submenu = $(".js-submenu-portafolio");
	if ( submenu ){
		// URLs
		var pathArray = window.location.href.split( '/' );
		var newPathname = "";
		for ( i = 0; i < pathArray.length-2; i++ ) {
			newPathname += pathArray[i];
			newPathname += "/";
		}

		var urlRegExp = new RegExp(newPathname.replace(/\/$/,'') + "$");
		if( newPathname != '/'){
			$('.js-menu-principal a').each(function(){
				if(urlRegExp.test(this.href.replace(/\/$/,''))){
					var este = $(this);
					este.parent("li").addClass('current_page_item');
				}
			});
		}

	}
}

function ajaxy () {
	var post_link = $(this).attr("data-permalink");
	var data_display = $(this).attr("data-display");

	$("#"+data_display+" #single").html("<h3>Cargando portafolio</h3>");
	$("#"+data_display+" #single").load(post_link);
}

function subir () {
	$('html,body').animate({scrollTop:'0px'}, 500);
}

function arranque () {
	$.ajaxSetup({cache:false});
}

var doc = $(document);
$('#formulario').submit(function(){
	return false;
});
doc.on("ready", func_submenus);
//doc.on("change", ".js-input", validar);
doc.on("click", '.js-ajax', ajaxy);
doc.on("click", '.js-enviar', enviando);
doc.on("click", '.js-borrar', borrar);
doc.on("click", '.js-arriba', subir);

$( ".js-estrategia" ).hover(
	function() {
		$( this ).next(".js-estrategia_web").fadeIn();
		console.log("arriba");
	}, function() {
		$( this ).next(".js-estrategia_web").hide();
	}
);