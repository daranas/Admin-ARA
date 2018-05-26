/*!
 * Unstyled Ecommerce Templates v.1.0.0
 * Copyright 2018 DaranaSV
 * Licensed under MIT
 */

$(document).ready(function() {
    $('#sideMenu').metisMenu();
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});