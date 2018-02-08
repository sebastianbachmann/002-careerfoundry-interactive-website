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

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

// Form input print to the console
$("#submitcontactformbutton").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();

    console.log("Name: " + name);
    console.log("Email: " + email);
    return false;
  });