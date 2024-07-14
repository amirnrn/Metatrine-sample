class header{   //this is the header part of site and it must be import in all pages.
    home = 'Home'
    about = 'About us'
    services = 'Services'
    portfolio = 'Portfolio'
    contact = 'Contact'

    hrefLi0 = "main.html"
    hrefLi1 = "about_us.html"
    hrefLi2 = "services.html"
    hrefLi3 = "portfolio.html"
    hrefLi4 = "contact_us.html"

    func = function (){
        let li = []
        let a = []

        let hamburgerLi = []
        let hamburgerA = []
        const headerSection = document.createElement('header');
        const logo = document.createElement('div');
        logo.classList.add('logo')
        logo.innerHTML = '<img src="assets/img/Logo.png" alt="MetaTrine Logo" Height="" width="">'

        const nav = document.createElement('nav')
        const ul = document.createElement('ul')

        for(let i = 0; i <= 4; i++) {
            li[i] = document.createElement('li')
            a[i] = document.createElement('a')

            ul.append(li[i])
            li[i].append(a[i])
        }

        a[0].classList.add('home')
        a[0].href = this.hrefLi0
        a[1].href = this.hrefLi1
        a[2].href = this.hrefLi2
        a[3].href = this.hrefLi3
        a[4].href = this.hrefLi4

        a[0].textContent = this.home
        a[1].textContent = this.about
        a[2].textContent = this.services
        a[3].textContent = this.portfolio
        a[4].textContent = this.contact



        document.body.append(headerSection)
        headerSection.append(logo)
        headerSection.append(nav)
        nav.append(ul)



        
        headerSection.style.zIndex = '999'
        window.onscroll = function() {
            if(window.pageYOffset > 100) {
                headerSection.classList.add('header-fixed')
                headerSection.style.zIndex = '999'
            } 
            else {
                headerSection.classList.remove('header-fixed');
            }
        }
        
        let count = 0 	//if count == off, it means we click on the hamburger menu and if count == even, it means we click on hamburger menu again
                        //and it should be closed
        
        nav.addEventListener('click', () => {
            count++
            if(count % 2 == 0){
                ul.classList.remove('hamburger-ul-show')
            }
            else{
                ul.classList.add('hamburger-ul-show')
            }
        })  
    }

}

class footer{   //this is the footer part of site and it must be import in all pages.
    home = "Home"
    pricing = "Pricing"
    about = "About"
    contact = "contact"
    copyright = '&copy Betheme by Muffin group ; 2022'
    addressTitle = 'Address'
    address = 'Level 13.2 Elizabeth st, <br> Melborne, Victoria 3000,<br>Australia'
    email = 'contact@us.com'
    websiteTitle = 'Website'

    aTextIntoFooterRight = ['About us','Privacy Policy','Our team','contact']
    scrollToTop = 'Scroll to top'
    aHref1 = 'main.html'
    aHref2 = '#'
    aHref3 = 'about_us.html'
    aHref4 = 'contact_us.html'

    func = function(){
        let aIntoFooterRight = []

        const footer = document.createElement('footer')
        const footerLeft = document.createElement('div')
        footerLeft.classList.add('footer-left', 'footer-classes')

        const footerBar = document.createElement('div')
        footerBar.classList.add('footer-bar')
        footerBar.innerHTML = '<img src="assets/img/Logo.png" alt="MetaTrine Logo" height="" width="">'

        const footerLinks = document.createElement('p')
        footerLinks.classList.add('footer-links')

        const a1 = document.createElement('a')
        a1.href = this.aHref1
        a1.textContent = this.home

        const a2 = document.createElement('a')
        a2.href = this.aHref2
        a2.textContent = this.pricing

        const a3 = document.createElement('a')
        a3.href = this.aHref3
        a3.textContent = this.about

        const a4 = document.createElement('a')
        a4.href = this.aHref4
        a4.textContent = this.contact

        const footerCompanyName = document.createElement('div')
        footerCompanyName.classList.add('footer-company-name')
        footerCompanyName.textContent = this.copyright


        const footerCenter = document.createElement('div')
        footerCenter.classList.add('footer-center' , 'footer-classes')

        const div = document.createElement('div')
        const divP = document.createElement('p')
        const span = document.createElement('span')

        span.textContent = this.addressTitle
        divP.innerHTML = this.address
        const secondDiv = document.createElement('div')
        const secondDivP = document.createElement('p')
        const aTagIntoP = document.createElement('a')
        aTagIntoP.href = 'mailto:anemail@gmail.com'
        aTagIntoP.textContent = this.email

        const footerRight = document.createElement('div')
        footerRight.classList.add('footer-right', 'footer-classes')

        const pFooterCompanyAbout = document.createElement('p')
        pFooterCompanyAbout.classList.add('footer-company-about')

        const spanIntoP = document.createElement('span')
        spanIntoP.textContent = this.websiteTitle
        

        for(let i = 0; i < 4; i++) {
            aIntoFooterRight[i] = document.createElement('a')
            aIntoFooterRight[i].textContent = this.aTextIntoFooterRight[i]
        }
        aIntoFooterRight[0].href = this.aHref3
        aIntoFooterRight[1].href = this.aHref2
        aIntoFooterRight[2].href = this.aHref3
        aIntoFooterRight[3].href = this.aHref4

        const button = document.createElement('button')
        button.classList.add('scroll')
        button.textContent = this.scrollToTop
        button.addEventListener('click', () =>{
            window.scrollTo({top: 0, behavior: 'smooth'});
        })

        document.body.append(footer)
        footer.append(footerLeft)
        footerLeft.append(footerBar)
        footerLeft.append(footerLinks)
        footerLinks.append(a1,a2,a3,a4)
        footerLeft.append(footerCompanyName)

        footer.append(footerCenter)
        footerCenter.append(div)
        div.append(span)
        div.appendChild(divP)
        footerCenter.append(secondDiv)
        secondDiv.append(secondDivP)
        secondDivP.append(aTagIntoP)

        footer.append(footerRight)
        footerRight.append(pFooterCompanyAbout)
        pFooterCompanyAbout.append(spanIntoP)
        footerRight.append(aIntoFooterRight[0],aIntoFooterRight[1],aIntoFooterRight[2],aIntoFooterRight[3])
        footerRight.append(button)
    }
}

