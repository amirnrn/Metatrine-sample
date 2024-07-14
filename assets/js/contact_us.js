import {Intro, infoSection ,formSection ,offerSection ,header, footer} from '../../Components/component.js'


const head = new header
head.func()

const intro = new Intro
intro.colortitle = 'Feel free'
intro.secColorTitle = 'to contact us'
intro.func()

const info = new infoSection
info.func()

const form = new formSection
form.func()

const offer = new offerSection 
offer.func()

const foot = new footer
foot.func()
