$(document).ready(function(){

 /** SCCNAV **/
  if( $("div.sccmenu").length > 0 ){
    /** LOAD SCCNAV TO VARIABLE **/
    $.get( "../sass/sccnav.html", function( data ) {
      $("div.sccmenu").show();
      $("div.sccmenu-area").html(data);
    });
    /** TOGGLE MENU **/
    var sccbtn = $("div.sccmenu-btn");
    $("div.sccmenu-btn a").click(function(evt){
      evt.stopPropagation();
      if(sccbtn.hasClass("active")){
        sccbtn.removeClass("active");
        } else {
        sccbtn.addClass("active");
        }
      $("div.sccnav").toggle();
    });
    $(document).click(function(){
        sccbtn.removeClass("active");
        $("div.sccnav").hide();
    });
  }

});//end document ready