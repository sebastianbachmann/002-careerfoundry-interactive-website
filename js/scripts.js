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

  $("#submitcontactformbutton").on('click', function(){
    var comment = $('.message-box').val();
    $("#visible-comment").html(comment);
    $(".message-box").hide();
    console.log("Message-Box: "+ comment);
    return false
  });

  $(".message-box").css("border", "2px solid red");

  $(".message-box").on("keyup", function(){
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
  });

// $("#char-count").html(charCount);

});

// Form input print to the console
$("#submitcontactformbutton").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();

    console.log("Name: " + name);
    console.log("Email: " + email);
    return false;
  });
