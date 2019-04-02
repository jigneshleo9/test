$(document).ready(function () {

    // animationData = {
    //     inClass: "slideInUp",
    //     outClass: "slideOutDown",
    // }

    animationData = {
        inClass: "slideInDown",
        outClass: "slideOutUp",
    }

    $(document).on('click', '.anim-link', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        // console.log(href);

        window.history.pushState({
            urlPath: href
        }, "", href)

        $('.loader-layer').removeClass(animationData.outClass).addClass(animationData.inClass);
        setTimeout(() => {
            window.location = href;
        }, 1000);
    });
});
$(window).load(function () {
    // console.log(animationData.inClass);
    // console.log(animationData.outClass);

    $('.loader-layer').removeClass(animationData.inClass).addClass(animationData.outClass);
});