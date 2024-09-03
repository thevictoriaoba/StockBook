document.addEventListener('DOMContentLoaded', () => {
    // Main Popup Elements
    const openMainPopupBtn = document.getElementById('open-popup');
    const mainPopup = document.getElementById('main-popup');
    const closeMainPopupBtn = document.getElementById('close-main-popup');
    
    // Nested Popup Elements
    const openNestedPopupBtn = document.getElementById('open-nested-popup');
    const nestedPopup = document.getElementById('nested-popup');
    const closeNestedPopupBtn = document.getElementById('close-nested-popup');
    const closeNestedPopupFromButton = document.getElementById('close-nested-popup-from-button');

    // Open Main Popup
    openMainPopupBtn.addEventListener('click', () => {
        mainPopup.style.display = 'flex';
    });

    // Close Main Popup
    closeMainPopupBtn.addEventListener('click', () => {
        mainPopup.style.display = 'none';
    });

    // Open Nested Popup
    openNestedPopupBtn.addEventListener('click', () => {
        nestedPopup.style.display = 'flex';
    });

    // Close Nested Popup
    closeNestedPopupBtn.addEventListener('click', () => {
        nestedPopup.style.display = 'none';
    });

    closeNestedPopupFromButton.addEventListener('click', () => {
        nestedPopup.style.display = 'none';
    });

    // Close popups when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target === mainPopup) {
            mainPopup.style.display = 'none';
        }
        if (event.target === nestedPopup) {
            nestedPopup.style.display = 'none';
        }
    });
});

// Get references to the popups and buttons
const mainPopup = document.getElementById('main-popup');
const nestedPopup = document.getElementById('nested-popup');
const openMainPopupButton = document.getElementById('open-popup');
const closeMainPopupButton = document.getElementById('close-main-popup');
const openNestedPopupButton = document.getElementById('open-nested-popup');
const closeNestedPopupButton = document.getElementById('close-nested-popup');
const closeNestedPopupFromButton = document.getElementById('close-nested-popup-from-button');

// Function to open a popup
function openPopup(popup) {
    popup.style.display = 'block';
}

// Function to close a popup
function closePopup(popup) {
    popup.style.display = 'none';
}

// Event listener for the "Open Main Popup" button
openMainPopupButton.addEventListener('click', () => {
    openPopup(mainPopup);
});

// Event listener for the "Close Main Popup" button
closeMainPopupButton.addEventListener('click', () => {
    closePopup(mainPopup);
});

// Event listener for the "Open Nested Popup" button
openNestedPopupButton.addEventListener('click', () => {
    closePopup(mainPopup); // Close the main popup
    openPopup(nestedPopup); // Open the nested popup
});

// Event listener for the "Close Nested Popup" button
closeNestedPopupButton.addEventListener('click', () => {
    closePopup(nestedPopup);
});

// Event listener for the "Close Nested Popup from Button" button
closeNestedPopupFromButton.addEventListener('click', () => {
    closePopup(nestedPopup);
});

