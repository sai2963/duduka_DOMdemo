let para1=document.getElementById('p1') 
let para2=document.getElementById('p2')
let button1=document.getElementById('btn1')
let button2=document.getElementById('btn2')
function removepara(){
    //para2.textContent=''
    //para2.parentElement.removeChild(para2)
    para2.remove()
           
}

button1.addEventListener('click',removepara)
function addbackgroundcolor(){
    //para1.style.backgroundColor='lightblue'
    para1.classList.add('bgcolor')
    //para1.className='bgcolor'
}
button2.addEventListener('click',addbackgroundcolor)
