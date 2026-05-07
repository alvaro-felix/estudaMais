# estudaMais

## Sobre o Projeto

O Estuda+ é um sistema web desenvolvido com foco no **ODS 4 – Educação de Qualidade**, cujo objetivo é auxiliar estudantes universitários na organização de seus estudos, definição de metas e acompanhamento de desempenho ao longo do tempo.

---

## Objetivo

Desenvolver uma aplicação que permita ao aluno gerenciar sua rotina de estudos de forma ativa, promovendo maior consistência, organização e melhoria no desempenho acadêmico.

---

## Problema

Muitos estudantes enfrentam dificuldades para manter uma rotina de estudos consistente, definir prioridades e acompanhar sua evolução acadêmica. As ferramentas tradicionais, como agendas e listas de tarefas, são passivas e não oferecem suporte efetivo para análise de desempenho ou acompanhamento contínuo.

---

## Solução Proposta

O Estuda+ propõe uma abordagem ativa de acompanhamento de estudos, permitindo que o usuário:

- cadastre disciplinas  
- defina metas de estudo  
- registre sessões de estudo  
- visualize seu progresso  
- acompanhe histórico de desempenho  
- receba feedback sobre sua evolução  

---

## ODS Relacionado

**ODS 4 – Educação de Qualidade**

---

## Tipo de Sistema

Sistema web composto por:

- Front-end  
- Back-end  
- Banco de dados  

---

## Atores do Sistema

- Aluno  
- Administrador  

---

## Principais Funcionalidades

- Cadastro de usuário  
- Login  
- Cadastro de disciplinas  
- Definição de metas de estudo  
- Registro de sessões de estudo  
- Cálculo de progresso  
- Visualização de histórico  
- Feedback de desempenho  
- Gerenciamento de usuários  

---

## Requisitos

Os requisitos completos do sistema estão documentados em:

📎 `docs/requisitos.md`

---

## Modelagem

O sistema foi modelado utilizando **Diagrama de Casos de Uso UML**, contemplando:

- Associação  
- Include  
- Extend  
- Generalização  

Acesse:
- `docs/casos-de-uso.md`
- `diagrams/diagrama1-casos-de-uso.png`

---

## Arquitetura do Sistema

A arquitetura foi definida utilizando o modelo **C4**, permitindo visualizar o sistema em diferentes níveis de abstração.

### Diagramas desenvolvidos:
- Diagrama de Contexto  
- Diagrama de Containers  
- Diagrama de Componentes  

Acesse:
- `docs/arquitetura.md`
- `diagrams/c4-contexto.png`
- `diagrams/c4-containers.png`
- `diagrams/c4-componentes.png`

---

## Tecnologias

- Front-end: HTML, CSS, JavaScript  
- Back-end: Node.js + Express  
- Banco de dados: SQLite  

---

## Metodologia

O projeto está sendo desenvolvido utilizando **Scrum**, com organização das tarefas por meio do **GitHub Projects**, incluindo backlog, planejamento e acompanhamento das atividades.

---

## Estrutura do Projeto


estudamais/
│
├── README.md
├── docs/
├── diagrams/
├── frontend/
├── backend/
├── Videos/


---

## Gerenciamento do Projeto

As atividades do projeto são organizadas utilizando GitHub Projects, com estrutura baseada em:

- Backlog  
- To Do  
- In Progress  
- Done  

---

## Status do Projeto

- TP1: Concluído  
- TP2: Concluído 
 
## TP3 – Sprint de Desenvolvimento

Nesta etapa foi desenvolvida a primeira versão funcional do sistema Estuda+, conforme o planejamento definido nas etapas anteriores.

O entregável atual contempla um MVP funcional com integração entre front-end, back-end e banco de dados.

### Funcionalidades implementadas

- Cadastro de usuário
- Login de usuário
- Cadastro de disciplinas
- Listagem de disciplinas
- Registro de sessões de estudo
- Listagem de sessões cadastradas
- Integração entre front-end e back-end
- Persistência de dados com SQLite

### Estrutura implementada

- `Frontend/`: telas do sistema e integração com a API
- `Backend/`: servidor Node.js, rotas da API e conexão com banco SQLite
- `docs/`: documentação do projeto
- `diagrams/`: diagramas do sistema
- `videos/`: vídeo da entrega

### Status da entrega

O sistema já possui um fluxo funcional mínimo, permitindo que o usuário crie uma conta, realize login, cadastre disciplinas e registre sessões de estudo.

As funcionalidades de metas, cálculo de progresso, feedback de desempenho e painel administrativo permanecem no backlog para evolução nas próximas sprints.

## Autoria

Projeto desenvolvido para a disciplina de Engenharia de Software.