//portfolio page's sections
class Intro{    //this is the intro part of site and it must be import in all pages. except innerPortfolio page

    colortitle = 'Portfolio'
    secColorTitle = 'Our case studies'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'

    func = function(){
        const introSection = document.createElement('section');
        introSection.classList.add('intro')

        const left = document.createElement('div');
        left.classList.add('left')
        
        const colorTitle = document.createElement('h1')
        colorTitle.classList.add('color','title')
        colorTitle.innerHTML = this.colortitle
        
        const secColorTitle = document.createElement('h1')
        secColorTitle.classList.add('title', 'sec-color')
        secColorTitle.innerHTML = this.secColorTitle

        const subTitle = document.createElement('p')
        subTitle.classList.add('subtitle')
        subTitle.innerHTML = this.subtitle

        document.body.appendChild(introSection)
        introSection.appendChild(left)
        left.append(colorTitle,secColorTitle,subTitle)
    }
}

class portfolio{    //this is the second section (portfolio section, Portfolios are located in this section ) of Portfolio page

    title = ['How you can improve sale with our simple solutions in just 1 month?',
            'Which keywords are the most important, conference and case study',
            'Spasio Company – full case study of seo optimisation',
            'How we set up key words for local medical healthcare',
            'How SEO can help with selling more and more to new clients?',
            'Why proffesional SEO is so important on mobile devices?'
        ]
    
    subTitle = ['Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.',
                'Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.',
                'Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.',
                'Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.',
                'Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.',
                'Quisque id nulla finibus, semper odio nec, accumsan purus. Sed at dolor ut purus congue congue vel non metus. Phasellus non interdum lacus, in vulputate purus.'   
            ]
    link = 'inner_portfolio.html'
    func = function(){
        let item = []
        let itemPicture = []
        let item_innerTitle = []
        let title_Place = []
        let subTitlePlace = []
        const portfolioSection = document.createElement('section');
        portfolioSection.classList.add('portfolio')

        for(let i = 1; i <=6; i++){
            item[i] = document.createElement('div')
            item[i].classList.add('portfolio-item')

            itemPicture[i] = document.createElement('div')
            itemPicture[i].innerHTML = `<img src="assets/img/agency4-portfolio-single${i}.jpg" alt="" height="" width="">`
            itemPicture[i].classList.add('item-picture')

            title_Place[i] = document.createElement('a')
            title_Place[i].href = this.link
            title_Place[i].classList.add('item-title' , 'color')
            title_Place[i].textContent = this.title[i-1]

            subTitlePlace[i] = document.createElement('div')
            subTitlePlace[i].classList.add('item-subtitle', 'subtitle')
            subTitlePlace[i].textContent = this.subTitle[i-1]
            
            
            item[i].append(itemPicture[i])
            item[i].append(title_Place[i])
            item[i].append(subTitlePlace[i])
            portfolioSection.append(item[i])
        }

        document.body.appendChild(portfolioSection)
    }
}

class joinSection{  //this is the third section (join section, last section) of Portfolio page, and also we need this section in
                    //all our pages except contact us

