import './style/index.scss'

import Handlebars from 'handlebars'
import * as Components from './components'
import * as Pages from './pages'

const root = document.getElementById('app')!

Object.entries(Components).forEach(([name, partial]) => {
    Handlebars.registerPartial(name, partial)
})

function navigate(path: string) {
    let content = ''

    switch (path) {
        case '/':
            content = Handlebars.compile(Pages.NavigatePage)(null)
            break;
        case '/login':
            content = Handlebars.compile(Pages.LoginPage)(null)
            break;
        case '/register':
            content = Handlebars.compile(Pages.RegisterPage)(null)
            break;
        case '/profile':
            content = Handlebars.compile(Pages.ProfilePage)(null)
            break;
        case '/edit-profile':
            content = Handlebars.compile(Pages.EditProfilePage)(null)
            break;
        case '/edit-password':
            content = Handlebars.compile(Pages.EditPasswordPage)(null)
            break;
        case '/chat':
            content = Handlebars.compile(Pages.ChatPage)(null)
            break;
        case '/404':
            content = Handlebars.compile(Pages.NotFoundPage)(null)
            break;
        case '/500':
            content = Handlebars.compile(Pages.ErrorPage)(null)
            break;
    }

    root.innerHTML = content
}

Handlebars.registerHelper('navigate', (path: string) => {
    navigate(path)
})

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname

    navigate(pathname)

    const navigateButtons = document.querySelectorAll('.nav-buttons')

    navigateButtons?.forEach((btn) => {
        btn.addEventListener('click', () => {
            navigate(btn.getAttribute('data-link')!)
        })
    })
})
