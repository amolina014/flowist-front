

function hexToRgb(hex) {
	// Remover el "#" al inicio si está presente
	if (hex.startsWith("#")) {
		hex = hex.slice(1);
	}

	// Convertir el hexadecimal a RGB
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return [r, g, b];
}

function calcularLuminancia(r, g, b) {
	// Normalizar los valores RGB dividiéndolos por 255
	r /= 255;
	g /= 255;
	b /= 255;

	// Calcular la luminancia
	const luminancia = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luminancia;
}

export function calculateFgColorBasedOnBgColor(hex) {
	// Convertir el color hexadecimal a RGB
	const rgb = hexToRgb(hex);

	// Utilizar la función colorDeTextoParaFondo() aquí con el valor RGB obtenido
	const luminancia = calcularLuminancia(...rgb);

	// Decidir el color del texto basado en la luminancia
	return luminancia > .5 ? '#000' : '#fff';
}

export const addAlphaToColor = (color = '', alpha = '9d') => {
	if (!color.startsWith('#')) return '#ffffff' + alpha;
	const hashRemoved = color.slice(1);

	if (hashRemoved.length != 3 && hashRemoved.length != 6) return '#ffffff' + alpha;
	if (hashRemoved.length === 3) color = '#' + hashRemoved.split('').map(eachLetter => (eachLetter + eachLetter)).join('');

	return color + alpha;
}