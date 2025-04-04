// 1° Exercício
/*
let n = (parseFloat(prompt('Quanto números você quer menino de mainhá?')));

function QtdNumeros(n) {
    let b = 0;

    for (let i = 0; i < n; i++) {
        a = (parseFloat(prompt('Digite o número que você quer menino de mainhá?')));
        b = b + a; 
    }

    console.log('Seu resultado é:' + b)

}
QtdNumeros(n)
*/

// 2° Exercício
let JaoUrso = setInterval(lancamento, 1000) 
let contagem = 10;

function lancamento() {
    if (contagem >= 0){
        console.log(contagem);
        contagem--;
    }else{
        console.log('Lançamento');
        clearInterval(JaoUrso);
    };

}
lancamento();
