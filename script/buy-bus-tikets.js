function success() {
    hideElementById('home-section');
    showElementById('success-section');
    
    
}




function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-lime-600');
}




