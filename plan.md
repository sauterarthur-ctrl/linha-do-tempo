# Minha História — plano de implementação

## Escopo

Criar uma experiência web privada e responsiva para acompanhar a evolução pessoal desde 2011. O acesso deve passar pela autenticação Manus OAuth do projeto, com estado deslogado claramente bloqueado. A área autenticada apresenta uma linha do tempo cronológica por ano, com espaço para fotos e textos curtos sobre cada fase, além de ampliação visual das fotos.

## Abordagem técnica

- Reutilizar o starter React + Express + tRPC + Drizzle já provisionado com servidor e banco de dados.
- Usar `trpc.auth.me` para obter a sessão real e `startLogin` para iniciar o login; não simular usuário em desenvolvimento.
- Implementar a primeira interface de linha do tempo no cliente com dados de apresentação locais, deixando a estrutura visual e os estados de conteúdo prontos para conectar às tabelas de memórias e ao armazenamento de fotos.
- Preservar o servidor e o contrato de sessão do starter, inclusive o cookie `webdev_app_session` e o comportamento compatível com Preview.
- Servir `public/manus-routes.json` com a rota `/`.

## Direção visual escolhida: editorial solar

### Design Movement

Editorial digital contemporâneo com referências de álbuns de família, cadernos de viagem e pôsteres solares dos anos 1970.

### Core Principles

1. Memória antes de dashboard: a página deve parecer uma narrativa pessoal, não um painel corporativo.
2. Calor com clareza: laranja queimado e vermelho coral criam emoção sem comprometer legibilidade.
3. Ritmo cronológico: a linha vertical, os marcadores e as transições conduzem o olhar ano a ano.
4. Intimidade controlada: login, textos curtos e espaços de foto reforçam que o conteúdo é privado.

### Color Philosophy

O laranja queimado é a cor proprietária da marca: remete à luz de fim de tarde e à energia de crescer. O vermelho coral aparece como acento de momentos importantes, enquanto creme e carvão dão respiro editorial e garantem contraste.

### Layout Paradigm

Composição assimétrica de página única: uma barra lateral fixa no desktop apresenta a marca e os filtros; a narrativa se desenvolve em uma coluna vertical deslocada, com cartões de memória alternando o lado de destaque. No celular, a barra se transforma em cabeçalho compacto e a linha vira uma leitura linear.

### Signature Elements

- Linha vertical “fio da memória” com pontos numerados por ano.
- Cartões de fotografia com cantos editoriais e faixa de legenda.
- Pequenas etiquetas de capítulo em vermelho coral, como notas coladas num álbum.

### Interaction Philosophy

Interações devem ser calmas e convidativas: hover revela ações sem saltos, filtros alteram o foco da narrativa e clicar em uma foto abre uma ampliação confortável. A ação principal é sempre voltar à história, não administrar dados.

### Animation

Entrada suave dos cartões ao rolar, com deslocamento vertical curto e opacidade. Os marcadores da linha podem acender em laranja ao entrar na área visível. Evitar loops chamativos; o movimento deve lembrar páginas sendo viradas.

### Typography System

Usar `DM Sans` para títulos e `Inter` para texto corrido, com letras grandes e compactas nos anos e microcopy em caixa alta com espaçamento generoso. A hierarquia é: título de capítulo, ano, legenda e metadados.

### Brand Essence

Um álbum vivo e privado para enxergar de onde você veio e reconhecer quem está se tornando. Personalidade: solar, íntima, curiosa.

### Brand Voice

- Headline: “Tudo o que trouxe você até aqui.”
- CTA: “Continuar pela história”
- Microcopy: “Cada ano guarda uma versão sua.”

### Wordmark & Logo

Símbolo formado por três pontos ascendentes ligados por um traço, sugerindo crescimento e passagem do tempo; acompanhado do wordmark em caixa baixa, com o ponto do “i” como um pequeno sol.

### Signature Brand Color

Laranja pôr-do-sol `#F26A3D`, usado em botões, marcadores e detalhes de navegação.

## Estrutura do projeto

- `client/src/pages/Home.tsx`: tela de login e experiência autenticada da linha do tempo.
- `client/src/index.css`: tokens de cor, tipografia, layout editorial, cartões e responsividade.
- `client/src/App.tsx`: roteamento da home e providers do starter.
- `public/manus-routes.json`: manifesto de rotas da aplicação.
- `server/_core/*`: autenticação Manus OAuth e infraestrutura do starter, sem alterações destrutivas.
- `drizzle/*`: base de usuários provisionada pelo template; evolução para memórias e fotos pode ser adicionada em etapa seguinte.
