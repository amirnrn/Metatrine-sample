import {Intro, content ,brandMarketingSection ,brandMarketingPictures ,joinSection ,header ,footer} from '../../Components/component.js'

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
intro.colortitle = 'خدمات ما'
intro.secColorTitle = 'مشاهده سرویس های متاتراین'
intro.subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
intro.func()

const holder = new content
holder.firstSectionTitle = "بازاریابی شبکه های <br> اجتماعی"
holder.secondSectionTitle = "بهینه سازی <br> زمان"
holder.thirdSectionTitle = "مشتری و <br> هدف گذاری فروش"
holder.firstSectionliTextArray = ["ما بیش از 15 سال تجربه در صنعت داریم" , "یکی از بهترین رتبه بندی های در بازار -%98" , "تیم ما بسیار واجد شرایط هست و ما هنوز در حال رشد هستیم"]
holder.secondSectionliTextArray = ["ما بیش از 15 سال تجربه در صنعت داریم" , "یکی از بهترین رتبه بندی های در بازار -%98" , "تیم ما بسیار واجد شرایط هست و ما هنوز در حال رشد هستیم"]
holder.thirdSectionliTextArray = ["ما بیش از 15 سال تجربه در صنعت داریم" , "یکی از بهترین رتبه بندی های در بازار -%98" , "تیم ما بسیار واجد شرایط هست و ما هنوز در حال رشد هستیم"]
holder.func()
const brandMarketing = new brandMarketingSection
brandMarketing.title = "همکاری با شرکت های زیر <h1 class='color title'> در سال های گذشته </h1>"

brandMarketing.func()

const pictures = new brandMarketingPictures
pictures.func()

const picturesPlace = document.querySelector('.brand-marketing')
picturesPlace.append(document.querySelector('.brand-marketing-pictures'))

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


