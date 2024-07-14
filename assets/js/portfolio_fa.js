import {Intro , portfolio, joinSection, header, footer} from '../../Components/component.js'

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
intro.colortitle = "نمونه"
intro.secColorTitle = "کارهای مطالعات موردی ما"
intro.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
intro.func()

const port = new portfolio
port.title = ["چگونه می توانید فروش را با راه حل های ساده ما تنها در 1 ماه بهبود بخشید؟",
              "کدام کلمات کلیدی مهم ترین هستند، کنفرانس و مطالعه موردی",
              "شرکت متاتراین – مطالعه موردی کامل بهینه سازی سئو",
              "چطور کلمات کلیدی را برای مراقبت های پزشکی محلی تنظیم می کنیم",
              "چطور سئو می تواند به فروش بیشتر به مشتریان جدید کمک کند؟",
              "چرا سئو حرفه ای در دستگاه های تلفن همراه بسیار مهم است؟"
        ]
port.subTitle = [ "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
     ]
port.link = 'inner_portfolio_fa.html'
port.func()

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