function _Index() {

    var SCREENS = {
        "Invite on Web" : {
            "Facebook": 6,
            "Foursquare": 4,
            "GooglePlus": 6,
            "LinkedIn": 4,
            "Path": 2,
            "Pinterest": 3,
            "Twitter": 3,
            "Yelp": 3
        },
        "Invite on Mobile" : {
            "Instagram": 3,
            "Path": 2,
            "Venmo": 2
        },
        "Activation on Web" : {
            "Facebook": 3,
            "Foodily": 1,
            "Foursquare": 4,
            "LinkedIn": 2,
            "Pinterest": 2,
            "Popset": 2,
            "Spotify": 1,
            "Trover": 1
        },
        "Prompts on Web" : {
            "Facebook": 1,
            "LinkedIn": 2,
            "Pinterest": 1
        }
    };

    function imgClick(e) {
        var img = $(e.target);

        var theImage = new Image();
        theImage.src = img.attr("src");

        img.css("width", "99%");
        img.css("max-width", theImage.width);

        $("IMG").each(function(idx, ele) {
            if ($(ele).get(0) == img.get(0)) return 1;
            $(ele).css("width", "48%");
        });

        $(document).scrollTop(img.offset().top);
    }

    function catClick(e) {
        var catName = $(e.target).html();
        $(".selected").removeClass("selected");
        $(e.target).addClass("selected");

        $("#content").empty();
        $.each(SCREENS[catName], function(site, count) {
            var i, title, curRow;
            title = $("<h1>");
            title.html(site);
            $("#content").append(title);

            for (i = 0; i < count; i++) {
                var img = $("<img>");
                img.attr("src", catName + "/" + site + "_" + (i + 1) + ".png");
                img.bind("click", imgClick);

                if (i % 2 == 0) {
                    curRow = $("<div>");
                    $("#content").append(curRow);
                }
                curRow.append(img);
            }

            $("#content").append($("<HR>"));
        });
    }

    function onLoad() {
        $.each(SCREENS, function(name, cat) {
            var catItem = $("<li>");
            catItem.html(name);
            catItem.bind("click", catClick);
            $("#catList").append(catItem);
        });

        $("li:first").click();
    }


    $(document).ready(onLoad);
}

var Index = new _Index();
