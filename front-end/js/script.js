const apiUrl = 'http://localhost:3000';
const result = document.getElementById('result');

const getPosts = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

const deletarAluno = async (alunoId) => {
    try {
        const response = await fetch(`${apiUrl}/${alunoId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log('Aluno excluído com sucesso');
        } else {
            console.error('Erro ao excluir aluno:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao excluir aluno:', error);
    }
};

getPosts().then(values => {
    values.forEach(value => {
        result.innerHTML +=
        `
        <tr>
            <td>${value._id}</td>
            <td>${value.nome}</td>
            <td>${value.idade}</td>
            <td>${value.matricula}</td>
            <td><button type="button" class="btn btn-warning">Editar</button></td>
            <td><button type="button" class="btn btn-danger" onclick="deletar('${value._id}')">Excluir</button></td>
        </tr>
        `;
    });
});

function deletar(alunoId) {
    deletarAluno(alunoId);
}




// let result = document.getElementById('result');
// const apiUrl = 'http://localhost:3000';

// const getPosts = async () => {
//     const response = await fetch(`${apiUrl}`);
//     const data = await response.json();
//     return data;
// };

// getPosts().then(value => {
//     value.forEach(value => {
//         console.log(value);
//         result.innerHTML += 
//     `
//     <tr>
//         <td>${value._id}</td>
//         <td>${value.nome}</td>
//         <td>${value.idade}</td>
//         <td>${value.matricula}</td>
//         <td><button type="button" class="btn btn-warning">Editar</button></td>
//         <td><button type="button" class="btn btn-danger" onclick="deletar()">Excluir</button></td>
//     </tr>
//     `;
//     });
// });