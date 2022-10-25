onmessage = function(event) {
    const fechaN = new Date(event.data.fechaNacimiento);
    const hoy = new Date();
    const anios = (hoy.getYear() - fechaN.getYear());
    postMessage(anios);
}