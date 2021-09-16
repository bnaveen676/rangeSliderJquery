
$(()=>{
    // focs or input on range
    $('#custom-slider').on('input',(e)=>{
        // value of range Input element
        const  rangeVal =  e.target.value;
        $('#current-value').html(rangeVal).addClass('active').css('left',`${rangeVal/2}%`);
    });

    // blur on range
    $('#custom-slider').on('blur',(e)=>{
        // $('#current-value').removeClass('active');
    });
});