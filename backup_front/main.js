const API_URL = 'http://localhost:8080/api/products'

const form = document.querySelector('#form')
const edit = document.querySelector('#edit')
const formEdit = document.querySelector('#formEdit')
const productsList = document.querySelector('#products-list')



// ADICIONA EVENTO DE CLICK NO BOTAO EDITAR
function adicionaEventoBotaoEditar(){
    const botoesEditar = document.querySelectorAll('.botao-editar')
        botoesEditar.forEach(botao => {
            botao.onclick = function(event){
                event.preventDefault()



                edit.classList.remove('hidden')

                const id = this.dataset.id
                const name = this.dataset.name
                const brand = this.dataset.brand
                const price = this.dataset.price
                document.forms['formEdit'].id.value = id
                document.forms['formEdit'].name.value = name
                document.forms['formEdit'].brand.value = brand
                document.forms['formEdit'].price.value = price

            }
        })
}



// ADICIONA EVENTO DE CLICK NO BOTÃO EXCLUIR
function adicionaEventoBotaoExcluir(){
    const botoesExcluir = document.querySelectorAll('.botao-excluir')
            botoesExcluir.forEach(botao =>{
                botao.onclick = function(event) {
                    event.preventDefault()
                    

                    fetch(`${API_URL}/${id}`,{
                        method: 'DELETE',
                    }).then(response => {
                        response.json().then(data =>{
                            if (data.message === 'sucess'){
                                form.reset()
                                obterLista()
                                alert('Item excluido com sucesso')
                            } else {
                                alert('Ops, ocorreu algum erro, tente novamente!')
                            }                       
                        })
                    })
                }
            })
}



// PARA OBTER A LISTA DE PRODUTOS
function obterLista (){
    fetch(API_URL).then(response => {
        response.json().then(data => {             
            const productsHtml = data.map(product =>`
                    <li>
                        ${product.name} - ${product.brand} - ${product.price} - 
                        <a 
                            href="#" 
                            class="botao-editar" 
                            data-id="${product._id}" 
                            data-name="${product.name}" 
                            data-brand="${product.brand}" 
                            data-price="${product.price}"
                        > 
                            [editar] 
                        </a>
                        <a href="#" class="botao-excluir" data-id="${product._id}"> [excluir] </a>
                        </li>
                `).join('')
            productsList.innerHTML = productsHtml

                        
            adicionaEventoBotaoEditar()
            adicionaEventoBotaoExcluir()
        })
    })
}

obterLista()


// AO CADASTRAR A LISTA DE PRODUTOS
form.onsubmit = function(event){
    event.preventDefault() // PARA PREVENIR COMPORTAMENTO PADRÃO DO FORMULÁRIO QUE É DE SUBMETER O FORMULÁRIO


    const name = document.forms['formEdit'].name.value
    const brand = document.forms['formEdit'].brand.value
    const price = document.forms['formEdit'].price.value
    
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            brand,
            price,
        })
    }).then(response => {
        response.json().then(data =>{
            if (data.message === 'sucess'){
                form.reset()
                obterLista()
                alert('Cadastro Realizado com Sucesso!')
            } else {
                alert('Ops, ocorreu um erro, tente novamente!')
            }
        })
    })
}


//AO EDITAR O PRODUTO
formEdit.onsubmit = function(event){
    event.preventDefault()
        
    const id = document.forms['formEdit'].id.value
    const name = document.forms['formEdit'].name.value
    const brand = document.forms['formEdit'].brand.value
    const price = document.forms['formEdit'].price.value

    fetch(`${API_URL}/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            brand,
            price,
        })
    }).then(response =>{
        response.json().then(data =>{
            if(data.message === 'sucess'){                
                obterLista()
                alert('Alteração efetuada com sucesso')
            } else {
                alert('Ops, ocorreu um erro, tente novamente!')
            }
        })
    })
}





// ESTUDAR SOBRE ESTILIZAÇÃO DOS FORMULÁRIOS https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms