# Plano de Testes — Estuda+

## 1. Objetivo

Este documento apresenta o planejamento de testes do sistema Estuda+, desenvolvido na disciplina de Engenharia de Software. O objetivo dos testes é verificar se as funcionalidades implementadas no sistema estão funcionando corretamente, garantindo maior confiabilidade, estabilidade e qualidade da aplicação.

---

## 2. Estratégia de Testes

Os testes realizados neste projeto possuem caráter funcional e foram elaborados com base nos casos de uso definidos nas etapas anteriores do projeto.

Os cenários de teste contemplam:

- fluxos válidos;
- entradas inválidas;
- validações de formulário;
- comportamento esperado do sistema;
- persistência de dados.

---

## 3. Casos de Uso

Os testes foram organizados com base nos seguintes casos de uso:

- UC01 — Cadastrar usuário
- UC02 — Realizar login
- UC03 — Cadastrar disciplina
- UC04 — Listar disciplinas
- UC05 — Registrar sessão de estudo
- UC06 — Listar sessões de estudo

---

# UC01 — Cadastrar usuário

## CT01 — Cadastro válido

### Objetivo
Verificar se o sistema permite cadastrar um usuário válido.

### Entrada
Nome, e-mail e senha válidos.

### Resultado Esperado
Usuário cadastrado com sucesso.

---

## CT02 — Cadastro com campos vazios

### Objetivo
Verificar validação de campos obrigatórios.

### Entrada
Campos vazios.

### Resultado Esperado
Sistema deve impedir cadastro.

---

## CT03 — Cadastro com e-mail duplicado

### Objetivo
Verificar tratamento de e-mail já existente.

### Entrada
E-mail já cadastrado.

### Resultado Esperado
Sistema deve exibir erro de usuário já existente.

---

# UC02 — Realizar login

## CT04 — Login válido

### Objetivo
Verificar autenticação correta.

### Entrada
E-mail e senha válidos.

### Resultado Esperado
Usuário acessa dashboard.

---

## CT05 — Senha incorreta

### Objetivo
Verificar tratamento de senha inválida.

### Entrada
Senha incorreta.

### Resultado Esperado
Sistema deve negar acesso.

---

## CT06 — Usuário inexistente

### Objetivo
Verificar login com usuário não cadastrado.

### Entrada
E-mail inexistente.

### Resultado Esperado
Sistema deve impedir login.

---

# UC03 — Cadastrar disciplina

## CT07 — Cadastro válido de disciplina

### Objetivo
Verificar cadastro correto de disciplina.

### Entrada
Nome válido de disciplina.

### Resultado Esperado
Disciplina cadastrada com sucesso.

---

## CT08 — Cadastro com nome vazio

### Objetivo
Validar campo obrigatório.

### Entrada
Campo vazio.

### Resultado Esperado
Sistema deve impedir cadastro.

---

## CT09 — Cadastro duplicado

### Objetivo
Verificar comportamento para disciplinas repetidas.

### Entrada
Disciplina já cadastrada.

### Resultado Esperado
Sistema deve tratar duplicidade adequadamente.

---

# UC04 — Listar disciplinas

## CT10 — Listagem correta

### Objetivo
Verificar exibição das disciplinas cadastradas.

### Entrada
Usuário com disciplinas cadastradas.

### Resultado Esperado
Sistema exibe lista corretamente.

---

## CT11 — Usuário sem disciplinas

### Objetivo
Verificar comportamento sem registros.

### Entrada
Usuário sem disciplinas.

### Resultado Esperado
Sistema exibe lista vazia.

---

## CT12 — Atualização após cadastro

### Objetivo
Verificar atualização dinâmica da lista.

### Entrada
Cadastrar nova disciplina.

### Resultado Esperado
Nova disciplina aparece na listagem.

---

# UC05 — Registrar sessão de estudo

## CT13 — Registro válido

### Objetivo
Verificar registro correto de sessão.

### Entrada
Dados válidos.

### Resultado Esperado
Sessão cadastrada com sucesso.

---

## CT14 — Campos obrigatórios vazios

### Objetivo
Verificar validações.

### Entrada
Campos vazios.

### Resultado Esperado
Sistema impede registro.

---

## CT15 — Duração inválida

### Objetivo
Validar duração da sessão.

### Entrada
Duração negativa ou zero.

### Resultado Esperado
Sistema deve impedir cadastro.

---

# UC06 — Listar sessões de estudo

## CT16 — Listagem correta

### Objetivo
Verificar exibição das sessões.

### Entrada
Sessões cadastradas.

### Resultado Esperado
Sistema exibe sessões corretamente.

---

## CT17 — Usuário sem sessões

### Objetivo
Verificar comportamento sem registros.

