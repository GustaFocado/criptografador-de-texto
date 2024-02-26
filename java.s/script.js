function criptografar() {
    var textoOriginal = document.getElementById("texto_input").value.toLowerCase(); 
    if (textoOriginal.trim() !== "") { 
        var resultado = textoOriginal
            .replaceAll("a", "ai")
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("o", "orber")
            .replaceAll("u", "ufat");
        document.getElementById("texto_exibido").value = resultado;
        
    } else {
        
    }
}

function descriptografar() {
    var textoCriptografado = document.getElementById("texto_exibido").value.toLowerCase();
    if (textoCriptografado.trim() !== "") { 
        var resultado = textoCriptografado
            .replaceAll("ufat", "u")
            .replaceAll("orber", "o")
            .replaceAll("imes", "i")
            .replaceAll("enter", "e")
            .replaceAll("ai", "a");
        document.getElementById("texto_exibido").value = resultado;
        
    } else {
       
    }
}




function limparCampos() {
    document.getElementById("texto_input").value = "";
    document.getElementById("texto_exibido").value = "";
    document.getElementById("mensagem").textContent = "";
}

function copiarTexto() {
    var textoExibido = document.getElementById("texto_exibido");
    textoExibido.select();
    textoExibido.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
}

