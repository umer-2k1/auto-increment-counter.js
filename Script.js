
const counters = document.querySelectorAll('.counter')

counters.forEach((elem)=>{
    increamentCounter(elem)
})

function increamentCounter(element){
    let initialValue = +element.innerText
    let targetedValue= parseInt(element.getAttribute('data-target'))
    let increment = targetedValue/400


    if (initialValue < targetedValue) {
        element.innerText = Math.ceil(increment+initialValue)
        setTimeout(() => {
            increamentCounter(element)
        }, 1);
    }
    else{
        element.innerText = targetedValue
    }
    }