### Histórico de Revisão
Data | Versão | Descrição | Autor(es)
---|---|---|---|
23/10/2023 | 1.0 |  |
19/11/2023| 2.0 | Correção com base na análise do professor| Todos



## PROBLEMA/SISTEMA DE SOFTWARE

***Definição da equipe:*** 

Renan: Desenvolvimento Front-end.

Danielle: Desenvolvimento Front-end.

Felipe: Desenvolvimento Front-end.

Thomas: Desenvolvimento do motor de busca.

Mariana: Desenvolvimento Fullstack.

Pedro: Desenvolvimento Fullstack.

André: Desenvolvimento Fullstack.

João: Desenvolvimento do motor de busca.

***Resumo do problema:***

Qual é uma das principais dificuldades enfrentadas pelos alunos da Universidade de Brasília que pode impactar negativamente suas oportunidades, relacionada à dificuldade de encontrar documentos importantes e de interesse devido à demora na busca, documentos espalhados ou desatualizados?

***Sistema de Software:***

UnBuscas

Objetivos:

O objetivo do projeto é desenvolver um software que simplifique e padronize a busca por documentos da Universidade de Brasília (UnB). A intenção é criar uma experiência de busca mais intuitiva e amigável, diminuindo a quantidade de obstáculos que o usuário possa enfrentar devido à diversidade de formatos e estruturas de arquivos que a UnB apresenta. Ao proporcionar uma ferramenta que torna isso mais acessível para o público.

***Resumo de tecnologias usadas:***

**Linguagens de Programação:**

  React: Utilizado para o Front-end da aplicação.
  Rust: Utilizado para o Back-end do motor de busca da aplicação.
  Node.js: Utilizado para o Back-end do Fluxo de usuários da aplicação.

**API/Bancos de Dados:**

  MeiliSearch-SDK: Usado para o acesso ao banco de dados.
	MySQL: Criar e gerenciar o banco de dados.
 
**Ambiente:**

- Figma: Criação de designs da interface para o usuário(prototipação).
- Github: Hospedar o projeto e salvar todo tipo de mudança do código-fonte.
- Trello: Gerenciamento e acompanhamento do projeto.
 
 
**Programas:**

VsCode - utilizada para programar a aplicação.
  
***Resumo da metodologia de desenvolvimento usada:***

**ScrumXP:** O ScrumXP combina as metodologias Scrum e Extreme Programming(XP). Scrum é uma abordagem ágil de desenvolvimento de software que enfatiza a entrega em ciclos curtos de tempo, chamados de sprints. Valoriza também a colaboração e trabalho em equipe a partir de times que conseguem ser auto-organizáveis e adaptáveis. O XP (extreme programming) é uma metodologia com foco em agilidade de equipes e qualidade de projetos, apoiada em valores como simplicidade, comunicação, feedback e coragem. O XP é uma metodologia baseada em comportamentos e atitudes 

**Fases do ScrumXP:**

**Scrum:**

- Atividades pré-sprint
- Atividades Sprint
- Atividades pós-sprint
  
**Atividades:**
  
- Atividades pré-sprint: 
  - Planejamento do Produto
  - Sprint Splanning
  - Refinamento do Backlog

- Atividades Sprint:
  - Daily Scrum
  - Desenvolvimento
  - Sprint Review

- Atividades pós-print:
  - Atualização do Backlog
  - Planejamento da Próxima Sprint
  - Atualização da Documentação

**XP:**

Plano de Iteração

Desenvolvimento

Novos Testes

Nova versão

**Atividades:**

- Plano de Iteração:
  - Sprint Planning
  - Definição de Metas da Iteração 
  - Revisão do Backlog do Produto

- Desenvolvimento:
  - Daily Scrum
  - Desenvolvimento Contínuo
  - Colaboração Constante

- Novos Testes:
  - Testes de Unidade
  - Testes de Integração
  - Testes de Aceitação

- Nova Versão:
  - Sprint Review
  - Retrospectiva da Sprint
  - Entrega de Valor

***Métricas usadas no desenvolvimento:***

Nenhuma métrica foi desenvolvida.


***Testes de software:***

**Teste de Integração:**

Teste de integração é quando os módulos (unidades de código) são testados em grupo para garantir que não haja nenhuma quebra naquilo que foi feito unitariamente e naquilo que está sendo integrado junto.

