const container = document.getElementById('flags-container');

const jsonUrl = 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/countries.json';
const flagBaseUrl = 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/';

// Função assíncrona para buscar os dados na internet
async function carregarBandeiras() {
    try {
        const response = await fetch(jsonUrl);
        const countries = await response.json(); 

        for (const [code, name] of Object.entries(countries)) {
            
            const imgUrl = `${flagBaseUrl}${code.toLowerCase()}.svg`;

            const card = document.createElement('div');

            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `Bandeira de ${name}`;

            const p = document.createElement('p');
            p.textContent = name; // Colocamos o nome do país

            card.appendChild(img);
            card.appendChild(p);

            // Injetamos o cartão finalizado na nossa tela
            container.appendChild(card);
        }

    } catch (error) {
        console.error("Ops! Algo deu errado ao carregar as bandeiras:", error);
    }
}

//Carregando as bandeiras ^^
carregarBandeiras();