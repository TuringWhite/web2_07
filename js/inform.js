var span = document.getElementById("span");
var now;
setInterval(function () {
    now = parseInt(getStyle(span, "right"));
    console.log(now);
    span.style.right = now + 1 + "px";
    if (now === 1500)
        span.style.right = "-410px";
}, 2)