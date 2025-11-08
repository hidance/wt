// Responsive Loader - Dynamically loads CSS files based on window width
(function() {
    'use strict';

    let currentStylesheet = null;

    function loadResponsiveCSS() {
        const width = window.innerWidth;
        let cssFile;

        // Determine which CSS file to load based on width
        if (width < 700) {
            cssFile = 'styles/responsive/responsive-700.css';
        } else if (width < 900) {
            cssFile = 'styles/responsive/responsive-900.css';
        } else if (width < 1300) {
            cssFile = 'styles/responsive/responsive-1300.css';
        } else {
            cssFile = 'styles/responsive/responsive-1600.css';
        }

        // Only load if different from current
        if (currentStylesheet !== cssFile) {
            // Remove old stylesheet if exists
            const oldLink = document.querySelector('link[data-responsive="true"]');
            if (oldLink) {
                oldLink.remove();
            }

            // Create new link element
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssFile;
            link.setAttribute('data-responsive', 'true');
            
            // Add to head
            document.head.appendChild(link);
            
            currentStylesheet = cssFile;
        }
    }

    // Load CSS on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadResponsiveCSS);
    } else {
        loadResponsiveCSS();
    }

    // Reload CSS on window resize (with debounce)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(loadResponsiveCSS, 150);
    });
})();

