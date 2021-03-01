window.onload = init;

let imgfrtJavascript;
let imgbckJavascript;

function init()
{
    imgbckJavascript = document.getElementById('imgbck');
    imgfrtJavascript = document.getElementById('imgfrt');
    fadeOut(imgfrtJavascript,3000);
}

function fadeOut(el, duration)
{
    let s = el.style;
    let step = 25/duration;
    let factor = 1;

    function fade()
    {
        if(s.opacity < 0 && factor == 1)
        {
            console.log("1/2");
            factor = -1;
            setTimeout(fade, 25);
        }

        else if(s.opacity > 1 && factor == -1)
        {
            console.log("2/2");
            factor = 1;
            fade();
        }
        else
        {
            s.opacity = s.opacity - (step*factor)
            setTimeout(fade, 25);
        }
    }
    fade();
}

