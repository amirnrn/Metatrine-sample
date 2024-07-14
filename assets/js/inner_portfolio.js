import {header,footer,innerPortfolio_intro,innerPortfolio_picture,innerPortfolio_texts,container,galleryOfPictures,description,joinSection} from '../../Components/component.js'

const head = new header
head.func()

const intro = new innerPortfolio_intro
intro.func()

const picture = new innerPortfolio_picture
picture.func()

const text = new innerPortfolio_texts
text.func()

const parentOfCounters = document.createElement('section')
parentOfCounters.classList.add('counters-parent')
document.body.append(parentOfCounters)

const gallery = new galleryOfPictures
gallery.func()

const descript = new description
descript.func()

const join = new joinSection
join.func()

const foot = new footer
foot.func()


const counter = new container
let staticDevide2 = document.querySelector('.counters-parent').offsetHeight
counter. pageYOffset_loadingPage = window.pageYOffset
window.addEventListener('scroll', ()=>{
    console.log('pageYoffset main = ' , window.pageYOffset)
})

if(window.innerWidth <= 850){
    let temp = document.querySelector('.counters-parent').offsetTop + staticDevide2
    counter.counterY = temp
}
else{
    let temp = document.querySelector('.counters-parent').offsetTop + staticDevide2
    console.log('temp = ' + temp)
    counter.counterY = temp
}
counter.func()
document.querySelector('.counters-parent').append(document.querySelector('.container-section'))


