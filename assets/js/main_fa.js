import {hompage_intro ,brandMarketingPictures ,offerSection ,infoSection,homepage_staticSection ,container ,joinSection, header, footer} from '../../Components/component.js'

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

const intro = new hompage_intro
intro.colortitle = "راه حل های آنلاین برای"
intro.secColorTitle = "تقویت وبسایت شما"
intro.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
intro.button = 'سرویس های ما'
intro.secButton = 'اطلاعات بیشتر'
intro.question = 'سوال دارید ؟'
intro.socialSectionText = 'بازدید از شبکه های اجتماعی ما'
intro.func()

const brandMarketingSection = new brandMarketingPictures
brandMarketingSection.func()

const offer = new offerSection
offer.picture = '<img src="assets/img/agency4-home-whyus-people.jpg">'
offer.title = "<h1 class='title color'> ما چه خدماتی <br> </h1> برای ارائه داریم؟"
offer.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
offer.liTextArray = ['با سابقه بیش از 15 سال در این صنعیت',
                    "یکی از بهترین رتبه بندی های در بازار -%98",
                    'تیم ما بسیار واجد شرایط است و ما همچنان در حال رشد هستیم',
                    'سابقه همکاری با چندین شرکت'
        ]

offer.func()

const info = new infoSection
const button = document.createElement('a')
button.classList.add("button")
button.href = "services_fa.html"
button.innerHTML = 'خدمات ما'
info.title = "راه های ارتباطی <h1 class='color title'> برای تماس با ما </h1>"
info.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
info.columnTitleTextArray = ['بازاریابی شبکه های مجازی','ساعت کاری','آدرس']
info.columnSubtitleTextArray = ['لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    ]
info.func()
document.querySelector(".info-section").append(button)

const staticSection = new homepage_staticSection
staticSection.title = "متقاعد کردن شما<h1 class='color title'> آمار برای </h1>"
staticSection.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
staticSection.func()

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

