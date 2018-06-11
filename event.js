function Click (){
    $('.read-one').click(function () {

        $('.p-text-first').text(`Most of you might not remember,
          but the software was once shipped physically by discettes and discs and then installed on the user's computer.
         Although there is a decent amount of software still installed on our computers we used to make our day-to-day 
         operations by using web applications. `);
         $('.p-text-first').css("width","20%");
         $('.read-one').hide();


 let readmoreTwo = $("<button>");
    readmoreTwo
    .text("Read More..")
    .addClass("button")
    .appendTo(".p-text-first")

 
$(".button").click(function(){
    $(".p-text-second").text(`We have specialized in creating web applications of any scale capable of serving to any amount of 
    users simultaneously. From simple informational web sites (e.g. landing pages, business web sites) to complex applications running in the 
    web browser (e.g. ERP, CRM)`)
    $('.p-text-second').css("width","20%");
    $(".button").hide();
})

$('#web-development').click(function(){
            $('.p-text-first').hide()
            $('.p-text-second').hide()
            $('.read-one').show();
         })


$('.read-two').click(function(){

    $('.p-text-third').text(`What time is it? Correct. You've just looked at your phone to check it. Admit it, we are using our
     mobile phones everyday more than anything else. If something can run on your mobile phone, it will eventually run.`);
     $('.p-text-third').css("width","20%");
     $('.read-two').hide();
})

$('.read-three').click(function(){
    
    $('.p-text-fourth').text(`Economic models nowadays have become way too complex. Middlemen are everywhere. Validation by authorities. 
    Trust. But the way we work removes the need for a middleman, leaving just the peer to peer communication. `);
    $('.p-text-fourth').css("width","20%");
    $('.read-three').hide();
})

})};


 
