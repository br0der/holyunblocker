// var h5gms = {
//     "dino": "/archive/dino/index.html",
//     "droom": "/archive/g/adarkroom/index.html",
//     "doodle": "/archive/g/doodle-jump/index.html",
//     "ducklife": "/archive/g/ducklife/index.html",
//     "ducklife2": "/archive/g/ducklife2/index.html",
//     "ducklife3": "/archive/g/ducklife3/index.html",
//     "ducklife4": "/archive/g/ducklife4/index.html",
//     "firewater": "/archive/g/firewater/index.html",
//     "friendlyfire": "/archive/g/friendlyfire/index.html",
//     "slope": "/archive/g/slope/index.html",
//     "gopher": "/archive/gopher/index.html",
//     "mc": "/archive/g/mcjs.html",
//     "sna": "/archive/g/snake/index.html",
//     "retro": "/archive/g/retrohaunt/index.html",
//     "cookiec": "/archive/g/cookieclicker/index.html",
//     "evilg": "/archive/g/evilglitch/index.html",
//     "flab": "/archive/g/flappybird/index.html",
//     "bobb": "/archive/g/bounceback/index.html",
//     "chroi": "/archive/g/chromaincident/index.html",
//     "sleepb": "/archive/g/sleepingbeauty/index.html",
//     "tet": "/archive/g/tetris/index.html",
//     "r3": "/archive/g/run3/index.html",
//     "pk": "/archive/g/pacman/index.html",
//     "thepond": "/archive/g/pond/index.html",
//     "gameoff": "/archive/g/house/index.html",
//     "thehouse": "/archive/g/househorror/index.html",
//     "tzfe": "/archive/g/2048/index.html",
//     "aster": "/archive/g/asteroids/index.html",
//     "bre": "/archive/g/breaklock/index.html",
//     "backc": "/archive/g/backcountry/index.html",
//     "backout": "/archive/g/breakout/index.html",
//     "ches": "/archive/g/chess/index.html",
//     "nsshaft": "/archive/g/nsshaft/index.html",
//     "connect3": "/archive/g/connect3/index.html",
//     "towerm": "/archive/g/towermaster/index.html",
//     "partclick": "/archive/g/particle-clicker/index.html",
//     "geodash": "/archive/g/geometrydash/index.html",
//     "hex": "/archive/g/hextris/index.html",
//     "astr": "/archive/g/astray/index.html",
//     "kon": "/archive/g/konnekt/index.html",
//     "pushba": "/archive/g/pushback/index.html",
//     "unr": "/archive/g/underrun/index.html",
//     "race": "/archive/g/racer/index.html",
//     "x142": "/archive/g/xx142-b2exe/index.html",
//     "faball": "/archive/g/factoryballsforever/index.html",
//     "trimps": "/archive/g/trimps/index.html",
//     "sm64": "/archive/g/sm64/index.html#nolag",
//     "zork": "/archive/g/zork1/index.html"
// };

// h5gms_array = Object.keys(h5gms);

//Missing a dark room, osu, last train home, pacman, the pond, the house, ns shaft, particle clicker, astray, what the road brings, zork clone, pickup prison, trimps, 
$ = e => document.getElementById(e) || [];
$('vos').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('wwdw.', '').split(/[/?#]/)[0];
    window.location.href =  "/vibeOS/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('dino').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/dino/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('gopher').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/gopher/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('mc').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/mcjs.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('sna').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/snake/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('sm64').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/sm64/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('retro').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/retrohaunt/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('cookiec').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/cookieclicker/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('evilg').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/evilglitch/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('flab').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/flappybird/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('bobb').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/bounceback/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('chroi').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/chromaincident/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('sleepb').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/sleepingbeauty/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('tet').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/tetris/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('r3').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/run3/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('pk').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/pacman/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('thepond').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/pond/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('gameoff').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/house/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('thehouse').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/househorror/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('tzfe').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/2048/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('aster').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/asteroids/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('bre').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/breaklock/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('backc').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/backcountry/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('backout').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/breakout/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('ches').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/chess/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('nsshaft').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/nsshaft/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('connect3').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/connect3/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('towerm').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/towermaster/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('partclick').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/particle-clicker/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('geodash').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/geometrydash/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('hex').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/hextris/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('astra').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/astray/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //
$('kon').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/konnekt/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('pushba').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/pushback/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('unr').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/underrun/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('race').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/racer/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; 
$('x142').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/xx142-b2exe/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
};
$('faball').onclick = function() {
    var frame = document.getElementById("frame");
    var url = $('url').value;
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    window.location.href =  "/archive/g/factoryballsforever/index.html";
    frame.style['visibility'] = "visible";
    frame.setAttribute('allow', 'fullscreen');
    frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    document.cookie = 'oldsmobile=badcar; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
    document.getElementById('frame').contentWindow.focus();
    return false;
}; //

// window.onload = function() {
//     $('url').focus();
// }
// for (let i = 0; i < h5gms_array.length; i++) {
//     tryGetElement(h5gms_array[i]).parentElement.onclick = function(e) {
//         e.preventDefault();
//         goFrame(h5gms[h5gms_array[i]], h5gms[h5gms_array[i]].split("#").slice(-1)[0] == "nolag");
//     }
// }
