
const cardPlanShowMore = () => {
    
    const showMoreQuestions = () => {
        document.querySelectorAll('.card-plan__body-box').forEach(function(cardBodyBoxWrapper) {
            const title = cardBodyBoxWrapper.querySelector('.card-plan__body-title');
            const text = cardBodyBoxWrapper.querySelector('.card-plan__body-text');
            
            
            title.addEventListener('click', function() {
                text.classList.toggle('card-plan__body-text--active');
                title.classList.toggle('card-plan__body-title--active');
            });
            
            // Клик снаружи дропдауна. Закрыть дропдаун
            document.addEventListener('click', function (e) {
                if (e.target !== title) {
                    text.classList.remove('card-plan__body-text--active');
                    title.classList.remove('card-plan__body-title--active');
                }
            });        
        })
    }
    showMoreQuestions();
    
    const showMoreDetails = () => {
    
        document.querySelectorAll('.card-plan').forEach(function(cardWrapper) {
            const btnMore = cardWrapper.querySelector('.card-plan__details');
            const cardBody = cardWrapper.querySelector('.card-plan__body');
            const cardHeader = cardWrapper.querySelector('.card-plan__header');
            
            btnMore.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (cardBody.classList.contains('card-plan__body--active')) {
                    cardBody.classList.remove('card-plan__body--active');
                    cardHeader.classList.remove('card-plan__header--active');
                    btnMore.textContent = 'find out the details';
                    btnMore.classList.remove('card-plan__details--active');
                } else {
                    cardBody.classList.add('card-plan__body--active');
                    cardHeader.classList.add('card-plan__header--active');
                    btnMore.textContent = 'hide details';
                    btnMore.classList.add('card-plan__details--active');
                } 
                
            });
            
        })
        
    };
    showMoreDetails();
};

export default cardPlanShowMore;
