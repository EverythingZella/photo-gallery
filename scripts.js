document.addEventListener('DOMContentLoaded', () => {
    console.log('Page is fully loaded');

    // Function to add tabindex attribute
    function addTabindex() {
        const figures = document.querySelectorAll('.gallery figure');
        figures.forEach((figure, index) => {
            figure.setAttribute('tabindex', index + 1); // Assign unique tabindex for focus order
        });
        console.log('Tabindex added');
    }

    // Function to set up event listeners
    function setupEventListeners() {
        const figures = document.querySelectorAll('.gallery figure');
        figures.forEach((figure) => {
            figure.addEventListener('mouseover', () => {
                figure.style.border = '2px solid blue'; // Highlight border on hover
                console.log('Mouse over:', figure.querySelector('figcaption').textContent);
            });

            figure.addEventListener('mouseleave', () => {
                figure.style.border = ''; // Remove border on mouse leave
                console.log('Mouse leave:', figure.querySelector('figcaption').textContent);
            });

            figure.addEventListener('focus', () => {
                figure.style.border = '2px solid green'; // Highlight border on focus
                console.log('Focus on:', figure.querySelector('figcaption').textContent);
            });

            figure.addEventListener('blur', () => {
                figure.style.border = ''; // Remove border on blur
                console.log('Blur from:', figure.querySelector('figcaption').textContent);
            });
        });
    }

    // Call the functions
    addTabindex();
    setupEventListeners();

    // Add onload event listener
    window.addEventListener('load', () => {
        console.log('Window is loaded');
    });
});

