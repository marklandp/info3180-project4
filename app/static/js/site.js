 $(window).load(function() {
  $(".close").click(dismiss);
  $(".choose").click(accept);
  $(".entry").click(remove);
  $(".fancy").fancybox({
  		scrolling:'no',
  		openEffect	: 'elastic',
  		closeEffect	: 'elastic'
   });
  $("#fancyprocess").fancybox({
    type: 'inline',
    title: '<h3>Click on an Image to select it as your wish thumbnail.</h3>',
  		scrolling:'yes',
  		autoSize : false,
    width    : "82%",
    height   : "auto",
  		openEffect	: 'elastic',
  		closeEffect	: 'elastic',
  		closeClick: true
   }).trigger("click");
 });
 
 function dismiss() {
  $(".alert-dismissable").hide("slow");
 }
 
 function remove() {
  var entry = $('.entry');
  if (entry.is(':checked')) {
   var sure = confirm("Do you really want to delete your wish?");
   if (sure == true) {
    var wish = $(event.target).val();
    var url = "/api/wish/"+wish+"/delete";
    $(location).attr("href", url);
   }
  }
 }
  
 function accept() {
  var source = event.target.src;
  $("#thumbnail").attr("src",source);
  $("#thumb").attr('value',source);
 }