document.getElementById('read-more-button').addEventListener('click', function() {
    var fullContent = document.querySelector('.full-content');

    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        fullContent.style.display = 'block';
        this.innerText = 'Read Less';

        // Add a class to center the "Read Less" button horizontally
        this.classList.add('centered-button');
    } else {
        fullContent.style.display = 'none';
        this.innerText = 'Read More';

        // Remove the centering class when changing back to "Read More"
        this.classList.remove('centered-button');
    }
});

$(window).scroll(function () { //on scroll event on window
    var position = $(this).scrollTop(); //position scrolled sofar

    $('.section').each(function() { //for each loop(chcecks for every element with that class)
    //for your every section on site or your class of main sections you are targetting
        var target = $(this).offset().top;//each element position from top
        var targetBot = target + $(this).height();

        var id = $(this).attr('id'); //this element ID - should be same as data-id on your nav link
        $('nav a[data-id=' + id + ']').removeClass('hovered'); //clearing
        if (position >= target && targetBot >= position) { //if you are scrolled over element with some id 
            $('nav a[data-id=' + id + ']').addClass('hovered');
            //this will check wich element you are scrolled on and selects in menu that item with same data-id :) 
        }
    });

});


