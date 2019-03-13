'use strict'

/* Mobile Hamburger menu function */

function handleHamburgerMenu() {
    $(document).ready(function () {
        $(".icon").on("click", function () {
            $(".links").toggleClass("mobileNav");
        });
    });
};

/* Remove navigation link items on screen size greater than 768px */

function responsiveMenu() {
    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $(".links").removeClass("mobileNav");
        };
    });
}

function handleViewProjects() {
    $("#viewProjects").on("click", function () {
        $(".content").fadeToggle("slow");
        displayContent();
    });
}

function displayContent() {
    $('.container').html(projectCards());
}

function projectCards() {
    return `<div class="flexbox">
            <div class="cardContainer">
                <img src="Media/quiz-app-screenshot.png" alt="quiz app" class="cardImage" width="100%"/>
                <h4 class="text-center blue-bold">Quiz App - <a href="https://github.com/punchaal/Quiz-app"class="blue-bold">
                Github</a> | <a href="https://punchaal.github.io/Quiz-app/" class="blue-bold">Demo</a></h4> 
                <p class="padding">An app designed to test your IPL cricket knowledge. One of the earliest apps
                I worked on with a lot of emphasis on proper usage of unique <span class="gold-bold">JS</span> functions.</p> 
                <p><i class="fab fa-css3-alt tech-icon"></i></i>
                <i class="fab fa-html5 tech-icon"></i>
                <i class="fab fa-js-square tech-icon"></i></p>
            </div>
            <div class="cardContainer">
                <img src="Media/pcf.png" alt="pcf website" class="cardImage" width="100%"/>
                <h4 class="text-center blue-bold">PCF - <a href="#" class="blue-bold">Github | Demo</a></h4> 
                <p class="padding">The original website developed that really spurred the love for web development. 
                The site was created using <span class="gold-bold">Bootstrap</span>, <span class="gold-bold">Django</span>
                and extensive use of <span class="gold-bold">Github</span>.</p> 
                <p><i class="fab fa-css3-alt tech-icon"></i></i>
                <i class="fab fa-html5 tech-icon"></i>
                <i class="fab fa-js-square tech-icon"></i></p>
            </div>
            </div>`
}

function handleMenuAndButtons() {
    handleHamburgerMenu();
    responsiveMenu();
    handleViewProjects();
}

handleMenuAndButtons();