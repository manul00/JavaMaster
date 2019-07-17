<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="jqueryAPI.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<!--tema verde 
	<link rel="stylesheet" type="text/css" href="green.css"> -->
	<!--tema azul    -->
	<link id="theme" rel="stylesheet" type="text/css" href="green.css">
   <!--tema rojo 
	<link rel="stylesheet" type="text/css" href="red.css">-->
	<script type="text/javascript" src="jquery.js"></script>
	<!--slider-->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
    <!--slider FIN-->

    <!--moment JS para formatear fecha-->  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/es.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js"></script>
	  <!--moment JS FIN-->
	<title>JavaScript</title>
	<meta charset="utf-8">
 </head>
<body>
	<div id="changeTheme">	
		<div id="green"></div>
		<div id="red">	</div>
		<div id="blue">	</div>
	</div>
	<section id="global">
		<!--cabezera-->
		<header>
			<div id="logo">
				JSon
			</div>
			<div class="clearfix">	
			</div><span id="menufixed" class="">	
			<nav id="menu">
				<ul >
					<li><a href="index.html">Inicio</a></li>
					<li><a href="reloj.html">Reloj</a></li>
					<li><a href="about.html">Sobre Mi</a></li>
					<li><a href="contacto.html">Contacto</a></li>			
				</ul>
			</nav></span>
		</header>


		<!--slider-->
		<div id="slider">
			<div class="SliderPlu">
  			<div><img src="img/hojas.jpg" title="Funky hojas"></div>
  			<div><img src="img/rojo.jpg" title="Rojo"></div>
  			<div><img src="img/cielo.jpg" title="Cielo"></div>
			</div>
		</div>
		<section id="content">
			<div id="post">
				<!-- Aqui se insertan los post con Json -->
			</div>

			<aside id="sidebar">
				<div id="about">
					<h4>
						<span>quien soy</span>
					</h4>
					<img src="img/caracol.jpg">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco.
					</p>
				</div>
				<div id="login">
					<h4>
						<span>Identificate</span>					
					</h4>

					<form>
						 Nombre <br><input type="text" name="nombre" id="_name"><br>
						Email <br> <input type="email" name="email"><br>
						Clave <br> <input type="password" name="clave"> <br>
						<input type="submit" name="submit">

					</form>
				</div>
			</aside>
			<div class="clearfix">	
			</div>
		</section>

	</section>
	<footer id="footer">
		
Tecnologias usadas: HTML5, Jquery, Jquery UI, JavaScript, CSS, Json, LocalStorage
		<a href="#" class="subir">Subir</a>
	</footer>
</body>
</html>

