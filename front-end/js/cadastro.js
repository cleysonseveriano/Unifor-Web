const apiUrl = 'http://localhost:3000';

const cadastroContent = document.getElementById('btnCadastrar');

const getPosts = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

const nomeInput = document.getElementById('nomeInput');
const idadeInput = document.getElementById('idadeInput');
const matriculaInput = document.getElementById('matriculaInput');

const verificaCadastro = async () => {
    try {
        const posts = await getPosts();

        const usuarioJaCadastrado = posts.some(value => {
            return nomeInput.value === value.nome || matriculaInput.value === value.matricula;
        });

        if (usuarioJaCadastrado) {
            alert('Usuário já tem cadastro');
            return;
        }

        const postData = {
            nome: nomeInput.value,
            idade: Number(idadeInput.value),
            matricula: matriculaInput.value
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            console.log('Usuário cadastrado com sucesso');
            cadastroContent.innerHTML = '<button class="btn btn-primary" type="submit" onclick="verificaCadastro()" id="btnCadastrar"><a href="Gestao.html">Cadastro feito com sucesso. Verifique na aba de gestão!</a></button>'
        } else {
            console.error('Erro ao cadastrar usuário:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao verificar/cadastrar usuário:', error);
    }
    
};

// Exemplo de como você poderia chamar a função verificaCadastro
