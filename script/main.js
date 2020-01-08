
    $(document).ready(function() 
    {
        var page=
        {
            'about'     :   {html:'page-1.html',js:'page-1.js'},
            'services'  :   {html:'page-2.html',js:'page-2.js'},
            'prices'   :   {html:'page-3.html',js:'page-3.js'},
            'time'  :   {html:'page-4.html',js:'page-4.js'},      
            'contact'   :   {html:'page-5.php',js:'page-5.js'}  
        };
               
        $('#themis').themis(page);

        $('.news-list').bxSlider(
        {
            auto:true,
            pause:5000,
            nextText:null,
            prevText:null,
            mode:'vertical',
            displaySlideQty:2
        });
        
        $('.testimonials-list').bxSlider(
        {
            auto:false,
            pause:10000,
            nextText:null,
            prevText:null,
            mode:'vertical',
            displaySlideQty:2
        }); 
    });