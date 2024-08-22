//------------------------------------------------------------------------------------ text to binary
// Get modal element
const modal = document.getElementById('convertModal');

// Open modal on Convert button click
document.getElementById('convertBtn').addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal
document.getElementById('closeModalBtn').addEventListener('click', function() {
    modal.style.display = 'none';
});

// Convert to RGB
document.getElementById('convertToRgbBtn').addEventListener('click', function() {
    convertHexToRgbOrRgba(false); // false indicates RGB
    modal.style.display = 'none';
});

// Convert to RGBA
document.getElementById('convertToRgbaBtn').addEventListener('click', function() {
    convertHexToRgbOrRgba(true); // true indicates RGBA
    modal.style.display = 'none';
});

// Function to handle conversion to RGB or RGBA
function convertHexToRgbOrRgba(isRgba) {
    const hexInput = document.getElementById('hexInput').value.trim();
    const rgbOutput = document.getElementById('rgbOutput');
    
    // Validate the hex input
    const isValidHex = /^#?[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(hexInput);
    if (!isValidHex) {
        rgbOutput.textContent = 'Invalid hex input';
        return;
    }

    // Remove the leading "#" if present
    const cleanedHex = hexInput.startsWith('#') ? hexInput.slice(1) : hexInput;

    // Convert hex to RGB
    const r = parseInt(cleanedHex.substring(0, 2), 16);
    const g = parseInt(cleanedHex.substring(2, 4), 16);
    const b = parseInt(cleanedHex.substring(4, 6), 16);

    // Handle alpha for RGBA
    let a = 1;
    if (isRgba && cleanedHex.length === 8) {
        a = parseInt(cleanedHex.substring(6, 8), 16) / 255;
    }

    const output = isRgba ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})` : `rgb(${r}, ${g}, ${b})`;

    // Output the result
    rgbOutput.textContent = output;
}

// Copy Button functionality remains the same
document.getElementById('copyBtn').addEventListener('click', function() {
    const rgbOutput = document.getElementById('rgbOutput').textContent;
    const copyBtn = document.getElementById('copyBtn');
    
    // Create a temporary textarea to copy the text from
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = rgbOutput;
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

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('hexInput').value = '';
    document.getElementById('rgbOutput').textContent = '';
});

// Color Picker Hex Input
document.getElementById('hexToBinary').addEventListener('input', function() {
    // Get the selected color's hex value
    const hexColor = this.value;

    // Set the hex value to the textarea
    document.getElementById('hexInput').value = hexColor;
});