    colorTitle = 'Don’t miss our'
    title = 'future updates!'
    subTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    privacyText = 'By signing up you automaticaly accept our Privacy Policy and Terms of use'
    emailPlaceholder = 'Email address'
    joinText = 'join'

    func = function (){
        const signSection = document.createElement('section');
        signSection.classList.add('sign-up-section')
        
        const container = document.createElement('div')
        container.classList.add('container')

        const textColor = document.createElement('h1')
        textColor.classList.add('color','title')
        textColor.textContent = this.colorTitle

        const text = document.createElement('h1')
        text.classList.add('title')
        text.textContent = this.title

        const subtitle = document.createElement('div')
        subtitle.classList.add('subtitle')
        subtitle.innerHTML = this.subTitle

        const inputPlace = document.createElement('div')
        inputPlace.classList.add('input-place')
        
        inputPlace.innerHTML = `<input type="text" placeholder="${this.emailPlaceholder}"> <button class="join-button">${this.joinText}</button>`
        
        const privacy = document.createElement('p')
        privacy.classList.add('privacy')
        privacy.textContent = this.privacyText

        document.body.append(signSection)
        signSection.append(container)
        container.append(textColor,text,subtitle,inputPlace,privacy)
    }
}

//inner portfolio page's sections
class innerPortfolio_intro{     //innerPortfolio section of this section. i didnt use Intro class for this section cause 
                                //these are slightly different

    title = 'Which <h1 class="color title">keywords</h1> <br>are the most important'

    func = function(){
        const firstSection = document.createElement('section')
        firstSection.classList.add('intro')

        const text = document.createElement('div')
        text.classList.add('text', 'title', 'sec-color')
        text.innerHTML = this.title


        document.body.append(firstSection)
        firstSection.append(text)
    }
}

class innerPortfolio_picture{ //second section of innerPortfolio page
    func = function(){
        const pictureSection = document.createElement('section')    
        pictureSection.classList.add('second-section-picture')

        const container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML = '<img src="assets/img/agency4-aboutus-image.jpg" alt="agency4-aboutus-image" height="" width="">'


        document.body.append(pictureSection)
        pictureSection.append(container)
    }
}

class innerPortfolio_texts{     //third section of innerPortfolio page
    title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque euismod lorem, eget sodales odio tempor quis'
    subTitle1 = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam mauris velit, consequat vitae ante vel, ornare dapibus mi. Curabitur et vestibulum tortor.Quisque magna nibh, faucibus eu vehicula id, ornare ut neque. Aenean suscipit massa sagittis ipsum egestas molestie. Proin rutrum tortor iaculis urna varius, nec consequat ipsum congue. Quisque non ex eros.'
    subTitle2 = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam mauris velit, consequat vitae ante vel, ornare dapibus mi. Curabitur et vestibulum tortor.Quisque magna nibh, faucibus eu vehicula id, ornare ut neque.'

    func = function(){
        const textSection = document.createElement('section')
        textSection.classList.add('text-section')
        
        const container = document.createElement('div')
        container.classList.add('container')

        const titleOfSection = document.createElement('h2')
        titleOfSection.classList.add('third-section-title','pre-title')
        titleOfSection.innerHTML = this.title

        const subTitleOfSection = document.createElement('div')
        subTitleOfSection.classList.add('third-section-subtitle')

        const subtitle1 = document.createElement('p')
        subtitle1.classList.add('subtitle')
        subtitle1.innerHTML = this.subTitle1
  
        const subtitle2 = document.createElement('p')
        subtitle2.classList.add('subtitle')
        subtitle2.innerHTML = this.subTitle2     



        document.body.append(textSection)
        textSection.append(container)
        container.append(titleOfSection)
        container.append(subTitleOfSection)
        subTitleOfSection.append(subtitle1)
        subTitleOfSection.append(subtitle2)
    }
}

