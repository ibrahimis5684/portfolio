//------------------------------------------------------------------------------------ text to binary
// Function to calculate the opposite color
function getOppositeColor(hex) {
    const oppositeHex = (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).slice(1).toUpperCase();
    return `#${oppositeHex}`;
}

// Copy Button functionality remains the same
document.getElementById('copyBtn').addEventListener('click', function() {
    const oppositeOutput = document.getElementById('oppositeOutput').textContent;
    const copyBtn = document.getElementById('copyBtn');
    
    // Create a temporary textarea to copy the text from
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = oppositeOutput;
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
    document.getElementById('oppositeOutput').textContent = '';
    document.getElementById('colorIn').value = '#000000';
    document.getElementById('colorOut').value = '#FFFFFF';
});

// Color Picker Hex Input
document.getElementById('colorIn').addEventListener('input', function() {
    const hexColor = this.value;
    document.getElementById('hexInput').value = hexColor;
});

// Convert Button to calculate opposite color
document.getElementById('convertBtn').addEventListener('click', function() {
    const hexInput = document.getElementById('hexInput').value.replace('#', '');
    const oppositeColor = getOppositeColor(hexInput);
    
    document.getElementById('oppositeOutput').textContent = oppositeColor;
    document.getElementById('colorOut').value = oppositeColor;
});

// Update color picker when hex is typed
document.getElementById('hexInput').addEventListener('input', function() {
    const hexValue = this.value.replace('#', '');
    if (hexValue.length === 6) {
        document.getElementById('colorIn').value = `#${hexValue}`;
    }
});