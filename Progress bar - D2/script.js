const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// func to hadle next click
next.addEventListener('click', () => {
    currentActive++

    // to map the next btn to the numbers of progress (1 - 5)
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();
})

// func to handle next click
prev.addEventListener('click', () => {
    currentActive--

    // to map the prev btn to the numbers of progress (1 - 5)
    if(currentActive < 1){
        currentActive = 1
    }

    update();
})

// func to handle update on the DOM
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if( currentActive === circles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}