class container{    //forth section of innerPortfolio page, counter
    title = 'Increase of total visit on website'    
    counterY
    pageYOffset_loadingPage
    func = function(){

        // container variables
        let containerChild = []
        let textContainerChild = []
        let stopWindowOnscroll = true
        let i = 0
        let i2 = 0
        let i3 = 0

        const containerSection = document.createElement('section')
        containerSection.classList.add('container-section')

        for(let i = 0; i < 3; i++){
            containerChild[i] = document.createElement('div')
            containerChild[i].classList.add('container-child')

            containerChild[i].textContent = '0%'

            textContainerChild[i] = document.createElement('p')
            textContainerChild[i].textContent = this.title
            textContainerChild[i].classList.add('text-container', 'subtitle')
            
            containerSection.append(containerChild[i])
        }

        for(let i = 0; i < 3; i++){
            containerSection.append(textContainerChild[i])      //cant be used in the first for itteration becuase we need to append 
                                                                //textContainerChild after all containerChild
        }

        this.counterY = this.counterY+150
        if(this.pageYOffset_loadingPage <= this.counterY){
            window.addEventListener('scroll', () => {
                if(window.pageYOffset + window.innerHeight >= this.counterY){
                    if(stopWindowOnscroll){
                        const x = setInterval(function(){
                            i++
                            containerChild[0].innerHTML = i + '%'
                            if(i == 64){               
                                clearInterval(x)
                            }
                        },30)  
        
                        const x2 = setInterval(function(){
                            i2++
                            containerChild[1].innerHTML = i2 + '%'
                            if(i2 == 38){
                                clearInterval(x2)
                            }
                        },30)
        
                        const x3 = setInterval(function(){
                            i3++
                            containerChild[2].innerHTML = i3 + '%'
                            if(i3 == 49){
                                clearInterval(x3)
                            }
                        },30)
                        stopWindowOnscroll = false
                    }
                } 
            })
        }
        else if(this.pageYOffset_loadingPage > this.counterY){
            window.addEventListener('scroll', () => {
                if(window.pageYOffset < this.counterY){
                    
                    if(stopWindowOnscroll){
                        const x = setInterval(function(){
                            i++
                            containerChild[0].innerHTML = i + '%'
                            if(i == 64){               
                                clearInterval(x)
                            }
                        },30)  
        
                        const x2 = setInterval(function(){
                            i2++
                            containerChild[1].innerHTML = i2 + '%'
                            if(i2 == 38){
                                clearInterval(x2)
                            }
                        },30)
        
                        const x3 = setInterval(function(){
                            i3++
                            containerChild[2].innerHTML = i3 + '%'
                            if(i3 == 49){
                                clearInterval(x3)
                            }
                        },30)
                        stopWindowOnscroll = false
                    }
                } 
            })
        }


        document.body.append(containerSection)
    }
}

class galleryOfPictures{    //fitfh section of innerPortfolio page, there are just 4 pictures
    
    func = function(){
        let picturesArray = ['<img src="assets/img/inner portfolio1.jpg" alt="" height="" width="">',
                             '<img src="assets/img/inner portfolio2.jpg" alt="" height="" width="">',
                             '<img src="assets/img/inner portfolio3.jpg" alt="" height="" width="">',
                             '<img src="assets/img/inner portfolio4.jpg" alt="" height="" width="">'
                            ]
        let picturesItem = []

        const pictureSection = document.createElement('section')
        pictureSection.classList.add('fifth-section-pictures')

        for(let i = 0; i < 4; i++){
            picturesItem[i] = document.createElement('div')
            picturesItem[i].innerHTML = picturesArray[i]
            picturesItem[i].classList.add('pictures')

            pictureSection.append(picturesItem[i])
        }
        document.body.append(pictureSection)
    }
}

class description{  //sixth section of innerPortfolio page and also the last one, there is some texts,
    title = '“Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit. <br> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”'
    subtitle = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam mauris velit, consequat vitae ante vel, ornare dapibus mi. Curabitur et vestibulum tortor.Quisque magna nibh, faucibus eu vehicula id, ornare ut neque. Aenean suscipit massa sagittis ipsum egestas molestie. Proin rutrum tortor iaculis urna varius, nec consequat ipsum congue. Quisque non ex eros.'
    author = '- Mark Enlargent'
    func = function(){
        const descriptionSection = document.createElement('section')
        descriptionSection.classList.add('sixth-section-description')

        const leftPart = document.createElement('div')
        leftPart.classList.add('left-part')

        const leftPartTop = document.createElement('h2')
        leftPartTop.classList.add('left-part-top','pre-title' , 'sec-color')
        leftPartTop.innerHTML = this.title

        const leftPartBottom = document.createElement('div')
        leftPartBottom.classList.add('left-part-bottom', 'subtitle')
        leftPartBottom.innerHTML = this.author

        const rightPart = document.createElement('div')
        rightPart.classList.add('right-part' , 'subtitle')
        rightPart.innerHTML = this.subtitle

        document.body.append(descriptionSection)
        descriptionSection.append(leftPart,rightPart)
        leftPart.append(leftPartTop,leftPartBottom)
    }
}

//About us page's sections
class dscptSection{     //in this section we talk about why they should choose us ? (second section of About us page)
    title = '<h1 class="sec-color title">Why is it best</h1>to choose our<br>company?'
    subTitle1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat metus quis risus ultrices fermentum. Sed consequat, arcu eget iaculis tincidunt, urna ligula tristique felis, eu ultrices sapien ipsum quis ante. Nam nec pellentesque diam. Etiam luctus non quam finibus pretium. Curabitur id interdum ante. Proin at viverra diam. Cras et risus a felis porttitor ullamcorper sit amet vitae arcu.'
    subTitle2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat metus quis risus ultrices fermentum. Sed consequat, arcu eget iaculis tincidunt, urna ligula tristique felis, eu ultrices sapien ipsum quis ante. Nam nec pellentesque diam. Etiam luctus non quam finibus pretium. Curabitur id interdum ante.'

