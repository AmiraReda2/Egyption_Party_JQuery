// -------------------------------home------------------------------------

$(".openNav").click(function(){
    $("#menu").animate({width:'260px'},50)
    $("#homecontent").animate({marginLeft:"250px"},50)
})
$(".close").click(function(){
    $("#menu").animate({width:"0px"},50)
    $("#homecontent").animate({marginLeft:"0px"},50)
})


// -----------------------------------------slider------------------------------
$("#Slider .toggle").click(function(){
   $(this).next().slideToggle()
  
// $(this).prev($("#Slider div").hide())
$("#Slider div").not($(this).next()).slideUp()
})


//------------------------------------------ counter time-----------------------------------



// window.onload = function() 
   
  

// ----------------------------------------contact------------------------------------
$("textarea").keyup(function(){
    let x = $(this).val().length;
    $("#count").text(
        100-x <= 0 ? "your avilable char finished" : 100-x
        )

})