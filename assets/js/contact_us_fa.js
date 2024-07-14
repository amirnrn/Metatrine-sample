import {Intro, infoSection ,formSection ,offerSection ,header, footer} from '../../Components/component.js'

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
intro.colortitle = "با ما"
intro.secColorTitle = "تماس بگیرید"
intro.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
intro.func()

const info = new infoSection
info.title = "<h1 class='title color'> راه های ارتباطی </h1> برای تماس با ما"
info.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <br>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
info.columnTitleTextArray = ['بازاریابی شبکه مجازی','ساعت کاری','آدرس']
info.columnSubtitleTextArray = ['لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    ]
info.func()

const form = new formSection
form.title = "<div class='color title'> برای تماس سریع و آسان </div> از فرم زیر استفاده کنید"
form.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
form.name = "نام"
form.email = "ایمیل"
form.subject = "موضوع"
form.details = "توضیحات"
form.message = "متن"
form.button = 'ارسال'
form.func()

const offer = new offerSection 
offer.title = "<div class='color'> چرا </div>شرکت متاتراین؟"
offer.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
offer.liTextArray = ['با سابقه بیش از 15 سال در این صنعیت',
                    "یکی از بهترین رتبه بندی های در بازار -%98",
                    'تیم ما بسیار واجد شرایط است و ما همچنان در حال رشد هستیم',
                    'سابقه همکاری با چندین شرکت'
    ]
offer.func()

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
