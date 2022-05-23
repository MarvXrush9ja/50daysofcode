const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    // to get each letters
    label.innerHTML = label.innerText

    // split the letters
    .split('')

    // map to an array
    .map((letter, index) => `<span style='transition-delay: ${index * 50}ms'>${letter}</span>`)

    // join the letters
    .join('')
});

