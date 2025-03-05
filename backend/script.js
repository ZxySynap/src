window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0); 
    }, 0); 
};

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden'); 
        }
    });

    const observerContent = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5  
    });

    document.querySelectorAll('.content h2, .content h1').forEach(element => {
        observerContent.observe(element);
    });
    
    const observerActionBtn = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.action-btn').forEach(button => {
        observerActionBtn.observe(button);
    });

});
