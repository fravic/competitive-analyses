function _Index() {

    var SCREENS = {
        "Invite on Web" : {
            "Facebook": 6,
            "Foursquare": 4,
            "GooglePlus": 6,
            "LinkedIn": 3,
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
        "Signup on Web" : {
            "Facebook": 2
        },
    };

    function imgClick(e) {
        var img = $(e.target);

        // Only expand landscape mode for now
        if (img.width() > img.height()) {
            img.css("width", "99%");
        }

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
