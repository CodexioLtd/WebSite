function changeAllOpacities(currentElement) {
    $('#web-img').css('opacity', '0.5');
    $('#mobile-img').css("opacity", "0.5");
    $('#blockchain-img').css("opacity", "0.5");
    $('#consultancy-img').css("opacity", "0.5");

    $(currentElement).css("opacity", "1");
}

$('#web').mouseover(e => {
    changeAllOpacities(e.target);
    $('.heading-description').text(`Web Development`);
    $('.service-description').html(`<p class="service-description-paragraph">Most of you might not remember, but the software was once shipped physically by discettes and discs and then installed 
        on the user's computer. Although there is a decent amount of software still installed on our computers we used to make our day-to-day operations 
        by using web applications. </p>
        <p class="service-description-paragraph">We have specialized in creating web applications of any scale capable of serving to any amount of users simultaneously. From simple informational
         web sites (e.g. landing pages, business web sites) to complex applications running in the web browser (e.g. ERP, CRM). </p>`);
});

$('#mobile').mouseover(e => {
    $('.heading-description').text(`Mobile Development`);
    $('.service-description').html(`<p class="service-description-paragraph">What time is it? Correct. You've just looked at your phone to check it. Admit it, we are using our mobile phones everyda 
         more than anything else. If something can run on your mobile phone, it will eventually run.</p>
        <p class="service-description-paragraph">Creating any service or informational application for mobile is our "Good morning!" phrase. That’s why it is very important to us to be able to run 
        in one and the same way on all of the major mobile operating systems.</p>`);
    changeAllOpacities(e.target);
});

$('#blockchain').mouseover(e => {
    $('.heading-description').text(`Bloсkchain Development`);
    $('.service-description').html(`<p class="service-description-paragraph">Economic models nowadays have become way too complex. Middlemen are everywhere. Validation by authorities. Trust. 
        But the way we work removes the need for a middleman, leaving just the peer to peer communication.</p>
        <p class="service-description-paragraph">Creating decentralized applications, smart contracts or running a new blockchain network are just a few of the services we offer in this area. 
        We have proven our skills by creating the biggest platform in the travelling industry purely relying on blockchain operations.</p>`);
    changeAllOpacities(e.target);
});

$('#consultancy').mouseover(e => {
    $('.heading-description').text(`Consultancy`);
    $('.service-description').html(`<p class="service-description-paragraph">You are already working with an existing software development team? Are they hard to organize? 
        Are they facing showstoppers? Or their power is not enough for the project's needs?</p>
        <p class="service-description-paragraph">We are here to not only solve all of these problems but also many more others that may arise. We can plug into an existing team and solve organizational or technical problems by providing innovative
        solutions. We can follow the existing process and suggest improvements, because we believe in the procedural way of working.</p>`);
    changeAllOpacities(e.target);
});
