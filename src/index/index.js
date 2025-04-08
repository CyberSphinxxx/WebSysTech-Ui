document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('aside');
    const menuBtn = document.querySelector('.menu-btn');
    const main = document.querySelector('main');
    let isCollapsed = false;

    menuBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        document.body.classList.toggle('collapsed');
        
        // Force reflow for smoother animation
        void sidebar.offsetWidth;
        
        // Update aria attributes for accessibility
        menuBtn.setAttribute('aria-expanded', !isCollapsed);
    });

    // Add keyboard accessibility
    menuBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuBtn.click();
        }
    });

    // Add smooth scroll behavior to menu items
    const menuLinks = document.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href !== '#') {
                document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});