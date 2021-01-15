
let childs = document.querySelectorAll('.child')


for(let i=0;i<childs.length;i++){
    childs[i].addEventListener('click', e=>{
        e.target.style.background = 'orange'
    })
}