
function mostrarMensaje(){
    let entrada = document.getElementById("text_var").value;
    document.getElementById("texto_salida").innerHTML = 
        esPalindromo(entrada)
            ? "El texto ingresado es palindromo" : "El texto ingresado NO es palindromo"
}


function esPalindromo(entrada){
    // let entrada = cadena.split("");
    // let reverse = cadena.reverse();

    // return cadena == reverse.join("") ? "Si es" : "No es" ;

    let limpiarCadena = entrada.replace(/[^a-zA-Z0-9]/g, "");
    let cadenaminuscula = limpiarCadena.ToLowerCase();
    let arreglominiscula = cadenaminuscula.split("");
    let minusculasRevertidas = arreglominiscula.reverse();
    let cadenaMinusculaRevertida = minusculasRevertidas.join("");

    return cadenaMinusculaRevertida == cadenaminuscula ? true : false;

}
