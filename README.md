# Projeto DevOps — Fase 1: Configuração e Automação Inicial
### Documentação de Planejamento

---

**Aluna:** Daiane Deponti  
**E-mail:** daiane.deponti@edu.pucrs.br  
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
5. [Infraestrutura como Código](#5-infraestrutura-como-código)
6. [Como Executar o Projeto](#6-como-executar-o-projeto)
7. [Cronograma Previsto](#7-cronograma-previsto)
8. [Status de Implementação — Fase 1](#8-status-de-implementação--fase-1)
9. [Referências](#9-referências)

---

## 1. Descrição do Projeto

### 1.1 Visão Geral

Este projeto tem como finalidade implementar um pipeline completo de DevOps para uma aplicação web, cobrindo desde a integração contínua até a entrega contínua em ambiente de nuvem. A aplicação alvo é uma página HTML simples, projetada para fins didáticos e servindo de base para a aplicação das práticas DevOps ensinadas na disciplina.

O projeto é estruturado em duas fases:

- **Fase 1** — Configuração e Automação Inicial: abrange a configuração do repositório, o pipeline de Integração Contínua (CI) com GitHub Actions e os scripts de Infraestrutura como Código (IaC) utilizando AWS CloudFormation.
- **Fase 2** — Entrega Contínua, Monitoramento e Segurança: expandirá o pipeline para CD, containerização com Docker, monitoramento e segurança.

> 🔗 **Repositório do Projeto:** *[Link do repositório GitHub](https://github.com/Daaaiii/Devops.git)*

### 1.2 Contexto e Motivação

O mercado de desenvolvimento de software demanda cada vez mais profissionais capazes de integrar práticas de desenvolvimento e operações de forma ágil e automatizada. A cultura DevOps surge como resposta a essa demanda, eliminando silos entre equipes, acelerando entregas e aumentando a confiabilidade dos sistemas em produção.

Este projeto permite vivenciar na prática os conceitos teóricos da disciplina: automatização de builds, validação contínua por testes, provisionamento de infraestrutura por código e deploy reproduzível. Ao final, o resultado será um pipeline real e funcional hospedado no GitHub e integrado à AWS.

### 1.3 Tecnologias Utilizadas

| Categoria | Tecnologia / Ferramenta | Finalidade |
|-----------|------------------------|------------|
| Linguagem | Node.js (JavaScript) | Desenvolvimento da aplicação e execução dos testes |
| Controle de Versão | Git + GitHub | Repositório de código e colaboração |
| CI/CD | GitHub Actions | Automação do pipeline |
| Lint | HTMLHint | Validação e qualidade do código HTML |
| Testes | Jest + jest-environment-jsdom | Testes unitários com DOM e relatório de cobertura |
| IaC | AWS CloudFormation | Provisionamento de infraestrutura |
| Nuvem | Amazon Web Services (AWS) | Hospedagem e serviços gerenciados |
| Containers | Docker *(Fase 2)* | Containerização da aplicação |
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

> **Nota — AWS Academy (Learner Lab):** o ambiente não permite criar usuários IAM nem access keys permanentes. As credenciais são temporárias e obtidas diretamente no Learner Lab. Consulte a seção [5.4 Credenciais AWS Academy](#54-credenciais-aws-academy-learner-lab) para o procedimento completo.

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
Trigger (push / PR / workflow_dispatch)
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│            GitHub Actions — ci.yml                      │
│                                                         │
│  1. Checkout          → Clona o repositório             │
│  2. Setup Ambiente    → Node.js 20 (com cache npm)      │
│  3. Instalar Deps     → npm install                     │
│  4. Lint              → HTMLHint (index.html)           │
│  5. Testes Unitários  → Jest + cobertura (jsdom)        │
│  6. Auditoria         → npm audit --audit-level=moderate│
│  7. Artefato          → Upload do relatório de cobertura│
│  8. Notificação       → Status no GitHub PR/commit      │
└─────────────────────────────────────────────────────────┘
```

| Etapa | Descrição |
|-------|-----------|
| 1. Checkout | Clona o repositório e prepara o ambiente no runner do GitHub Actions. |
| 2. Setup do Ambiente | Instala Node.js 20 com cache de pacotes npm para execuções mais rápidas. |
| 3. Instalação de Dependências | Executa `npm install` para instalar Jest e HTMLHint. |
| 4. Lint | Valida a qualidade e estrutura do HTML com HTMLHint usando as regras de `.htmlhintrc`. |
| 5. Testes Unitários | Executa 19 testes com Jest em ambiente jsdom e gera relatório de cobertura (mínimo 60%). |
| 6. Verificação de Segurança | Executa `npm audit` para identificar vulnerabilidades nas dependências. |
| 7. Artefato de Cobertura | Faz upload do relatório de cobertura como artefato no GitHub Actions (retido 7 dias). |
| 8. Notificação | GitHub Actions reporta sucesso ou falha no commit e no Pull Request automaticamente. |

### 4.3 Gatilhos do Pipeline

O pipeline é composto por dois jobs independentes que executam em paralelo:

- **`ci`** — Lint, testes e auditoria de segurança da aplicação Node.js
- **`iac-validation`** — Validação dos templates CloudFormation com `cfn-lint`

Ambos são acionados por:
- Push para as branches `main` e `develop`
- Abertura ou atualização de Pull Request direcionado para `main`
- Execução manual via `workflow_dispatch` (botão no GitHub Actions)

```
Trigger (push / PR / workflow_dispatch)
       │
       ├─────────────────────────────────────┐
       ▼                                     ▼
┌──────────────────────────┐   ┌──────────────────────────────┐
│   Job: ci                │   │   Job: iac-validation        │
│  Node.js 20              │   │  Python 3.12                 │
│                          │   │                              │
│  1. Checkout             │   │  1. Checkout                 │
│  2. Setup Node.js 20     │   │  2. Setup Python 3.12        │
│  3. npm install          │   │  3. pip install cfn-lint     │
│  4. HTMLHint (lint)      │   │  4. cfn-lint (4 templates)   │
│  5. Jest + cobertura     │   │  5. Verificar estrutura IaC  │
│  6. npm audit            │   └──────────────────────────────┘
│  7. Upload cobertura     │
└──────────────────────────┘
```

---

## 5. Infraestrutura como Código

### 5.1 Estrutura dos Templates

A infraestrutura é inteiramente definida como código usando AWS CloudFormation, garantindo rastreabilidade, reprodutibilidade e consistência entre ambientes. Os templates estão organizados em camadas independentes:

```
infrastructure/
└── cloudformation/
    ├── main.yaml       # Stack raiz — orquestra os nested stacks
    ├── network.yaml    # Rede: VPC, subrede pública, Internet Gateway, tabela de rotas
    ├── compute.yaml    # Computação: EC2 t2.micro, Security Group, IAM Role
    └── storage.yaml    # Armazenamento: S3 para site estático e artefatos
```

| Template | Recursos AWS Criados |
|----------|----------------------|
| `network.yaml` | `AWS::EC2::VPC`, `AWS::EC2::Subnet`, `AWS::EC2::InternetGateway`, `AWS::EC2::Route` |
| `storage.yaml` | `AWS::S3::Bucket` (site + artefatos), `AWS::S3::BucketPolicy` |
| `compute.yaml` | `AWS::EC2::Instance` (t2.micro), `AWS::EC2::SecurityGroup`, `AWS::IAM::Role`, `AWS::IAM::InstanceProfile` |
| `main.yaml` | `AWS::CloudFormation::Stack` (nested — referencia os 3 acima) |

### 5.2 Parâmetros Configuráveis

Todos os templates aceitam o parâmetro `Environment` com os valores `production`, `staging` ou `development`, garantindo o isolamento entre ambientes.

### 5.3 Como Fazer o Deploy

**Pré-requisitos:** AWS CLI instalado e configurado com permissões adequadas (`aws configure`).

**Opção A — Deploy de stacks individuais (ordem obrigatória):**

```bash
# 1. Rede
aws cloudformation deploy \
  --template-file infrastructure/cloudformation/network.yaml \
  --stack-name devops-fase1-network \
  --parameter-overrides Environment=production

# 2. Armazenamento
aws cloudformation deploy \
  --template-file infrastructure/cloudformation/storage.yaml \
  --stack-name devops-fase1-storage \
  --parameter-overrides Environment=production BucketNameSuffix=seu-nome

# 3. Computação (depende dos outputs dos stacks acima)
aws cloudformation deploy \
  --template-file infrastructure/cloudformation/compute.yaml \
  --stack-name devops-fase1-compute \
  --parameter-overrides \
      Environment=production \
      VpcId=<VpcId do stack network> \
      SubnetId=<SubnetId do stack network> \
      WebsiteBucketName=<BucketName do stack storage> \
      KeyPairName=<nome-do-seu-key-pair> \
  --capabilities CAPABILITY_NAMED_IAM
```

**Opção B — Deploy via stack principal (nested stacks):**

```bash
# Upload dos templates para S3
aws s3 cp infrastructure/cloudformation/ s3://MEU-BUCKET/cloudformation/ --recursive

# Deploy do stack principal
aws cloudformation deploy \
  --template-file infrastructure/cloudformation/main.yaml \
  --stack-name devops-fase1 \
  --parameter-overrides \
      Environment=production \
      TemplatesBaseURL=https://s3.amazonaws.com/MEU-BUCKET/cloudformation \
      BucketNameSuffix=seu-nome \
      KeyPairName=<nome-do-seu-key-pair> \
  --capabilities CAPABILITY_NAMED_IAM
```

### 5.4 Validação dos Templates

Para validar os templates localmente sem precisar de credenciais AWS, utilize `cfn-lint`:

```bash
pip install cfn-lint
cfn-lint infrastructure/cloudformation/*.yaml
```

O pipeline de CI executa essa validação automaticamente a cada push/PR.

### 5.4 Credenciais AWS Academy (Learner Lab)

O AWS Academy não permite criar usuários IAM nem access keys permanentes. As credenciais são **temporárias** e precisam ser renovadas a cada sessão (~4 horas de validade).

**Como obter as credenciais:**

1. Acesse o Learner Lab e inicie o ambiente AWS (botão Start Lab)
2. Clique em **AWS Details** → **AWS CLI**
3. Copie os três valores exibidos:
   ```
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
   AWS_SESSION_TOKEN
   ```

**Como configurar no GitHub (necessário para o deploy na Fase 2):**

Vá em **Settings → Secrets and variables → Actions** e crie os secrets:

| Secret | Valor |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | Copiado do Learner Lab |
| `AWS_SECRET_ACCESS_KEY` | Copiado do Learner Lab |
| `AWS_SESSION_TOKEN` | Copiado do Learner Lab — **obrigatório no Academy** |
| `AWS_REGION` | `us-east-1` (região padrão do Academy) |
| `TEMPLATES_BUCKET` | Nome do bucket S3 onde os templates serão enviados |
| `BUCKET_SUFFIX` | Sufixo único para os buckets (ex: seu-nome-turma) |
| `KEY_PAIR_NAME` | Nome do Key Pair criado no console AWS |

> **Atenção:** como as credenciais expiram, o job de deploy no `ci.yml` está **comentado** por padrão. Descomente-o e atualize os secrets imediatamente antes de executar o pipeline na Fase 2.

---

## 6. Como Executar o Projeto

### 6.1 Pré-requisitos

- Node.js 20 ou superior
- npm 9 ou superior
- Git

### 6.2 Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Daaaiii/Devops.git
cd Devops

# 2. Instale as dependências
npm install

# 3. Execute o lint do HTML
npm run lint

# 4. Execute os testes com cobertura
npm test

# 5. Execute a auditoria de segurança
npm audit --audit-level=moderate
```

### 6.3 Visualizar a Aplicação

Abra o arquivo `index.html` diretamente no navegador, ou use um servidor HTTP local:

```bash
# Com Python (já disponível na maioria dos sistemas)
python -m http.server 8080
# Acesse: http://localhost:8080
```

### 6.4 Executar Validação de IaC Localmente

```bash
pip install cfn-lint
cfn-lint infrastructure/cloudformation/network.yaml
cfn-lint infrastructure/cloudformation/storage.yaml
cfn-lint infrastructure/cloudformation/compute.yaml
cfn-lint infrastructure/cloudformation/main.yaml
```

---

## 7. Cronograma Previsto

| Semana | Atividade | Entregável |
|--------|-----------|------------|
| Semana 1 | Criação do repositório e estrutura inicial da aplicação | Repositório público no GitHub |
| Semana 2 | Implementação do pipeline de CI (GitHub Actions) | Workflow CI funcional |
| Semana 3 | Desenvolvimento dos templates AWS CloudFormation | Templates IaC versionados |
| Semana 4 | Testes, ajustes e documentação final da Fase 1 | Documentação de Planejamento |
| Semana 5–6 | Entrega Contínua e containerização (Fase 2) | Pipeline CD + Docker |
| Semana 7–8 | Monitoramento, segurança e relatório final | Relatório Final + Fluxograma |

---

## 8. Status de Implementação — Fase 1

### 8.1 Entregas Concluídas

| Entregável | Arquivo(s) | Status |
|-----------|------------|--------|
| Documentação de Planejamento | `README.md` | ✅ Concluído |
| Repositório GitHub configurado | [github.com/Daaaiii/Devops](https://github.com/Daaaiii/Devops.git) | ✅ Concluído |
| Aplicação HTML | `index.html` | ✅ Concluído |
| Pipeline de CI — aplicação | `.github/workflows/ci.yml` job `ci` | ✅ Concluído |
| Pipeline de CI — validação IaC | `.github/workflows/ci.yml` job `iac-validation` | ✅ Concluído |
| Testes automatizados (Jest) | `__tests__/index.test.js` | ✅ Concluído |
| Configuração de lint (HTMLHint) | `.htmlhintrc`, `package.json` | ✅ Concluído |
| Scripts IaC — CloudFormation | `infrastructure/cloudformation/` (4 templates) | ✅ Concluído |
| Proteção de branch `main` | Branch protegida com PR obrigatório + status checks | ✅ Concluído |

### 8.2 Resultado dos Testes

- **Total de testes:** 19 — todos passando
- **Lint HTML:** sem erros encontrados
- **Validação CloudFormation (`cfn-lint`):** 4 templates válidos
- **Vulnerabilidades nas dependências:** 0
- **Cobertura de testes:** acima do mínimo exigido (60%)

### 8.3 Fase 1 — Concluída

Todos os entregáveis da Fase 1 foram implementados e estão funcionais.

---

## 9. Referências

- AWS CloudFormation User Guide. Disponível em: https://docs.aws.amazon.com/cloudformation/
- GitHub Actions Documentation. Disponível em: https://docs.github.com/en/actions
- cfn-lint — CloudFormation Linter. Disponível em: https://github.com/aws-cloudformation/cfn-lint
- Kim, G. et al. **Manual de DevOps: Como obter agilidade, confiabilidade e segurança em organizações tecnológicas.** Alta Books, 2018.
- Humble, J.; Farley, D. **Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.** Addison-Wesley, 2010.
- Fowler, M. **Continuous Integration.** Disponível em: https://martinfowler.com/articles/continuousIntegration.html

---

*Documento atualizado em Maio de 2026 — Fase 1: Configuração e Automação Inicial*  
*PUCRS — DevOps na Prática — Daiane Deponti Bolzan*
