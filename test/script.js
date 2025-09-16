$(document).ready(function() {
    

    		//Function to hidde nav when scroll down and show it when scroll up with a animation movement on behind top border
			let lastScrollTop = 0;
            let isNavHidden = false;
            
            $(window).scroll(function(){
                let scrollTop = $(this).scrollTop();
                console.log(scrollTop);
                
                if(scrollTop > lastScrollTop && !isNavHidden){
                    $("header").stop().animate({top: "-100px"}, 500);
                    isNavHidden = true;
                } else if(scrollTop < lastScrollTop && isNavHidden){
                    $("header").stop().animate({top: "0px"}, 500);
                    isNavHidden = false;
                }
                
                lastScrollTop = scrollTop;
            });
/*get AddCard click and pickup question and response value to make cards*/
$("#AddCard").click(function(){
    $(".container-card").append("<div class='card'></div>");
    //append him values of question and response
    $(".container-card").children().last().append("<p class='question'>"+$("#question").val()+"</p>");
    $(".container-card").children().last().append("<hr>");
    $(".container-card").children().last().append("<p class='reponse'>"+$("#reponse").val()+"</p>");
    //delete values of question and response
    $("#reponse").val("");
    $("#question").val("");

    //append him a button
    $(".container-card").children().last().append("<button class='delete'>Delete</button>");
    //add a click event on the button to delete the card
    $(".delete").click(function(){
        $(this).parent().remove();
    });

    
    


});




});
