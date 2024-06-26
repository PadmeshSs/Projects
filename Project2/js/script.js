const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('sh');
        }
    });
});

const hiddenelements = document.querySelectorAll('.hid');
hiddenelements.forEach((el) => obs.observe(el));