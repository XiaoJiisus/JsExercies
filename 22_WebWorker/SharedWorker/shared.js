let conexiones = 0;
let mensaje = "";

onconnect = function(event) {
    conexiones += 1;
    const port = event.ports[0];
    port.onmessage = function(e) {
        mensaje = mensaje + ' ' + e.data;
        port.postMessage(mensaje + '<br> num conexiones activas: ' + conexiones);
    }
}