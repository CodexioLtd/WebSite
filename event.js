function ClickServices() {
    $('.web').click(function () {

        $('.services-text-p').hide();
        $('.web-text-p').text(`Most of you might not remember, but the software was once shipped physically by discettes and discs and then installed 
        on the user's computer. Although there is a decent amount of software still installed on our computers we used to make our day-to-day operations 
        by using web applications. 
        We have specialized in creating web applications of any scale capable of serving to any amount of users simultaneously. From simple informational
         web sites (e.g. landing pages, business web sites) to complex applications running in the web browser (e.g. ERP, CRM). `);
    })

    $('.mobile').click(function () {

        $('.web-text-p').hide();
        $('.services-text-p').hide();
        $('.mobile-text-p').text(`What time is it? Correct. You've just looked at your phone to check it. Admit it, we are using our mobile phones everyda 
         more than anything else. If something can run on your mobile phone, it will eventually run.
        Creating any service or informational application for mobile is our "Good morning!" phrase. That’s why it is very important to us to be able to run 
        in one and the same way on all of the major mobile operating systems.`);
    })

    $('.blockchain').click(function () {

        $('.web-text-p').hide();
        $('.services-text-p').hide();
        $('.mobile-text-p').hide();
        $('.blockchain-text-p').text(`Economic models nowadays have become way too complex. Middlemen are everywhere. Validation by authorities. Trust. 
        But the way we work removes the need for a middleman, leaving just the peer to peer communication. 
        Creating decentralized applications, smart contracts or running a new blockchain network are just a few of the services we offer in this area. 
        We have proven our skills by creating the biggest platform in the travelling industry purely relying on blockchain operations.
        `);
    })

    $('.consultancy').click(function () {

        $('.web-text-p').hide();
        $('.services-text-p').hide();
        $('.blockchain-text-p').hide();
        $('.mobile-text-p').hide();
        $('.consultancy-text-p').text(`You are already working with an existing software development team? Are they hard to organize? 
        Are they facing showstoppers? Or their power is not enough for the project's needs? We are here to not only solve all of these problems 
        but also many more others that may arise. We can plug into an existing team and solve organizational or technical problems by providing innovative
        solutions. We can follow the existing process and suggest improvements, because we believe in the procedural way of working.`);
    })
};
ClickServices();