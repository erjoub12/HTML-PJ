$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        // Handle Newsletter form Footer
        $("#footer").load("./footer.html", function() {
            $('#newsletter').submit(function(e) {
                e.preventDefault();
        
                alert("We will contact you shortly!!");
            });
        });
    });

    //Slide in Homepage
    setInterval(function() {
        console.log('start');
        $('.home .hero > div').each(function(index) {
            $(".home .hero").animate({ scrollLeft: "3000" }, 2000).delay(2000);
            if($(this).length - 1 == index) {
                $(".home .hero").animate({ scrollLeft: -(index * 3000) }, 1000).delay(2000);
            }
        });
    }, 500);

    //Handle Form in Contact page
    $('#contact').submit(function(e) {
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var message = $('textarea').val();

        alert(`
            Name: ${name}
            Email: ${email}
            Message: ${message}`);
    });

    // Filter Price in Shop page
    $('input[type="range"]').on('input', function () {
        var price = $(this).val();
        $('.change-range').html(price);
        $('.product > div > div > span:nth-child(2)').each(function() {
            var itemPrice = parseFloat($(this).text().substring(1));
            if(price < itemPrice) {
                $(this).parent().parent().css('display', 'none');
            } else {
                $(this).parent().parent().css('display', 'block');
            }
        });
    });

    //Filter Category in Shop page
    $('.sidebar ul li').each(function() {
        $(this).click(function(e) {
            e.preventDefault();

            var category = $(this).text();
            $('.product > div > span').each(function() {
                if(category == $(this).text()) {
                    $(this).parent().css('display', 'block');
                } else {
                    $(this).parent().css('display', 'none');
                }
            });
        });
    });
    //Show all back
    $('.sidebar > div:first-child > h2').click(function() {
        $('.product > div').each(function() {
            $(this).css('display', 'block');
        });
    });

    // Tab Navigation in Product Item page
    $('.product-item section:nth-child(2) div:first-child a:first-child').addClass('open');
    $('.product-item section:nth-child(2) .addition-information').addClass('open');
    $('.product-item section:nth-child(2) div:first-child a').each(function() {
        $(this).click(function() {
            if($(this).text() == 'Addition information') {
                $('.product-item section:nth-child(2) div:first-child a:first-child').addClass('open');
                $('.product-item section:nth-child(2) .addition-information').addClass('open');

                $('.product-item section:nth-child(2) div:first-child a:last-child').removeClass('open');
                $('.product-item section:nth-child(2) .classification').removeClass('open');
            } else if ($(this).text() == 'Classification') {
                $('.product-item section:nth-child(2) div:first-child a:last-child').addClass('open');
                $('.product-item section:nth-child(2) .classification').addClass('open');

                $('.product-item section:nth-child(2) div:first-child a:first-child').removeClass('open');
                $('.product-item section:nth-child(2) .addition-information').removeClass('open');
            }
        })
    })
});