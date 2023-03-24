
import noUiSlider from 'nouislider';


const rangeSliders = () => {

    document.querySelectorAll('.range-slider').forEach(function (rangeSliderWrapper) {
    const rangeSlider = rangeSliderWrapper.querySelector('.range-slider__line');
    
    noUiSlider.create(rangeSlider, {
        start: [20],
        range: {
            'min': 0,
            'max': 100
        },
        connect: [true, false],
        
    });
    
    const input = rangeSliderWrapper.querySelector('.range-slider__input');

    rangeSlider.noUiSlider.on('update', function(values) {
        input.value = Math.round(values)
    })
    });


};

export default rangeSliders;



























