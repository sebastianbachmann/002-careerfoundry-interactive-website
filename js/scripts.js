// facebook sdk
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//twitter
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);}
  }(document, 'script', 'twitter-wjs');

// jQuerry Stuff
// SMOOTH SCROLLING
$(document).ready(function(){

//Work section
  for(var i = 0; i < works.length; ++i ) {
    $('#projects').append('\
      <div class="col-sm-6 col-md-3">\
      <h2 class="header">'+works[i].title +'</h2>\
        <a href="'+works[i].url+'" class="work-img">\
        <img class="img-responsive" src="'+ works[i].link +'">\
        <span class="info">\
        <p class="desc">'+works[i].description +'</p>\
        </span>\
        </a>\
      </div>\
    ');
    var images = $('#projects .img-responsive');
    if(i%2 === 0) {
      $(images[i]).css('border', '7px solid #D6DEEF');
    }
    else {
      $(images[i]).css('border', '7px solid #BACAF1');
    }
  };

  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  });

  var charCount;

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // tooltip 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // $(document).ready(function(){
    $("#submitcontactformbutton").on('click', function() {
      if($(".message-box").val().length === 0) {
        $(".message-box").css("border", "2px solid red");
        $("#visible-comment").html("Please fill out the Box!");
      } else {
        $(".message-box").hide();
        $("#visible-comment").hide();
      };
    });

  $(".message-box").on("keyup", function(){
    charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);

    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    };
  });

// Form input print to the console
$("#submitcontactformbutton").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var comment = $('.message-box').val();

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message-Box: " + comment);
    return false;
  });
});
