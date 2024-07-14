import {Intro, joinSection , dscptSection, listSection, featuresSection, staticSection, container, header, footer} from '../../Components/component.js'

document.body.style.textAlign = "right"

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

const intro = new Intro
intro.colortitle = 'درباره ما'
intro.secColorTitle = 'درباره شرکت متاتراین'
intro.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
intro.func()

const dscpt = new dscptSection
dscpt.title = "چرا باید شرکت متاتراین<br>را انتخاب کنید؟"
dscpt.subTitle1 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی"
dscpt.subTitle2 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی"
dscpt.func()

const list_section = new listSection
list_section.li_Array = ['با سابقه بیش از 15 سال در این صنعیت',
                        "یکی از بهترین رتبه بندی های در بازار -%98",
                        'تیم ما بسیار واجد شرایط است و ما همچنان در حال رشد هستیم',
                        'سابقه همکاری با چندین شرکت'
            ]
list_section.func()

const feature = new featuresSection
feature.title = "<h1 class='color title'>با بهترین</h1>های سئو آشنا شوید"
feature.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
feature.p_Text_Array = ['امنیت پیشرفته',
                        'نتایج سریع',
                        'همه در یک جا',
                        'گواهی ضمانت',
        ]
feature.buttonText = 'ارتباط با ما'
feature.func()

const staticsection = new staticSection
staticsection.title = "<h1 class='color title'>این اعداد</h1>نماینده ما هستند"
staticsection.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
staticsection.buttonText = 'ارتباط با ما'
staticsection.func()

const join = new joinSection
join.colorTitle = "از جدیدترین"
join.title = "اخبار مطلع شوید"
join.subTitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<br> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
join.privacyText = "ورود شما به معنای پذیرش شرایط متاتراین و قوانین حریم‌ خصوصی است"
join.emailPlaceholder = "ادرس ایمیل"
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