 // $(window).load(function() {
 //  $(".wrapper").overlay({
 
 //    // custom top position
 //    // top: 260,
 
 //    // some mask tweaks suitable for facebox-looking dialogs
 //    // mask: {
 
 //    // // you might also consider a "transparent" color for the mask
 //    // color: '#fff',
 
 //    // // load mask a little faster
 //    // loadSpeed: 500,
 
 //    // // very transparent
 //    // opacity: 0.5
 //    // },
 
 //    // disable this for modal dialog-type of overlays
 //    closeOnClick: false,
 
 //    // load it immediately after the construction
 //    load: true
 
 //    }
 // )});
  $(window).load(function() {
   $(".close").click(dismiss);
   $(".entry").click(remove);
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