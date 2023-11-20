## 2 BACKLOG DO PRODUTO
Forneça o backlog do produto, constituído pelos requisitos a serem contemplados no desenvolvimento:
·        Forma de obtenção do requisito (elicitação): brainstorm, reuniões.
### 2.1 PERFIS
#|Nome do perfil|Características do perfil|Pemissões de acesso
---|---|---|---|
1|Administrador|Responsável por manter os perfis de acesso da aplicação, criar novos usuários, alterar usuários já existentes, ou excluir usuários (Manter usuários)|Pode inserir documentos, e administrar usuários
2|Usuário|Responsável por consultar a plataforma, organizar seus documentos em uma sessão de favoritos|Pesquisar por documentos e criar conta no site para adicionar documentos aos favoritos

### 2.2 CENÁRIOS
Numeração do cenário|Nome do cenário|Spints
---|---|---|
1|Pesquisar|1,2,3,4,5
2|Logar|4,5
3|Filtrar pesquisa|5

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

# 6 MVP


  

