
const counterSymbols = () => {
    
    document.querySelectorAll('.counter-wrapper').forEach(wrapper => {
        let counterText = wrapper.querySelector('.counter-text');
        let derivation = wrapper.querySelector('.counter-num');
      
      
        counterText.addEventListener('input', function() {
          
          let counter = counterText.value.length;
          derivation.textContent = counter;
        });
      });
};

export default counterSymbols;



















