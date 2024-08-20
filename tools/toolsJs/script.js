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