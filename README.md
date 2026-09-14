# Behind the Bug

> Investigue o que aconteceu. Entenda por quê. Corrija o que importa.

**Behind the Bug** é um projeto de estudo e portfólio voltado à investigação de problemas de Front-end.

A proposta é analisar um comportamento a partir de **sintomas e evidências**, identificar a causa raiz e registrar a decisão de correção — sem pular diretamente para uma solução.

O projeto simula uma abordagem de investigação técnica baseada em:

* reprodução do problema;
* observação do comportamento;
* coleta de evidências;
* análise do fluxo da aplicação;
* identificação da causa raiz;
* decisão de correção;
* validação do resultado.

## Objetivo

Demonstrar como problemas comuns de Front-end podem ser investigados de forma estruturada, transformando um comportamento aparentemente simples em uma análise técnica verificável.

O foco não está apenas no código final, mas principalmente no **raciocínio utilizado para chegar até ele**.

## Casos investigados

### 001 · Requisições duplicadas à API

Investigação de chamadas repetidas a uma API e análise do fluxo de dados responsável pelo comportamento.

**Áreas:** React · Network · Performance · Data Fetching

---

### 002 · Estado vazio sem tratamento

Análise de uma interface que não representa adequadamente o estado em que uma consulta retorna sem dados.

**Áreas:** React · API · UI State · UX

---

### 003 · Interface sem feedback durante uma operação

Investigação de uma operação assíncrona em que o estado intermediário não é representado de forma clara na interface.

**Áreas:** React · Async · UI State

## Como funciona

Cada investigação segue uma sequência semelhante:

```text
Sintoma
   ↓
Evidência
   ↓
Investigação
   ↓
Causa raiz
   ↓
Correção
   ↓
Resultado
```

A intenção é separar **o que foi observado** daquilo que foi concluído durante a investigação.

## Nova investigação

O projeto também possui uma área para iniciar uma nova investigação.

É possível registrar:

* título do problema;
* URL da aplicação;
* comportamento observado;
* evidências já disponíveis.

A partir dessas informações, a interface cria um ponto inicial para organizar a investigação.

> A URL registrada atualmente funciona como contexto da investigação. O projeto não afirma realizar uma análise automática da aplicação.

## Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Geist**

## Conceitos praticados

O projeto foi construído para explorar conceitos presentes no desenvolvimento Front-end moderno, como:

* gerenciamento de estados de interface;
* operações assíncronas;
* data fetching;
* comportamento de componentes React;
* análise de requisições;
* estados de loading, success, error e empty;
* investigação orientada por evidências;
* organização de componentes;
* acessibilidade e semântica;
* arquitetura de interfaces.

## Estrutura

```text
app/
├── cases/
│   ├── 001/
│   ├── 002/
│   └── 003/
│
├── investigar/
│
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── InvestigationFlow
├── NetworkEvidence
├── RootCause
├── CorrectionDecision
├── ResultSummary
├── StatePanel
├── AsyncStateEvidence
├── AsyncStateInvestigation
├── AsyncRootCause
├── AsyncStateCorrected
└── AsyncResult
```

## Desenvolvimento

Clone o repositório e instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## Validação

Antes de publicar alterações:

```bash
npm run lint
npm run build
```

## Status

Projeto concluído como parte do portfólio de desenvolvimento Front-end.

O escopo atual contempla **três investigações técnicas**, além da área para iniciar novos casos.

## Autoria

Desenvolvido por **Manoela Harrison** como projeto de portfólio e estudo de investigação técnica em Front-end.
