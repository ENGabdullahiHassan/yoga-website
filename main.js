const humbergur = document.querySelector('.humbergur');
const mobilemenu = document.querySelector('.mobile-menu');
const icons = document.querySelectorAll('i');

humbergur.addEventListener("click", function(event) {

    const isVisible = mobilemenu.getAttribute ('data-visible');

    if (isVisible == "true") {

        mobilemenu.setAttribute('data-visible', "false");
        icons [0].setAttribute( 'data-visible', "true");
        icons [1].setAttribute('data-visible', "false");

    } else if(isVisible == "false") {

        mobilemenu.setAttribute('data-visible', "true");
        icons [0].setAttribute( 'data-visible', "false");
        icons [1].setAttribute('data-visible', "true");
    }
});
