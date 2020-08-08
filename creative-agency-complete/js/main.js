(function() {

    'use strict';

    var siteHeader = document.getElementById('site-header');
    var navToggleBtn = document.getElementById('nav-toggle');

    navToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (siteHeader.classList.contains('nav-open')) {
            siteHeader.classList.remove('nav-open');
        } else {
            siteHeader.classList.add('nav-open');
        }
    }, false);

})();