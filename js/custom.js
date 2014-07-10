	var article = window.sessionStorage.getItem("article");
	var pageArticle = "<script src='https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fblogs.splunk.com%2F2014%2F07%2F09%2F" + article + "%2F%22%20%20and%20xpath%3D'%2F%2Fdiv%5Bcontains(%40class%2C%20%22fullPost%22)%5D%2Fp'&format=json&diagnostics=true&callback=splunk-article'><\/script>";


	YUI().use('node', 'event', 'yql', function(Y) {

                var stories = "<div class='rss_content'>";
                var yql_query = "select content from html where url='" + article + "'";
                yql_query += " and xpath='//div[@class=\"content\"]//div[@class=\"fullPost\"]/*'";
                Y.YQL(yql_query, function(response) {
                    if(response.query.results){
                        var no_stories = response.query.results.p.length;
                        var paras = response.query.results.p;
                        paras.forEach(function(node,index) {
                        if (node.hasOwnProperty('a') && node.hasOwnProperty('content')) {
                            stories += "<li><a href='" + news_url + node.a.href + "' title='" + node.a.title + "'>" + node.content + "</a></li>";
                        }
                        });
                     } else {
                        stories += "Sorry, could not find any headlines for the category " + story + ". Please try another one.";
                     }
                     stories += "</div>";
                     Y.one('#results').append(stories);
                         stories = "";
                });
    });




                     <script type='text/javascript'>
            // Parses reslideed response and extracts
            // the title, links, and text of each news story.
            function splunk_article(o){
                //var div = o.query.results.div;
                //var output = '';
                //var no_divs=div.length;
                //for(var i=0;i<no_div;i++){
                    var content = div;
                    output += "<div class='rss_content'>" + content + "</div>";
          //}
            // Place news stories in div tag
            //document.getElementById('results').innerHTML = output;
            $("#results").append(output);
        }

        </script>

        <script src="https://yui-s.yahooapis.com/3.8.0/build/yui/yui-min.js"></script>


        article = window.sessionStorage.getItem("article");
                var output = "<div class='rss_content'>";
                YUI().use('node', 'event', 'yql', function(Y) {
                    var yql_query = "select * from html where url='" + article + "'";
                    yql_query += " and xpath='//div[@class=\"fullPost\"]/*'";
                    console.log(yql_query);
                    Y.YQL(yql_query, function(response) {
                        var data = response.query.results;
                        console.log(data);
                        var nodelist = data.get('childNodes')
                        console.log("nodelist is " + nodelist)
                    });
                        output += "</div>";
                        $("#results").append(output);
                     });





$.ajax({
    type: 'GET',
    url: "http://query.yahooapis.com/v1/public/yql?q="
    url += "select+*+from+html+where+url%3D%22http%3A%2F%2Fblogs.splunk.com%2F2014%2F07%2F09%2Fsplunking-web-pages%2F%22++and+xpath%3D'%2F%2Fdiv%5B%40class%3D%22fullPost%22%5D%2F*'",

    dataType: 'html',
    success: function(data) {

        if (data) {

            // Show in console the jQuery Object.
            console.info('Here is the returned query');
            console.log( $(data).find('query') );

            // Show in console the results in inner-html text.
            var textResults = $(data).find('results').text();
            console.log( textResults );

            // Parse the list of faculty members. Variable indexFM is not used for indexed faculty member.
            $(data).find('results').find('.views-row').each(function(indexFM){

                // This variable will store the current faculty member.
                var facultyMember = this;
                console.info('Faculty jQuery DIV Object shown on next lines.');
                console.log( facultyMember );

                // Parse the contents of each faculty member. Variable indexFC is not used for indexed faculty content.
                $(facultyMember).each(function(indexFC){

                    // Get Thumbnail Image of Faculty Member
                    var facultyMemberImage = $(this).find('.views-field-field-profile-image-fid #directoryimage a img').attr('src');
                    console.log( facultyMemberImage );

                    // Get Title (Name) of Faculty Member
                    var facultyMemberTitle = $(this).find('.views-field-field-professional-title-value #largetitle').text();
                    console.log( facultyMemberTitle );
                    // Get relative URL fragment.

                    //
                    // Stackoverflow Edit: Much more extraction in this section, see jsFiddle link above.
                    //

                    // Get Email of Faculty Member
                    var facultyMemberEmail = $(this).find('.views-field-field-email-value span').text();

                    // Simple dashed line to separate faculty members as seen in browser console.
                    console.log('--------');

                    var divObject = '<div class="dynamicResults"><div class="dynamicThumb"><a href="' + facultyMemberUrl + '"><img src="' + facultyMemberImage + '" alt=""></a></div><div class="dynamicInfo"><div class="dynamicText"><a href="' + facultyMemberUrl + '" class="dynamicName">' + facultyMemberTitle + '</a></div><div class="dynamicText">' + facultyMemberPosition + '</div><div class="dynamicText">Phone: ' + facultyMemberPhone + '</div><div class="dynamicText">Location: ' + facultyMemberBuilding + ' <span>' + facultyMemberRoom + '</span></div><div class="dynamicText"><a href="' + facultyMemberEmailUrl + '" class="dynamicEmail">' + facultyMemberEmail + '</a><span class="dynamicEmailpic"></span></div></div></div><div class="clear"></div>';

                    // Build webpage with dynamic data.
                    $('#results').append( divObject );

                });

            });

        }
    }
});