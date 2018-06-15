function changeAllOpacities(currentElement) {
    $('.service-img-icon').css('opacity', '0.5');
    $(currentElement).find("img").css('opacity', '1');
}

function setServiceDescription(serviceTitle, serviceHtmlDescription, hoveredElement) {
    changeAllOpacities(hoveredElement);
    $('.heading-description').text(serviceTitle);
    $('.service-description').html(serviceHtmlDescription);
}

$(document).ready(() => {
    new Waypoint({
        element: document.getElementById('info-codexio'),
        handler: function (direction) {
            if (direction === 'down') {
                $('.header-nav-bar').addClass('sticky');
                $('.header-nav-bar').removeClass('sticky-header');
            } else {
                $('.header-nav-bar').removeClass('sticky');
                $('.header-nav-bar').addClass('sticky-header');
            }
        },
        offset: 100
    });
    new Waypoint({
        element: document.getElementById('header'),
        handler: function (direction) {
            if (direction === 'down') {
                $('.header-nav-bar').addClass('sticky-header');
            } else {
                $('.header-nav-bar').removeClass('sticky-header');
            }
        },
        offset: -1
    });

    $(".service-container").hover(e => setServiceDescription(
        $(e.currentTarget).find("h4").text(),
        $(e.currentTarget).find("codexio-service-description").html(),
        e.currentTarget)
    );

    $("#project-container img").click(e => {
        let clickedImageUrl = $(e.target).attr("src");
        $("body").css("background", "grey");
        $("#header").css("filter", "contrast(30%)");
        $("#images-container").show();
        $("#opened-image").attr("src", clickedImageUrl);
    });

    $("#close-button").click(() => {
        $("body").css("background", "");
        $("#header").css("filter", "");
        $("#images-container").hide();
    });

    $("#send-mail").click((e) => {
        e.preventDefault();
        let fullName = $("#first-name").val() + " " + $("#last-name").val();
        let from = $("#from").val();
        let msg = $("#message").val();
        $.ajax(
            {
                "url": "send_mail.php",
                "method": "post",
                "data": {
                    fullName: fullName,
                    from: from,
                    msg: msg
                },
                "success": resp => {
                        $(".msg-success").show();
                        $(".msg-success").text(resp.response);
                        setTimeout(() => $(".msg-success").hide(), 5000);
                },
                "error": err => {
                    $(".msg-error").show();
                    $(".msg-error").text(err.response);
                    setTimeout(() => $(".msg-error").hide(), 5000);
                }
            }
        )
    });

    let startDates = $(".start-date");
    let endDates = $(".end-date");
    let none = true;
    let size = Math.min(startDates.length, endDates.length);
    for (let i = 0; i < size; i++) {
        let startTokens = $(startDates[i]).text().split('.');
        let startDate = new Date(startTokens[2], startTokens[1] - 1, startTokens[0]);

        let endTokens = $(endDates[i]).text().split('.');
        let endDate = new Date(endTokens[2], endTokens[1] - 1, endTokens[0]);

        let now = new Date();

        let isBetween = now.getTime() >= startDate.getTime() && now.getTime() <= endDate.getTime();
        let isBefore = now.getTime() > startDate.getTime();

        if (isBetween) {
            none = false;
            $(startDates[i]).parent().css("background", "#61c4be");
        } else if (isBefore) {
            none = false;
            $(startDates[i]).parent().css("background", "lightgrey");
        }
    }

    if (none) {
        startDates.first().parent().css("background", "#61c4be");
    }
});