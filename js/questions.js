const questions = [
{
    question: "Qual o antigo nome de João Pessoa?",
    answers: [
        { text: "Parahyba do Norte", correct: false },
        { text: "Filipéia de Nossa Senhora das Neves", correct: true },
        { text: "Cidade Real", correct: false },
        { text: "Frederikstad", correct: false },
    ],
    explanation: "Fundada em 1585, teve seu nome alterado várias vezes: Filipéia (1585-1634), Frederikstad (1634-1654), Parahyba (1654-1930) e finalmente João Pessoa."
},

{
        question: "Qual foi o primeiro nome da capital da Paraíba no período colonial?",
        answers: [
        { text: "Cidade Real de Nossa Senhora das Neves", correct: false },
        { text: "Frederikstad", correct: false },
        { text: "Filipéia de Nossa Senhora das Neves", correct: true },
        { text: "Parahyba do Norte", correct: false },
    ],
    explanation: "Fundada em 5 de agosto de 1585 durante a União Ibérica, em homenagem ao rei Filipe II da Espanha."
},

{
    question: "Qual líder indígena comandou a resistência contra os portugueses no século XVII?",
    answers: [
        { text: "Chief Pirajá", correct: true },
        { text: "Sepé Tiaraju", correct: false },
        { text: "Aimberê", correct: false },
        { text: "Arcoverde", correct: false },
    ],
    explanation: "Pirajá liderou a Confederação dos Cariris, principal movimento de resistência indígena entre 1686-1692."
},

{
    question: "Qual evento histórico ocorreu em 1634 durante a invasão holandesa?",
    answers: [
        { text: "Fundação de Campina Grande", correct: false },
        { text: "Revolta de Quebra-Quilos", correct: false },
        { text: "Assinatura do Tratado de Taborda", correct: false },
        { text: "Mudança do nome para Frederikstad", correct: true },
    ],
    explanation: "Os holandeses renomearam a capital para homenagear Frederico Henrique, Príncipe de Orange."
},

{
    question: "Qual o principal motivo da Revolta de Quebra-Quilos (1874)?",
    answers: [
        { text: "Independência da Paraíba", correct: false },
        { text: "Oposição ao sistema métrico decimal", correct: true },
        { text: "Abolição da escravidão", correct: false },
        { text: "Separação de Pernambuco", correct: false }
    ],
    explanation: "Movimento popular contra a implantação do novo sistema de pesos e medidas e aumento de impostos."
},

{
    question: "Qual poeta paraibano escreveu 'Eu e Outras Poesias'?",
    answers: [
        { text: "Augusto dos Anjos", correct: true },
        { text: "Ariano Suassuna", correct: false },
        { text: "José Lins do Rego", correct: false },
        { text: "Zé Ramalho", correct: false }
    ],
    explanation: "Nascido em Cruz do Espírito Santo (1884), é considerado um dos poetas mais originais da língua portuguesa."
},

{
    question: "Em que ano João Pessoa foi assassinado, evento que ajudou a deflagrar a Revolução de 1930?",
    answers: [
        { text: "1922", correct: false },
        { text: "1930", correct: true },
        { text: "1935", correct: false },
        { text: "1945", correct: false },
    ],
    explanation: "Seu assassinato em 26 de julho de 1930 em Recife foi uma das causas imediatas da Revolução."
},

{
    question: "Qual é o nome do movimento armado ocorrido em 1930 na cidade de Princesa Isabel?",
    answers: [
        { text: "Guerra dos Bárbaros", correct: false },
        { text: "Revolta do Ronco da Abelha", correct: false },
        { text: "Sedição de Juazeiro", correct: false },
        { text: "Revolta de Princesa", correct: true },
    ],
    explanation: "Conflito entre o coronel José Pereira Lima e o governo estadual, com mais de 2,000 combatentes."
},

{
    question: "Qual destes é um importante sítio arqueológico paraibano?",
    answers: [
        { text: "Pedra do Ingá", correct: true },
        { text: "Serra da Capivara", correct: false },
        { text: "Vale do Catimbau", correct: false },
        { text: "Parque Nacional Serra das Confusões", correct: false }
    ],
    explanation: "Localizado no município de Ingá, possui inscrições rupestres datadas de 6,000 anos."
},

{
    question: "Qual a principal atividade econômica da Paraíba no ciclo colonial?",
    answers: [
        { text: "Cultivo de cana-de-açúcar", correct: true },
        { text: "Mineração de ouro", correct: false },
        { text: "Criação de gado", correct: false },
        { text: "Extração de pau-brasil", correct: false }
    ],
    explanation: "Os engenhos de açúcar dominaram a economia entre os séculos XVI e XVIII, especialmente no litoral."
},

{
    question: "Qual destes municípios foi importante centro de resistência quilombola?",
    answers: [
        { text: "Cabedelo", correct: false },
        { text: "Sousa", correct: false },
        { text: "Patos", correct: false },
        { text: "Alhandra", correct: true },
    ],
    explanation: "O Quilombo do Catucá em Alhandra foi um dos maiores da região Nordeste no século XVIII."
},

{
    question: "Qual a data de criação do estado da Paraíba?",
    answers: [
        { text: "5 de agosto de 1585", correct: true },
        { text: "7 de setembro de 1822", correct: false },
        { text: "15 de novembro de 1889", correct: false },
        { text: "26 de julho de 1930", correct: false },
    ],
    explanation: "Coincide com a fundação de Filipéia (João Pessoa) e início da colonização efetiva."
},

{
    uestion: "Qual destes presidentes paraibanos governou o Brasil?",
    answers: [
        { text: "João Pessoa", correct: false },
        { text: "Epitácio Pessoa", correct: true },
        { text: "José Américo", correct: false },
        { text: "Argemiro de Figueiredo", correct: false },
    ],
    explanation: "Epitácio Pessoa (1865-1942), natural de Umbuzeiro, foi presidente da República de 1919 a 1922."
},

{
    question: "Qual destes é um símbolo cultural da Paraíba?",
    answers: [
        { text: "Bandeira do Bode Rei", correct: true },
        { text: "Boi Bumbá", correct: false },
        { text: "Frevo", correct: false },
        { text: "Maracatu", correct: false }
    ],
    explanation: "Manifestação folclórica típica de Campina Grande durante o Carnaval."
},

{
    uestion: "Qual evento cultural é conhecido como 'Maior São João do Mundo'?",
    answers: [
        { text: "Festas Juninas de Campina Grande", correct: true },
        { text: "Carnaval de João Pessoa", correct: false },
        { text: "Festa da Luz em Lucena", correct: false },
        { text: "Micarande em Guarabira", correct: false }
    ],
    explanation: "Realizado desde 1983, atrai mais de 2 milhões de visitantes anualmente."
},

{
    question: "Qual destes rios é perene na Paraíba?",
    answers: [
        { text: "Rio Paraíba", correct: true },
        { text: "Rio Taperoá", correct: false },
        { text: "Rio Espinharas", correct: false },
        { text: "Rio Piancó", correct: false }
    ],
    explanation: "Único rio totalmente paraibano que mantém fluxo constante, com 380km de extensão."
},

{
    question: "Qual a principal contribuição de José Américo de Almeida para a literatura brasileira?",
    answers: [
        { text: "Poesia Concreta", correct: false },
        { text: "Romance 'A Bagaceira' (1928)", correct: true },
        { text: "Teatro do Oprimido", correct: false },
        { text: "Literatura de Cordel", correct: false },
    ],
    explanation: "Considerado o marco inicial do romance regionalista nordestino."
},

{
    question: "Qual destes documentos históricos foi assinado na Paraíba?",
    answers: [
        { text: "Manifesto Revolucionário de 1930", correct: true },
        { text: "Lei Áurea", correct: false },
        { text: "Constituição de 1988", correct: false },
        { text: "Tratado de Tordesilhas", correct: false }
    ],
    explanation: "Redigido por José Américo de Almeida, ajudou a precipitar a Revolução de 30."
},

{
    question: "Qual a origem do nome atual da capital paraibana?",
    answers: [
        { text: "Referência a São João", correct: false },
        { text: "Nome indígena original", correct: false },
        { text: "Homenagem a João Pessoa", correct: true },
        { text: "Acidente geográfico", correct: false },
    ],
    explanation: "Mudado em 4 de setembro de 1930 para homenagear o presidente assassinado."
},

{
    question: "Qual destes municípios é conhecido como 'Portal do Sertão'?",
    answers: [
        { text: "Patos", correct: false },
        { text: "Sousa", correct: false },
        { text: "Cajazeiras", correct: false },
        { text: "Monteiro", correct: true },
    ],
    explanation: "Principal cidade do Cariri Paraibano, importante entroncamento rodoviário."
},

{
    question: "Qual destes é um prato típico da culinária paraibana?",
    answers: [
        { text: "Rubacão", correct: true },
        { text: "Acarajé", correct: false },
        { text: "Barreado", correct: false },
        { text: "Tacacá", correct: false }
    ],
    explanation: "Mistura de arroz, feijão, carne seca e queijo coalho, típico do sertão."
},

{
    question: "Qual foi o papel da Paraíba na Revolução Pernambucana de 1817?",
    answers: [
        { text: "Manteve-se neutra no conflito", correct: false },
        { text: "Apoiou as tropas portuguesas", correct: false },
        { text: "Declarou independência separadamente", correct: false },
        { text: "Forneceu armas e líderes ao movimento", correct: true },
    ],
    explanation: "A Vila de Pilar (PB) foi importante centro de recrutamento, com o padre João Ribeiro sendo um dos líderes."
},

{
    question: "Por que o algodão foi chamado de 'ouro branco' na Paraíba do século XX?",
    answers: [
        { text: "Pela exportação em larga escala durante a WWII", correct: true },
        { text: "Devido à cor branca do solo algodoeiro", correct: false },
        { text: "Pela fabricação de notas de algodão", correct: false },
        { text: "Nome de um movimento cultural", correct: false }
    ],
    explanation: "Entre 1939-1945, a Paraíba foi 2º maior exportador nacional, atendendo demanda bélica dos Aliados."
},

{
    question: "Qual contribuição de Celso Furtado impactou o desenvolvimento regional?",
    answers: [
        { text: "Criação da SUDENE em 1959", correct: true },
        { text: "Plano Real", correct: false },
        { text: "Reforma Agrária nos anos 60", correct: false },
        { text: "Industrialização de São Paulo", correct: false }
    ],
    explanation: "O economista de Pombal idealizou a Superintendência para impulsionar o Nordeste, combatendo secas e desigualdades."
},

{
    question: "Qual patrimônio paraibano é tombado pelo IPHAN desde 2007?",
    answers: [
        { text: "Estação Cabo Branco", correct: false },
        { text: "Parque Solon de Lucena", correct: false },
        { text: "Centro Histórico de João Pessoa", correct: true },
        { text: "Farol de Cabo Branco", correct: false },
    ],
    explanation: "Conjunto arquitetônico colonial com 42ha preservados, incluindo a Igreja de São Francisco (1589)."
},

{
    question: "Qual manifestação é Patrimônio Cultural Imaterial da Paraíba?",
    answers: [
        { text: "Círio de Nossa Senhora dos Navegantes", correct: true },
        { text: "Carnaval de Rua", correct: false },
        { text: "Festival de Inverno", correct: false },
        { text: "Micarande", correct: false }
    ],
    explanation: "Procissão marítima realizada desde 1943 em Cabedelo, reunindo mais de 50 mil fiéis anualmente."
},

{
    question: "Qual avanço tecnológico ocorreu na Paraíba em 2021?",
    answers: [
        { text: "Primeira usina nuclear", correct: false },
        { text: "1° satélite brasileiro lançado de Centro Espacial", correct: true },
        { text: "Trem-bala para Campina Grande", correct: false },
        { text: "Metrô subterrâneo em JP", correct: false },
    ],
    explanation: "Satélite VCUB1 lançado do Centro Espacial de Barra do Mamanguape em parceria com a SpaceX."
},

{
    question: "Qual ideologia motivou a adesão paraibana à Revolução de 1817?",
    answers: [
        { text: "Republicanismo e anticolonialismo", correct: true },
        { text: "Monarquia constitucional", correct: false },
        { text: "Abolicionismo radical", correct: false },
        { text: "Federalismo norte-americano", correct: false }
    ],
    explanation: "Influenciados pela Revolução Francesa, buscavam independência e fim dos privilégios portugueses."
},

{
    question: "Qual cidade foi chamada 'Capital do Algodão' nos anos 1940?",
    answers: [
        { text: "Patos", correct: false },
        { text: "Sousa", correct: false },
        { text: "Guarabira", correct: false },
        { text: "Campina Grande", correct: true },
    ],
    explanation: "Responsável por 40% da produção estadual, com armazéns que processavam 80 mil fardos/ano."
},

{
    question: "Qual médico paraibano fundou o 1° hospital de traumas do Nordeste?",
    answers: [
        { text: "José Napoleão", correct: true },
        { text: "Zé Doido", correct: false },
        { text: "Vital do Rêgo", correct: false },
        { text: "Edson Ramalho", correct: false }
    ],
    explanation: "Hospital de Emergência e Trauma Senador Humberto Lucena em João Pessoa, referência desde 1985."
},

{
    question: "Qual ponto é o mais elevado da Paraíba?",
    answers: [
        { text: "Pico do Jabre (1.197m)", correct: true },
        { text: "Serra da Raiz (700m)", correct: false },
        { text: "Monte Santo (800m)", correct: false },
        { text: "Chapada do Arapuá (900m)", correct: false }
    ],
    explanation: "Localizado em Matureia, ponto culminante do estado na Serra do Teixeira."
},

{
    question: "Qual igreja barroca possui azulejos portugueses do século XVIII?",
    answers: [
        { text: "Igreja de Nossa Senhora do Carmo", correct: true },
        { text: "Catedral Basílica", correct: false },
        { text: "Capela São Francisco", correct: false },
        { text: "Igreja da Misericórdia", correct: false }
    ],
    explanation: "Em João Pessoa, guarda painéis que retratam a vida de Santa Teresa d'Ávila."
},

{
    question: "Qual time paraibano foi campeão brasileiro da Série C em 2023?",
    answers: [
        { text: "Treze", correct: false },
        { text: "Campinense", correct: false },
        { text: "Auto Esporte", correct: false },
        { text: "Botafogo-PB", correct: true },
    ],
    explanation: "Conquistou título inédito após vencer o Amazonas FC na final por 3x1."
},

{
    question: "Quantos dias durou o governo revolucionário na Paraíba em 1817?",
    answers: [
        { text: "3 meses", correct: false },
        { text: "1 semana", correct: false },
        { text: "6 dias", correct: false },
        { text: "23 dias", correct: true },
    ],
    explanation: "De 29/03 a 20/04/1817, até a reconquista portuguesa liderada por Luís do Rego."
},

{
    question: "Qual inseto quase destruiu a cotonicultura nos anos 1950?",
    answers: [
        { text: "Mosca-branca", correct: false },
        { text: "Lagarta-rosada", correct: false },
        { text: "Pulgão", correct: false },
        { text: "Bicudo-do-algodoeiro", correct: true },
    ],
    explanation: "Praga que reduziu produção em 70%, exigindo novas técnicas de cultivo."
},

{
    question: "Qual escritora paraibana retratou o feminismo nordestino?",
    answers: [
        { text: "Rachel de Queiroz", correct: false },
        { text: "Cora Coralina", correct: false },
        { text: "Nísia Floresta", correct: false },
        { text: "Lúcia Braga", correct: true },
    ],
    explanation: "Autora de 'As Donas da Palavra' (1989), analisando literatura de autoria feminina."
},

{
    question: "Qual açude é o maior reservatório da Paraíba?",
    answers: [
        { text: "Boqueirão", correct: false },
        { text: "Coremas-Mãe D'Água", correct: true },
        { text: "Lagoa do Arroz", correct: false },
        { text: "Açude Velho", correct: false },
    ],
    explanation: "Com capacidade para 1,3 bilhão de m³, no rio Piranhas, construído em 1962."
},

{
    question: "Qual museu guarda acervo da Revolução de 1930?",
    answers: [
        { text: "Museu Fotográfico José Azevedo", correct: true },
        { text: "Museu de Arte Sacra", correct: false },
        { text: "Espaço Cultural", correct: false },
        { text: "Museu do Brejo", correct: false }
    ],
    explanation: "Em João Pessoa, possui registros fotográficos do movimento que mudou o Brasil."
},

{
    question: "Qual projeto preserva peixes-bois marinhos no litoral?",
    answers: [
        { text: "TamAR", correct: false },
        { text: "Projeto Viva o Peixe-Boi", correct: true },
        { text: "Baleia Jubarte", correct: false },
        { text: "Peixe Vivo", correct: false },
    ],
    explanation: "Baseado em Cabedelo desde 1990, já reintroduziu 30 animais na natureza."
},

{
    question: "Qual símbolo foi adotado pelos revolucionários de 1817?",
    answers: [
        { text: "Bandeira tricolor (azul, branco, vermelho)", correct: true },
        { text: "Cruz de Malta", correct: false },
        { text: "Sol dourado", correct: false },
        { text: "Leão rampante", correct: false }
    ],
    explanation: "Inspirada na Revolução Francesa, representava liberdade, igualdade e fraternidade."
}
    
    ];

export { questions };