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
        }*/
        var myclass = $("#menu").attr("class");
        if (myclass == "show"){
            $( "#menu" ).animate({ "right": "-=250px" }, "slow" );
            $( "#menu" ).removeClass("show");    
        } else {
            $( "#menu" ).animate({ "right": "+=250px" }, "slow" );
            $( "#menu" ).addClass("show");
        }
    }

/* Function to hide menu when clicked on screen */
function pageKeyDown() {
    var menu = $('#menu').css('display');
        if (menu == 'block') {
            $("#menu").css('display', 'none');  
        }
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
        //window.location("answers.html");
        //alert(id + " " + text + " " + category);
    });
}