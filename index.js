import cards from './templates/card.hbs'
import menu from './menu.json'

const btnTheme = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
const menuMarkup = document.querySelector('.js-menu')

const createMenuCardsMarkup = createMenuCards(menu)
menuMarkup.insertAdjacentHTML('beforeend', createMenuCardsMarkup)
makeDarkTheme()

const DARKTHEME = 'darktheme-on'

btnTheme.addEventListener('change', (e) => {

    body.classList.toggle('dark-theme')
    localStorage.setItem('DARKTHEME', e.target.checked);

})

function makeDarkTheme() {
    const savedValue = localStorage.getItem('DARKTHEME');
    if (savedValue === 'true') {
        body.classList.toggle('dark-theme')
        btnTheme.checked = true
    } 
}

function createMenuCards(menu) {
    return menu.map(cards).join('')
}