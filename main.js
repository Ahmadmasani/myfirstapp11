// Theme toggle functionality
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
if (prefersDark.matches) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Camera and file upload functionality
const cameraBtn = document.getElementById('camera-btn');
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const cameraPreview = document.getElementById('camera-preview');
const photoCanvas = document.getElementById('photo-canvas');
const previewImage = document.getElementById('preview-image');
const result = document.getElementById('result');
const plantName = document.getElementById('plant-name');

let stream = null;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'environment'
            } 
        });
        cameraPreview.srcObject = stream;
        cameraPreview.hidden = false;
        previewImage.hidden = true;
    } catch (err) {
        console.error('Error accessing camera:', err);
        alert('Unable to access camera. Please make sure you have granted camera permissions.');
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    cameraPreview.hidden = true;
}

cameraBtn.addEventListener('click', () => {
    if (stream) {
        // Take photo
        const context = photoCanvas.getContext('2d');
        photoCanvas.width = cameraPreview.videoWidth;
        photoCanvas.height = cameraPreview.videoHeight;
        context.drawImage(cameraPreview, 0, 0);
        
        // Convert to image and display
        previewImage.src = photoCanvas.toDataURL('image/jpeg');
        previewImage.hidden = false;
        
        // Stop camera
        stopCamera();
        
        // Simulate plant identification
        identifyPlant();
    } else {
        startCamera();
    }
});

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.hidden = false;
            stopCamera();
            identifyPlant();
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

function identifyPlant() {
    // Simulate plant identification
    result.hidden = false;
    plantName.textContent = 'Processing...';
    
    setTimeout(() => {
        const plants = [
            'Common Daisy (Bellis perennis)',
            'Garden Rose (Rosa × centifolia)',
            'Sunflower (Helianthus annuus)',
            'Lavender (Lavandula)',
            'Tulip (Tulipa)'
        ];
        plantName.textContent = plants[Math.floor(Math.random() * plants.length)];
    }, 2000);
}

// Footer button functionality
const footerBtns = document.querySelectorAll('.footer-btn');
footerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        console.log(`${section} section clicked`);
        // Add functionality for each section as needed
    });
});