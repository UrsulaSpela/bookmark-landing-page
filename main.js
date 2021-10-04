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

// FAQs
let question = document.querySelectorAll('.question')
// let answer = document.querySelectorAll('answer')

for (let i = 0; i < question.length; i++){
    question[i].addEventListener('click', function(){
        let answer = this.nextElementSibling
        if(answer.style.display === "block"){
            answer.style.display = "none"
        }else{
            answer.style.display = "block"
        }
    })
}