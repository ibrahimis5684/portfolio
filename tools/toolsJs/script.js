document.querySelectorAll('li[id]').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = item.nextElementSibling;
        const angleRightIcon = item.querySelector('.fa-angle-right');
        const chevronDownIcon = item.querySelector('.fa-chevron-down');

        // Toggle submenu display
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            item.classList.remove('active');
            angleRightIcon.style.display = 'inline';
            chevronDownIcon.style.display = 'none';
        } else {
            submenu.style.display = 'block';
            item.classList.add('active');
            angleRightIcon.style.display = 'none';
            chevronDownIcon.style.display = 'inline';
        }
    });
});


// Function to check screen size and add/remove popover attribute
function togglePopover() {
    const sideMenu = document.getElementById('open-side-menu');
    
    // Check if the screen width is 768px or smaller
    if (window.innerWidth <= 768) {
        sideMenu.setAttribute('popover', true);
    } else {
        sideMenu.removeAttribute('popover');
    }
}

// Initial check when the page loads
togglePopover();

// Listen for window resize events to check the screen size dynamically
window.addEventListener('resize', togglePopover);

// // Open the menu when the button is clicked
// document.querySelectorAll('.open-categories-menu').forEach(function(element) {
//     element.addEventListener('click', function(event) {
//         document.querySelectorAll('.side-menu').forEach(function(menu) {
//             menu.classList.toggle('active');
//         });
//         event.stopPropagation(); // Prevent the event from bubbling up to the document
//     });
//     element.addEventListener('click', function(event) {
//         document.querySelectorAll('.open-categories-menu').forEach(function(menu) {
//             menu.classList.toggle('active');
//         });
//         event.stopPropagation(); // Prevent the event from bubbling up to the document
//     });
//     element.addEventListener('click', function(event) {
//         document.querySelectorAll('.body-box').forEach(function(menu) {
//             menu.classList.toggle('active');
//         });
//         event.stopPropagation(); // Prevent the event from bubbling up to the document
//     });
// });

// // Close the menu when clicking outside of it
// document.addEventListener('click', function(event) {
//     document.querySelectorAll('.side-menu').forEach(function(menu) {
//         if (!menu.contains(event.target)) {
//             menu.classList.remove('active');
//         }
//     });
// });
// // Close the menu when clicking outside of it
// document.addEventListener('click', function(event) {
//     document.querySelectorAll('.open-categories-menu').forEach(function(menu) {
//         if (!menu.contains(event.target)) {
//             menu.classList.remove('active');
//         }
//     });
// });