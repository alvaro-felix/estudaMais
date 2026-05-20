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