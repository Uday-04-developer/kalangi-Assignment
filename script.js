document.addEventListener('DOMContentLoaded', () => {
    console.log('Kilangi Store Loaded');

    /* =========================================
       1. Category Pill Toggle (NEW CODE HERE)
       ========================================= */
    const pills = document.querySelectorAll('.cat-pill');

    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            // A. Remove 'active' class from ALL pills
            pills.forEach(p => p.classList.remove('active'));

            // B. Add 'active' class to the CLICKED pill
            this.classList.add('active');
        });
    });


    /* =========================================
       2. Simple Scroll Animation
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Select all sections to animate
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Category Filter Logic --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productsContainer = document.querySelector('.products-container');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
            
            // Optional: Scroll back to start when filter changes
            productsContainer.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        });
    });

    /* --- 2. Color Swatch Logic --- */
    const colorSwatches = document.querySelectorAll('.color-swatch');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Find parent container to only affect this specific card
            const parent = this.closest('.color-options');
            // Remove active from siblings
            parent.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
        });
    });

    /* --- 3. Scroll Indicator Logic --- */
    const scrollDots = document.querySelectorAll('.scroll-dot');

    function updateScrollIndicator() {
        const scrollLeft = productsContainer.scrollLeft;
        // Calculate width of one card + gap
        const cardWidth = productsContainer.querySelector('.product-card').offsetWidth + 20; 
        
        // Find which card index we are currently looking at
        const currentIndex = Math.round(scrollLeft / cardWidth);
        
        scrollDots.forEach((dot, index) => {
            // Toggle active class based on index
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Listen for scroll events
    productsContainer.addEventListener('scroll', updateScrollIndicator);

    // Allow clicking dots to scroll
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const cardWidth = productsContainer.querySelector('.product-card').offsetWidth + 20;
            productsContainer.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        });
    });

    /* --- 4. "Shop Bestsellers" Button Logic --- */
    const shopBtn = document.querySelector('.shop-btn');
    let currentShopIndex = 0;

    if(shopBtn) {
        shopBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.product-card');
            // Move to next card, loop back to start if at end
            currentShopIndex = (currentShopIndex + 1) % cards.length;
            
            const cardWidth = cards[0].offsetWidth + 20;
            productsContainer.scrollTo({
                left: cardWidth * currentShopIndex,
                behavior: 'smooth'
            });
        });
    }
});