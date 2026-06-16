# Projeto DevOps — Pipeline Completo CI/CD com AWS
### Documentação do Projeto

---

**Aluna:** Daiane Deponti  
**E-mail:** daiane.deponti@edu.pucrs.br  
**Instituição:** PUCRS — Pontifícia Universidade Católica do Rio Grande do Sul  
**Disciplina:** DevOps na Prática  
**Entrega:** Fase 1 e Fase 2 — Concluídas  
**Data:** Junho de 2026

---

## Sumário

1. [Descrição do Projeto](#1-descrição-do-projeto)
2. [Objetivos do Projeto](#2-objetivos-do-projeto)
3. [Requisitos do Projeto](#3-requisitos-do-projeto)
4. [Pipeline CI/CD](#4-pipeline-cicd)
5. [Infraestrutura como Código](#5-infraestrutura-como-código)
6. [Como Executar o Projeto](#6-como-executar-o-projeto)
7. [Status de Implementação](#7-status-de-implementação)
8. [Referências](#8-referências)

---

## 1. Descrição do Projeto

### 1.1 Visão Geral

Este projeto implementa um pipeline completo de DevOps para uma aplicação web, cobrindo desde a integração contínua até a entrega contínua em ambiente de nuvem. A aplicação é uma página HTML simples, projetada para fins didáticos e servindo de base para a aplicação das práticas DevOps ensinadas na disciplina.

O projeto foi estruturado em duas fases, ambas concluídas:

- **Fase 1** — Configuração e Automação Inicial: repositório GitHub, pipeline de CI com GitHub Actions e templates de Infraestrutura como Código (IaC) com AWS CloudFormation.
- **Fase 2** — Entrega Contínua e Containers: pipeline de CD com deploy automatizado para S3, containerização com Docker multi-stage.

> **Repositório do Projeto:** [github.com/Daaaiii/Devops](https://github.com/Daaaiii/Devops.git)

### 1.2 Contexto e Motivação

O mercado de desenvolvimento de software demanda cada vez mais profissionais capazes de integrar práticas de desenvolvimento e operações de forma ágil e automatizada. A cultura DevOps surge como resposta a essa demanda, eliminando silos entre equipes, acelerando entregas e aumentando a confiabilidade dos sistemas em produção.

Este projeto permite vivenciar na prática os conceitos teóricos da disciplina: automatização de builds, validação contínua por testes, provisionamento de infraestrutura por código e deploy reproduzível. O resultado é um pipeline real e funcional hospedado no GitHub e integrado à AWS.

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
| Containers | Docker (multi-stage) | Containerização da aplicação |

---

## 2. Objetivos do Projeto

### 2.1 Objetivo Geral

Implementar um pipeline DevOps completo e funcional — desde o commit do código até o deploy automatizado em ambiente de nuvem — aplicando as melhores práticas de Integração Contínua, Entrega Contínua, Infraestrutura como Código e containerização.

### 2.2 Objetivos Específicos

| ID | Objetivo | Descrição | Status |
|----|----------|-----------|--------|
| OBJ-01 | Repositório CI | Configurar repositório no GitHub com boas práticas: branches, commit semântico e proteções de branch. | ✅ Concluído |
| OBJ-02 | Pipeline CI | Implementar pipeline de CI com GitHub Actions para build automático, lint e execução de testes a cada push/PR. | ✅ Concluído |
| OBJ-03 | Infraestrutura como Código | Desenvolver templates AWS CloudFormation para provisionamento da infraestrutura necessária (EC2, S3, IAM, etc.). | ✅ Concluído |
| OBJ-04 | Entrega Contínua | Expandir o pipeline para CD, automatizando o deploy em S3 após a aprovação dos testes. | ✅ Concluído |
| OBJ-05 | Containerização | Containerizar a aplicação com Docker multi-stage. | ✅ Concluído |
| OBJ-06 | Documentação | Documentar todas as etapas, decisões técnicas e resultados obtidos ao longo do projeto. | ✅ Concluído |

---

## 3. Requisitos do Projeto

### 3.1 Requisitos Funcionais

| ID | Requisito Funcional |
|----|---------------------|
| RF-01 | O sistema deve possuir um repositório de código no GitHub com branch principal protegida. |
| RF-02 | O pipeline de CI deve ser acionado automaticamente a cada push na branch `main` e `develop`, e em pull requests. |
| RF-03 | O pipeline deve executar a instalação de dependências, lint e testes unitários automaticamente. |
| RF-04 | O pipeline deve notificar o resultado do build (sucesso ou falha) no GitHub. |
| RF-05 | Os templates CloudFormation devem provisionar pelo menos uma instância EC2 e um bucket S3 na AWS. |
| RF-06 | O template CloudFormation deve ser parametrizável (ambiente: dev, staging, prod). |
| RF-07 | O bucket S3 deve ser provisionado automaticamente pelo pipeline de CD via CloudFormation. |
| RF-08 | O repositório deve conter README com instruções de execução e link para a documentação. |

### 3.2 Requisitos Não Funcionais

| ID | Requisito Não Funcional |
|----|------------------------|
| RNF-01 | O pipeline de CI deve ser concluído em no máximo 10 minutos. |
| RNF-02 | O código deve seguir padrões de qualidade verificados por linter (HTMLHint). |
| RNF-03 | A cobertura de testes unitários deve ser de no mínimo 60%. |
| RNF-04 | Os templates CloudFormation devem ser versionados junto ao código no repositório. |
| RNF-05 | As credenciais AWS nunca devem ser expostas no código; devem usar GitHub Secrets. |
| RNF-06 | O pipeline deve ser reproduzível: o mesmo commit deve gerar sempre o mesmo resultado. |
| RNF-07 | O repositório deve ser público e acessível para avaliação do professor. |

### 3.3 Requisitos de Infraestrutura

| Recurso AWS | Descrição |
|-------------|-----------|
| Amazon EC2 | Instância `t2.micro` (free tier) para hospedar a aplicação. |
| Amazon S3 | Bucket para hospedagem estática do site + bucket de artefatos de build. |
| IAM Role / Policy | Permissões mínimas necessárias para execução segura (princípio do menor privilégio). |
| Security Group | Regras de firewall para expor apenas as portas necessárias (80, 443, 22). |
| CloudFormation Stack | Stack parametrizável com variáveis de ambiente (dev/staging/prod). |

### 3.4 Requisitos de Segurança

- Nenhuma credencial ou chave secreta deve estar escrita diretamente no código-fonte.
- Todas as credenciais AWS devem ser armazenadas como GitHub Secrets e acessadas via variáveis de ambiente no workflow.
- Dependências do projeto devem ser verificadas quanto a vulnerabilidades conhecidas (`npm audit`).

> **Nota — AWS Academy (Learner Lab):** o ambiente não permite criar usuários IAM nem access keys permanentes. As credenciais são temporárias e obtidas diretamente no Learner Lab. Consulte a seção [5.4 Credenciais AWS Academy](#54-credenciais-aws-academy-learner-lab) para o procedimento completo.

---

## 4. Pipeline CI/CD

### 4.1 Estratégia de Branches

O repositório segue o modelo GitFlow simplificado:

| Branch | Finalidade |
|--------|------------|
| `main` | Branch principal protegida; reflete o estado estável e revisado do projeto. |
| `develop` | Branch de integração das features em desenvolvimento. |
| `feature/*` | Branches de funcionalidades individuais, originadas de `develop`. |
| `hotfix/*` | Correções urgentes aplicadas diretamente na `main`. |

> Pull Requests para `main` exigem: aprovação de pelo menos 1 reviewer + pipeline CI passando com sucesso.

### 4.2 Pipeline de CI — `ci.yml`

Acionado em push para `main`/`develop`, em PRs para `main` e via `workflow_dispatch`. Dois jobs paralelos:

```
Trigger (push / PR / workflow_dispatch)
       │
       ├───────────────────────────────────────┐
       ▼                                       ▼
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

| Etapa | Descrição |
|-------|-----------|
| Checkout | Clona o repositório e prepara o ambiente no runner. |
| Setup Node.js 20 | Instala Node.js 20 com cache de pacotes npm. |
| npm install | Instala Jest e HTMLHint. |
| Lint | Valida HTML com HTMLHint usando as regras de `.htmlhintrc`. |
| Testes Unitários | 19 testes com Jest em ambiente jsdom, cobertura mínima de 60%. |
| Auditoria de Segurança | `npm audit` para identificar vulnerabilidades (não bloqueante). |
| Artefato de Cobertura | Upload do relatório de cobertura como artefato (7 dias). |

### 4.3 Pipeline de CD — `cd.yml`

Acionado apenas em push para `main`. Executa após o CI passar.

```
Push para main
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│            GitHub Actions — cd.yml                      │
│                                                         │
│  1. Checkout                                            │
│  2. Docker build (multi-stage)                          │
│  3. Configurar credenciais AWS                          │
│  4. CloudFormation deploy (storage stack)               │
│     → cria/atualiza o bucket S3                         │
│  5. Obter nome do bucket via output do CloudFormation   │
│  6. aws s3 sync index.html → S3                         │
│  7. Exibir URL do site publicado                        │
└─────────────────────────────────────────────────────────┘
```

O bucket S3 é **provisionado automaticamente** pelo pipeline via CloudFormation (`storage.yaml`) na etapa 4. O nome do bucket é obtido pelo output `WebsiteBucketName` da stack, eliminando a necessidade de configurá-lo manualmente como secret.

---

## 5. Infraestrutura como Código

### 5.1 Estrutura dos Templates

A infraestrutura é inteiramente definida como código usando AWS CloudFormation:

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

Todos os templates aceitam o parâmetro `Environment` com os valores `production`, `staging` ou `development`, garantindo isolamento entre ambientes.

### 5.3 Como Fazer o Deploy Manualmente

**Pré-requisitos:** AWS CLI instalado e configurado com permissões adequadas.

**Stacks individuais (ordem obrigatória):**

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
  --parameter-overrides Environment=production BucketNameSuffix=devops-pucrs

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

> O pipeline de CD (`cd.yml`) já executa o deploy do stack `storage` automaticamente a cada push para `main`.

### 5.4 Validação dos Templates

Para validar os templates localmente:

```bash
pip install cfn-lint
cfn-lint infrastructure/cloudformation/*.yaml
```

O pipeline de CI executa essa validação automaticamente a cada push/PR.

### 5.5 Credenciais AWS Academy (Learner Lab)

O AWS Academy não permite criar usuários IAM nem access keys permanentes. As credenciais são **temporárias** (~4 horas de validade) e precisam ser renovadas a cada sessão.

**Como obter as credenciais:**

1. Acesse o Learner Lab e inicie o ambiente AWS (botão Start Lab)
2. Clique em **AWS Details** → **AWS CLI**
3. Copie os três valores exibidos: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`

**GitHub Secrets necessários:**

Vá em **Settings → Secrets and variables → Actions** e configure:

| Secret | Valor |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | Copiado do Learner Lab |
| `AWS_SECRET_ACCESS_KEY` | Copiado do Learner Lab |
| `AWS_SESSION_TOKEN` | Token de sessão — obrigatório no Academy |
| `AWS_REGION` | `us-east-1` (região padrão do Academy) |

> O nome do bucket S3 **não precisa ser configurado como secret** — ele é obtido automaticamente pelo output do CloudFormation no pipeline de CD.

---

## 6. Como Executar o Projeto

### 6.1 Pré-requisitos

- Node.js 20 ou superior
- npm 9 ou superior
- Git
- Docker (para build da imagem)

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
python -m http.server 8080
# Acesse: http://localhost:8080
```

### 6.4 Build da Imagem Docker

```bash
docker build -t devops-app .
docker run -p 8080:80 devops-app
# Acesse: http://localhost:8080
```

### 6.5 Executar Validação de IaC Localmente

```bash
pip install cfn-lint
cfn-lint infrastructure/cloudformation/network.yaml
cfn-lint infrastructure/cloudformation/storage.yaml
cfn-lint infrastructure/cloudformation/compute.yaml
cfn-lint infrastructure/cloudformation/main.yaml
```

---

## 7. Status de Implementação

### 7.1 Fase 1 — Concluída

| Entregável | Arquivo(s) | Status |
|-----------|------------|--------|
| Documentação | `README.md` | ✅ Concluído |
| Repositório GitHub configurado | [github.com/Daaaiii/Devops](https://github.com/Daaaiii/Devops.git) | ✅ Concluído |
| Aplicação HTML | `index.html` | ✅ Concluído |
| Pipeline de CI — aplicação | `.github/workflows/ci.yml` job `ci` | ✅ Concluído |
| Pipeline de CI — validação IaC | `.github/workflows/ci.yml` job `iac-validation` | ✅ Concluído |
| Testes automatizados (Jest) | `__tests__/index.test.js` | ✅ Concluído |
| Lint (HTMLHint) | `.htmlhintrc`, `package.json` | ✅ Concluído |
| Scripts IaC — CloudFormation | `infrastructure/cloudformation/` (4 templates) | ✅ Concluído |
| Proteção de branch `main` | Branch protegida com PR obrigatório + status checks | ✅ Concluído |

### 7.2 Fase 2 — Concluída

| Entregável | Arquivo(s) | Status |
|-----------|------------|--------|
| Dockerfile multi-stage | `Dockerfile`, `.dockerignore` | ✅ Concluído |
| Pipeline de CD | `.github/workflows/cd.yml` | ✅ Concluído |
| Provisionamento S3 via CloudFormation no CD | `cd.yml` + `storage.yaml` | ✅ Concluído |
| Deploy automatizado para S3 | `cd.yml` | ✅ Concluído |
| Relatório Final | `docs/fase2-relatorio.md` | ✅ Concluído |

### 7.3 Resultado dos Testes

- **Total de testes:** 19 — todos passando
- **Lint HTML:** sem erros encontrados
- **Validação CloudFormation (`cfn-lint`):** 4 templates válidos
- **Vulnerabilidades nas dependências:** 0
- **Cobertura de testes:** acima do mínimo exigido (60%)

---

## 8. Referências

- AWS CloudFormation User Guide. Disponível em: https://docs.aws.amazon.com/cloudformation/
- GitHub Actions Documentation. Disponível em: https://docs.github.com/en/actions
- cfn-lint — CloudFormation Linter. Disponível em: https://github.com/aws-cloudformation/cfn-lint
- Docker Documentation — Multi-stage builds. Disponível em: https://docs.docker.com/build/building/multi-stage/
- Kim, G. et al. **Manual de DevOps: Como obter agilidade, confiabilidade e segurança em organizações tecnológicas.** Alta Books, 2018.
- Humble, J.; Farley, D. **Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.** Addison-Wesley, 2010.
- Fowler, M. **Continuous Integration.** Disponível em: https://martinfowler.com/articles/continuousIntegration.html

---

*Documento atualizado em Junho de 2026 — Fases 1 e 2 concluídas*  
*PUCRS — DevOps na Prática — Daiane Deponti Bolzan*
