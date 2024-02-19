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
