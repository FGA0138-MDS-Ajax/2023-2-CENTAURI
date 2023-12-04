### Reunião 08/09/2023

**participantes:** Renan, André, Thomas, Mariana, Felipe, Pedro(Danni não pode, e João não deu notícia)

**O que foi discutido:**

- Requisitos(estão na parte de análises)
- Tarefas para a primeira sprint
- Felipe, Danni e Renan focarão em fazer o protótipo de baixa fidelidade.
- Criaremos um git só para nós (apesar de termos que upar os arquivos e pastas posteriormente no git na turma)
- Data da primeira Sprint(08/09/2023 - 15/09/2023)
- Definimos também melhor o escopo do projeto.

### Reunião 11/09/2023

**Participantes:** Felipe, Renan, Danielle.

**O que foi discutido:**

- Navbar para a página home(a gente decide depois o que botar nela)
- Abaixo da barra de pesquisar, ter informações sobre o projeto
- Sugestões de busca na barra de pesquisar
- Uma logo e nome pro projeto(sugestão UnBusca)
- talvez algumas imagens na tela home
- Como vai aparecer as pesquisas ? 
    - Sugestões: Igual um biblioteca virtual, igual lista de filmes(parecido com sites de filmes(ex: myanimelist, megafilmes);
- Ordenar por data 
- Definir por categorias

### Reunião 13/09/2023 

**Tema central: Planejamento de release**

**O que foi discutido:**

- Backlogs da primeira release
- Para a primeira release, vamos deixar o back já integrado com o front(o front vai precisar apenas apresentar a página inicial com o motor de busca já funcionando.
    - como muito da proposta inicial já está sendo bem desenvolvida por um dos membros(que se dispôs para tal função), houve uma certa necessidade de adicionar outra funcionalidade no produto final. Funcionalidade essa a qual permite a criação de usuários no site( cadastro e login). essa função de usar o site possuindo uma conta permite que o usuário favorite os documentos que mais consulta, para ter uma maior facilidade ao reconsultá-los.
- Já para a segunda release, apesar de não definirmos exatamente os seus backlogs, foi sugerido a seguinte ideia: 
    - que aprimoramos o banco de dados referente aos usuários, e que aprimoramos o front da página inicial.

### Reunião 20/09/2023

**Tema central: Reunião com o monitor para esclarecer dúvidas**

**O que foi discutido:**

- Foi explicado como fazer as histórias de usuário (como justificar a existência de uma história de usuário)
- Foi explicado ao monitor o objetivo do projeto e as ferramentas as quais ele concordou com o uso delas
- Foi discutido sobre a utilização de branchs a fim de não “manchar” a main
- Foi esclarecida uma dúvida que tínhamos acerca do protótipo de baixa qualidade. Não havíamos pensado em adicionar uma barra lateral mostrando os documentos mais acessados, porém isso fugiu do escopo do nosso projeto

### Reunião 22/09/2023

**Tema central: Reunião com os integrantes para criar histórias de usuário**

**O que foi discutido:**

- Começamos a separar e criar as histórias de usuário;
- Separamos a equipe em 3: 2 de back, 3 de fullstack e 3 de front;
- Como a maioria do pessoal não pôde estar presente, não conseguimos criar todas as histórias de usuário;
- As histórias de usuário que passaram pelo crivo dos demais nesta reunião foram essas:
    - US01 - criação de página inicial
    - US02 - Acesso pelo usuário
    - US03 - Cadastro do usuário
    - US04 - formatação de usuário

### Reunião 25/09/2023

**Tema central: Reunião com os integrantes para criar histórias de usuário**

**O que foi discutido:**

- Houve a demonstração do funcionamento do método kanban com ScrumXP através do zenhub
- Definimos alguns objetivos e nomes de algumas histórias de usuário(ou estavam repetitivos, ou fugiam do escopo do projeto)
- Durante a reunião, fomos colocando as histórias de usuário previamente aceitas no zenhub
- Discutimos também sobre o layout da saída do site pela entrada de alguma frase/ palavra pelo o usuário. Ou seja, discutimos se mostraremos ou uma linha inteira, ou um parágrafo inteiro.
- Decidimos também a criação da página de usuários, de cadastro, de erro, de “esqueceu a senha?.
sugestão de período de sprint(1 semana e meia) ((depois mudamos isso para uma semana))

### Reunião 03/10/2023

**Tema central: Reunião de Sprint Planning**

**O que foi discutido:**

- Essa reunião consistiu em determinar quais pessoas iriam pegar qual história de usuário ou issue.
- No caso, o trio do front ficou responsável por fazer a criação da página inicial do site
- O trio de back(contendo 1 back e 2 fullstack) ficaram responsáveis pela conexão do back com front
- A dupla contendo um back e um front teve a responsabilidade de gerir e organizar melhor as pastas do github para a entrega do documento de visão

### Reunião 04/10/2023

**Tema central: Reunião de ultimato para as releases**

**O que foi discutido:**

- Ainda estávamos com dúvidas acerca do que entraria em cada release, quantas sprints seriam, e portanto em quanto tempo faríamos isso tudo.
- Conseguimos entrar em um consenso determinando que a primeira sprint representou o começo do semestre, quando ainda estavamos levantando todos os requisitos para a execução do projeto; a partir da segunda sprint, começamos a inserir as histórias de usuário como um todo. Ao final, concluímos que faríamos 2 releases, e faríamos isso em 7 sprints.

### Reunião 09/10/2023

**O que foi discutido:**

- Se as tarefas para aquela sprint foram feitas(ir pro trello e pedir pro pessoal mexer nos cards)--> o protótipo de alta fidelidade foi terminado, necessitando apenas de pequenas correções
- Falar q se houver a criação de algo, colocar ela na branch de sua respectiva parte(back de usuarios, back de motor de busca e back do front) e solicitar pull request.
- Designar tarefas mais adequadas para pedro e joao aos conhecimentos deles. → eles farão parte agora do back dos usuários (mari andre joao e o pedro)
- Ver com alguém do front se ele pode já ir tentando fazer a us de filtragem lá.
- Em qual linguagem fazer conexão com o back ( sqlx→rust ou nodejs→js )--> escolhemos o nodejs porque estamos mais familiarizados com js do que com rust
- Dar novas us's pro pessoal
demos baixa na US 8 → isso porque faremos a validação pelo google, logo não necessitaremos de cadastro.
dar baixa na us 11→ mesmo motivo da us08
atualizamos o miro:

### Reunião 16/10/2023

**O que foi discutido:**

- Ver se as US’s da sprint foram cumpridas
- Ver quem será o responsável por fazer o login autorização pelo google(combinar direito com a maioria do pessoal) mari, andré e pedro
- Criar US de conexão do back do motor de busca com o react(e alocar quem vai fazer isso) → mari e andré
- Fazer testes unitários e de integração do que até então temos ( React testing library sugestão) → arquivo separado pesquisar a extensão
- Cobrar o pessoal de atualizar o github com o que já se tem atualização
- Atualizar o doc de visão → não conseguimos decidir quem ficaria responsável por isso
- Ver se houve débito técnico e tentar ver a melhor sprint para resolver ele
- Distribuir novas issues pro pessoal
- Houve a necessidade de alterar as sprints

### Reunião 23/10/2023

**O que foi discutido:**

- Ver se podemos pegar documentos como circular conjunta, ata de reunião, despacho etc. do site da UnB. (são documentos importantes que agregariam os alunos) → vamos decidir durante a semana
- Ver se conseguimos concluir o doc de escopo→ foi concluido
- Ver se o pessoal terminou as tarefas designadas→ terminaram
- Organizar as prox us pro pessoal→organizamos

### Reunião  30/10/2023

**O que foi discutido:**

- Falar do prazo do doc de arquitetura(até quarta)
- Treinar a apresentação de quarta-feira(ver o doc de orientação de apresentação) 
    - ver com q pc iremos apresentar)(pedro, mari)
    - explicar como foi feito o motor de busca(thomas)
    - mostrar documento de escopo(mari, renan)
    - mostrar documento de arquitetura(o que foi feita até então) (pedro, mari)
- Ver se foi feita a página de erro e falar que houve erro ao colocar as US na sprint backlog(a US07-Entrar pela minha conta na página deveria estar na sprint do dia 30/10 a 6/11) 
- Cobrar sobre o levantamento dos critérios de aceitação das US’s
- Falar que foi feita o merge da US05 para a develop
- Falar para o pessoal que a partir de agora, não deveremos mexer na branch develop, e sim devemos Criar uma branch da US seguindo esse seguinte padrão:
    - US(numeroDaUS)-(NomeDaUs)
    - Exemplo para a US05 → US05-MostrarOsDadosDePesquisa
- Estamos fazendo isso por conta da organização e porque será mais adequado para evitar conflitos entre branch’s

OBS: Uma orientação extremamente importante é que na hora de criar uma branch de US, ela deve ser criada A PARTIR DA DEVELOP

- Decidir quais sites iremos adicionar no motor de busca → pedro
- Tirar dúvida com o thomas sobre o erro que está rolando(curl) pro pessoal rodar o back, e tentar rodar novamente o back

### Reunião 6/11/2023 

**O que foi discutido:**

- US07 Fazer login pela conta do google foi concluida? → débito técnico: Após inserir suas credenciais no OAuth google, o usuário deverá ser redirecionado para a tela inicial em, no maximo, 20 segundos (dani, mari, pedro)
US08 Armazenar dados de usuário foi concluida? --> débito técnico (andré, mari e pedro)

- US09 Filtrar dados de pesquisa concluída? → débito técnico
(renan, joão)
- Corrigir docs de visão e escopo
    - Cada um corrigir o que fez
- Doc de arquitetura ficou para correção na sprint 8
- Postergar US06?? → mudar a sprint dessa US colocar como a ultima da release
- US’s riscadas
- Já usar o mkdocs? → perguntar pro monitorrr
- Definir as US da sprint 07
- TAREFAS DESSA SPRINT 7 (06/11 - 13/11):
    - US07 (Débito)
    - US08 (Débito)
    - US09 
    - Doc de Visão
    - Doc de Escopo

### Reunião 13/11/2023

**O que foi discutido:**

- TAREFAS DESSA SPRINT 7 (06/11 - 13/11) FORAM TERMINADAS?  
- US07 (Débito=Após inserir suas credenciais no OAuth google, o usuário deverá ser redirecionado para a tela inicial em, no maximo, 20 segundos (dani, mari, pedro))
- US08 (Débito=Não estamos conseguindo pegar os dados do google e passar para o back de usuários)
- US09 filtro (Débito= filtro de normativo e deliberativo)
- Atualização do Doc de Visão segundo correções
- Atualização do Doc de Escopo segundo correções
- Capacitação de responsividade(dani, renan, felipe)domingo(14h00)
- Fazer mkdocs (qualquer coisa perguntar para o monitor) (Danielle) procurar um conversor de word pra md e passar pro git pages

### Reunião 20/11/2023 

**O que foi discutido:**

- TAREFAS DESSA SPRINT 8 (13/11 - 19/11) FORAM TERMINADAS?  
    - us06 foi terminada? (armazenar dados de usuário no banco de dados)
    - Todos conseguiram corrigir suas próprias partes dos docs(visão e escopo)?
    - Us09(filtrar docs) → debito tecnico(deixar como debito tecnico)?(normativo deliberativo)
    - Armazenar mais sites no motor de busca? se sim, fazer isso urgentemente( TEMOS 2 SEMANAS RESTANDO DE DESENVOLVIMENTO) →pedro? → conversar com o thomas dps sobre isso
    - Gestão do repositório (a qual poderia estar mais organizada) → (mari e pedro organizar repositório)
- Critérios de aceitação que serão importante nós discutirmos sobre a US8-FAVORITAR DOCUMENTOS:
    - Criar uma área do site(uma página) restrita a somente quem possui uma conta google logada no site (página de usuário) → equipe do front
    - Possuir um botão nos documentos que possibilite que os usuários adicionem aquele documento como favorito (fazer esse botão somente aparecer caso a pessoa tenha logado no site)
    - Saber como armazenar no banco de dados de usuário os documentos pertencentes aos usuários.(se vai ser por nome, por link)
    - Banco de dados de usuário → user, doc(id, nome, link)
    - Como iremos acessar esses documentos na página de usuários?
- Sugestões de responsabilidades para essa sprint:
- Pessoal do front → renan, Dani e felipe ( ficar encarregados de criar a página de usuário e fazer apenas a modificação na página de pesquisa, colocando um botão la de adicionar o documento nos favoritos) exemplo abaixo:

- Pessoal do back → thomas (adicionar mais docs no motor de busca)
- Pessoal do fullstack → mari, andré, pedro, joão (extra: renan) (manipular a adição e deleção de documentos favoritos no banco de dados) → será necessário trabalhar com o pessoal do front)
- Recomendações para a sprint dps dessa:
    - Ferminar de passar os docs de visão, escopo e arquitetura para markdown e colocar no repositório de mds (Danielle responsável)
    - Fazer testes unitários e de integração nos arquivos td(precisaremos dividir isso bem)

