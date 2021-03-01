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
    s.opacity = 1;

    function fade()
    {
        console.log('opacity: '+s.opacity);
        if(s.opacity > 0)
        {
            s.opacity = s.opacity - step;
            setTimeout(fade, 25);
        }
    }
    fade();
}

