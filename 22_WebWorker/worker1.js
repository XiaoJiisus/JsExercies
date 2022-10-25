let i = 1;

setInterval(Multiplica, 300);

function Multiplica()
{
    i *= 2;
    postMessage(i);
}