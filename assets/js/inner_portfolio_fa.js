import {header,footer,innerPortfolio_intro,innerPortfolio_picture,innerPortfolio_texts,container,galleryOfPictures,description,joinSection} from '../../Components/component.js'

document.body.style.textAlign = "right"
// const padding = document.getElementById("title") 

const head = new header
head.home = "صفحه اصلی"
head.about = "درباره ما"
head.contact = "تماس با ما"
head.services = "خدمات"
head.portfolio = "نمونه کار"

head.hrefLi0 = "main_fa.html"
head.hrefLi1 = "about_us_fa.html"
head.hrefLi2 = "services_fa.html"
head.hrefLi3 = "portfolio_fa.html"
head.hrefLi4 = "contact_us_fa.html"

head.func()

const intro = new innerPortfolio_intro
intro.title = "<h1 class='title color'> بهبود </h1>با راه حل های<br> ساده ما"
intro.func()

const picture = new innerPortfolio_picture
picture.func()

const text = new innerPortfolio_texts
text.title = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
text.subTitle1 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی"
text.subTitle2 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
text.func()

const parentOfCounters = document.createElement('section')
parentOfCounters.classList.add('counters-parent')
document.body.append(parentOfCounters)

const descript = new description
descript.title = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <br> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
descript.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده"
descript.author = 'مارک -'
descript.func()

const join = new joinSection
join.colorTitle = "از جدیدترین"
join.title = "اخبار مطلع شوید"
join.subTitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<br> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
join.privacyText = "ورود شما به معنای پذیرش شرایط متاتراین و قوانین حریم‌ خصوصی است"
join.emailPlaceholder = "آدرس ایمیل"
join.joinText = 'وارد شوید'
join.func()

const foot = new footer
foot.aHref1 = 'main.html'
foot.aHref2 = '#'
foot.aHref3 = 'about_us_fa.html'
foot.aHref4 = 'contact_us_fa.html'
foot.home = "صفحه اصلی"
foot.pricing = "قیمت گذاری"
foot.about = "درباره ما"
foot.contact = "ارتباط با ما"
foot.copyright = '&copy Betheme by Muffin group ; 2022'
foot.addressTitle = 'آدرس'
foot.address = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
foot.email = 'contact@us.com'
foot.websiteTitle = 'وبسایت'

foot.aTextIntoFooterRight = ['درباره ما','سیاست حفظ حریم خصوصی','تیم ما','ارتباط با ما']
foot.scrollToTop = 'اسکرول به بالا'
foot.func()
document.querySelector('footer').style.textAlign = 'right'


const counter = new container
counter.title = "افزایش بازدید کل در وب سایت"
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