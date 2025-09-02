# 🚀 Prática Integrada – DevSecOps com Node.js

Este projeto demonstra a aplicação de um pipeline **DevSecOps** utilizando **Node.js** integrado às ferramentas:

- [Datadog](https://www.datadoghq.com/) – Observabilidade e monitoramento de logs  
- [SonarCloud](https://sonarcloud.io/) – Análise estática de código (SAST) e mapeamento com OWASP  
- [FOSSA](https://fossa.com/) – Verificação de licenças e vulnerabilidades de dependências  
- [GitHub Actions](https://docs.github.com/actions) – CI/CD e automação do fluxo  

---

## 📋 Funcionalidades

- Aplicação Node.js simples que gera logs e erros para observabilidade.  
- Coleta e visualização de logs em **Datadog Dashboard**.  
- **Monitor de logs** que dispara alerta em caso de erro.  
- **Pipeline CI/CD** no GitHub Actions:  
  - Build & Test (Node.js)  
  - SAST com **SonarCloud**  
  - Verificação de dependências/licenças com **FOSSA**  
- Integração com **Quality Gates** e **Policies** para bloquear código inseguro ou dependências não permitidas.  

---

## 🛠️ Stack Utilizada

- **Node.js** 18.x / 20.x  
- **Datadog Agent** (para coleta de logs)  
- **GitHub Actions** (workflows CI/CD)  
- **SonarCloud** (SAST e OWASP Top 10)  
- **FOSSA** (Licenciamento e vulnerabilidades)  

---

## ⚙️ Pipeline CI/CD

![CI](https://github.com/VictorKunzz/pratica-integrada/actions/workflows/node.js.yml/badge.svg)

Etapas do workflow:
1. **Build & Test** → Instala dependências, executa build e testes.  
2. **SonarCloud Scan** → Executa análise estática de código (SAST).  
3. **FOSSA Scan** → Verifica licenças de dependências e falha caso haja políticas bloqueadas.  

---

## 📊 Observabilidade com Datadog

- Dashboard com:
  - **Gráfico de erros por minuto**  
  - **Lista de logs detalhados**  
- Monitor configurado: alerta se houver **≥1 erro em 5 minutos**.  

*(inserir print do dashboard aqui)*

---

## 🔍 Segurança – SonarCloud

- Integração com GitHub Actions e Quality Gates.  
- Issues de segurança mapeadas para **OWASP Top 10**.  

*(inserir print da página de Issues do SonarCloud)*

---

## 📜 Conformidade – FOSSA

- Escaneamento automático de licenças das dependências.  
- Policy criada para bloquear dependências com **GPL/AGPL**.  

*(inserir print do relatório de licenças FOSSA)*

---

## 📂 Estrutura do Repositório

```
pratica-integrada/
│-- src/              # Código-fonte da aplicação Node.js
│-- logs/             # Logs gerados pela aplicação
│-- .github/workflows # Workflows CI/CD (GitHub Actions)
│-- package.json      # Configurações do Node.js
│-- README.md         # Documentação
```

---

## 🚦 Como Executar Localmente

```bash
# Clonar repositório
git clone https://github.com/VictorKunzz/pratica-integrada.git

# Acessar pasta
cd pratica-integrada

# Instalar dependências
npm install

# Rodar aplicação
npm start
```

A aplicação estará disponível em **http://localhost:3000**  
- Rota `/` → mensagem de sucesso  
- Rota `/error` → gera um erro proposital (capturado no Datadog)  

---

## 👨‍💻 Autores

- Victor Kunz – Engenharia de Software | Universidade Católica SC
- Henrique Cordeiro - Engenharia de Software | Universidade Católica SC 
- Nicholas Scoz - Engenharia de Software | Universidade Católica SC  
- Kauã Lucindo - Engenharia de Software | Universidade Católica SC  
- Vinicius Steuernagel - Engenharia de Software | Universidade Católica SC   

---

## ✅ Status

> Projeto desenvolvido para **disciplina Prática Integrada** com foco em **DevSecOps**.
