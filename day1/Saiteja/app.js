const code = document.querySelectorAll('code');

code.forEach(i => {
    i.innerHTML = `<span>${i.innerHTML.split(' ')[0]}</span> ${i.innerHTML.replace('git', '')}`;
});