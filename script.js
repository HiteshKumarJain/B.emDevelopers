let counters = [
    { id: 'project-counter', targetValue: 124 },
    // { id: 'land-counter', targetValue: 10},
    { id: 'years-counter', targetValue: 23 },

];
if(document.getElementById('ongoing-project-counter')){
     counters = [
        { id: 'ongoing-project-counter', targetValue: 9 },
        { id: 'years-counter', targetValue: 23 },
    
    ];
}


const duration = 1000; // Duration in milliseconds

function animateCounter(counter) {
    const counterElement = document.getElementById(counter.id);
    const start = 0;
    const end = counter.targetValue;

    function updateCount(currentCount) {
        counterElement.textContent = currentCount;
    }

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentCount = Math.floor(progress * (end - start) + start);
        updateCount(currentCount);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    let startTime = null;
    requestAnimationFrame(animate);
}

// Call the animation function when the element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', () => {
    counters.forEach(counter => {
        const counterElement = document.getElementById(counter.id);
        if (isInView(counterElement)) {
            animateCounter(counter);
        }
    });
});
