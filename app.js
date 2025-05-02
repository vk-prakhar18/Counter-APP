alert("This is a counting app! You can use it for conveinence where every number counts");
let count = 0;
const counting = document.getElementById('counting');

document.getElementById('increase').addEventListener('click', () => {
    count++;
    counting.textContent = count;
});

document.getElementById('decrease').addEventListener('click', () => {
    count--;
    counting.textContent = count;
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    counting.textContent = count;
});
