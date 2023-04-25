//buscando lista

let msg = document.getElementById('msg')

const usuarios=[  
    {nome:"Huguinho",idade:18},
    {nome:"Zezinho",idade:19},
    {nome:"Luizinho",idade:20},
];

const users = usuarios.length;

for( let i = 0; i < users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}






var imagens= [
    'imagens/1.jpg',
    'imagens/2.jpg',
    'imagens/3.jpg',
];

/*declarando variavel*/
var Index =0;
var time =2000;

/* criando função*/

function slideShow(){
    document.getElementById('image').src =imagens[Index];
    Index++;
    if(Index == imagens.length){Index =0;}
    setTimeout("slideShow()",time);
}


slideShow();