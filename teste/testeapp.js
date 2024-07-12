const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'text.json');
const escreverArquivo = require('./testescrever');
const lerArquivo = require('./teste');

const timesdeFutebol = [
    {nome: 'Barcelona'},
    {nome: 'Real Madrid'},
    {nome: 'Juventus'},
    {nome: 'Atlético de Madrid'},
]
const json = JSON.stringify(timesdeFutebol, '', 2);
escreverArquivo(caminhoArquivo, json);

async function leituraArquivo (caminho) {
    const data = await lerArquivo(caminho);
    renderizarData(data);
}

function renderizarData (data) {
    data = JSON.parse(data);
    data.forEach(value => console.log(value.nome));
}

leituraArquivo(caminhoArquivo);