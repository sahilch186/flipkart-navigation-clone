
// Desktop Search
$('.search-input').on("focus", function(){
    $('.search-list:not(.mobile)').fadeIn('fast');
});

$('.search-input').on("blur", function(){
    $('.search-list:not(.mobile)').fadeOut('fast');
});

// UpperNav Dropdown
$('.has-dropdown, .dropdown').hover(function () {
    $(this).children('.dropdown').toggleClass('show');
});


// Mobile Search
$('.btn-mobile-search').on("click", function(){
    $(".mobile-search").fadeIn('fast');
    $(".mobile-search .search-input").focus();
});

$('.mobile-search .btn-back').on("click", function(){
    $(".mobile-search").fadeOut('fast');
});

$('.mobile-search .btn-reset').on("click", function(){
    $(".mobile-search .search-input").val("");
    $('.search-list.mobile').fadeOut('fast');
});

$(".mobile-search .search-input").on("keyup blur", function(){
    console.log($(this).val());
    if($(this).val() !== ""){
        $('.search-list.mobile').fadeIn('fast');
    }
    else{
        $('.search-list.mobile').fadeOut('fast');
    }
});


// Mobile Navigation
$(".mobile-nav-toggler").on('click', function(){
    $('.mobile-nav').css({
        "left" : "0px",
        "background" : "rgba(0, 0, 0, 0.5)"
    })
});

$(".sidebar .btn-close, .mobile-nav").on('click', function(){
    $('.mobile-nav').css({
        "left" : "-100%",
        "background" : "rgba(0, 0, 0, 0)"
    })
});
