document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("input[type=checkbox]").forEach((e) => {
        e.onclick = (element) => {
            if(element.target.checked) {
                document.querySelector(`input[type=checkbox]:not(#${element.target.id})`).checked = false;
            }
        }
    })
    
    document.querySelectorAll("input[type=radio]").forEach((e) => {
        e.onclick = (element) => {
            if(element.target.checked) {
                console.log("entrou")
                document.querySelectorAll(`input[type=radio]:not(#${element.target.id})`).forEach((el) => {
                    el.checked = false;
                })
            }
        }
    })

    document.querySelector("#enviarForm").onclick = (e) => {
        camposVazios()
    }
})

function soma() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);

    document.querySelector("#result").value = num1 + num2;
}

function subtracao() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);

    document.querySelector("#result").value = num1 - num2;
}

function multiplicacao() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);

    document.querySelector("#result").value = num1 * num2;
}

function divisao() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);

    document.querySelector("#result").value = (num1 / num2).toFixed(2);
}

function limpar() {
    document.querySelectorAll(".showNumbers input").forEach((e) => {
        e.value = "";
    })
}

function camposVazios(event) {
    let radioVazio = 0;
    let checkboxVazio = 0;

    document.querySelectorAll("input[type=radio]").forEach((e) => {
        if(e.checked) {
            radioVazio += 1;
        }
    })

    document.querySelectorAll("input[type=checkbox]").forEach((e) => {
        if(e.checked) {
            checkboxVazio += 1;
        }
    })

    if(radioVazio == 0) {
        event.preventDefault();
        alert("Não tem nenhum radiobox preenchido!");
    }
    
    if(checkboxVazio == 0) {
        event.preventDefault();
        alert("Não tem nenhum checkbox preenchido!");
    }
}