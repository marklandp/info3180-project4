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
  });
  
  function dismiss() {
   $(".alert-dismissable").hide("slow");
  }