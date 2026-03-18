function bd() {
    let data = [
        {id:1, nome:"Joao", login:"Jao", senha:"1234", email:"jao@ig.com"},//0
        {id:2, nome:"Pedro Sachetto", login:"sachetto", senha:"1234", email:"sachas@ig.com"},//1
        {id:3, nome:"lucas", login:"Bellato", senha:"1234", email:"bellato@ig.com"}//2
    ]

let json = JSON.stringify(data)

localStorage.setItem("meubanco", json)

    return json
}

function adicionar() {
    let bd = JSON.parse(localStorage.getItem("meubanco"))

    let ids = Date.now()
    let nome = document.querySelector("#nome").value;
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let email = document.querySelector("#email").value

    let cad = {id:ids, nome:nome, login:lg, senha:sn, email:email}

    bd .push(cad)

    let json = JSON.stringify(bd)

    localStorage.setItem("meubanco",json)
}


//const dados = bd( )

//console.log(dados)

