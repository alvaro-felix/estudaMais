# Arquitetura do Sistema – Estuda+

## Visão Geral

O Estuda+ será desenvolvido como um sistema web baseado em arquitetura cliente-servidor, com separação entre front-end, back-end e banco de dados.

Essa abordagem permite melhor organização do código, facilita manutenção, testes e evolução do sistema ao longo do tempo.

---

## Modelo Arquitetural

A arquitetura do sistema será composta por três camadas principais:

- Front-end (Interface do usuário)
- Back-end/API (Regras de negócio)
- Banco de dados (Persistência)

O front-end será responsável pela interação com o usuário.  
O back-end processará regras de negócio e comunicação com o banco de dados.  
O banco de dados armazenará informações persistentes do sistema.

---

## Tecnologias Escolhidas

### Front-end
HTML, CSS e JavaScript

### Back-end
Node.js com Express

### Banco de dados
SQLite

### Versionamento
Git e GitHub

### Gerenciamento do projeto
GitHub Projects

---

## Justificativa das Tecnologias

As tecnologias escolhidas priorizam simplicidade, facilidade de implementação e adequação ao escopo acadêmico do projeto.

O Node.js com Express permite a criação de APIs REST de forma simples e eficiente.  
O SQLite elimina a necessidade de configuração complexa de banco de dados.  
O uso de tecnologias web básicas garante acessibilidade e facilidade de desenvolvimento.

---

## C4 Model

O sistema será representado utilizando o modelo C4, composto por:

- Diagrama de Contexto
- Diagrama de Containers
- Diagrama de Componentes

---

## Diagrama de Contexto

```plantuml
@startuml
!include <C4/C4_Context>

title Diagrama de Contexto - Estuda+

Person(aluno, "Aluno", "Organiza e acompanha seus estudos.")
Person(admin, "Administrador", "Gerencia o sistema.")

System(estudamais, "Estuda+", "Sistema de gestão de estudos.")

Rel(aluno, estudamais, "Utiliza")
Rel(admin, estudamais, "Administra")

@enduml
Diagrama de Containers
@startuml
!include <C4/C4_Container>

title Diagrama de Containers - Estuda+

Person(aluno, "Aluno")
Person(admin, "Administrador")

System_Boundary(estudamais, "Estuda+") {

    Container(frontend, "Front-end Web", "HTML, CSS, JS", "Interface do sistema.")
    Container(api, "Back-end/API", "Node.js + Express", "Processa regras de negócio.")
    ContainerDb(db, "Banco de Dados", "SQLite", "Armazena dados.")

}

Rel(aluno, frontend, "Utiliza")
Rel(admin, frontend, "Utiliza")
Rel(frontend, api, "Requisições HTTP")
Rel(api, db, "Consulta e grava dados")

@enduml
Diagrama de Componentes
@startuml
!include <C4/C4_Component>

title Componentes do Back-end - Estuda+

Container_Boundary(api, "Back-end/API") {

    Component(auth, "Autenticação", "Login e cadastro")
    Component(user, "Usuários", "Gerenciamento de usuários")
    Component(disciplina, "Disciplinas", "Gerenciamento de disciplinas")
    Component(meta, "Metas", "Controle de metas")
    Component(sessao, "Sessões de Estudo", "Registro de estudos")
    Component(progresso, "Progresso", "Cálculo de desempenho")

}

ContainerDb(db, "Banco de Dados", "SQLite")

Rel(auth, db, "Valida dados")
Rel(user, db, "Gerencia dados")
Rel(disciplina, db, "Armazena dados")
Rel(meta, db, "Armazena dados")
Rel(sessao, db, "Armazena dados")
Rel(progresso, db, "Consulta dados")

@enduml
Decisões Arquiteturais
Separação entre front-end, back-end e banco de dados
Uso de API REST
Organização modular no back-end
Centralização da lógica de negócio no servidor

Benefícios
Melhor organização do sistema
Facilidade de manutenção
Escalabilidade futura
Clareza na divisão de responsabilidades
