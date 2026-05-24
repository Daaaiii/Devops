# Projeto DevOps — Fase 1: Configuração e Automação Inicial
### Documentação de Planejamento

---

**Aluna:** Daiane Deponti  
**E-mail:** dainha85@gmail.com  
**Instituição:** PUCRS — Pontifícia Universidade Católica do Rio Grande do Sul  
**Disciplina:** DevOps na Prática  
**Entrega:** Fase 1 — Documentação de Planejamento  
**Data:** Maio de 2026

---

## Sumário

1. [Descrição do Projeto](#1-descrição-do-projeto)
2. [Objetivos do Projeto](#2-objetivos-do-projeto)
3. [Requisitos do Projeto](#3-requisitos-do-projeto)
4. [Plano de Integração Contínua](#4-plano-de-integração-contínua)
5. [Cronograma Previsto](#5-cronograma-previsto)
6. [Referências](#6-referências)

---

## 1. Descrição do Projeto

### 1.1 Visão Geral

Este projeto tem como finalidade implementar um pipeline completo de DevOps para uma aplicação web, cobrindo desde a integração contínua até a entrega contínua em ambiente de nuvem. A aplicação alvo é uma API REST desenvolvida em Node.js (ou Python/Flask), projetada para fins didáticos e servindo de base para a aplicação das práticas DevOps ensinadas na disciplina.

O projeto é estruturado em duas fases:

- **Fase 1** — Configuração e Automação Inicial: abrange a configuração do repositório, o pipeline de Integração Contínua (CI) com GitHub Actions e os scripts de Infraestrutura como Código (IaC) utilizando AWS CloudFormation.
- **Fase 2** — Entrega Contínua, Monitoramento e Segurança: expandirá o pipeline para CD, containerização com Docker, monitoramento e segurança.

> 🔗 **Repositório do Projeto:** *(link a ser inserido após a criação do repositório GitHub)*

### 1.2 Contexto e Motivação

O mercado de desenvolvimento de software demanda cada vez mais profissionais capazes de integrar práticas de desenvolvimento e operações de forma ágil e automatizada. A cultura DevOps surge como resposta a essa demanda, eliminando silos entre equipes, acelerando entregas e aumentando a confiabilidade dos sistemas em produção.

Este projeto permite vivenciar na prática os conceitos teóricos da disciplina: automatização de builds, validação contínua por testes, provisionamento de infraestrutura por código e deploy reproduzível. Ao final, o resultado será um pipeline real e funcional hospedado no GitHub e integrado à AWS.

### 1.3 Tecnologias Utilizadas

| Categoria | Tecnologia / Ferramenta | Finalidade |
|-----------|------------------------|------------|
| Linguagem | Node.js (JavaScript) ou Python | Desenvolvimento da aplicação |
| Controle de Versão | Git + GitHub | Repositório de código e colaboração |
| CI/CD | GitHub Actions | Automação do pipeline |
| IaC | AWS CloudFormation | Provisionamento de infraestrutura |
| Nuvem | Amazon Web Services (AWS) | Hospedagem e serviços gerenciados |
| Containers | Docker *(Fase 2)* | Containerização da aplicação |
| Testes | Jest / Pytest | Testes unitários e de integração |
| Monitoramento | AWS CloudWatch *(Fase 2)* | Logs e métricas |

---

## 2. Objetivos do Projeto

### 2.1 Objetivo Geral

Implementar um pipeline DevOps completo e funcional — desde o commit do código até o deploy automatizado em ambiente de nuvem — aplicando as melhores práticas de Integração Contínua, Entrega Contínua, Infraestrutura como Código e monitoramento.

### 2.2 Objetivos Específicos

| ID | Objetivo | Descrição |
|----|----------|-----------|
| OBJ-01 | Repositório CI | Configurar repositório no GitHub com boas práticas: branches, commit semântico e proteções de branch. |
| OBJ-02 | Pipeline CI | Implementar pipeline de CI com GitHub Actions para build automático, lint e execução de testes a cada push/PR. |
| OBJ-03 | Infraestrutura como Código | Desenvolver templates AWS CloudFormation para provisionamento da infraestrutura necessária (EC2, S3, IAM, etc.). |
| OBJ-04 | Entrega Contínua *(Fase 2)* | Expandir o pipeline para CD, automatizando o deploy em ambiente AWS após a aprovação dos testes. |
| OBJ-05 | Containerização *(Fase 2)* | Containerizar a aplicação com Docker e criar scripts de deploy baseados em containers. |
| OBJ-06 | Monitoramento *(Fase 2)* | Configurar monitoramento e logging com AWS CloudWatch para observabilidade em produção. |
| OBJ-07 | Documentação | Documentar todas as etapas, decisões técnicas e resultados obtidos ao longo do projeto. |

### 2.3 Escopo da Fase 1

**Incluído no escopo:**

- Documentação de planejamento (este documento)
- Configuração do repositório GitHub com estrutura de branches e CI
- Implementação do pipeline de CI usando GitHub Actions
- Desenvolvimento dos scripts de Infraestrutura como Código com AWS CloudFormation

**Fora do escopo (Fase 2):**

- Entrega Contínua (CD) e deploy automatizado
- Containerização com Docker
- Monitoramento, logging e segurança avançada

---

## 3. Requisitos do Projeto

### 3.1 Requisitos Funcionais

| ID | Requisito Funcional |
|----|---------------------|
| RF-01 | O sistema deve possuir um repositório de código no GitHub com branch principal protegida. |
| RF-02 | O pipeline de CI deve ser acionado automaticamente a cada push na branch `main` e em pull requests. |
| RF-03 | O pipeline deve executar a instalação de dependências, lint e testes unitários automaticamente. |
| RF-04 | O pipeline deve notificar o resultado do build (sucesso ou falha) no GitHub. |
| RF-05 | Os templates CloudFormation devem provisionar pelo menos uma instância EC2 e um bucket S3 na AWS. |
| RF-06 | O template CloudFormation deve ser parametrizável (ambiente: dev, staging, prod). |
| RF-07 | A aplicação deve expor ao menos um endpoint HTTP funcional e testado. |
| RF-08 | O repositório deve conter README com instruções de execução e link para a documentação. |

### 3.2 Requisitos Não Funcionais

| ID | Requisito Não Funcional |
|----|------------------------|
| RNF-01 | O pipeline de CI deve ser concluído em no máximo 10 minutos. |
| RNF-02 | O código deve seguir padrões de qualidade verificados por linter (ESLint / Flake8). |
| RNF-03 | A cobertura de testes unitários deve ser de no mínimo 60%. |
| RNF-04 | Os templates CloudFormation devem ser versionados junto ao código no repositório. |
| RNF-05 | As credenciais AWS nunca devem ser expostas no código; devem usar GitHub Secrets. |
| RNF-06 | O pipeline deve ser reproduzível: o mesmo commit deve gerar sempre o mesmo resultado. |
| RNF-07 | O repositório deve ser público e acessível para avaliação do professor. |

### 3.3 Requisitos de Infraestrutura

A infraestrutura provisionada pelo AWS CloudFormation na Fase 1 deve contemplar:

| Recurso AWS | Descrição |
|-------------|-----------|
| Amazon EC2 | Instância `t2.micro` (free tier) para hospedar a aplicação. |
| Amazon S3 | Bucket para armazenar artefatos de build e logs do pipeline. |
| IAM Role / Policy | Permissões mínimas necessárias para execução segura (princípio do menor privilégio). |
| Security Group | Regras de firewall para expor apenas as portas necessárias (80, 443, 22 restrito). |
| CloudFormation Stack | Stack parametrizável com variáveis de ambiente (dev/staging/prod). |

### 3.4 Requisitos de Segurança

- Nenhuma credencial ou chave secreta deve estar escrita diretamente no código-fonte.
- Todas as credenciais AWS devem ser armazenadas como GitHub Secrets e acessadas via variáveis de ambiente no workflow.
- O bucket S3 não deve ser público; acesso controlado por IAM.
- A instância EC2 deve ter acesso SSH restrito a IPs específicos ou via AWS Systems Manager.
- Dependências do projeto devem ser verificadas quanto a vulnerabilidades conhecidas (`npm audit` / `pip audit`).

---

## 4. Plano de Integração Contínua

### 4.1 Estratégia de Branches

O repositório seguirá o modelo GitFlow simplificado:

| Branch | Finalidade |
|--------|------------|
| `main` | Branch principal protegida; reflete o estado estável e revisado do projeto. |
| `develop` | Branch de integração das features em desenvolvimento. |
| `feature/*` | Branches de funcionalidades individuais, originadas de `develop`. |
| `hotfix/*` | Correções urgentes aplicadas diretamente na `main`. |

> ⚠️ Pull Requests para `main` exigirão: aprovação de pelo menos 1 reviewer + pipeline CI passando com sucesso.

### 4.2 Etapas do Pipeline CI

```
Trigger (push / PR)
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│                  GitHub Actions Workflow                  │
│                                                          │
│  1. Checkout          → Clona o repositório              │
│  2. Setup Ambiente    → Node.js / Python na versão certa │
│  3. Instalar Deps     → npm install / pip install        │
│  4. Lint              → ESLint / Flake8                  │
│  5. Testes Unitários  → Jest / Pytest + cobertura        │
│  6. Build             → Gera artefato de distribuição    │
│  7. Auditoria         → npm audit / pip audit            │
│  8. Notificação       → Status no GitHub PR/commit       │
└─────────────────────────────────────────────────────────┘
```

| Etapa | Descrição |
|-------|-----------|
| 1. Checkout | Clona o repositório e prepara o ambiente no runner do GitHub Actions. |
| 2. Setup do Ambiente | Instala a versão correta do Node.js ou Python conforme especificado no workflow. |
| 3. Instalação de Dependências | Executa `npm install` ou `pip install -r requirements.txt`. |
| 4. Lint | Verifica qualidade e padronização do código com ESLint / Flake8. |
| 5. Testes Unitários | Executa suite de testes com Jest / Pytest e gera relatório de cobertura. |
| 6. Build | Gera o artefato de distribuição da aplicação pronto para deploy. |
| 7. Verificação de Segurança | Executa `npm audit` / `pip audit` para identificar vulnerabilidades. |
| 8. Notificação | GitHub Actions reporta sucesso ou falha no Pull Request. |

### 4.3 Gatilhos do Pipeline

- Push para as branches `main` e `develop`
- Abertura ou atualização de Pull Request direcionado para `main`
- Execução manual via `workflow_dispatch` (botão no GitHub Actions)

### 4.4 Especificação da Infraestrutura (CloudFormation)

A infraestrutura será inteiramente definida como código (IaC) usando AWS CloudFormation, garantindo rastreabilidade, reprodutibilidade e consistência entre ambientes. Os templates serão organizados em:

```
infrastructure/
├── main.yaml           # Stack raiz (nested stacks)
├── network.yaml        # VPC, subnets, Internet Gateway
├── compute.yaml        # EC2, Security Groups, IAM Role
└── storage.yaml        # Bucket S3 para artefatos e logs
```

O deploy dos stacks poderá ser executado manualmente via AWS CLI:

```bash
aws cloudformation deploy \
  --template-file infrastructure/main.yaml \
  --stack-name devops-projeto \
  --parameter-overrides Environment=dev \
  --capabilities CAPABILITY_IAM
```

Na Fase 2, esse deploy será automatizado pelo pipeline como parte do CD.

---

## 5. Cronograma Previsto

| Semana | Atividade | Entregável |
|--------|-----------|------------|
| Semana 1 | Criação do repositório e estrutura inicial da aplicação | Repositório público no GitHub |
| Semana 2 | Implementação do pipeline de CI (GitHub Actions) | Workflow CI funcional |
| Semana 3 | Desenvolvimento dos templates AWS CloudFormation | Templates IaC versionados |
| Semana 4 | Testes, ajustes e documentação final da Fase 1 | Documentação de Planejamento |
| Semana 5–6 | Entrega Contínua e containerização (Fase 2) | Pipeline CD + Docker |
| Semana 7–8 | Monitoramento, segurança e relatório final | Relatório Final + Fluxograma |

---

## 6. Referências

- AWS CloudFormation User Guide. Disponível em: https://docs.aws.amazon.com/cloudformation/
- GitHub Actions Documentation. Disponível em: https://docs.github.com/en/actions
- Kim, G. et al. **Manual de DevOps: Como obter agilidade, confiabilidade e segurança em organizações tecnológicas.** Alta Books, 2018.
- Humble, J.; Farley, D. **Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.** Addison-Wesley, 2010.
- Fowler, M. **Continuous Integration.** Disponível em: https://martinfowler.com/articles/continuousIntegration.html

---

*Documento gerado em Maio de 2026 — Fase 1: Configuração e Automação Inicial*  
*PUCRS — DevOps na Prática — Daiane Deponti*
