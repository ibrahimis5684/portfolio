// mouse move to animation
let animatadIcon = document.querySelector('#home');
let images = document.querySelectorAll('.moveAni');

animatadIcon.onmousemove = function(e) {
    let X = e.pageX - animatadIcon.offsetLeft;
    let Y = e.pageY - animatadIcon.offsetTop;

    images[0].style.transform = 'translate(' + X/100 + 'px, ' + Y/100 + 'px)';
    images[1].style.transform = 'translate(' + X/50 + 'px, ' + Y/50 + 'px)';
    images[2].style.transform = 'translate(' + X/25 + 'px, ' + Y/25 + 'px)';
    images[3].style.transform = 'translate(' + X/16.67 + 'px, ' + Y/16.67 + 'px)';
};
// ---------------------------------
//scroll to animation
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal); // Check elements on page load

function reveal() {
    var formElements = document.querySelectorAll('.form');
    var scrollTotopElements = document.querySelectorAll('.scroll-to-top');
    var scrollToBottomElements = document.querySelectorAll('.scroll-to-bottom');
    var scrollToLeftElements = document.querySelectorAll('.scroll-to-left');
    var scrollToRightElements = document.querySelectorAll('.scroll-to-right');
    
    // Combine NodeLists into one array
    var reveals = [ ...formElements, ...scrollToBottomElements, ...scrollToLeftElements, ...scrollToRightElements, ...scrollTotopElements];

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Optional: Debounce function to optimize scroll event handling
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(reveal));

//---------------------------------------------------------------------------------------------------------------------
//about section
var tablinks = document.getElementsByClassName("tab-links"),
    tabcontents = document.getElementsByClassName("tab-contents");

function opentab(t) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(t).classList.add("active-tab");
}

// about skill
var tabAboutSkills = document.getElementsByClassName("tab-about-skill"),
    tabAboutContents = document.getElementsByClassName("tab-about-contents");

function openskilltab(t) {
    for (let tabAboutSkill of tabAboutSkills) {
        tabAboutSkill.classList.remove("active-about-skill");
    }
    for (let tabAboutContent of tabAboutContents) {
        tabAboutContent.classList.remove("active-about-tab");
    }
    event.currentTarget.classList.add("active-about-skill");
    document.getElementById(t).classList.add("active-about-tab");
}

//---------------------------------------------------------------------------------------------------------------------
//skill section
function openSkill(skillName, event) {
    var i;
    var tabcontent = document.getElementsByClassName("tab-skill-content");
    var tablinks = document.getElementsByClassName("tab-skill");

    // Hide all tab content
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-skill", "");
    }

    // Show the current tab content
    if (skillName === 'all') {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    } else {
        document.getElementById(skillName).style.display = "block";
    }

    // Add active class to the current tab link
    event.currentTarget.className += " active-skill";
}

// Display the "all" tab by default
document.addEventListener("DOMContentLoaded", function() {
    openSkill('all', { currentTarget: document.querySelector('.tab-skill[onclick*="all"]') });
});

// text overflow is ...
function truncateText(element, wordLimit) {
    const text = element.textContent.trim();
    const words = text.split(/\s+/); // Split by any whitespace

    if (words.length > wordLimit) {
        element.textContent = words.slice(0, wordLimit).join(' ') + '...';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pElements = document.querySelectorAll('.skill-text');
    pElements.forEach(pElement => truncateText(pElement, 1));
});
//---------------------------------------------------------------------------------------------------------------------
//open menu mobile device
document.addEventListener('click', function(event) {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.small-menu');

    if (menuIcon.contains(event.target)) {
        // Toggle menu visibility when the icon is clicked
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    } else if (!menu.contains(event.target)) {
        // Hide menu if clicked outside of it
        menu.style.display = 'none';
    }
});
//--------------------------------------------------
//form submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJkfUOgJclqRQ-F2jl2JAUO36HPNIDRnQryCZ9AUHb9UuVLKLgiYg7R8RQiHgqAR7J/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show the spinner
  document.getElementById("spinner").style.display = "block";

  // Disable scrolling and clicking
  document.body.classList.add("disable-interaction");

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        form.reset();

        // Hide the spinner
        document.getElementById("spinner").style.display = "none";

        // Re-enable scrolling and clicking
        document.body.classList.remove("disable-interaction");
    })
    .catch(error => {
        console.error('Error!', error.message);

        // Hide the spinner in case of error
        document.getElementById("spinner").style.display = "none";

        // Re-enable scrolling and clicking
        document.body.classList.remove("disable-interaction");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuIcons = document.querySelectorAll('.work-icon');
    const workMenus = document.querySelectorAll('.work-menu');

    // Toggle menu visibility when icon is clicked
    menuIcons.forEach((menuIcon, index) => {
        const workMenu = workMenus[index];

        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation();
            workMenu.style.display = workMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Hide the menu when clicking anywhere outside of it
    document.addEventListener('click', function(event) {
        workMenus.forEach((workMenu, index) => {
            const menuIcon = menuIcons[index];
            if (!workMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                workMenu.style.display = 'none';
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const shareLinks = document.querySelectorAll('.share-link');
    const sharePopup = document.getElementById('share-popup');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Show the share popup when any share link is clicked
    shareLinks.forEach(function(shareLink) {
        shareLink.addEventListener('click', function(event) {
            event.preventDefault();
            sharePopup.style.display = 'block';
        });
    });

    // Close the popup when any close button is clicked
    closeBtns.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            sharePopup.style.display = 'none';
        });
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === sharePopup) {
            sharePopup.style.display = 'none';
        }
    });
});

function copyToClipboard() {
    const copyText = document.getElementById("copy-text");
    const copyFeedback = document.getElementById("copy-feedback");
    const copyButton = document.querySelector(".copy-button");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand("copy");

    // Provide feedback that the text has been copied
    copyFeedback.style.display = "inline";
    copyButton.textContent = "Copied!";

    // Revert button text and hide feedback after a short delay
    setTimeout(() => {
        copyButton.textContent = "Copy";
        copyFeedback.style.display = "none";
    }, 2000);
}