**Teste Unitário:**

Um teste unitário é uma prática de programação em que unidades individuais ou componentes de um software são testados isoladamente para garantir que cada unidade funcione conforme o esperado. O objetivo principal é verificar se cada parte do código-fonte funciona corretamente, de acordo com sua especificação.


## 2 BACKLOG DO PRODUTO
Forneça o backlog do produto, constituído pelos requisitos a serem contemplados no desenvolvimento:

- Forma de obtenção do requisito (elicitação): brainstorm, reuniões.

### 2.1 PERFIS
#|Nome do perfil|Características do perfil|Pemissões de acesso
---|---|---|---|
1|Administrador|Responsável por manter os perfis de acesso da aplicação, criar novos usuários, alterar usuários já existentes, ou excluir usuários (Manter usuários)|Pode inserir documentos, e administrar usuários
2|Usuário|Responsável por consultar a plataforma, organizar seus documentos em uma sessão de favoritos|Pesquisar por documentos e criar conta no site para adicionar documentos aos favoritos

*Tabela 1: Perfis de acesso*

### 2.2 CENÁRIOS
Numeração do cenário|Nome do cenário|Spints
---|---|---|
1|Pesquisar|1,2,3,4,5
2|Logar|4,5
3|Filtrar pesquisa|5

*Tabela 2: Cenários funcionais*

### 2.3 BACKLOG DO PRODUTO
Numeração (Cenário / requisito)|Sprint|Nome do requisito|Tipo de requisito (Funcional / não funcional)|Priorização do requisito Must, Should, Could|Descrição sucinta do requisito|User stories (U.S.) associadas Identifique as U.S. associadas ao requisito
---|---|---|---|---|---|---|
1|1|Coletar documentos da faculdade|funcional|Must| Eu como desenvolvedor coleto documentos da faculdade para tratamento de dados|1
1|2|Popular sistema com documentos coletados|funcional|Must|Eu como desenvolvedor populo o sistema com os documentos tratados para que a interface possa mostrá-los|2
1|3|Visualizar documentos na interface|funcional|Should|Eu como desenvolvedor devo visualizar os dados carregados numa página para leitura|3
1|3|Mostrar os dados de pesquisa|funcional|Must|Eu como usuário, vejo os dados pesquisados para conferir aquilo que estava procurando|4
1|4|Fazer login pela conta do google|funcional|Could|Eu como usuário desejo entrar na minha conta para acessar o site de busca|5
1,2|5|Armazenar dados de usuário|funcional|Should|Eu como desenvolvedor quero armazenar os dados de usuário para dedicar funções específicas|6
2|5|Filtrar dados de pesquisa|funcional|Could|Eu como usuário desejo filtrar documentos para encontrar o que mais se adequa a minha pesquisa|7
1|6|Favoritar documentos|funcional|Could|Eu, como usuário, quero favoritar os documentos para que eu os veja posteriormente com facilidade|8
1|7|Visualizar erro|funcional|Must|Eu como usuário, desejo visualizar um erro para saber o porquê de eu não conseguir acessar essa funcionalidade|9
3|8|Visualizar miniatura dos documentos|funcional|Could|Eu, como usuário, devo ver a miniatura dos documentos favoritados para reconhecê-los|10
.|.|Pesquisa rápida|Não funcional|Should|Resultado da pesquisa recebido em até 20ms|.

*Tabela 3: Backlog do produto*

### 2.4 SPRINTS PREVISTAS


#Sprint|Descrição|Objetivos|Composição de itens do backlog (Lista conforme tabela Backlog do produto) 
---|---|---|---|
1|Organização do projeto e documentação inicial|Definir projeto a ser feito, definir a tecnologia a ser utilizada e definir o escopo do projeto|.
2|Coletar documentos|Conseguir coletar os documentos e fazer um tratamento adequado dos dados para mostrar|US1
3|Popular banco de dados|Utilizar dos documentos tratados para submissão em banco de dados adequado para pesquisa|US2
3|Mostrar os dados na interface com a pesquisa|Aproveitar os dados no banco para mostrar na interface para o usuário|US3 e US4
4|Fazer login do google|Preparar o login no site com o google|US5
5|Finalizar integração com usuário|Associar dado de usuário com banco e fazer o filtro da pesquisa|US6 e US7
6|Favoritar documentos|Colocar favoritação nos documentos pesquisados|US8
7|Visualizar erros|Arrumar usabilidade com visualização de possíveis erros no sistema|US9

