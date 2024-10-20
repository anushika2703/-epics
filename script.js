const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); 
});


const navButtons = document.querySelectorAll('.btn-nav');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active')); 
        button.classList.add('active'); 
    });
});
//Part 2 Started
document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainer = document.querySelector('.scrolling-container');


    scrollingContainer.addEventListener('mouseover', () => {
        scrollingContainer.style.animationPlayState = 'paused';
    });
    scrollingContainer.addEventListener('mouseout', () => {
        scrollingContainer.style.animationPlayState = 'running';
    });
});
//Product section
function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

function buyNow() {
    window.location.href = 'purchase.html';
}

document.getElementById('product-name').addEventListener('click', function() {
    let description = document.getElementById('description');
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
});

// review section
document.addEventListener('DOMContentLoaded', () => {
    const reviewCards = document.querySelectorAll('.review-card');
    const prevButton = document.querySelector('.arrow.prev');
    const nextButton = document.querySelector('.arrow.next');
    let currentIndex = 1; 
    
    function updateCarousel() {
        reviewCards.forEach((card, index) => {
            card.classList.remove('active');

            
            if (index === currentIndex) {
                card.classList.add('active'); 
        });

        
        const offset = currentIndex * (reviewCards[0].offsetWidth + 40); 
        document.querySelector('.carousel').style.transform = `translateX(calc(50% - ${offset}px))`;
    }

    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviewCards.length; 
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length; 
        updateCarousel();
    });

   
    updateCarousel();
});


// Goal Section
document.querySelectorAll('.goal-card').forEach(card => {
    card.addEventListener('click', () => {
        const goalTitle = card.querySelector('.card-front h3').textContent;
        console.log(`You selected the goal: ${goalTitle}`);
    });
});



