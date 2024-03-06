document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.btn');
    var input1 = document.querySelector('input[type="text"]:nth-of-type(1)');
    var input2 = document.querySelector('input[type="text"]:nth-of-type(2)');

    button.addEventListener('click', function() {
        var temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
    });
});






document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('.color');
    let block = document.querySelector('.block');

    input.addEventListener('keypress', function(event) {

        if (event.key === 'Enter') {

            block.style.backgroundColor = input.value;
        }
    });
});
