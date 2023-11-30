const button = document.getElementById("InterestedID");
const form = document.getElementById("formID");
const dark = document.getElementById("dark");
var opacityvalue = 0;
const change = document.getElementById("body");
const nav = document.getElementById("nav");
const dis = document.getElementById("dis");
button.addEventListener('click', function (event) {
    fadein(event);
});
dark.addEventListener('click',function(){
    change.setAttribute('data-bs-theme','dark');
    change.style.color='white';
    nav.classList.remove('bg-light');
})

function fadein(event) {
    event.preventDefault();
    console.log('clicked');

    function updateOpacity() {
        opacityvalue += 0.01;
        form.style.opacity = opacityvalue;

        if (opacityvalue < 1) {
            requestAnimationFrame(updateOpacity);
        }
    }

    updateOpacity();
}
function Display() {
    const currentdate = new Date().getTime();
    const targetDate = new Date('April 23, 2024 22:30:00').getTime();
    var diff = targetDate - currentdate;
    var min, sec, hour, day;

    if (diff > 0) {
        day = Math.floor(diff / (1000 * 60 * 60 * 24));
        hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        sec = Math.floor((diff % (1000 * 60)) / 1000);
    } else {
        day = hour = min = sec = 0;
    }

    var format = day + ' : ' + hour + ' : ' + min + ' : ' + sec;
    dis.innerHTML = format;
}

window.onload = function () {
    Display();
    setInterval(Display, 1000);
};





