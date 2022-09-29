var x = document.querySelector('.first')

var inp = document.querySelector('.search')

x.onclick=function(){
        inp.classList.toggle('active')
}

var remove = document.querySelector('.remove')

remove.onclick = function(){
        inp.classList.remove('active')
}


///////


var menu = document.querySelector('#menu')

var sidebar = document.querySelector('#sidebar')

menu.addEventListener('click',function() {
        sidebar.classList.add('active2')
})

document.getElementById('close').onclick = () => {
        sidebar.classList.remove('active2')
}
