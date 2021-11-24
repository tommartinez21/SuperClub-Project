const userButton = document.querySelector('.user-button');
const menu = document.querySelector('.menu')
const clickOut = document.querySelector('.clickOutMenu')
const html = document.querySelector('html')

const onClickUserButton = () => {
    clickOut.classList.toggle('abiertoClickOut')
    screen.width > 1072? menu.classList.toggle('abiertoD') : menu.classList.toggle('abiertoM')
};

const onClickFuera = (e) => {
        clickOut.classList.remove('abiertoClickOut')
        screen.width > 1072? menu.classList.remove('abiertoD') : menu.classList.remove('abiertoM')
    
};


userButton.addEventListener('click', onClickUserButton)

clickOut.addEventListener('click', onClickFuera)