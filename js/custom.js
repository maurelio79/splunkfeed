/*
Extend JQuery contains to JQuery Contains
to avoid sensitive search
*/

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
});

/*
Extend swipe function to avoid bug with phonegap
*/

$.extend($.event.special.swipe,{
  scrollSupressionThreshold: 10, // More than this horizontal displacement, and we will suppress scrolling.
  durationThreshold: 3000, // More time than this, and it isn't a swipe.
  horizontalDistanceThreshold: 50,  // Swipe horizontal displacement must be more than this.
  verticalDistanceThreshold: 45,  // Swipe vertical displacement must be less than this.
});

/* Function to exit the app*/
function exit(){
    if (navigator.app) {
            navigator.app.exitApp();
        }
    else if (navigator.device) {
            navigator.device.exitApp();
        }
}

function RemoveBaseUrl(url) {
/*
 * Replace base URL in given string, if it exists, and return the result.
 *
 * e.g. "http://localhost:8000/api/v1/blah/" becomes "/api/v1/blah/"
 *      "/api/v1/blah/" stays "/api/v1/blah/"
 */
    var baseUrlPattern = /^https?:\/\/[a-z\:0-9.]+/;
    var result = "";
    var match = baseUrlPattern.exec(url);

    if (match != null) {
        result = match[0];
    }

    if (result.length > 0) {
        url = url.replace(result, "");
    }
    return url;
}

/* Function to show the menu*/
function menuKeyDown() {
    /*var menu = $('#menu').css('display');
        if (menu == 'none') {
            $("#menu").css('display', 'block');  
        } else {
            $("#menu").css('display', 'none');
        }
        var myclass = $("#menu").attr("class");
        if (myclass == "show"){
            $( "#menu" ).animate({ "right": "-=250px" }, "slow" );
            $( "#menu" ).removeClass("show");    
        } else {
            $( "#menu" ).animate({ "right": "+=250px" }, "slow" );
            $( "#menu" ).addClass("show");
        }*/
    }

/* Function to hide menu when clicked on screen */
function pageKeyDown() {
    /*var menu = $('#menu').css('display');
        if (menu == 'block') {
            $("#menu").css('display', 'none');  
        }

    var myclass = $("#menu").attr("class");
        if (myclass == "show"){
            $( "#menu" ).animate({ "right": "-=250px" }, "slow" );
            $( "#menu" ).removeClass("show");    
        }*/
    }

/* Function to load category for answers page */
function setAnswersCategory(id) {
    $(id).on("click", "a", function(event, ui) {
        var text = $(this).text();
        //var text = $(this).attr("class");
        switch(text){
            case 'Splunk Answers':
                category = 'newest';
                break;
            case 'Newest':
                category = 'newest';
                break;
            case 'Hottest':
                category = 'hot';
                break;
            case 'Most Voted':
                category = 'votes';
                break;
            case 'Unanswered':
                category = 'unanswered';
                break;
        }
        
        window.sessionStorage.setItem("category", category);
    });
}