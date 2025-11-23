# 🦇 Gothic Birthday Wishlist

Uma landing page de lista de presentes com estética gótica e sombria, desenvolvida para celebrar um aniversário de forma única. O projeto combina design imersivo com funcionalidades de lista de desejos interativa em tempo real.

![Project Preview](public/assets/preview.png)
*(Dica: Tire um print da tela inicial do seu site e salve como `preview.png` na pasta public/assets para aparecer aqui)*

## ✨ Funcionalidades

- **Estética Dark/Gótica:** Design inspirado na DarkSide Books, com texturas de fumaça, tipografia clássica (*Cinzel* e *Cormorant Garamond*) e detalhes em vermelho sangue (`#7A0E2A`).
- **Wishlist Interativa:**
  - Listagem de itens categorizados (Livros, Meias, Diversos).
  - **Integração com Supabase:** Controle de status em tempo real. Quando alguém marca "Já comprei!", o item é atualizado no banco de dados e fica indisponível (cinza/apagado) para outros visitantes instantaneamente.
- **Integração com WhatsApp:**
  - Botão nos cards para avisar sobre a compra do presente ("Oii! Acabei de comprar...").
  - Seção especial **"Um Minuto do Seu Tempo"** para envio de áudios de carinho.
- **Responsividade:** Layout totalmente adaptado ("Mobile First") para celulares, tablets e desktops.
- **Arquitetura Limpa:** Código organizado em seções e componentes reutilizáveis com CSS modular.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite.
- **Estilização:** CSS Puro (CSS Modules/Scoped) com Variáveis CSS (`:root`).
- **Backend/Database:** Supabase (PostgreSQL) para persistência dos dados.
- **Deploy:** Vercel.

## 📂 Estrutura do Projeto

```bash
/src
├── /components            
│   ├── WishlistCard.tsx    
│   ├── ImageWithFallback.tsx
│   └── ...
├── /global                
│   ├── App.tsx             
│   ├── App.css           
│   └── ...
├── /lib                    
│   └── supabase.ts         
├── /sections             
│   ├── Hero.tsx            
│   ├── AboutThis.tsx      
│   ├── TheList.tsx         
│   ├── OneMinute.tsx       
│   └── Footer.tsx         
└── /styles               
    ├── Hero.css
    ├── TheList.css
    └── ...


* **React**
* **TypeScript**
* **Vite** (como ambiente de desenvolvimento)
* **CSS Puro** (com Variáveis CSS)

---

<<<<<<< HEAD
## 📂 Estrutura do Projeto

O projeto está organizado com uma separação clara entre a lógica dos componentes (TSX) e seus estilos (CSS).

---

=======
>>>>>>> 5542b59dfd36b4faa5827b4e540e5f54a92120e9
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
