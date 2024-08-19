document.getElementById('binary').addEventListener('click', function() {
    var ul = this.nextElementSibling;
    var icons = this.querySelectorAll('.fa-angle-right'); // Using querySelectorAll to target all icons

    // Toggle display of the nested list
    if (ul.style.display === "block") {
        ul.style.display = "none";
        icons.forEach(function(icon) {
            icon.classList.add('rotate-b'); // Add rotate class to each icon
        });
    } else {
        ul.style.display = "block";
        icons.forEach(function(icon) {
            icon.classList.remove('rotate-b'); // Remove rotate class from each icon
        });
    }

    // Toggle background color and text color
    if (this.style.backgroundColor === "rgb(255, 255, 255)") { // RGB value for #007bff
        this.style.backgroundColor = "#007bff"; // Change to white background
        this.style.color = "#ffffff"; // Change to dark text color
    } else {
        this.style.backgroundColor = "#ffffff"; // Change to blue background
        this.style.color = "#474747"; // Change to white text color
    }
});
//------------------------------------------------------------------------------------ text to binary
// Convert Button
document.getElementById('convertBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    
    let binaryResult = '';
    for (let i = 0; i < textInput.length; i++) {
        let binaryChar = textInput[i].charCodeAt(0).toString(2);
        binaryResult += binaryChar.padStart(8, '0') + ' ';
    }
    
    binaryOutput.textContent = binaryResult.trim();
});

// Copy Button
document.getElementById('copyBtn').addEventListener('click', function() {
    const binaryOutput = document.getElementById('binaryOutput').textContent;
    const copyBtn = document.getElementById('copyBtn');
    
    // Create a temporary textarea to copy the text from
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = binaryOutput;
    document.body.appendChild(tempTextarea);
    
    // Select the text and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
    
    // Change the button text and appearance to indicate copied
    copyBtn.innerHTML = 'Copied!';
    copyBtn.classList.add('copied');

    // Revert the button text after 1.5 seconds
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-duotone fa-solid fa-clone"></i> Copy';
        copyBtn.classList.remove('copied');
    }, 1500);

});

// Past Button
document.getElementById('pastBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    
    // Past the text from clipboard
    navigator.clipboard.readText().then(clipText => textInput.value = clipText);
});

// Reset Button for Text Input
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('textInput').value = '';
    document.getElementById('binaryOutput').textContent = '';
});

// Reset Button for Binary Output
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('binaryOutput').textContent = '';
});