    func = function(){
        const section = document.createElement('section')
        section.classList.add('dscpt-section')

        const titlePlace = document.createElement('h1')
        titlePlace.classList.add('top','sec-color' , 'title')
        titlePlace.innerHTML = this.title

        const subTitlePlace = document.createElement('div')
        subTitlePlace.classList.add('grid')
        
        const sub1 = document.createElement('div')
        sub1.classList.add('subtitle')
        sub1.textContent = this.subTitle1

        const sub2 = document.createElement('div')
        sub2.classList.add('subtitle')
        sub2.textContent = this.subTitle2


        document.body.append(section)
        section.append(titlePlace,subTitlePlace)
        subTitlePlace.append(sub1,sub2)
    }
}

class listSection{      //third section of About us page, related to our offers to customers
    li_Array = ['We have over 15 years experience in the industry',
                'One of the best ratings on the market - 98%',
                'Our team is very qualified and we are still growing',
                'We helped many companies']

    func = function(){
        let li_Element = []

        const section = document.createElement('section')
        section.classList.add('list-section')

        const imgPlace = document.createElement('div')
        imgPlace.classList.add('image')
        imgPlace.innerHTML = '<img src="./assets/img/agency4-aboutus-image.jpg">'

        const ul = document.createElement('ul')
        ul.classList.add('ul')
        for(let i=0; i<4; i++){
            li_Element[i] = document.createElement('li')
            li_Element[i].innerHTML = this.li_Array[i]

            ul.append(li_Element[i])
        }


        document.body.append(section)
        section.append(imgPlace, ul)
    }
}

class featuresSection{  //forth section of About us page
    title = '<h1 class="color title">Our team</h1>Meet best people of<br>SEO'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat metus quis risus ultrices fermentum. Sed consequat, arcu eget iaculis tincidunt, urna ligula tristique felis, eu ultrices sapien ipsum quis ante.'
    
    p_Text_Array = ['Advanced security',
                    'Quick results',
                    'Certificate of guarantee',
                    'All in one'
                    ]
    buttonText = 'contact us'
    func = function(){
        let p_Array = []

        const section = document.createElement('section')
        section.classList.add('features-section')

        const picture = document.createElement('div')
        picture.classList.add('left')

        const content = document.createElement('div')
        content.classList.add('right')

        const title = document.createElement('h1')
        title.classList.add('title')
        title.innerHTML = this.title

        const subtitle = document.createElement('p')
        subtitle.classList.add('subtitle')
        subtitle.innerHTML = this.subtitle

        const pWrapper = document.createElement('div')
        pWrapper.classList.add('p-wrapper')

        for(let i = 0;i < 4; i++){
            p_Array[i] = document.createElement('p')
            p_Array[i].classList.add('subtitle-color')

            p_Array[i].textContent = this.p_Text_Array[i]
            pWrapper.append(p_Array[i])
        }

        const button = document.createElement('a')
        button.classList.add('button')
        button.innerHTML = this.buttonText
        button.href = "contact us/contact_us.html"

        document.body.append(section)
        section.append(picture,content)
        content.append(title,subtitle,pWrapper)
        content.append(button)
    }

}

class staticSection{    //fifth section of About us page
    title = '<h1 class="color title">These numbers</h1>represent us'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat metus quis risus ultrices fermentum. Sed consequat, arcu eget iaculis tincidunt, urna ligula tristique felis, eu ultrices sapien ipsum quis ante.'
    buttonText = 'contact us'
    func = function(){
        const section = document.createElement('section')
        section.classList.add('static-section')  

        const content = document.createElement('div')
        content.classList.add('left')
        content.setAttribute('id', 'content')

        const title = document.createElement('h1')
        title.innerHTML = this.title
        title.classList.add('title')

        const subtitle = document.createElement('p')
        subtitle.classList.add('subtitle')
        subtitle.textContent = this.subtitle

        const picture = document.createElement('div')
        picture.classList.add('right')

        const button = document.createElement('a')
        button.classList.add('button')
        button.innerHTML = this.buttonText
        button.href = "contact us/contact_us.html"

        document.body.append(section)
        section.append(content,picture)
        content.append(title,subtitle,button)
    }
}
    // Contact us page's components
