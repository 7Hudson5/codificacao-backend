# 💻 Server Diagnostic CLI

Uma ferramenta simples e eficiente em **Node.js** para obter um diagnóstico rápido dos recursos de hardware e sistema operacional do servidor através do terminal, utilizando apenas módulos nativos.

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo coletar e exibir no console informações essenciais da máquina onde o script está sendo executado, como:
- Arquitetura/Plataforma do Sistema Operacional;
- Quantidade total e livre de memória RAM (formatadas em Gigabytes);
- Quantidade de núcleos da CPU (Cores);
- Modelo do processador.

Por utilizar apenas o módulo nativo `os` do Node.js, a execução é extremamente rápida e **não requer nenhuma dependência externa**.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Módulos Nativos:** `os` (Operating System)

---

## 🚀 Como Executar

### Pré-requisitos
- Ter o **Node.js** instalado na sua máquina (versão 12 ou superior recomendada).

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/server-diagnostic.git](https://github.com/seu-usuario/server-diagnostic.git)