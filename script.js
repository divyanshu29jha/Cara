const ham = document.getElementById('ham');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (ham) {
    ham.addEventListener('click',() => {
        nav.style.right="0px";
        // nav.style.background="red";
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.style.right="-500px";
    })
}


// if (ham) {
//     ham.addEventListener('click',() => {
//         nav.classList.add("active");
//     })
// }

// if (close) {
//     close.addEventListener('click',() => {
//         nav.classList.remove("active");
//     })
// }

