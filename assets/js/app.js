const time = document.querySelector(".time"); 
function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}


time.innerHTML = `Data de Hoje: ${dataAtualFormatada()}`;


const user_mensage = document.querySelector(".mensagemUser");



const chat = document.getElementById("chat");
const button_chat = document.getElementById("button-chat");

chat.addEventListener("keyup", (e)=> {
    if(e.key === "Enter") {
        verificationMensage()
    }

})

function verificationMensage(){
    const value_mensage = chat.value;

    const span = document.createElement("span");


    user_mensage.appendChild(span);

    span.classList.add("mensage");

    span.innerHTML = value_mensage;
    chat.value = "";
}

button_chat.addEventListener("click" ,()=> {
    const value_mensage = chat.value;

    const span = document.createElement("span");


    user_mensage.appendChild(span);

    span.classList.add("mensage");

    span.innerHTML = value_mensage;
    chat.value = "";
})


