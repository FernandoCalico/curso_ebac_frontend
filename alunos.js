const alunosMediasFinais = [
    {'nome':'Rodrigo', 'media': 8}, 
    {'nome':'Ricardo', 'media': 9},
    {'nome':'Fernando', 'media': 6},
    {'nome':'Maria', 'media': 5}, 
    {'nome':'João', 'media': 5}
]

function filtraAlunosNaMedia(alunosMediasFinais) {
	return alunosMediasFinais.media >= 6
};

//Utilizando a função
const alunosNaMedia = alunosMediasFinais.filter(filtraAlunosNaMedia);
console.log(alunosNaMedia);

//Utilizando o método Arrow Function 
const alunosQuePassaram = alunosMediasFinais.filter((alunosMediasFinais) => alunosMediasFinais.media >= 6);
console.log(alunosQuePassaram);
