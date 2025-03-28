document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    const totalSpan = document.getElementById('total');

    function updateSelection(selectedOption) {
        options.forEach(option => {
            option.classList.remove('selected');
            const radio = option.querySelector('input[type="radio"]');
            const dropdown = option.querySelector('.dropdowns');
            if (radio) radio.checked = false;
            if (dropdown) dropdown.classList.add('hidden');
        });

        const radioButton = selectedOption.querySelector('input[type="radio"]');
        selectedOption.classList.add('selected');
        if (radioButton) radioButton.checked = true;
        
        const selectedDropdown = selectedOption.querySelector('.dropdowns');
        if (selectedDropdown) selectedDropdown.classList.remove('hidden');

        totalSpan.textContent = `$${radioButton.dataset.price}.00 USD`;
    }

    options.forEach(option => {
        option.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdowns')) {
                updateSelection(this);
            }
        });
    });

    const checkedRadio = document.querySelector('input[type="radio"]:checked');
    if (checkedRadio) {
        updateSelection(checkedRadio.closest('.option'));
    }
});
