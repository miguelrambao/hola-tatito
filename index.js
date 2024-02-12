const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('nunca pensé que el 14 seria una fecha tan importante para mí. Sin embargo, desde que te conosco (xdon por la seta) me has hecho sentir cada mes que soy la persona mas afortunada del mundo. Sé que quizás falte mucho para vernos, para tocarnos, para besarnos y nunca soltarnos, pero quiero que cada detalle que te dé, te haga sentir, al menos por ese día, que esto no acabará nunca y que el amor que te tengo siempre encontrará formas nuevas de demostrartelo. Nos vemos el 14, mi dulce valentín. Att: pato. Posdata: escucha el audio de ultimo. Te cielo mucho:(')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})