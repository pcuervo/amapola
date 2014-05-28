<?php include 'header.php'; ?>
	<section class="lineas">
		<figure class="lineas_logos"><img src="http://nodo.pw/amapola_web/wp/wp-content/themes/amapola/images/logo_contacto.png" alt="Amapola Alianzas"></figure>
		<div class="lineas_p logos_div">
			<div class="contacto">
				<h2>!NOS GUSTARÍA <br>HABLAR CONTIGO!</h2>
				<div class="contacto_left">
					<span>Estamos a tus órdenes</span>
					<div>
						<figure><img src="http://nodo.pw/amapola_web/wp/wp-content/themes/amapola/images/ubicacion.png" alt=""></figure>
						<p>
							Pedregal 17-D, Molino del Rey,<br/>
							Miguel Hidalgo 11040,<br/>
							México D.F.
						</p>
					</div>
					<div>
						<figure><img src="http://nodo.pw/amapola_web/wp/wp-content/themes/amapola/images/telefono.png" alt=""></figure>
						<p>+52 55 52 92 05 01</p>
					</div>
					<div>
						<figure><img src="http://nodo.pw/amapola_web/wp/wp-content/themes/amapola/images/correo.png" alt=""></figure>
						<a href="mailto:contacto@amapolaestudio.com">contacto@amapolaestudio.com</a>
					</div>
				</div>
				<div class="contacto_right">
					<span>Déjanos tus datos para ponernos en <br> contacto contigo:</span>
					<form id="formulario" method="post" action="#">
						<input class="nombre js-input" id='form-nombre' placeholder='Nombre Completo:' type="text">
						<input class="mail js-input" id='form-email' placeholder='Mail:' type="email">
						<textarea class="comentarios js-input" id='form-comentarios' placeholder='Comentarios:'></textarea>
						<div class="submit">
							<input class="enviar js-enviar" type="submit" value=""><input class="borrar js-borrar" type="button" value="">
						</div>
						<div class="js-mensaje mensaje"></div>
					</form>
				</div>
			</div>
		</div>
	</section>
<?php include 'footer.php'; ?>