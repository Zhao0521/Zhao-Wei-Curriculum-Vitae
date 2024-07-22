// zhaowei_resume.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-toggle-id');
            const detailsSection = document.getElementById(`${sectionId}-details`);
            
            if (detailsSection) {
                detailsSection.classList.toggle('hidden');
                
                if (detailsSection.classList.contains('hidden')) {
                    this.textContent = '看更多';
                } else {
                    this.textContent = '收回';
                }
            }
        });
    });
});
