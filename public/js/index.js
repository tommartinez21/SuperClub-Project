const userButton = document.querySelector('.user-button');
const menu = document.querySelector('.menu');
const clickOut = document.querySelector('.clickOutMenu');
const html = document.querySelector('html');
const changeMode = document.querySelector('.changeMode');
 
const onClickUserButton = () => {
    clickOut.classList.toggle('abiertoClickOut')
    screen.width > 1072? menu.classList.toggle('abiertoD') : menu.classList.toggle('abiertoM')
    clickOut.classList.contains('abiertoClickOut')? html.style.overflow='hidden' : html.style.removeProperty('overflow')
};

const onClickFuera = () => {
        clickOut.classList.remove('abiertoClickOut')
        html.style.removeProperty('overflow')
        screen.width > 1072? menu.classList.remove('abiertoD') : menu.classList.remove('abiertoM')
    
};


userButton.addEventListener('click', onClickUserButton)

clickOut.addEventListener('click', onClickFuera)

changeMode.addEventListener('click', modoOscuro)
