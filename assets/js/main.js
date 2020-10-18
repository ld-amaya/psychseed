var od = document.getElementById('od');
var eap = document.getElementById('eap');
var tas = document.getElementById('tas');
var sc = document.getElementById('service_content');

od.addEventListener('click', ()=> {
    sc.innerHTML = '<h4>Organizational Development</h4> <p class ="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente nisi voluptas harum, officia tempora quas neque fugiat ea, expedita nemo id quasi praesentium. Maiores quis labore nihil maxime. Placeat repudiandae blanditiis delectus sunt quidem dolor autem vero, praesentium cupiditate architecto deleniti debitis voluptatem explicabo exercitationem, voluptatibus dolore doloribus alias.</p>';
})

eap.addEventListener('click', () =>{
    sc.innerHTML = '<h4>Employee Assitance Programs</h4><p class ="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut iusto modi nam quasi ullam distinctio dolorem qui, corporis amet nobis vitae dolor asperiores accusamus.</p>';
})

tas.addEventListener('click', ()=>{
    sc.innerHTML='<h4>Training and Seminars</h4><p class ="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium itaque magnam at quasi exercitationem similique atque ea illo expedita, ipsam delectus dolore laboriosam placeat iste repudiandae amet alias molestiae consequatur excepturi fuga obcaecati et eaque aliquam. Sit voluptatum, pariatur officia eaque asperiores facilis beatae maxime quod rem id fugiat sapiente! Labore accusantium, ad praesentium magni fugit delectus. Vero, veritatis nesciunt?</p>';
    
})

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;
    pos = pos -60;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});