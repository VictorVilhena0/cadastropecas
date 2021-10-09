let peso = 135;

if (peso > 100)
{
    console.log("Peso adequado, cadastro liberado!")
}
else
{
    console.log("Peso insuficiente, cadastro negado!")
}

let listaPecas = ["Pneu", "Volante", "Pistão", "Buzina", "Carburador", "Válvulas", "Correia", "SuperCharger", "Para-brisa", "Abafador"]

if (listaPecas.length < 10)
{
    console.log("Espaço disponível!")
}
else
{
    console.log("Não há espaço disponível!")
}

if (listaPecas[0].length > 3)
{
    console.log("Nome da peça possui mais de 3 caracteres!")
}
else
{
    console.log("Erro: peça com nome igual ou menor que 3 caracteres.")
}
