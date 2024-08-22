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

//------------------------------------------------------------------------------------ text to binary
// Function to convert hex to binary
function hexToBinary(hex) {
    return parseInt(hex, 16).toString(2).padStart(8, '0');
}

// Function to update the textareas with the selected color values
function updateHexInput(inputElement, colorElement) {
    inputElement.value = colorElement.value.substring(1).toUpperCase(); // Removing # and converting to uppercase
}

// Function to add hex values and display outputs
function convertHex() {
    const hex1 = document.getElementById('hexInput1').value;
    const hex2 = document.getElementById('hexInput2').value;

    // Convert hex to binary
    const binary1 = hexToBinary(hex1);
    const binary2 = hexToBinary(hex2);

    // Add the hex values
    const hexSum = (parseInt(hex1, 16) + parseInt(hex2, 16)).toString(16).toUpperCase();

    // Display outputs
    document.getElementById('binaryOutput').textContent = `${hexToBinary(hexSum)}`;
    const colorOutput = document.getElementById('colorOutput');
    colorOutput.textContent = hexSum;
    colorOutput.style.backgroundColor = `#${hexSum}`;
}

// Event listeners
document.getElementById('convertBtn').addEventListener('click', convertHex);

// Copy Button for Binary Output
document.getElementById('copyBtnBinary').addEventListener('click', function() {
    const binaryOutput = document.getElementById('binaryOutput').textContent;
    const copyBtnBinary = document.getElementById('copyBtnBinary');

    // Copy binary output
    navigator.clipboard.writeText(binaryOutput);

    // Change button appearance
    copyBtnBinary.innerHTML = 'Copied!';
    copyBtnBinary.classList.add('copied');

    // Revert after 1.5 seconds
    setTimeout(() => {
        copyBtnBinary.innerHTML = '<i class="fa-duotone fa-solid fa-clone"></i> Copy';
        copyBtnBinary.classList.remove('copied');
    }, 1500);
});

// Copy Button for Hex Output
document.getElementById('copyBtnColor').addEventListener('click', function() {
    const colorOutput = document.getElementById('colorOutput').textContent;
    const copyBtnColor = document.getElementById('copyBtnColor');

    // Copy hex output
    navigator.clipboard.writeText(colorOutput);

    // Change button appearance
    copyBtnColor.innerHTML = 'Copied!';
    copyBtnColor.classList.add('copied');

    // Revert after 1.5 seconds
    setTimeout(() => {
        copyBtnColor.innerHTML = '<i class="fa-duotone fa-solid fa-clone"></i> Copy';
        copyBtnColor.classList.remove('copied');
    }, 1500);
});

// Event listeners for color pickers
document.getElementById('hex-hex1').addEventListener('input', function() {
    updateHexInput(document.getElementById('hexInput1'), this);
});

document.getElementById('hex-hex2').addEventListener('input', function() {
    updateHexInput(document.getElementById('hexInput2'), this);
});

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('hexInput1').value = '';
    document.getElementById('hexInput2').value = '';
    document.getElementById('binaryOutput').textContent = '';
    document.getElementById('colorOutput').textContent = '';
    document.getElementById('colorOutput').style.backgroundColor = '';
});
