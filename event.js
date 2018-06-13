function changeAllOpacities(currentElement) {
    $('.service-img-icon').css('opacity', '0.5');
    $(currentElement).find("img").css('opacity', '1');
}

function setServiceDescription(serviceTitle, serviceHtmlDescription, hoveredElement) {
    changeAllOpacities(hoveredElement);
    $('.heading-description').text(serviceTitle);
    $('.service-description').html(serviceHtmlDescription);
}


$(".service-container").hover(e => setServiceDescription(
    $(e.currentTarget).find("h4").text(),
    $(e.currentTarget).find("codexio-service-description").html(),
    e.currentTarget)
);