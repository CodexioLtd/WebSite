function initMap() {
  const latitude = 42.66667709999999;
  const longitude = 23.352353300000004;
  // Create a map object and specify the DOM element for display.
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 19
  });

  const markerIcon = {
    url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
    scaledSize: new google.maps.Size(25, 40),
    // origin: new google.maps.Point(0, -20),
    // anchor: new google.maps.Point(40, 50),
    labelOrigin: new google.maps.Point(15, 50)
  };

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
    icon: markerIcon,
    label: {
      text: 'Codexio Ltd.',
      color: "#eb3a44",
      fontSize: "19px",
      fontWeight: "500"
    }
  });

  const content = '<div id="content">Sofia, </br> Izgrev, str. "Tintyava" 15-17, floor 3</div>';
  const infoWindow = new google.maps.InfoWindow({
    content: content,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(map, marker);
  });
}
// Services - Description:
function changeAllOpacities(currentElement) {
  $('.service-img-icon').css('opacity', '0.5');
  $(currentElement).find("img").css('opacity', '1');
}

function setServiceDescription(serviceTitle, serviceHtmlDescription, hoveredElement) {
  changeAllOpacities(hoveredElement);
  $('.heading-description').text(serviceTitle);
  $('.service-description').html(serviceHtmlDescription);
}
// Sticky header-nav-bar:
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
  // Service - Description
  $(".service-container").hover(e => setServiceDescription(
    $(e.currentTarget).find("h4").text(),
    $(e.currentTarget).find(".codexio-service-description").html(),
    e.currentTarget)
  );
  // Form
  $("#send-mail").click((e) => {
    e.preventDefault();
    let fullName = $("#first-name").val() + " " + $("#last-name").val();
    let from = $("#from").val();
    if (from.indexOf('@') < 0 || from.indexOf('.') < 0) {
      $(".msg-error").show();
      $(".msg-error").text("Please enter valid email address!");
      return;
    }
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
          $(".msg-error").hide();
          $(".msg-success").show();
          $(".msg-success").text(resp.response);
          setTimeout(() => $(".msg-success").hide(), 5000);
        },
        "error": err => {
          if (!err.response) {
            err.response = 'All fields are mandatory!';
          }
          $(".msg-error").show();
          $(".msg-error").text(err.response);
        }
      }
    )
  });
  // past-stages, current-stages, future-stages --> (changing backgrounds)
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


  const links = $('.nav-link');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      $('#navigation').removeClass('active');
    })
  }
});

document.getElementById('nav-button').addEventListener('click', function (param) {
  var button = document.getElementById('nav-button');
  var headerNav = document.getElementById('header-nav-bar');
  var nav = document.getElementById('navigation')
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    button.classList.remove('fa-power-off');
    button.classList.add('fa-bars');
  } else {
    nav.classList.add('active');
    button.classList.remove('fa-bars');
    button.classList.add('fa-power-off');
  }
});
let cfg = {
  selector: '.item',
  download: false,
  zoom: false,
  autoplayControls: false,
  share: false,
  thumbnail: false
};
$("#desktop-images-container").lightGallery(cfg);
$("#mobile-images-container").lightGallery(cfg);
