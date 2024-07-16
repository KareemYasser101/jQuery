// *******************************left nav********************************
let tabWidth = $(".tabs").width();
$(".left-nav").animate({left: `-${tabWidth}px`}, 300)

$(".open-button").click(() => {
    tabWidth = $(".tabs").width();
    let left = $(".left-nav").css("left")
    if(left == `-${tabWidth}px`) {
        $(".left-nav").css("left", "0px");
    }
});

$(".close-div").click(() => {
    tabWidth = $(".tabs").width();
    let left = $(".left-nav").css("left")
    if(left == "0px") {
        $(".left-nav").css("left", `-${tabWidth}px`);
    }
})


$("left-nav a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop: positionOfSection},2000);
    
})

// *******************************slider********************************

$(".version h3").click((e) => {
    $(e.currentTarget).next().slideToggle(500);
    $(".description").not($(e.currentTarget).next()).slideUp(500);
})


// *******************************counter********************************

window.onload = function() {
    countDownToTime("19 august 2024 9:56:00");
}

function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }

// *******************************contact********************************

const maxChars = 100;
$("textarea").keyup(function (e) { 
    let currentCharsNumber = $("textarea").val().length;
    if(currentCharsNumber > maxChars-1){
        $(".chars").html("Reached maximum number of charachters")
    }else{
        $(".chars").html(`${maxChars - currentCharsNumber}`)
    }
});