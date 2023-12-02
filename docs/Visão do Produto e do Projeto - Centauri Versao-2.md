### Histórico de Revisão
|Data | Versão | Descrição | Autor(es)
|---|---|---|---|
|08/10/2023 | 1.0 | Criação do documento de escopo | Grupo Centauri
|24/10/2023| 2.0 | Atualizando o documento de visão para ficar correspondente ao de escopo| 


## 1. VISÃO GERAL DO PRODUTO
### 1.1 PROBLEMA
Qual é uma das principais dificuldades enfrentadas pelos alunos da Universidade de Brasília que pode impactar negativamente suas oportunidades, relacionada à dificuldade de encontrar documentos importantes e de interesse devido à demora na busca, documentos espalhados ou desatualizados?

![1](https://github.com/FGA0138-MDS-Ajax/2023-2-CENTAURI/assets/101230741/9d2d88bb-0785-4905-82ed-db695f8984f2)

*Imagem 1 - Visão do Problema*

### 1.2 DECLARAÇÃO DE POSIÇÃO DO PRODUTO
<p>

1.    Qual é o produto que o grupo se propõe a desenvolver?

É um motor de pesquisa, com o principal objetivo buscar documentos oficiais da Universidade de Brasília de uma maneira rápida e com eles centralizados, para facilitar o usuário encontrar o que deseja.
  
2.    O que torna este produto diferente dos seus concorrentes (se existirem concorrentes)?
  
3.    Quem são os usuários-alvo e clientes do produto? Quais suas características e por que o produto é importante para eles.

Os usuários-alvo são alunos da Universidade de Brasília, o produto é importante para eles porque eles podem encontrar documentos da faculdade com facilidade.

4.    Por que os clientes deveriam utilizar / comprar este produto?
  
Eles devem usar esse produto, porque muitas vezes um aluno pode demorar para achar algum documento importante que esteja procurando, e a aplicação além de deixar todos eles centralizados, a busca é feita de maneira rápida.</p>

|. | .
|---|---
|Para:|estudantes da Universidade de Brasília
|Necessidade:|encontrar documentos importantes e interessantes da faculdade
|O(UnBuscas):|é uma aplicação WEB
|Que:|busca documentos oficiais da Universidade de Brasília
|Ao contrário:|de outros motores de busca que demoram mais para pesquisar
|Nosso produto:|tem uma alta eficiência e rapidez na hora de buscar

*Tabela 1 - Posição do produto*

### 1.3 OBJETIVOS DO PRODUTO
<p> O objetivo do projeto é desenvolver um software que simplifica e padroniza a busca por documentos da Universidade de Brasília 	(UnB). A intenção é criar uma experiência de busca mais intuitiva e amigável, diminuindo a quantidade de obstáculos que o usuário possa enfrentar devido à diversidade de formatos e estruturas de arquivos que a UnB apresenta. Ao proporcionar uma ferramenta que torna isso mais acessível para o público.</p>

### 1.4 TECNOLOGIAS A SEREM UTILIZADAS 
- Linguagens de Programação: Rust, React
  -  Framework - Actix-web: criar o aplicativo web, tratando solicitações HTTP.
  -  Biblioteca - Actix-rt, Rayon: Criar iteradores que usam processamento paralelo, Serde: Facilitar a manipulação dos documentos, transformando os vetores com os documentos em JSON e vice-versa, jQuery.
- API - Meili Search-SDK: Acesso ao banco de dados do motor de busca, NodeJs - acesso ao banco de dados dos usuários
- MySQL: Criar e gerenciar o banco de dados.
- Ambiente - Figma: Criação de designs da interface para o usuário, Github: Hospedar o projeto e salvar todo tipo de mudança do código-fonte , Zenhub: Gerenciamento e acompanhamento do progresso do projeto
- Método Ágil: ScrumXP
- VsCode: Ferramenta usada para programar em Rust.

## 2.VISÃO GERAL DO PROJETO
### 2.1 CICLO DE VIDA DO PROJETO DE DESENVOLVIMENTO DE SOFTWARE
![2](https://github.com/FGA0138-MDS-Ajax/2023-2-CENTAURI/assets/101230741/26917903-5ca5-40d8-a29c-f3488e9f58c2)

*Imagem 2 - Ciclo de Vida*

### 2.2 ORGANIZAÇÃO DO PROJETO
|Papel | Atribuições | Responsável
|---|---|---|
|Desenvolvedor do Frontend| Codificar e arrumar o front, bem como documenta-lo e fazer os testes unitário necessários.|Danielle <br> Felipe <br> Renan 
|Desenvolvedor do backend de pesquisas| Codificar e arrumar o back de pesquisa, arrumar os arquivos da UNB, conectar com o front, documentar o que for necessário e fazer os testes unitário.| Thomas <br> João Paulo <br> Pedro Miguel 
|Desenvolvedor do backend de cadastro| Codificar e arrumar o back de cadastro, arrumar uma forma de conectar ao front, documentar o que for necessário e fazer os testes unitário.| André João <br> Mariana
|Cliente| Testar o produto, ver se é aquilo que foi desejado, e caso necessário, falar se quer alguma mudança.| Todos que precisarem de alguma informação da UnB.
|Monitor| Dá algumas dicas aos desenvolvedores, dando um base do que seria bom adicionar ou tirar do trabalho, e tirar duvidas em relação ao projeto.| Gustavo

*Tabela 2 - Organização do projeto e equipe*

### 2.3 PLANEJAMENTO DAS FASES E/OU ITERAÇÕES DO PROJETO
|Sprint | Produto (entrega) | Data Início | Data Fim | Entregáveis| % Conclusão
|---|---|---|---|---|---|
|Sprint 1|Planejamento do projeto|28/08/2023|25/09/2023|Levantamento de issues e US’s <br> Levantamento de requisitos <br> Definição de ferramenta| 100%
|Sprint 2|[US] 1 e 2|25/09/2023|02/10/2023|Popular banco de dados <br> Criar parser de textos| 100%
|Sprint 3|[US] 3 e 4|02/10/2023|09/10/2023|Carregar dados do parser <br> Visualizar documentos na interface| 100%
|Sprint 4|[US] 5|16/10/2023|23/10/2023|Mostrar os dados de pesquisa| 100%
|Sprint 5|[US] 6 e 7|23/10/2023|30/10/2023|Visualizar erro <br> Entrar pela minha conta na página| Em andamento
|Sprint 6|[US] 8 e 9|30/10/2023|06/11/2023|Armazenar dados de usuário <br> Filtrar dados de pesquisa| A fazer
|Sprint 7|[US] 10|06/11/2023|13/11/2023|Favoritar documentos| A fazer
|Sprint 8|[US] 12|13/11/2023|20/11/2023|Visualizar miniatura dos documentos favoritados| A fazer

*Tabela 3 - Planejamento de fases e iterações do projeto*

### 2.4 MATRIZ DE COMUNICAÇÃO
|Descrição | Área/Envolvimento | Periodicidade | Produtos Gerados
|---|---|---|---|
|• Acompanhamento das atividades em andamento <br> • Acompanhamento dos riscos, compromissos, ações pendentes, indicadores|Equipe do Projeto| Semanal <br> Quinzenal| • Transcrição da reunião <br> • Sprint Review pelo Microsoft Teams da Equipe <br> • Sprint Planning pelo Microsoft Teams da Equipe
|• Comunicar situação do projeto|Equipe|Diariamente|• Transcrição das reuniões disponibilizado no Microsoft Teams <br> • Documento de Visão <br> • Mensagens pelo grupo da equipe no Whatsapp.
|• Gerenciar e supervisionar fases do Projeto|Equipe|Diariamente|• Aplicativo voltado para gerência de projetos: Trello
|• Relacionar desenvolvimento do software e seu versionamento| | | • Github

*Tabela 4 - Matriz de comunicação*

### 2.5 GERENCIAMENTO DE RISCOS
|Risco|Grau De Exposição|Mitigação
|---|---|---|
|Aumento do Escopo do Projeto|Baixo|• Reunião de planejamento de sprint semanal <br> • Backlog documento acompanhamento do projeto pelo Zenhub
|Não entregar das sprints completas|Baixo|Reajuste de entregas por sprint e tamanho da sprint para o nível de energia do time
|Trancamento da disciplina por parte da equipe|Médio|• Reajuste das sprints de todo projeto <br> • Diminuição parcial do escopo
|Mudança de Backlog para entregar releases|Médio|• Revisão de backlog constante <br> • Rotação de conhecimento na equipe
|Falta de conhecimento para trabalhar US|Alto|• Divisão de conhecimentos <br> • Equilibrar pares de programadores nas issues <br> • Recomendações com o monitor

*Tabela 5- Gerenciamento de riscos*

### 2.6 CRITÉRIOS DE REPLANEJAMENTO
- Mudança no número de membros da equipe;
- Mudança de funções entre os membros;
- Alteração de prazo de entrega;
- Utilização de tecnologias diferentes do previsto;
- Novos requisitos para o projet

## 3. PROCESSO DE DESENVOLVIMENTO DE SOFTWARE
<strong>ScrumXP:</strong> O ScrumXP combina as metodologias Scrum e Extreme Programming(XP). Scrum é uma abordagem ágil de desenvolvimento de software que enfatiza a entrega em ciclos curtos de tempo, chamados de sprints. Valoriza também a colaboração e trabalho em equipe a partir de times que conseguem ser auto-organizáveis e adaptáveis. O XP (extreme programming) é uma metodologia com foco em agilidade de equipes e qualidade de projetos, apoiada em valores como simplicidade, comunicação, feedback e coragem. O XP é uma metodologia baseada em comportamentos e atitudes.
<strong>Scrum:</strong>

[scrum](https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/metodo-scrum-01.png.webp)

*Imagem 3 - Scrum diagrama de implementação*

#### Cerimônias do Scrum:

|Cerimônias|O que é
|---|---|
|Sprint|É um período predefinido em que uma equipe trabalhará para atingir um objetivo específico.
|Sprint Planning|É uma reunião onde toda a equipe trabalha em conjunto para identificar o objetivo da sprint e definir o objetivo e o planejamento da sprint.
|Daily|Na Daily, todos os dias do sprint, a equipe de desenvolvimento se reúne para revisar o progresso na sprint.
|Retrospectiva da sprint|A retrospectiva é uma reunião onde a equipe analisa o que deu certo e onde há espaço para melhorias durante uma retrospectiva do sprint

*Tabela 6 - Scrum e suas cerimônias*

#### Práticas Utilizadas do XP:

|Práticas|O que é
|---|---|
|Refatoração|Realizaremos manutenções periódicas no código, a fim de melhorar o design e a estrutura do código.
|Projeto Simples|Implementaremos o Projeto simples, significando que o código será eficiente, e atenderá aos requisitos e que seja fácil de testar, refatorar e adicionar novas funcionalidades.
|Integração Contínua|O código irá ser frequentemente integrado (versionado) ajudando tanto na questão da transparência como no aumento da segurança do código a partir do controle de versões, evitando perda do código por modificações.
|Posse Coletiva|A equipe passa a ser responsável por cada arquivo de código, não sendo necessário solicitar autorização para fazer alterações.
|Padronização de código|Para que o desenvolvimento do código seja bem definido, consistente e de fácil leitura e interpretação Utilizaremos padrões de código. Essa prática melhora a qualidade geral do código produzido.
Small Releases (Pequenas versões)|Permite entregar o valor de forma incremental e iterativa.
|Testes Unitários|Adotaremos os testes unitários a fim de garantir a qualidade do código e a sua aderência aos requisitos.

*Tabela 7 - Scrum e suas cerimônias*

## 4 DETALHAMENTO DE ATIVIDADE DO PROJETO
### 4.1 ATIVIDADE 1
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Criação do Protótipo de Baixa Fidelidade|...|Figma|25/09/2023

*Tabela 8 - Atividade 1 do projeto*

### 4.2 ATIVIDADE 2
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Levantamento de Issues e US|...|Google docs|25/09/2023

*Tabela 9 - Atividade 2 do projeto*

### 4.3 ATIVIDADE 3
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Levantamento de requisitos|...|Google docs|25/09/2023

*Tabela 10 - Atividade 3 do projeto*

### 4.4 ATIVIDADE 4
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Definição de ferramentas|...|Teams|25/09/2023

*Tabela 11 - Atividade 4 do projeto*

### 4.5 ATIVIDADE 5
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Protótipo de alta fidelidade|...|Figma|02/10/2023

*Tabela 12 - Atividade 5 do projeto*

### 4.6 ATIVIDADE 6
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Organizar o repositório da disciplina|...|Github|09/10/2023

*Tabela 13 - Atividade 6 do projeto*

### 4.7 ATIVIDADE 7
|Atividade|Método|Ferramenta|Entrega
|---|---|---|---|
|Sugestão de busca|...|a decidir|06/11/2023

*Tabela 14 - Atividade 7 do projeto*

## 5. LIÇÕES APRENDIDAS
### 5.1 UNIDADE 1
<p>Durante a unidade 1, as atitudes tomadas, levando em consenso com a opinião da maioria do grupo, consistiram em separar os melhores frameworks para lidar com a nossa proposta de projeto, seja na parte do back-end, como na do front-end, também prestando atenção no nível de conhecimento da maioria das pessoas, e suas disponibilidades de poder aprender elementos novos.<br></p>
<p>Sendo assim, conseguimos concluir que fazer um back-end em rust, utilizando o MeilliSearch, MeilliSearch - SDK,  Actix-web e Actix-rt.
Por fim, tivemos a escolha do front o qual seria feito através do React junto a CSS, JavaScript e html.<br></p>
<p>No começo do projeto, nosso objetivo era focar em fazer o motor de busca, e uma interface bem simples, então tomamos essa decisão - sobre quais ferramentas iríamos utilizar - visando a isso.<br></p>
<p>Em relação aos ciclos de vida de um produto, foi nos apresentado dois: o Scrum e o XP. Ambos são metodologias ágeis que acreditamos beneficiar nosso projeto. Portanto, a metodologia dele será ScrumXP com Kanban.<br></p>

## 6. PRÓXIMOS PASSOS

### 6.1 PRODUCT BACKLOG

#### 6.1.1 Requisitos funcionais

- Login por meio da autenticação do Google 
- Possibilidade de favoritar documentos
  
#### 6.1.2 Requisitos não funcionais
- Edição de conta do usuário  
- Login por email 
- Filtrar dados da pesquisa
### 6.2 SPRINT E RELEASES.
#### 6.2.1 SPRINT

|Sprint Nº|Data|Metas
|---|---|---|
|1|28/08/2023 - 25/09/2023|Levantamento de issues e US’s <br> Levantamento de requisitos <br> Definição de ferramentas
|2|25/09/2023 - 02/10/2023|Popular banco de dados <br> Criar parser de textos		
||02/10/2023 - 09/10/2023|Carregar dados do parser <br> Visualizar documentos na interface
|4|09/10/2023 - 16/10/2023|Mostrar os dados de pesquisa
|5|16/10/2023 - 23/10/2023|Visualizar erro <br> Entrar pela minha conta na página
|6|23/10/2023 - 30/10/2023|Armazenar dados de usuário <br> Filtrar dados de pesquisa
|7|30/10/2023 - 06/11/2023|Favoritar documentos	
|8|13/10/2023 - 20/11/2023|Visualizar miniatura dos documentos favoritados

*Tabela 15 - Detalhamento das Sprints*

#### 6.2.2

<p>Releases são na visão geral são as versões específicas de um software disponibilizadas ao público ou a um grupo seleto de usuários. Cada release pode conter novos recursos, correções de bugs, melhorias de desempenho e outras mudanças.</p>

|Release Nº|Data|Entregas
|---|---|---|
|1| 25/09/2023 - 30/10/2023| • Entrega do Back-end responsável pelo funcionamento motor de busca <br> • Entrega do Layout Básico de Interfaces relacionadas ao motor de busca <br> • Entrega funcional isquêmica do Back-end responsável pelo gerenciamento de usuários 
|2|30/10/2023 - 13/11/2023| • Entrega do Back-end responsável pelo gerenciamento de usuários <br> • Entrega do Front-End mostrando acesso pelo usuário ao site <br> • Entrega da filtragem de documentos otimizada
|3|13/10/2023 - 27/11/2023| • Entrega do funcionamento da ação de favoritar documentos <br> • Entrega dos testes unitários e de integração <br> • Entrega da documentação do projeto

*Tabela - 16 Detalhamento de Releases que serão feitas pelo grupo* 

### 6.3 MINIMUM VIABLE PRODUCT (MVP)

<p>Versão mais simples e enxuta de um produto, empregando o mínimo possível de recursos para entregar a principal proposta de valor da ideia com apenas o fundamental para o funcionamento da aplicação.

Considerando a UnBuscas como plataforma, temos como objetivo mínimo prover um mecanismo para busca que retorne resultados relevantes para o público alvo, os estudantes da universidade. Além disso, a experiência de busca deve ser intuitiva, e o processo eficiente, o que pode ser definido de diferentes formas. A definição escolhida pela equipe foi a de haver uma variedade de formas para o usuário filtrar e encontrar o conteúdo mais relevante. Isso será feito com o uso de filtros e ferramentas de ordenação.</p>

## 7 REFERÊNCIAS

LETÍCIA, M.; PEDRO MIGUEL. <strong>MDS Centauri - Backlog e Critérios</strong>
de Aceitação. 2023. Disponível em: https://docs.google.com/spreadsheets/d/18qN3aizmMQCIOUuCEOiuYvgYZNmI8NbCw8UrxjjkHCk/edit#gid=600013620.

AJAX, Ricardo. <strong>Pacote: Mapa de competências: conhecimento geral dos alunos</strong>. In: AJAX, Ricardo. Mapa de competencias. Aprender 3, 30 ago. 2023. Disponível em: https://aprender3.unb.br/course/view.php?id=19389§ion=1. Acesso em: 8 nov. 2023.

GUEDES, Marylene. <strong>O que é XP - Extreme Programming?.</strong> TreinaWeb, 2020. Disponível em: https://www.treinaweb.com.br/blog/o-que-e-xp-extreme-programming. Acesso em: 09 nov. 2023. 

<strong>O que é scrum e como começar: Guia do Scrum: o que é, como funciona e como começar.</strong> atlassian, 2023. Disponível em: https://www.atlassian.com/br/agile/scrum. Acesso em: 9 nov. 2023.