class infoSection{
    title = '<h1 class="color title">Contact info</h1> Don’t wait and call us'
    subtitle = 'Phasellus iaculis faucibus ipsum nec finibus.<br>Orci varius natoque penatibus et magnis dis parturient.'
    columnTitleTextArray = ['Social Media Marketing','Opening hours','Address']
    columnSubtitleTextArray = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                            ]

    func = function(){
        let columnArray = []
        let pictureArray = []
        let columnTitleDivArray = []
        let columnSubtitleDivArray = []
        
        const section = document.createElement('section')
        section.classList.add('info-section')

        const textSection = document.createElement('div')
        textSection.classList.add('text-place')
        const text = document.createElement('h1')
        text.classList.add("top","title")
        text.innerHTML = this.title

        const subtitle = document.createElement('div')
        subtitle.classList.add("top","subtitle")
        subtitle.innerHTML = this.subtitle

        const content = document.createElement('div')
        content.classList.add('bottom')

        for(let i = 0; i < 3; i++){
            columnArray[i] = document.createElement('div')
            columnArray[i].classList.add('column')

            pictureArray[i] = document.createElement('div')
            pictureArray[i].classList.add('picture')
            pictureArray[i].innerHTML = `<img src="assets/img/agency4-contact-icon${i+1}.png">`

            columnTitleDivArray[i] = document.createElement('div')
            columnTitleDivArray[i].classList.add('title')
            columnTitleDivArray[i].textContent = this.columnTitleTextArray[i]

            columnSubtitleDivArray[i] = document.createElement('div')
            columnSubtitleDivArray[i].classList.add('subtitle')
            columnSubtitleDivArray[i].textContent = this.columnSubtitleTextArray[i]


            columnArray[i].append(pictureArray[i],columnTitleDivArray[i],columnSubtitleDivArray[i])
            content.append(columnArray[i])
        }
        
        document.body.append(section)
        section.append(textSection,content)
        textSection.append(text,subtitle)
    }
}

class formSection{

    title = '<div class="color title">Fill the form</div>to contact us quickly'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    name = 'name'
    email = 'Email'
    subject = 'Subject'
    details = 'Details'
    message = 'Your message'
    button = 'Submit'
    func = function(){
        const section = document.createElement('section')
        section.classList.add('form-section')

        const texts = document.createElement('div')
        texts.classList.add('form-title')
        
        const title = document.createElement('h1')
        title.classList.add('title')
        title.innerHTML = this.title

        const subtitle = document.createElement('p')
        subtitle.classList.add('subtitle')
        subtitle.innerHTML = this.subtitle

        const form = document.createElement('div')
        form.classList.add('bottom')

        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.placeholder = this.name

        const smallInputPlace = document.createElement('div')
        smallInputPlace.classList.add('display')

        const emailInput = document.createElement('input')
        emailInput.type = 'text'
        emailInput.placeholder = this.email

        const subjectInput = document.createElement('input')
        subjectInput.type = 'text'
        subjectInput.placeholder = this.subject

        const detailInput = document.createElement('input')
        detailInput.type = 'text'
        detailInput.placeholder = this.details
                
        const textareaInput = document.createElement('textarea')
        textareaInput.placeholder = this.message

        const button = document.createElement('button')
        button.classList.add('button')
        button.textContent = this.button

        document.body.append(section)
        section.append(texts,form)
        texts.append(title,subtitle)
        form.append(nameInput,smallInputPlace,detailInput,textareaInput,button)
        smallInputPlace.append(emailInput,subjectInput)

    }
}

class offerSection{

    title = '<h1 class="color title">Why</h1>choose us?'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    liTextArray = ['We have over 15 years experience in the industry',
                   'One of the best ratings on the market - 98%',
                   'Our team is very qualified and we are still growing',
                   'We helped many companies']
    picture = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.132318870422!2d51.316920528239784!3d35.70099363989628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dffd2acb01f33%3A0xa0a22e3f2f839a9e!2sAzadi%20Innovation%20Factory!5e0!3m2!1sen!2sde!4v1671338764367!5m2!1sen!2sde" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    func = function(){

        let liDivArray = []

        const section = document.createElement('section')
        section.classList.add('offer-section')

        const picture = document.createElement('div')
        picture.classList.add('left')
        picture.innerHTML = this.picture

        const content = document.createElement('div')
        content.classList.add('right')

        const title = document.createElement('h1')
        title.classList.add('title')
        title.innerHTML = this.title

        const subtitle = document.createElement('p')
        subtitle.classList.add('subtitle')
        subtitle.innerHTML = this.subtitle

        const ul = document.createElement('ul')
        ul.classList.add('ul')

        for(let i=0; i< 4; i++){
            liDivArray[i] = document.createElement('li')
            liDivArray[i].innerHTML = this.liTextArray[i]
            liDivArray[i].classList.add('subtitle')
            ul.append(liDivArray[i])
        }

