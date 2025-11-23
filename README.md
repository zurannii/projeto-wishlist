# 🦇 Gothic Birthday Wishlist

Uma experiência digital imersiva criada para celebrar o meu aniversário. Este projeto vai além de uma lista de presentes comum, funcionando como uma aplicação interativa com controle de estoque em tempo real e uma "cápsula do tempo" para mensagens de áudio.

## ✨ Funcionalidades

### 🎁 Wishlist Inteligente
- **Categorias:** Itens organizados em Livros, Meias de Conforto e Diversos.
- **Status em Tempo Real (Supabase DB):**
  - Visitantes podem marcar itens como "Já comprei!".
  - O item é atualizado instantaneamente no banco de dados.
  - Visualmente, o item fica "apagado" (grayscale) e indisponível para evitar presentes duplicados.

### 🎙️ Cápsula do Tempo (Áudio)
- **Gravação no Navegador:** Utiliza a API de mídia do navegador para gravar áudios diretamente no site.
- **Upload Seguro (Supabase Storage):**
  - Os áudios são enviados para um *Bucket* privado na nuvem.
  - Visitantes têm permissão apenas para gravar (upload).
  - Apenas a aniversariante (via painel administrativo) pode ouvir os áudios, garantindo a surpresa para o dia.

### 🎨 Design & UX
- **Estética Dark:** Inspirada na identidade visual da Dark.
- **CSS Puro:** Sem frameworks pesados. Uso de Variáveis CSS, Flexbox, Grid e Media Queries manuais.
- **Responsividade:** Mobile-first, adaptando fontes, grids e molduras para qualquer tamanho de tela.

## 🛠️ Tecnologias

- **Frontend:** React 18, TypeScript, Vite.
- **Estilização:** CSS Modules (Arquivos dedicados por seção).
- **Backend as a Service:** Supabase.
  - **Database:** PostgreSQL (Tabela `items_status`).
  - **Storage:** Gerenciamento de arquivos de áudio (`capsula_audios`).
- **Libs:** `react-media-recorder`, `@supabase/supabase-js`.


## 🚀 Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone (https://github.com/zurannii/projeto-wishlist)
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
