function onPageload () {
    // find nav button
    const button = document.querySelector('#menu-button')
    // find menu
    const menu = document.querySelector('#main')
    // add a listener for click on the button and execute function
    button.addEventListener("click", function() {
        //console.log("clicked!")
        if (menu.classList.contains("open") ) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    })
}
window.addEventListener("load", onPageload)