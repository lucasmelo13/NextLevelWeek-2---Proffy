//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma açao
function cloneField(){
    // console.log("Cheguei aqui")

    //Duplicar os campos. Quem campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean = true ou false

    //pegar os campos. Que campos ?
    
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar (repetiçao)
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
        
    })

    //colocar na pagina : Onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

