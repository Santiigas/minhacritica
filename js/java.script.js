//Responsavel pela mudança de tamanho
function mudouTamanho(){
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    }
    else {
        itens.style.display = 'none'
    }
}
function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else{
        itens.style.display ='block'
    }
}

//Responsavel pelo carregamento de conteudo sem atualização da pagina
function clickbtn(a){
    let localpag = document.querySelector('.paginas')
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if (pag.readyState == 4 && pag.status == 200){
            localpag.innerHTML = pag.responseText
        }
    }

    pag.open('GET', `../${a}.html`)
    pag.send()
}