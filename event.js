function ClickWeb (){
    $('.read-one').click(function () {

        $('.p-text-first').text(`Most of you might not remember,
                         but the software was once shipped physically by discettes and discs and then installed on the user's computer.
                        Although there is a decent amount of software still installed on our computers we used to make our day-to-day 
                       operations by using web applications. `);
         $('.p-text-first').css("width","30%");
         $('.read-one').hide();


 let readmoreOne = $("<button>");
    readmoreOne
    .text("Read More..")
    .addClass("button-one")
    .appendTo(".p-text-first")

 
$(".button-one").click(function(){
    $(".p-text-second").text(`We have specialized in creating web applications of any scale capable of serving to any amount of 
              users simultaneously. From simple informational web sites (e.g. landing pages, business web sites) to complex applications running in the 
             web browser (e.g. ERP, CRM)`)
    $('.p-text-second').css("width","30%");
    $(".button-one").hide();
})

$('#web-development').click(function(){
            $('.p-text-first').hide()
            $('.p-text-second').hide()
            $('.read-one').show();
         })

})};

function ClickMobile(){
    
    $('.read-two').click(function(){

$('.p-text-third').text(`What time is it? Correct. You've just looked at your phone to check it. Admit it, we are using our
    mobile phones everyday more than anything else. If something can run on your mobile phone, it will eventually run.`);
 $('.p-text-third').css("width","30%");
 $('.read-two').hide();


 let readmoreTwo = $('<button>');
     readmoreTwo
     .text('Read More..')
     .addClass('button-two')
     .appendTo('.p-text-fourth')
    
    $('.button-two').click(function(){
    $('.p-text-fourth').text(`Creating any service or informational application for mobile is our "Good morning!" phrase. 
        That’s why it is very important to us to be able to run in one and the same way on all of the major mobile operating systems.`);
    $('.p-text-fourth').css("width","30%");
    $('.button-two').hide();
})
})
};

function ClickBlockchain() {
    $('.read-three').click(function(){

    $('.p-text-fifth').text(`Economic models nowadays have become way too complex. Middlemen are everywhere. Validation by authorities. 
    Trust. But the way we work removes the need for a middleman, leaving just the peer to peer communication. `);
    $('.p-text-fifth').css("width","30%");
    $('.read-three').hide();

    let readmoreThree = $('<button>');
    readmoreThree
    .text('Read More..')
    .addClass('button-three')
    .appendTo('.p-text-fifth')

    $('.button-three').click(function(){
    $('.p-text-sixth').text(`Creating decentralized applications, smart contracts or running a new blockchain network are just a few of the services
    we offer in this area. We have proven our skills by creating the biggest platform in the travelling industry purely relying on blockchain operations.`);
    $('.p-text-sixth').css("width","30%");
    $('.button-three').hide();

    })
    })
};

function ClickConsultancy() {
    $('.read-four').click(function(){
        $('.p-text-seventh').text(`You are already working with an existing software development team? Are they hard to organize? Are they facing 
        showstoppers? Or their power is not enough for the project's needs?`);
        $('.p-text-seventh').css("width","30%");
        $('.read-four').hide();

        let readmoreFour = $('<button>');
        readmoreFour
        .text('Read More..')
        .addClass('button-four')
        .appendTo('.p-text-seventh')

        $('.button-four').click(function(){
            $('.p-text-eighth').text(`We are here to not only solve all of these problems but also many more others that may arise. We can plug into an 
            existing team and solve organizational or technical problems by providing innovative solutions. We can follow the existing process and suggest
             improvements, because we believe in the procedural way of working.`)
             $('.p-text-eighth').css("width","30%");
             $('.button-four').hide();
        })
    })
};