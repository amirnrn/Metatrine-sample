import {Intro, content ,brandMarketingSection ,brandMarketingPictures ,joinSection ,header ,footer} from '../../Components/component.js'


const head = new header 
head.func()

const intro = new Intro
intro.colortitle = 'Our services'
intro.secColorTitle = 'See what we do'
intro.func()

const holder = new content
holder.func()

const brandMarketing = new brandMarketingSection
brandMarketing.func()

const pictures = new brandMarketingPictures
pictures.func()

const picturesPlace = document.querySelector('.brand-marketing')
picturesPlace.append(document.querySelector('.brand-marketing-pictures'))

const join = new joinSection
join.func()

const foot = new footer
foot.func()

