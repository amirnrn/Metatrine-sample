import {Intro , portfolio, joinSection, header, footer} from '../../Components/component.js'

const head = new header
// head.hrefLi0 = '../main/main.html'
// head.hrefLi1 = '../about us/about_us.html'
// head.hrefLi2 = '../services/services.html'
// head.hrefLi3 = '../portfolio/portfolio.html'
// head.hrefLi3 = '../contact us/contact_us.html'
head.func()

const intro = new Intro
intro.func()

const port = new portfolio
port.func()

const join = new joinSection
join.func()

const foot = new footer
foot.aHref1 = '../main.html'
foot.aHref2 = '#'
foot.aHref3 = '../about us/about_us.html'
foot.aHref4 = '#'
foot.func()
