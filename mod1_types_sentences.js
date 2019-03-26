let hora = new Date().getHours();
let saludo;

if (hora > 7 && hora < 12){
    saludo = "morning";
} else if (hora > 13 && hora < 22){
    saludo = "afternoon";
} else {
    saludo = "night";
}

console.log(`\n Good ${saludo}, it’s ${hora} o’clock`);

console.log(`\n ${Math.PI.toFixed(6)} \n`);

let Diccionario =
    {
        NORMAL: 1,
        FILTRADO: 2,
    }

function SelectorDiccionario (number)
{
    let returnValue = [];
    if (number != null)
    {
        if (number % 2 === 0)
        {
            returnValue = Generator(Diccionario.NORMAL, number);
        } else
        {
            returnValue = Generator(Diccionario.FILTRADO, number);
        }
    } else
    {
        console.log("ERROR SELECTOR")
    }
    return returnValue;
}

function Generator (inputType, numeroIngresado)
{
    returnValue = []
    if (inputType == Diccionario.NORMAL)
    {
        for (index = 0; index <= numeroIngresado; index++)
        {
            returnValue.push(index);
//            console.log(`rellenando array posicion ${index}`);
        }
//        console.log(`dicionario normal completo`)
    } else if (inputType == Diccionario.FILTRADO)
    {
        for (index = 0; index <= 10; index++)
        {
            returnValue.push(index);
//            console.log(`rellenando array posicion ${index}`);
        }
//        console.log("diccionario filtrado primer paso completo");
        if (returnValue.length=10)
        {
            for (index = 10; index <= numeroIngresado; index+=2)
            {
                returnValue.push(index);
//                console.log(`rellenando array posicion ${index}`);
            }
//            console.log("diccionario filtrado segundo paso completo");
        }
    }
    return WriteTable(returnValue);
}

function ConvertNumberToDecimal(number)
{
    if(number !== null)
    {
        return (number).toString(10);
    }
}

function ConvertNumberToHexadecimal(number)
{
    if(number !== null)
    {
        return (number).toString(6);
    }
}

function ConvertNumberToOctadecimal(number)
{
    if(number !== null)
    {
        return (number).toString(8);
    }
}

function ConvertNumberToBinary(number)
{
    if(number !== null)
    {
        return (number).toString(2);
    }
}

function WriteTableRow(numeroIngresado)
{
    //9 dec = 9 hex = 11 oct = 10101 bin 
    console.log(`${ConvertNumberToDecimal(numeroIngresado)} dec = ${ConvertNumberToHexadecimal(numeroIngresado)} hex = ${ConvertNumberToOctadecimal(numeroIngresado)} oct = ${ConvertNumberToBinary(numeroIngresado)} bin`)
}

function WriteTable(numberList)
{
    for (let index = 0; index < (numberList.length); index++)
    {
        WriteTableRow(numberList[index]);
    }
}

//main ejecution
SelectorDiccionario(22);
console.log(`\n`);
SelectorDiccionario(21);
//console.log("CONTROL")
console.log(`\n`);
console.log(`\u55e8\uff0c\u4f60\u597d\u5417\n`);
console.log(` \"The program has finished\"`);