### Entrada
Nenhuma sessão cadastrada.

### Resultado Esperado
Sistema exibe lista vazia.

---

## CT18 — Atualização após novo registro

### Objetivo
Verificar atualização da listagem.

### Entrada
Cadastrar nova sessão.

### Resultado Esperado
Nova sessão aparece corretamente.

---

## 4. Considerações Finais

Os testes planejados possuem como objetivo validar as funcionalidades essenciais do MVP do sistema Estuda+, garantindo maior confiabilidade para as próximas etapas de evolução do projeto.

---

## 5. Execução dos Testes – TP5

Nesta etapa, os casos de teste planejados no TP4 foram executados manualmente sobre o MVP funcional do sistema Estuda+. A execução teve como objetivo verificar se as funcionalidades principais permanecem funcionando corretamente após as melhorias realizadas no sistema.

| Código | Caso de Teste | Resultado Esperado | Resultado Obtido | Status |
|---|---|---|---|---|
| CT01 | Cadastro válido | Usuário cadastrado com sucesso | Usuário cadastrado com sucesso | Aprovado |
| CT02 | Cadastro com campos vazios | Sistema deve impedir cadastro | Sistema exibiu mensagem solicitando preenchimento dos campos | Aprovado |
| CT03 | Cadastro com e-mail duplicado | Sistema deve exibir erro de usuário já existente | Sistema exibiu erro ao tentar cadastrar e-mail já utilizado | Aprovado |
| CT04 | Login válido | Usuário acessa dashboard | Usuário acessou o dashboard corretamente | Aprovado |
| CT05 | Senha incorreta | Sistema deve negar acesso | Sistema exibiu erro de e-mail ou senha inválidos | Aprovado |
| CT06 | Usuário inexistente | Sistema deve impedir login | Sistema exibiu erro de e-mail ou senha inválidos | Aprovado |
| CT07 | Cadastro válido de disciplina | Disciplina cadastrada com sucesso | Disciplina cadastrada e exibida na lista | Aprovado |
| CT08 | Cadastro com nome vazio | Sistema deve impedir cadastro | Sistema exibiu mensagem solicitando o nome da disciplina | Aprovado |
| CT09 | Cadastro duplicado | Sistema deve tratar duplicidade adequadamente | Sistema permitiu cadastro duplicado de disciplina | Reprovado |
| CT10 | Listagem correta de disciplinas | Sistema exibe lista corretamente | Sistema exibiu as disciplinas cadastradas | Aprovado |
| CT11 | Usuário sem disciplinas | Sistema exibe lista vazia | Sistema exibiu mensagem de ausência de disciplinas | Aprovado |
| CT12 | Atualização após cadastro | Nova disciplina aparece na listagem | Nova disciplina apareceu após o cadastro | Aprovado |
| CT13 | Registro válido de sessão | Sessão cadastrada com sucesso | Sessão cadastrada e exibida na listagem | Aprovado |
| CT14 | Campos obrigatórios vazios | Sistema impede registro | Sistema exibiu mensagem solicitando dados obrigatórios | Aprovado |
| CT15 | Duração inválida | Sistema deve impedir cadastro | Sistema impediu duração igual ou menor que zero | Aprovado |
| CT16 | Listagem correta de sessões | Sistema exibe sessões corretamente | Sistema exibiu as sessões cadastradas | Aprovado |
| CT17 | Usuário sem sessões | Sistema exibe lista vazia | Sistema exibiu mensagem de ausência de sessões cadastradas | Aprovado |
| CT18 | Atualização após novo registro | Nova sessão aparece corretamente | Nova sessão apareceu na listagem após o cadastro | Aprovado |

---

## 6. Análise dos Resultados

A execução dos testes demonstrou que a maior parte das funcionalidades essenciais do MVP está funcionando corretamente. Os fluxos de cadastro de usuário, login, cadastro de disciplinas, registro de sessões de estudo e listagem de informações foram validados com sucesso.

Durante a execução dos testes, foi identificado que o sistema ainda permite o cadastro duplicado de disciplinas, o que resultou na reprovação do caso de teste CT09. Esse comportamento será registrado como ponto de melhoria para as próximas sprints.

De forma geral, os testes confirmam que o sistema possui um fluxo funcional mínimo estável, mas ainda apresenta oportunidades de evolução relacionadas à validação de duplicidade e refinamento das regras de negócio.

---

## 7. Próximas Ações

Com base nos resultados obtidos, as próximas ações previstas são:

- corrigir o comportamento de cadastro duplicado de disciplinas;
- melhorar as regras de validação no backend;
- ampliar os testes funcionais;
- evoluir o dashboard do usuário;
- implementar funcionalidades previstas no backlog, como metas de estudo e cálculo de progresso.