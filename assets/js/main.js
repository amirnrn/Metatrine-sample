import {hompage_intro ,brandMarketingPictures ,offerSection ,infoSection,homepage_staticSection ,container ,joinSection, header, footer} from '../../Components/component.js'

const head = new header 
head.func()

const intro = new hompage_intro
intro.func()

const brandMarketingSection = new brandMarketingPictures
brandMarketingSection.func()

const offer = new offerSection
offer.picture = '<img src="assets/img/agency4-home-whyus-people.jpg">'
offer.title = '<h1 class="color title">What </h1>can <br> we offer you?'
offer.func()

const info = new infoSection
const button = document.createElement('a')
button.classList.add("button")
button.innerHTML = 'See all services'
info.func()
document.querySelector(".info-section").append(button)

const staticSection = new homepage_staticSection
staticSection.func()

const join = new joinSection
join.func()

const foot = new footer
foot.func()

const counter = new container
let staticDevide2 = document.querySelector('.homepage-static-section .right').offsetHeight / 2
let staticDevide4 = document.querySelector('.homepage-static-section .right').offsetHeight / 4
counter. pageYOffset_loadingPage = window.pageYOffset

if(window.innerWidth <= 850){
    let temp = document.querySelector('.homepage-static-section .right').offsetTop + (staticDevide4*3)
    counter.counterY = temp
}
else{
    let temp = document.querySelector('.homepage-static-section .right').offsetTop + staticDevide2
    counter.counterY = temp
}
counter.func()
document.querySelector('.homepage-static-section .right').append(document.querySelector('.container-section'))
