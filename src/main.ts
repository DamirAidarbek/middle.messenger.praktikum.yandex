import './style/index.scss'

import Handlebars from 'handlebars'
import * as Components from './components'
import * as Pages from './pages'

const root = document.getElementById('app')!

Object.entries(Components).forEach(([name, partial]) => {
    Handlebars.registerPartial(name, partial)
})

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname
    let content;

    switch (pathname) {
        case '/':
        case '/login':
            content = Handlebars.compile(Pages.LoginPage)({})
            break;
        case '/register':
            content = Handlebars.compile(Pages.RegisterPage)({})
            break;
        case '/profile':
            content = Handlebars.compile(Pages.ProfilePage)({})
            break;
    }

    root.innerHTML = content
})
