document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    const imagePreview = document.getElementById('imagePreview') as HTMLDivElement;
    const uploadLabel = document.querySelector('.upload-label') as HTMLLabelElement;

    if (imageInput && imagePreview && uploadLabel) {
        imageInput.addEventListener('change', () => {
            const file = imageInput.files?.[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // Clear previous content
                    imagePreview.innerHTML = '';

                    // Create and append the new image
                    const img = document.createElement('img');
                    img.src = e.target?.result as string;
                    img.alt = "Image preview";
                    imagePreview.appendChild(img);
                    uploadLabel.textContent = 'Choose a Different Image'; // Update label text
                };

                reader.readAsDataURL(file);
            }
        });
    }
});
