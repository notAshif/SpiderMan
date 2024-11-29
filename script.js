let banner = document.getElementById('banner');
let canvas = document.getElementById('dotCanvas');

let dots = [];
let ctx = canvas.getContext('2d');
canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

let arrayColor = ['#eee', '#545454', '#596d91', '#dd5a68', '#696541']
for(let i = 0; i < 50; i++){
    let dot = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.floor(Math.random() * 3) + 5,
        color: arrayColor[Math.floor(Math.random() * 5)]
    }
    dots.push(dot);
}

const DrawDot = () =>{
    dots.forEach(dot =>{
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
        ctx.fill();
    });
}

banner.addEventListener('mousemove', (event) =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawDot();
    let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
    }

    dots.forEach(dot =>{
        let distance = Math.sqrt(Math.pow(mouse.x - dot.x, 2) + Math.pow(mouse.y - dot.y, 2));

        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

banner.addEventListener('mouseout', () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawDot();
})
DrawDot();

