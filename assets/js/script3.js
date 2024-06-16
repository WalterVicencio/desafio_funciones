var color;
var color2;
var div=document.querySelector('#key')
var div2=document.querySelector('#key2')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color='rgb(255,51,224)'

    } else if (event.key === 's') {
        color='rgb(255,134,51)'
    }
    else if (event.key === 'd') {
        color='rgb(51,255,243)'
    }
    else if (event.key === 'q') {
        console.log("hol")
        color2='rgb(147,51,255)'
        div2.style.display = 'block'
    }
    else if (event.key === 'w') {
        color2='rgb(156,156,156)'
        div2.style.display = 'block'
    }
    else if (event.key === 'e') {
        color2='rgb(129,87,37)'
        div2.style.display = 'block'
    }
    div.style.backgroundColor = color
    div2.style.backgroundColor = color2

    })