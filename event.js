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

$(document).ready(() => {
  var waypoint = new Waypoint({
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
    var waypoint = new Waypoint({
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
});

$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});