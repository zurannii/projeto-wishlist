# 🦇 Wishlist Sombria (Gothic Wishlist)

Este é um projeto de landing page para uma lista de presentes de aniversário com um tema gótico, sombrio e elegante. A página foi construída com React, TypeScript e CSS puro, demonstrando uma arquitetura de componentes limpa e um design temático forte.


## ✨ Principais Funcionalidades

* **Tema Sombrio e Elegante:** Utiliza as fontes "Cinzel" e "Cormorant Garamond", com uma paleta de cores centrada em preto e um vermelho-vinho (`#7A0E2A`) como cor de destaque.
* **Arquitetura Baseada em Componentes:** O projeto é dividido em seções (`Hero`, `AboutThis`, `TheList`, `Footer`) e componentes reutilizáveis (`WishlistCard`).
* **Navegação com Scroll Suave:** O botão "Ver Wishlist" na seção Hero rola suavemente para a seção da lista de presentes.
* **Estilização com CSS Puro:** O projeto foi convertido de Tailwind para CSS puro, utilizando variáveis CSS (`:root`) para uma fácil manutenção do tema.
* **Carregamento de Imagens Locais:** As imagens da lista de presentes são carregadas a partir da pasta `public/assets`.

---

## 📚 Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite** (como ambiente de desenvolvimento)
* **CSS Puro** (com Variáveis CSS)

---

## 📂 Estrutura do Projeto

O projeto está organizado com uma separação clara entre a lógica dos componentes (TSX) e seus estilos (CSS), seguindo a estrutura que você definiu:

/meu-projeto-wishlist │ ├── /public │ └── /assets <-- (Imagens dos livros ficam aqui) │ ├── alice_pesadelo_brinde_ok_2.webp │ └── ... │ ├── /src │ ├── /components <-- (Componentes reutilizáveis) │ │ ├── ImageWithFallback.css │ │ ├── ImageWithFallback.tsx │ │ ├── WishlistCard.css │ │ └── WishlistCard.tsx │ │ │ ├── /global <-- (Componente principal App) │ │ ├── App.css <-- (Estilos de utilidade e classes globais) │ │ └── App.tsx <-- (Montagem das seções e lógica principal) │ │ │ ├── /sections <-- (Arquivos TSX das seções da página) │ │ ├── AboutThis.tsx │ │ ├── Footer.tsx │ │ ├── Hero.tsx │ │ └── TheList.tsx │ │ │ ├── /styles <-- (Arquivos CSS dedicados às seções) │ │ ├── AboutThis.css │ │ ├── Footer.css │ │ ├── Hero.css │ │ └── TheList.css │ │ │ ├── index.css <-- (Fontes globais e variáveis CSS :root) │ └── main.tsx <-- (Ponto de entrada do React) │ └── package.json


---

## 🚀 Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/zurannii/projeto-wishlist)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd meu-projeto-wishlist
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador.