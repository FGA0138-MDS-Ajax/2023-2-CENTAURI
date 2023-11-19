## 1. VISÃO GERAL DO PRODUTO
### 1.1 PROBLEMA
Qual é uma das principais dificuldades enfrentadas pelos alunos da Universidade de Brasília que pode impactar negativamente suas oportunidades, relacionada à dificuldade de encontrar documentos importantes e de interesse devido à demora na busca, documentos espalhados ou desatualizados?
### 1.2 DECLARAÇÃO DE POSIÇÃO DO PRODUTO
1. Qual é o produto que o grupo se propõe a desenvolver?
É um motor de pesquisa, com o principal objetivo buscar documentos oficiais da Universidade de Brasília de uma maneira rápida e com eles centralizados, para facilitar o usuário encontrar o que deseja.
Papel | Atribuições | Responsável
---|---|---|
Desenvolvedor do Frontend| Codificar e arrumar o front, bem como documenta-lo e fazer os testes unitário necessários.|Danielle <br> Felipe <br> Renan 
Desenvolvedor do backend de pesquisas| Codificar e arrumar o back de pesquisa, arrumar os arquivos da UNB, conectar com o front, documentar o que for necessário e fazer os testes unitário.| Thomas <br> João Paulo <br> Pedro Miguel 
Desenvolvedor do backend de cadastro| Codificar e arrumar o back de cadastro, arrumar uma forma de conectar ao front, documentar o que for necessário e fazer os testes unitário.| André João <br> Mariana
Cliente| Testar o produto, ver se é aquilo que foi desejado, e caso necessário, falar se quer alguma mudança.| Todos que precisarem de alguma informação da UnB.
Monitor| Dá algumas dicas aos desenvolvedores, dando um base do que seria bom adicionar ou tirar do trabalho, e tirar duvidas em relação ao projeto.| Gustavo

### 2.3 PLANEJAMENTO DAS FASES E/OU ITERAÇÕES DO PROJETO
Sprint | Produto (entrega) | Data Início | Data Fim | Entregáveis| % Conclusão
---|---|---|---|---|---|
Sprint 1|Planejamento do projeto|28/08/2023|25/09/2023|Levantamento de issues e US’s <br> Levantamento de requisitos <br> Definição de ferramenta| 100%
Sprint 2|[US] 1 e 2|25/09/2023|02/10/2023|Popular banco de dados <br> Criar parser de textos| 100%
Sprint 3|[US] 3 e 4|02/10/2023|09/10/2023|Carregar dados do parser <br> Visualizar documentos na interface| 100%
Sprint 4|[US] 5|16/10/2023|23/10/2023|Mostrar os dados de pesquisa| 100%
Sprint 5|[US] 6 e 7|23/10/2023|30/10/2023|Visualizar erro <br> Entrar pela minha conta na página| Em andamento
Sprint 6|[US] 8 e 9|30/10/2023|06/11/2023|Armazenar dados de usuário <br> Filtrar dados de pesquisa| A fazer
Sprint 7|[US] 10|06/11/2023|13/11/2023|Favoritar documentos| A fazer
Sprint 8|[US] 12|13/11/2023|20/11/2023|Visualizar miniatura dos documentos favoritados| A fazer

### 2.4 MATRIZ DE COMUNICAÇÃO
Descrição | Área/Envolvimento | Periodicidade | Produtos Gerados
---|---|---|---|
• Acompanhamento das atividades em andamento <br> • Acompanhamento dos riscos, compromissos, ações pendentes, indicadores|Equipe do Projeto| Semanal <br> Quinzenal| • Transcrição da reunião <br> • Sprint Review pelo Microsoft Teams da Equipe <br> • Sprint Planning pelo Microsoft Teams da Equipe
• Comunicar situação do projeto|Equipe|Diariamente|• Transcrição das reuniões disponibilizado no Microsoft Teams <br> • Documento de Visão <br> • Mensagens pelo grupo da equipe no Whatsapp.
• Gerenciar e supervisionar fases do Projeto|Equipe|Diariamente|• Aplicativo voltado para gerência de projetos: Trello
• Relacionar desenvolvimento do software e seu versionamento| | | • Github

