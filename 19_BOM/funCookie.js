function ConfiguracionCookie(nombre, valor, duracionMeses)
{
    let ultimaVisita = new Date();
    ultimaVisita.setMonth(ultimaVisita.getMonth() + duracionMeses);

    let caducidad = ultimaVisita.toUTCString();
    document.cookie = nombre + '=' + valor + ';expires =' + caducidad + ';path=/';
}

function LeerCookie(nombre)
{
    let nombreCookie = nombre + '=';
    let cookieDecodificado = decodeURIComponent(document.cookie);
    let ca = cookieDecodificado.split(';');

    for(let i = 0; i < ca.length; i++)
    {
        let c = ca[i];
        c = c.trim();

        /*while(c.charAt(0) == '') //para IE8 ya que no reconoce trim()
        {
            c = c.substring(1);
        }*/        

        if(c.indexOf(nombreCookie) == 0)
            return c.substring(nombreCookie.length, c.length);
    }

    return '';
}