import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
	
	/*

	Con este reset vamos a resolver:
		👉 Unificar el uso de Custom Properties
		👉 Problemas de box-model más generales
		👉 Problemas con imagenes, vídeos e iconos svg
		👉 Problemas con tipografías y etiquetas input en formularios
		👉 Unificar la tipografía de todas las etiquetas de una web

	*/
	/* Aquí definimos las Custom properties */
	:root {
		--negro: #393939;
		--blanco: #fff;
		/* Tipografía */
		--tipo-principal: Helvetica, Arial, sans-serif;
		--tipo-secundaria: Verdana;
	}

	/* Las adaptamos al modo oscuro */
	/* @media (prefers-color-scheme: dark) {
	:root {
		--negro: #ececec;
	}
	} */
	/* Opcional */
	/* Configuramos si un usuario ha activado el modo alto contraste. (WD) */
	/* Opcional */
	/* Desactivamos los animations en el caso de que el usuario haya configurado el modo sin animation */
	@media (prefers-reduced-motion: reduce) {
	* {
		-webkit-animation: none !important;
				animation: none !important;
		-webkit-transition: none !important;
		transition: none !important;
	}
	}
	/* Reseteamos los margin y paddings de todas las etiquetas */
	* {
		margin: 0;
		padding: 0;
		border: 0;
		-webkit-box-sizing: border-box;
				box-sizing: border-box;
		vertical-align: baseline;
	}

	/* Evitamos problemas con las imagenes */
	img, picture, video, iframe, figure {
		max-width: 100%;
		width: 100%;
		display: block;
		/* opcional */
		-o-object-fit: cover;
			object-fit: cover;
		/* opcional */
		-o-object-position: center center;
			object-position: center center;
	}

	/* Reseteamos los enlaces para funcionar como cajas... */
	a {
		display: block;
		text-decoration: none;
		color: inherit;
		font-size: inherit;
	}

	/* ... excepto los que se encuentran en párrafos */
	p a {
		display: inline;
	}

	/* Quitamos los puntos de los <li> */
	li {
		list-style-type: none;
	}

	/* Configuramos anclas suaves */
	html {
		scroll-behavior: smooth;
	}

	/* Desactivamos estilos por defecto de las principales etiquetas de texto */
	h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
		font-size: 1em;
		font-weight: inherit;
		font-style: inherit;
		text-decoration: none;
		color: inherit;
	}

	/* Evitamos problemas con los pseudoelementos de quotes */
	blockquote:before, blockquote:after, q:before, q:after {
		content: "";
		content: none;
	}

	/* Configuramos el texto que seleccionamos */
	/* ::-moz-selection {
	background-color: var(--negro);
	color: var(--blanco);
	}
	::selection {
	background-color: var(--negro);
	color: var(--blanco);
	} */

	/* Nivelamos problemas de tipografías y colocación de formularios */
	form, input, textarea, select, button, label {
		font-family: inherit;
		font-size: inherit;
		-webkit-hyphens: auto;
			-ms-hyphens: auto;
				hyphens: auto;
		background-color: transparent;
		color: inherit;
		display: block;
	/* opcional */
	/* -webkit-appearance: none;
		-moz-appearance: none;
			appearance: none; */
	}

	/* Reseteamos las tablas */
	table, tr, td {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Evitamos problemas con los SVG */
	svg {
		width: 100%;
		display: block;
		fill: currentColor;
	}

	/* Configuramos la tipografía para toda la web */
	body {
		min-height: 100vh;
		font-size: 100%;
		font-family: ${props => props.theme.fonts.text};
		color: ${props => props.theme.colors.text};
		background-color: ${props => props.theme.colors.background.normal};
	}
`