### 2.5 GERENCIAMENTO DE RISCOS
Risco|Grau De Exposição|Mitigação
---|---|---|
Aumento do Escopo do Projeto|Baixo|• Reunião de planejamento de sprint semanal <br> • Backlog documento acompanhamento do projeto pelo Zenhub
Não entregar das sprints completas|Baixo|Reajuste de entregas por sprint e tamanho da sprint para o nível de energia do time
Trancamento da disciplina por parte da equipe|Médio|• Reajuste das sprints de todo projeto <br> • Diminuição parcial do escopo
Mudança de Backlog para entregar releases|Médio|• Revisão de backlog constante <br> • Rotação de conhecimento na equipe
Falta de conhecimento para trabalhar US|Alto|• Divisão de conhecimentos <br> • Equilibrar pares de programadores nas issues <br> • Recomendações com o monitor

### 2.6 CRITÉRIOS DE REPLANEJAMENTO
- Mudança no número de membros da equipe;
- Mudança de funções entre os membros;
- Alteração de prazo de entrega;
- Utilização de tecnologias diferentes do previsto;
- Novos requisitos para o projet

## 3. PROCESSO DE DESENVOLVIMENTO DE SOFTWARE
<strong>ScrumXP:</strong> O ScrumXP combina as metodologias Scrum e Extreme Programming(XP). Scrum é uma abordagem ágil de desenvolvimento de software que enfatiza a entrega em ciclos curtos de tempo, chamados de sprints. Valoriza também a colaboração e trabalho em equipe a partir de times que conseguem ser auto-organizáveis e adaptáveis. O XP (extreme programming) é uma metodologia com foco em agilidade de equipes e qualidade de projetos, apoiada em valores como simplicidade, comunicação, feedback e coragem. O XP é uma metodologia baseada em comportamentos e atitudes.
<strong>Scrum:</strong>

#### Cerimônias do Scrum:

Cerimônas|O que é
---|---|
Sprint|É um período predefinido em que uma equipe trabalhará para atingir um objetivo específico.
Sprint Planning|É uma reunião onde toda a equipe trabalha em conjunto para identificar o objetivo da sprint e definir o objetivo e o planejamento da sprint.
Daily|Na Daily, todos os dias do sprint, a equipe de desenvolvimento se reúne para revisar o progresso na sprint.
Retrospectiva da sprint|A retrospectiva é uma reunião onde a equipe analisa o que deu certo e onde há espaço para melhorias durante uma retrospectiva do sprint

#### Práticas Utilizadas do XP:

Práticas|O que é
---|---|
Refatoração|Realizaremos manutenções periódicas no código, a fim de melhorar o design e a estrutura do código.
Projeto Simples|Implementaremos o Projeto simples, significando que o código será eficiente, e atenderá aos requisitos e que seja fácil de testar, refatorar e adicionar novas funcionalidades.
Integração Contínua|O código irá ser frequentemente integrado (versionado) ajudando tanto na questão da transparência como no aumento da segurança do código a partir do controle de versões, evitando perda do código por modificações.
Posse Coletiva|A equipe passa a ser responsável por cada arquivo de código, não sendo necessário solicitar autorização para fazer alterações.
Padronização de código|Para que o desenvolvimento do código seja bem definido, consistente e de fácil leitura e interpretação Utilizaremos padrões de código. Essa prática melhora a qualidade geral do código produzido.
Small Releases (Pequenas versões)|Permite entregar o valor de forma incremental e iterativa.
Testes Unitários|Adotaremos os testes unitários a fim de garantir a qualidade do código e a sua aderência aos requisitos.

## 4 DETALHAMENTO DE ATIVIDADE DO PROJETO
### 4.1 ATIVIDADE 1
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Criação do Protótipo de Baixa Fidelidade|...|Figma|25/09/2023
### 4.2 ATIVIDADE 2
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Levantamento de Issues e US|...|Google docs|25/09/2023
### 4.3 ATIVIDADE 3
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Levantamento de requisitos|...|Google docs|25/09/2023
### 4.4 ATIVIDADE 4
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Definição de ferramentas|...|Teams|25/09/2023
### 4.5 ATIVIDADE 5
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Protótipo de alta fidelidade|...|Figma|02/10/2023
### 4.6 ATIVIDADE 6
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Organizar o repositório da disciplina|...|Github|09/10/2023
### 4.7 ATIVIDADE 7
Atividade|Método|Ferramenta|Entrega
---|---|---|---|
Sugestão de busca|...|a decidir|06/11/2023
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
#### 6.2.1

