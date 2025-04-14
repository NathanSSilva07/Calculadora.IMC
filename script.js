document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Validação dos inputs
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, insira valores válidos para peso e altura!');
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        const value = document.querySelector('#bmi .value');
        let description = '';

        document.getElementById('infos').classList.remove('hidden');

        value.classList.add('attention');

        if (bmi < 18.5) {
            description = 'Cuidado! Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = 'Você está no peso ideal!';
            value.classList.remove('attetion');
            value.classList.add('normal');
        } else if (bmi > 25 && bmi <= 30) {
            description = 'Você está com sobrepeso!';
        } else if (bmi > 30 && bmi <= 35) {
            description = 'Cuidado! Você está com obesidade moderada!';
        } else if (bmi > 35 && bmi <= 40) {
            description = 'Cuidado! Você está com obesidade severa!';
        } else {
            description = 'Cuidado! Você está com obesidade mórbida!';
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    });
});