        document.body.append(section)
        section.append(picture,content)
        content.append(title,subtitle,ul)
    }
}

// Services page's components
class content{
    firstSectionTitle = 'Social Media <br> Marketing'
    secondSectionTitle = 'Speed<br>Optimisation'

    firstSectionliTextArray = ['We have over 15 years experience in the industry','One of the best ratings on the market - 98%','Our team is very qualified and we are still growing']
    secondSectionliTextArray = ['We have over 15 years experience in the industry','One of the best ratings on the market - 98%','Our team is very qualified and we are still growing']
    
    thirdSectionliTextArray = ['We have over 15 years experience in the industry','One of the best ratings on the market - 98%','Our team is very qualified and we are still growing']
    thirdSectionTitle = 'Client & Sale<br>Targeting'

    func = function(){
        // start of first section
        let firstSectionliDivArray = []

        const holder = document.createElement('div')
        holder.classList.add('holder')

        const marketingSection = document.createElement('section')
        marketingSection.classList.add('marketing-section','column')

        const picture = document.createElement('div')
        picture.classList.add('left')
        picture.innerHTML = '<img src="assets/img/agency4-services-icon1.png">'

        const contect = document.createElement('div')
        contect.classList.add('right' , 'sec-color')

        const contentTitle = document.createElement('h1')
        contentTitle.classList.add('title')
        contentTitle.innerHTML = this.firstSectionTitle
        
        const firstSectionUl = document.createElement('ul')
        firstSectionUl.classList.add('ul')

        for(let i = 0; i < 3;i++){
            firstSectionliDivArray[i] = document.createElement('li')
            firstSectionliDivArray[i].innerHTML = this.thirdSectionliTextArray[i]

            firstSectionUl.appendChild(firstSectionliDivArray[i])
        }
        

        document.body.append(holder)
        holder.append(marketingSection)
        marketingSection.append(picture,contect)
        contect.append(contentTitle,firstSectionUl)

        // end of first section
        
        // start of second section
        let secondSectionliDivArray = []

        const optimSection = document.createElement('section')
        optimSection.classList.add('optim-section','column')

        const secondSectionContent = document.createElement('div')
        secondSectionContent.classList.add('let','sec-color')

        const secondSectionTitle = document.createElement('h1')
        secondSectionTitle.classList.add('title')
        secondSectionTitle.innerHTML = this.secondSectionTitle
        
        const secondSectionUl = document.createElement('ul')
        secondSectionUl.classList.add('ul')

        for(let i = 0; i < 3;i++){
            secondSectionliDivArray[i] = document.createElement('li')
            secondSectionliDivArray[i].innerHTML = this.secondSectionliTextArray[i]

            secondSectionUl.appendChild(secondSectionliDivArray[i])
        }
        const secondSectionPicture = document.createElement('div')
        secondSectionPicture.innerHTML = '<img src="assets/img/agency4-services-icon2 (1).png">'

        holder.append(optimSection)
        optimSection.append(secondSectionContent,secondSectionPicture)
        secondSectionContent.append(secondSectionTitle,secondSectionUl)
        // end of second section

        //start  of third section
        let thirdSectionliDivArray = []

        const lastSection = document.createElement('section')
        lastSection.classList.add('marketing-section','column')

        const thirdSectionPicture = document.createElement('div')
        thirdSectionPicture.classList.add('left')
        thirdSectionPicture.innerHTML = '<img src="./assets/img/agency4-services-icon3 (1).png">'

        const thirdSectionContect = document.createElement('div')
        thirdSectionContect.classList.add('right' , 'sec-color')

        const thirdSectionTitle = document.createElement('h1')
        thirdSectionTitle.classList.add('title')
        thirdSectionTitle.innerHTML = this.thirdSectionTitle
        
        const thirdSectionTitleUl = document.createElement('ul')
        thirdSectionTitleUl.classList.add('ul')

        for(let i = 0; i < 3;i++){
            thirdSectionliDivArray[i] = document.createElement('li')
            thirdSectionliDivArray[i].innerHTML = this.firstSectionliTextArray[i]

            thirdSectionTitleUl.appendChild(thirdSectionliDivArray[i])
        }
        
        holder.append(lastSection)
        lastSection.append(thirdSectionPicture,thirdSectionContect)
        thirdSectionContect.append(thirdSectionTitle,thirdSectionTitleUl)

    }
}

class brandMarketingSection{

    title = '<h1 class="title color">During these years</h1>we worked for'

    func = function(){
        const section = document.createElement('section')
        section.classList.add('brand-marketing')

        const title = document.createElement('div')
        title.classList.add('title','sec-color', 'top')
        title.innerHTML = this.title

        document.body.append(section)
        section.append(title)
    }
}

