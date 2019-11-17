window.addEventListener('scroll', () => {
    let windowToTop = document.documentElement.scrollTop
    let navbar = document.querySelector('.dwNavbar')
    if (windowToTop > 0) {
        navbar.classList.add('dwNavbar--shadow')
    } else {
        navbar.classList.remove('dwNavbar--shadow')
        let navbarMobile = document.querySelector('.dwNavbar__mobile') 
        if (!navbarMobile.classList.contains('d-none')) {
            navbar.classList.add('dwNavbar--shadow')
        }
    }
})

const toggleMenu = () => {
    let navbarMobile = document.querySelector('.dwNavbar__mobile')
    let navbar = document.querySelector('.dwNavbar')
    navbarMobile.classList.toggle('d-none')
    if (!navbarMobile.classList.contains('d-none')) {
        navbar.classList.add('dwNavbar--shadow')
    } else {
        let windowToTop = document.documentElement.scrollTop
        if (windowToTop == 0) {
            navbar.classList.remove('dwNavbar--shadow')
        }
    }
    // navbarMobile.classList.toggle('dwNavbar__mobile--show')
}