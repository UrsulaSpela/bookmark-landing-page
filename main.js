console.log('hellu')

const btn1 = document.querySelector('#option-1-btn')
const btn2 = document.querySelector('#option-2-btn')
const btn3 = document.querySelector('#option-3-btn')

const tab1 = document.querySelector('#option-1')
const tab2 = document.querySelector('#option-2')
const tab3 = document.querySelector('#option-3')

btn1.addEventListener('click', function(){
    tab1.style.display = "flex"
    tab2.style.display = "none"
    tab3.style.display = "none"
})

btn2.addEventListener('click', function(){
    tab1.style.display = "none"
    tab2.style.display = "flex"
    tab3.style.display = "none"
})

btn3.addEventListener('click', function(){
    tab1.style.display = "none"
    tab2.style.display = "none"
    tab3.style.display = "flex"
})