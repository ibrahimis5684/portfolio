//------------------------------------------------------------------------------------ text to binary
// Convert Button
// Convert Button - Hex to Binary
document.getElementById('convertBtn').addEventListener('click', function() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const binaryOutput = document.getElementById('binaryOutput');
    
    // Validate the hex input
    const isValidHex = /^#?[0-9A-Fa-f]{6}$/.test(hexInput);
    if (!isValidHex) {
        binaryOutput.textContent = 'Invalid hex input';
        return;
    }

    // Remove the leading "#" if present
    const cleanedHex = hexInput.startsWith('#') ? hexInput.slice(1) : hexInput;

    // Convert hex to binary
    let binaryResult = '';
    for (let i = 0; i < cleanedHex.length; i += 2) {
        const hexByte = cleanedHex.substring(i, i + 2);
        const binaryByte = parseInt(hexByte, 16).toString(2).padStart(8, '0');
        binaryResult += binaryByte + ' ';
    }

    // Output the binary result
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

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('hexInput').value = '';
    document.getElementById('binaryOutput').textContent = '';
});

// Color Picker Hex Input
document.getElementById('hexToBinary').addEventListener('input', function() {
    // Get the selected color's hex value
    const hexColor = this.value;

    // Set the hex value to the textarea
    document.getElementById('hexInput').value = hexColor;
});
