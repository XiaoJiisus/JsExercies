let i;

onmessage = function(event) {
    i = event.data;
}

setInterval(GeneraSecuencia, 300);

function GeneraSecuencia()
{
    if(i)
    {
        i *= 2;

        if(i > 1000)
            close();
        else
            postMessage(i);
    }
}