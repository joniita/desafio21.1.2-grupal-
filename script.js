let colors = ['red','yellow','blue','green','orange'];

setInterval(() => {
    document.body.style.setProperty('--bgColor', colors[Math.floor(Math.random() * 5)]);
}, 10);
