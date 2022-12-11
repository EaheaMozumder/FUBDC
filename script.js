$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

     // typing text animation script
     var typed = new Typed(".typing", {
        strings: ["Volunteer", "Blood Fighter", "", "Blood Donor", "Heroes"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing1", {
        strings: [
        "ফ্রেন্ডস ইউনিটি ব্লাড ডোনার ক্লাব।", 
        "আমাদের সরকারী নিবন্ধন নংঃ ফেনী-৪২৯।",
        "ঠিকানাঃ পোষ্ট অফিস রোড,পরশুরাম,ফেনী।",
        "স্বেচ্ছায় রক্তদানে, রক্তদাতার সন্ধানে।",
        "একের রক্ত অন্যের জীবন, রক্তই হোক আত্মার বাঁধন।" 
    ],
        typeSpeed: 150,
        backSpeed: 40,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// testimonial slide
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
  
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}



