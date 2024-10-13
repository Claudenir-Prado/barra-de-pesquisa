const data = [
    {
      title: "Desenvolvedor",
      description: "Geralmente formado em Ciência da Computação ou Análise e Desenvolvimento de Sistemas, o desenvolvedor é responsável por criar diferentes soluções tecnológicas."
    },

        {
      title: "Growth hacker",
      description: "Entre as profissões que ganham acima de 5 mil, não podemos deixar de citar o growth hacker, responsável por fazer testes para melhorar a conversão nas vendas. Logo, ele tem o papel de encontrar “brechas” que interferem no crescimento de uma empresa."
    },

        {
      title: "Consultor financeiro",
      description: "Consultor financeiro é uma profissão que está em alta e muito valorizada no mercado de trabalho."
    },

        {
      title: "Contador",
      description: "O contador se destaca como uma das funções com maior salário médio no Brasil. Ele recebe cerca de R$7.600,00 por mês para cuidar da vida financeira das empresas."
    },

        {
      title: "Arquiteto JAVA",
      description: "Os especialistas na linguagem de programação JAVA podem ocupar esse cargo. O trabalho consiste, basicamente, em programar a arquitetura e o design estrutural de projetos. O salário médio é de R$7.600,00."
    },

        {
      title: "Analista de Segurança da informação",
      description: "O profissional de TI, que se especializa na área de segurança da informação, nunca fica sem emprego e garante um salário generoso. A média é de R$9.000,00."
    },

        {
      title: "Engenheiro Naval",
      description: "O engenheiro naval inicia a sua carreira ganhando mais de 7 mil reais por mês. Ele é responsável por coordenar a construção de embarcações, como navios e lanchas. Também pode trabalhar em plataformas de exploração de petróleo. Salário médio: R$7.500,00."
    },

        {
      title: "Engenheiro de Minas",
      description: "Outro campo da engenharia que rende um salário alto é o de mineração. O engenheiro de minas tem como responsabilidade supervisionar as atividades minerárias, como perfuração e escavação. Salário médio: R$ 7.700,00."
    },

        {
      title: "Engenheiro de Segurança do Trabalho",
      description: "A profissão Engenheiro de Segurança do Trabalho desenvolve suas atividades pensando sempre na integridade física dos trabalhadores de uma empresa. Média salarial: R$ 8.000,00"
    },
];

const cardContainer = document.querySelector('.card-container');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
    cardContainer.innerHTML += `
    <div class="card">
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    </div>` 
    });
}

searchInput.addEventListener('keyup', (e) => {
    const search = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
})

window.addEventListener('load', displayData.bind(null,data));