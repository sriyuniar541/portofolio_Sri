//navbar-fixed 
window.onscroll = function () { //ketika windows di skrol ke bawah
    const header = document.querySelector('header')
    const fixNav = header.offsetTop //jarak header

    if(window.pageYOffset > fixNav) { //pageYOffset jarak windows yang di skrol
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

//humberger
const humberger = document.querySelector('#humberger')
const navMenu = document.querySelector('#nav-menu')

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active')
    navMenu.classList.toggle('hidden') //toggle membuat kelas yang ada jadi tidak ada/ sebaliknya
})