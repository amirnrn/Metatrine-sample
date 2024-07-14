import {Intro, joinSection , dscptSection, listSection, featuresSection, staticSection, container, header, footer} from '../../Components/component.js'

const head = new header 
head.func()

const intro = new Intro
intro.colortitle = 'Portfolio'
intro.secColorTitle = 'Our case studies'
intro.subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
intro.func()

const dscpt = new dscptSection
dscpt.func()

const list_section = new listSection
list_section.func()

const feature = new featuresSection
feature.func()

const staticsection = new staticSection
staticsection.func()

const join = new joinSection
join.func()

const foot = new footer
foot.func()

const counter = new container
let staticDevide2 = document.querySelector('.static-section .left').offsetHeight / 2
let staticDevide4 = document.querySelector('.static-section .left').offsetHeight / 4
counter. pageYOffset_loadingPage = window.pageYOffset
window.addEventListener('scroll', ()=>{
    console.log('pageYoffset main = ' , window.pageYOffset)
})

if(window.innerWidth <= 850){
    let temp = document.querySelector('.static-section .left').offsetTop + (staticDevide4*3) - 100
    counter.counterY = temp
}
else{
    let temp = document.querySelector('.static-section .left').offsetTop + staticDevide2 
    counter.counterY = temp
}
counter.func()
const content = document.getElementById('content')  
content.append(document.querySelector('.container-section'))     //the counter section was created once in js components file 
//and now i imported it to this file and put the content of this section in CONTENT div by append