# 🏦 NIKEL: Plataforma de Controle de Transações Financeiras

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
</p>

O **NIKEL** é uma aplicação web de controle financeiro pessoal, desenvolvida como projeto final do curso **Codaí** da Growdev. A plataforma permite aos usuários registrar, visualizar e gerenciar suas transações de entrada (receitas) e saída (despesas) de forma simples e intuitiva.

---

## ✨ Recursos Implementados

O projeto foi construído utilizando apenas tecnologias front-end (HTML, CSS e JavaScript), com o suporte do **Bootstrap** para um design responsivo:

* **Controle de Transações:**
    * Registro de entradas (receitas) e saídas (despesas) com descrição, valor e data.
    * Visualização da lista completa de transações.
    * Cálculo automático e exibição do saldo atual.
* **Gerenciamento de Usuários e Segurança:**
    * **Cadastro de Novo Usuário:** Permite a criação de contas.
    * **Controle de Sessão:** Sistema de login e logout para proteger o acesso.
    * **Persistência de Dados (Local):** Todas as informações (usuários e transações) são salvas de forma segura no **LocalStorage** do navegador.
    * **Dados Isolados:** As transações são armazenadas por usuário, garantindo a privacidade e integridade dos dados de cada conta.

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura e semântica da aplicação. |
| **CSS3** | Estilização personalizada. |
| **Bootstrap** | **Framework para componentização e garantia da responsividade da interface.** |
| **JavaScript (JS)** | Lógica de negócio, controle de sessão, manipulação do DOM e LocalStorage. |

## 🛠️ Como Executar o Projeto Localmente

Como o NIKEL é um projeto totalmente Front-End, sua execução é muito simples:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/mateus-cc/NIKEL.git](https://github.com/mateus-cc/NIKEL.git)
    ```
2.  **Navegue até a Pasta:**
    ```bash
    cd NIKEL
    ```
3.  **Abra no Navegador:**
    Localize o arquivo `index.html` (dentro da pasta `public/` se você usou a estrutura original) e **abra-o diretamente** em seu navegador favorito (Chrome, Firefox, etc.).

---

## 🔗 Deploy (GitHub Pages)

O projeto está hospedado e disponível em:

**[Acesse o NIKEL Aqui](https://mateus-cc.github.io/NIKEL/)**

*O deploy é gerenciado através do GitHub Actions, que garante a publicação correta do conteúdo da pasta `public/`.*

## 💡 Sobre o Desenvolvedor

Este projeto foi desenvolvido por Mateus César Costa como parte do programa de formação:

* **Curso:** Codaí
* **Instituição:** Growdev