class brandMarketingPictures{   //we need it in the main page, so i created this section here to use later
    func = function(){

        let pictureArray = []
        let pictureURL = ['<img src="./assets/img/agency4-home-companies-icon1.png">',
                            '<img src="./assets/img/agency4-home-companies-icon2.png">',
                            '<img src="./assets/img/agency4-home-companies-icon3.png">',
                            '<img src="./assets/img/agency4-home-companies-icon4.png">']

        const section = document.createElement('section')
        section.classList.add('brand-marketing-pictures')

        for(let i = 0;i < 4; i++){
            pictureArray[i] = document.createElement('div')
            pictureArray[i].innerHTML = pictureURL[i]
            pictureArray[i].classList.add('column')

            section.append(pictureArray[i])
        }

        document.body.append(section)
        
    }
}

// Homapage's components
class hompage_intro{
    colortitle = 'Online solutions'
    secColorTitle = 'to boost your website'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    button = 'Our Services'
    secButton = 'Learn more'
    question = 'Have a question ?'
    phoneNumber = '+32 275 200 7575'
    socialSectionText = 'Visit Our Social Media'

    func = function(){
        const section = document.createElement('section')
        section.classList.add('intro')

        const texts = document.createElement('div')
        texts.classList.add('top')

        const colorTitle = document.createElement('h1')
        colorTitle.classList.add('color','title')
        colorTitle.innerHTML = this.colortitle
        
        const secColorTitle = document.createElement('h1')
        secColorTitle.classList.add('title', 'sec-color')
        secColorTitle.innerHTML = this.secColorTitle

        const paragraph = document.createElement('p')
        paragraph.classList.add('subtitle')
        paragraph.innerHTML = this.subtitle

        const button = document.createElement('button')
        button.classList.add('button')
        button.innerHTML = this.button

        const secButton = document.createElement('button')
        secButton.classList.add('sec-button')
        secButton.innerHTML = this.secButton

        const bottom = document.createElement('div')
        bottom.classList.add('bottom')

        const phoneSection = document.createElement('div')
        phoneSection.classList.add('phone')

        const phoneSectionPicture = document.createElement('div')
        phoneSectionPicture.classList.add('picture')
        phoneSectionPicture.innerHTML = '<img src="assets/img/agency4-home-splash-icon.png">'

        const phoneSectionTextPlace = document.createElement('div')
        phoneSectionTextPlace.classList.add('text')
        
        const question = document.createElement('p')
        question.innerHTML = this.question

        const phoneNumber = document.createElement('p')
        phoneNumber.classList.add('color')
        phoneNumber.innerHTML = this.phoneNumber

        const socialSection = document.createElement('div')
        socialSection.classList.add('social')
        
        const socialSectionText = document.createElement('p')
        socialSectionText.innerHTML = this.socialSectionText

        const iconFB = document.createElement('a')
        iconFB.classList.add('icon')
        iconFB.href = 'main.html'
        iconFB.innerHTML = 'FB'

        const iconIN = document.createElement('a')
        iconIN.classList.add('icon')
        iconIN.href = 'main.html/#'
        iconIN.innerHTML = 'IN'

        document.body.append(section)
        section.append(texts,bottom)
        texts.append(colorTitle,secColorTitle,paragraph,button ,secButton)
        bottom.append(phoneSection)
        phoneSection.append(phoneSectionPicture,phoneSectionTextPlace)
        phoneSectionTextPlace.append(question,phoneNumber)

        bottom.append(socialSection)
        socialSection.append(socialSectionText,iconFB,iconIN)
    }
}

class homepage_staticSection{   //fifth section of this page

    title = 'Let the facts <br><div class="color">convince</div>you'
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    
    func = function(){
        const section = document.createElement('section')
        section.classList.add("homepage-static-section")

        const picture = document.createElement('div')
        picture.classList.add('left')
        picture.innerHTML = '<img src="assets/img/agency4-home-numbers-image.jpg">'

        const content = document.createElement('div')
        content.classList.add('right')

        const title = document.createElement('h1')
        title.classList.add('title','sec-color')
        title.innerHTML = this.title

        const subtitle = document.createElement('p')
        subtitle.innerHTML = this.subtitle
        subtitle.classList.add('subtitle')


        document.body.append(section)
        section.append(picture,content)
        content.append(title,subtitle)
    }
}

export {Intro , portfolio, joinSection, header , footer, innerPortfolio_intro, 
    innerPortfolio_picture, innerPortfolio_texts,container,galleryOfPictures,
    description, dscptSection, listSection,featuresSection, staticSection,infoSection,formSection,
    offerSection, content, brandMarketingSection, brandMarketingPictures ,hompage_intro ,homepage_staticSection }