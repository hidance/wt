// UI.js - Function to change content size in sekcia_zmena section
document.addEventListener('DOMContentLoaded', function() {
    const sekciaZmena = document.getElementById('sekcia_zmena');
    const sizeBtn = document.getElementById('sizeBtn');
    const sizeDropdown = document.getElementById('sizeDropdown');
    
    if (!sekciaZmena) return;

    const sizes = ['small', 'medium', 'large', 'xlarge'];
    let currentSizeIndex = 1; // Start with medium

    // Function to apply size
    function applySize(size) {
        // Remove all size classes
        sekciaZmena.classList.remove('size-small', 'size-medium', 'size-large', 'size-xlarge');
        
        // Add new size class
        sekciaZmena.classList.add(`size-${size}`);
        
        // Update dropdown
        if (sizeDropdown) {
            sizeDropdown.value = size;
        }
        
        // Update current index
        currentSizeIndex = sizes.indexOf(size);
    }

    // Method 1: Button click
    if (sizeBtn) {
        sizeBtn.addEventListener('click', function() {
            currentSizeIndex = (currentSizeIndex + 1) % sizes.length;
            applySize(sizes[currentSizeIndex]);
        });
    }

    // Method 2: Dropdown selection
    if (sizeDropdown) {
        sizeDropdown.addEventListener('change', function() {
            applySize(this.value);
        });
    }

    // Method 3: Keyboard shortcuts (Ctrl + Plus/Minus)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            if (event.key === '+' || event.key === '=') {
                event.preventDefault();
                if (currentSizeIndex < sizes.length - 1) {
                    currentSizeIndex++;
                    applySize(sizes[currentSizeIndex]);
                }
            } else if (event.key === '-' || event.key === '_') {
                event.preventDefault();
                if (currentSizeIndex > 0) {
                    currentSizeIndex--;
                    applySize(sizes[currentSizeIndex]);
                }
            }
        }
    });

    // Method 4: Automatic resize based on window width
    function handleResize() {
        const width = window.innerWidth;
        let newSize;

        if (width <= 550) {
            newSize = 'small';
        } else if (width <= 850) {
            newSize = 'medium';
        } else if (width <= 1250) {
            newSize = 'large';
        } else {
            newSize = 'xlarge';
        }

        // Only apply if different from current
        if (!sekciaZmena.classList.contains(`size-${newSize}`)) {
            applySize(newSize);
        }
    }

    // Initial size based on window width
    handleResize();

    // Listen for window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    });
});

