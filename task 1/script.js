//Add the row

let text = document.getElementById('add-input')
let btn = document.getElementById('add-btn')
let li = document.getElementById('list')
let hideClick = document.getElementById('hide')
let textShow = document.querySelector('label')

function addbtn(e) {

    let inputtext = text.value

    if (inputtext == '') {
        return false
    }
    else {

        let cli = document.createElement('li')
        let cp = document.createElement('p')
        let itag = document.createElement('p')
        itag.innerHTML = ' <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i>'

        cp.innerHTML = inputtext
       
        cli.appendChild(cp)
        li.appendChild(cli)
        cli.appendChild(itag)

        text.value = ""
        e.preventDefault()

    }
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Delect the bar 

function deletBtn(targetElement)
{
if (targetElement.target.classList[1] === 'fa-times') {
    var list = targetElement.target.parentElement.parentElement
    list.parentNode.removeChild(list)
}
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Hide the rows

function forHide()
{

    if (hideClick.checked)
     {
        textShow.textContent = 'Unhide notes'
        list.style.display = 'none'
    }
    else
    {
        textShow.textContent = 'Hide notes'
        list.style.display = 'block'
    }
}


hideClick.addEventListener('click', forHide)
li.addEventListener('click', deletBtn)
btn.addEventListener('click', addbtn)

