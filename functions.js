/* After a few minutes of coffee 
we will start creating an accordion with H titles 
using only JQuery
Also will try to do that with clean JavaScript */

// Here is the function

function accord() {
    // $(this).next().toggleClass('active');
    $('article h2').click(function(){
        $(this).next().slideToggle('slow');
    });
    /* $('article h2').click(function(){
        $(this).slideDown();
    }); */
}