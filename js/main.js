/* let num = prompt("Ingrese un numero")
function numero (num)
{
    if (num > 0)
    {
        return console.log("Positivo")
    }
    else if (num < 0)
    {
        return console.log("Negativo")
    }
    else if (num == 0)
    {
        return console.log("Nulo")
    }
}
numero (num) */

let n = prompt("Ingresa un numero")

function dividir(n)
{
    if (n%2 === 0)
    {
        console.log("Divisible entre 2")
    }
    else if (n%3 === 0)
    {
        console.log("Divisible entre 3")
    }
    else if (n%5 === 0)
    {
        console.log("Divisible entre 5")
    }
    else
    {
        console.log("Ninguno de los anteriores")
    }
}

dividir(n)

/* let newCadena = prompt ("Ingresa un texto")

function contarVocales(cadena)
{
    cadena = cadena.toUpperCase()
    let totalVowls = 0
    for (let i = 0; i < cadena.length; i++)
    {
        if ((cadena[i] === "A") || (cadena[i] === "E") || (cadena[i] === "I") || (cadena[i] === "O") || (cadena[i] === "U"))
        {
            totalVowls = totalVowls + 1
        }
    }
    console.log("Vocales: ", totalVowls)
}
contarVocales(newCadena) */