*Tabela 4: Sprints previstas*

## 3.0 DEFINIÇÃO DE READY/DONE
### 3.1 DEFINITION OF READY (DOR)
- É um requisito é uma declaração funcional ou não-funcional?
- Sendo não-funcional o requisito se encaixa na matriz URPS+ ou funcional utiliza cartão, conversação e confirmação como história de usuário?
- O requisito é simples e curto?
- Tem tamanho ideal para uma sprint?
- O requisito faz parte da história do usuário?
- O requisito possui critérios de aceite?
### 3.2 DEFINITION OF DONE (DOD)
- Os critérios de aceite foram cumpridos?
- Obedece às práticas de programação como clean code?
- Os testes foram realizados?
- Passou em todos os testes?
- Foi feita a documentação adequada?
- Houve design simples?
- Contém os padrões do cliente?

## 4. US - USER STORIES

![Captura de tela 2023-11-27 115041](https://github.com/FGA0138-MDS-Ajax/2023-2-CENTAURI/assets/101230741/14892f1b-d271-47f9-82eb-11a44bd6b31a)

*Tabela 5: User Stories*

Release 1 = Primeiro mínimo produto viável que permite a consulta dos documentos da faculdade com uma pesquisa facilitadora.

Release 2 = Segundo mínimo produto viável que garante a integração com o usuário por meio da seção de favoritos que ajuda o usuário a encontrar documento recorrentes.

Release 3 = Seção de função de ajuda extra elencada mas que não será trabalhada por conta do tempo.


## 5 DIAGRAMA DE CASOS DE USO
![Captura de tela 2023-11-27 115335](https://github.com/FGA0138-MDS-Ajax/2023-2-CENTAURI/assets/101230741/218d28c4-b461-4009-b346-f1d2196abec0)

*Imagem 1: diagrama de casos de uso*

# 6 MVP

Nº US|Atividade
---|---|
US 1|Popular banco de dados
US 2|Criar parser de dados
US 3|Carregar dados do parser
US 4|Visualizar documentos na interface
US 5|Mostrar os dados de pesquisa
US 6|Visualizar aviso de erro 

*Tabela 6: Conjunto de US para o MVP 1*

O nosso primeiro MVP (Minimum Product Viable ou Mínimo produto viável) seria todo o tema 1 (Pesquisa de documentos) para o tratamento dos documentos (pelo desenvolvedor) e para a pesquisa dos documentos no banco, usando a barra de pesquisa da aplicação (pelo usuário). Dessa forma o produto consegue fazer minimamente sua função esperada, sem isso o produto não teria o funcionamento esperado e não resolveria o problema proposto.

Posteriormente novos requisitos podem ser implementados buscando deixar o produto mais completo e com mais funcionalidades, sendo um MVP 2:

  
Nº US|Atividade
---|---|
US 7|Entrar pela minha conta na página
US 8|Armazenar dados do usuário
US 9|Filtrar dados de pesquisa
US 10|Favoritar documentos
US 11|Pré-visualizar pesquisa
US 12|Visualizar miniatura dos documentos favoritados
US 13|Marcar documentos lidos

*Tabela 7: Conjunto de US para o MVP 2*

Com o produto fazendo suas funcionalidades mínimas posteriormente pode ser implementado novas funcionalidades, como o login do usuário (US 07), permitindo que o usuário possa salvar como favorito documentos para serem acessados em uma página específica. Outra funcionalidade a ser implementada será a filtragem dos documentos (US 09), como por exemplo a filtragem por datas para que o usuário delimite a época do documento que ele está procurando e possa ver um documento mais recente ou mais antigo para o problema a dúvida a ser resolvida.

## 7 REFERÊNCIAS

LETÍCIA, M.; PEDRO MIGUEL. **MDS Centauri - Backlog e Critérios de Aceitação.** 2023. Disponível em: https://docs.google.com/spreadsheets/d/18qN3aizmMQCIOUuCEOiuYvgYZNmI8NbCw8UrxjjkHCk/edit#gid=600013620.

