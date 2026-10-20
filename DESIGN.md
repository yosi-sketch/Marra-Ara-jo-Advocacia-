---
name: "Marra Araújo Advocacia"
description: "Verde-oliva e dourado da marca, serifas romanas e clareza no atendimento jurídico em Sabará."
colors:
  ink: "#26291e"
  ink-soft: "#595e4e"
  paper: "#fcfaf5"
  mist: "#f6f3eb"
  fog: "#eae8dc"
  gold: "#e5b66e"
  dark-text: "#d5d8c7"
  brand-50: "#f4f5ed"
  brand-100: "#e5e8d9"
  brand-200: "#cdd3bc"
  brand-300: "#b4bd9c"
  brand-400: "#939e77"
  brand-500: "#75825a"
  brand-600: "#5c6943"
  brand-700: "#4d5937"
  brand-800: "#3c472c"
  brand-900: "#282c1a"
  brand-950: "#171e12"
  white: "#ffffff"
  divider-dark: "rgb(255 255 255 / 15%)"
  divider-assurance: "rgb(255 255 255 / 12%)"
  divider-footer: "rgb(213 216 199 / 25%)"
typography:
  display-mobile:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  display-desktop:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "2rem"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: "28px"
  navigation:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.13em"
rounded:
  none: "0"
  modal-mobile: "4px"
spacing:
  2: "8px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "28px"
  8: "32px"
  10: "40px"
  12: "48px"
  20: "80px"
  24: "96px"
  28: "112px"
  32: "128px"
components:
  button-primary:
    backgroundColor: "{colors.brand-800}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    typography: "{typography.navigation}"
  button-primary-hover:
    backgroundColor: "{colors.brand-700}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.brand-950}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    typography: "{typography.navigation}"
  button-gold-hover:
    backgroundColor: "{colors.brand-100}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.label}"
  navigation:
    backgroundColor: "{colors.brand-950}"
    textColor: "{colors.brand-100}"
    typography: "{typography.navigation}"
    height: "88px"
  contact-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px"
  service-dialog:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    padding: "28px"
    rounded: "{rounded.modal-mobile}"
  faq:
    textColor: "{colors.ink}"
    padding: "24px 0"
---
# Design System: Marra Araújo Advocacia

## Overview

A marca do escritório orienta o sistema: verde-oliva profundo, dourado e superfícies marfim. A composição existente apresenta a Dra. Fernanda Marra e seu atendimento em Família, Sucessões e Imobiliário, em Sabará, MG, com leitura calma e contato direto.

Marcellus acompanha as capitulares romanas do logo; Manrope sustenta o corpo e os controles, em harmonia com a assinatura ADVOCACIA. O logo e a peça institucional reais são integrais: não redesenhar, recolorir, recortar ou substituir por fotografias genéricas.

**Key Characteristics:**
- Identidade oliva e dourada derivada do logo fornecido.
- Tipografia sóbria, espaço generoso e geometria predominantemente reta.
- Conteúdo acolhedor, informativo e sem promessas de resultado.
- Estrutura, navegação e funções existentes preservadas.

## Colors

A paleta foi derivada por amostragem do PNG real, registrada em .impeccable/palette-source.json; as cores aplicadas são as primitivas normativas acima, também presentes em app/globals.css.

### Primary

O oliva institucional brand-900 forma o hero e a faixa de confiança. Brand-950 sustenta cabeçalho, apresentação, chamada final e rodapé. Brand-800 é a ação primária em superfícies claras; brand-700 aparece em links, ícones e hover.

### Secondary

Gold realça ações e detalhes sobre oliva escuro. Não usar dourado como texto de leitura corrente sobre marfim. O hover de botões dourados passa a brand-100.

### Neutral

Paper, mist e fog alternam os planos claros. Ink é o texto principal, ink-soft o texto secundário. Em planos escuros, paper/white, dark-text e brand-100 atendem aos papéis de leitura; gold assume os destaques.

O divisor do rodapé usa **rgb(213 216 199 / 25%)**. Os demais divisores escuros usam branco a 15%, ou 12% na faixa de confiança. Não substituir o divisor do rodapé por uma borda escura herdada da superfície clara.

Contraste AA é requisito. Verificar os pares efetivos, incluindo estados de foco e hover; esta documentação não certifica razões numéricas. A validação da entrega é registrada separadamente em .impeccable/review/marra-validation.json. O registro .impeccable/review/marra-contrast.json reúne 12 pares principais: menor razão de 5,44:1 (ink-soft sobre fog), dourado sobre brand-900 de 7,68:1 e sobre brand-950 de 9,14:1.

## Typography

**Display Font:** Marcellus, Georgia, serif, peso 400.
**Body Font:** Manrope, system-ui, sans-serif.

### Hierarchy

- **Display:** hero em 2.25rem no celular, 3rem a partir de 640px e 3.5rem a partir de 1024px; entrelinha 1.18.
- **Headline:** seções em 2rem, 2.5rem e 3rem nos mesmos intervalos; entrelinha 1.18.
- **Title:** títulos menores em 1.5rem/2rem.
- **Body:** descrições principais em 15px/28px, com variações locais de 13–16px preservadas no código.
- **Navigation:** 14px, peso 600.
- **Label:** controles de apoio em 12px, peso 600 e espaçamento entre letras; maiúsculas apenas onde implementadas.

A classe font-display mantém peso 400 e espaçamento -0.025em. Não simular negrito na fonte do título. As fontes são carregadas por next/font/google em app/layout.tsx.

## Layout

O contêiner principal mede no máximo 80rem. Margens internas horizontais: 20px no celular, 32px a partir de 640px e 48px a partir de 1024px. O cabeçalho fixo mede 88px, passando a 96px em 640px. A navegação desktop começa em 1024px.

Hero, apresentação, contato e avaliações usam grids responsivos existentes. O hero empilha texto, ação e imagem no celular; a imagem integral vem após a ação. As áreas de atuação, FAQ, avaliações, contato e rodapé conservam a sequência atual. Seções usam em geral 80px de respiro vertical, crescendo conforme a seção para 96px, 112px ou 128px. Links de âncora compensam o cabeçalho.

## Elevation & Depth

A profundidade vem sobretudo da alternância entre oliva e marfim, das linhas e da imagem real. A sombra de cartão é 0 18px 48px rgb(23 30 18 / 18%); a janela de serviço a usa sobre uma sobreposição ink a 55% com desfoque. Não transformar cada bloco editorial em cartão elevado.

## Shapes

Botões, cartões, ícones de apoio e divisores usam cantos retos. A janela móvel tem apenas os cantos superiores suavizados em 4px; no desktop volta aos cantos retos. Linhas finas delimitam avaliações, FAQ e informações de contato.

## Components

### Buttons

A ação primária usa brand-800 com texto branco e hover brand-700. Em contextos escuros, usa gold com texto brand-950, passando a brand-100 no hover; o cabeçalho usa ink para o texto. Altura mínima de 44px, peso 600 e cantos retos. Tamanhos: pequeno com 12px de texto e 12px 20px de padding; médio com 14px e 14px 24px; grande com 16px 20px no celular e 16px 28px a partir de 640px.

O foco padrão tem contorno de 2px, deslocado 4px, em brand-700; sobre escuro assume gold. PrimaryButton conserva seus próprios utilitários de foco.

### Navigation

Links claros em oliva profundo, com sublinhado animado dourado ao passar o ponteiro. No celular, botão de 44px abre painel marfim; Escape fecha o menu. O destino escolhido fecha o painel.

### Cards / Containers

O cartão de endereço é branco, com borda ink a 10%, padding 28px/40px e detalhe oliva no topo. As áreas de serviço e avaliações preservam os blocos editoriais e divisores da implementação.

### Service dialog

Modal marfim, padding 28px/40px, rolagem interna limitada a 90dvh; no celular se ancora à base e no desktop centraliza. Clique fora, botão fechar e Escape fecham; foco inicial, contenção de Tab, conteúdo de fundo inerte e retorno de foco são parte do comportamento.

### FAQ and reviews

FAQ usa details/summary nativos com divisores, alvos mínimos de 44px e respostas em ink-soft. Avaliações mantêm trechos e autorias fornecidos, com nota e contagem contextualizadas pela data de registro. Link externo conduz ao perfil completo.

### Brand assets and contact

Usar os arquivos reais indicados por app/lib/brand.ts. Os dois PNGs preservam os pixels dos anexos originais; a identificação de origem foi acrescentada somente aos metadados. O telefone e WhatsApp confirmados são (31) 2601-0969. Contatos, endereço e links vêm desse arquivo; não duplicar dados em componentes novos.

## Do's and Don'ts

### Do:
- **Do** preservar o logo completo e a peça institucional integral, inclusive no celular.
- **Do** manter Marcellus nos títulos e Manrope na leitura e nos controles.
- **Do** preservar foco visível, navegação por teclado e movimento reduzido.
- **Do** manter o contato com a Dra. Fernanda claro e acessível.
- **Do** respeitar prefers-reduced-motion: sem animação de assinatura e transições reduzidas.

### Don't:
- **Don't** inventar e-mail, número de OAB, domínio, horários ou resultados.
- **Don't** introduzir dados ou identidade de outro escritório.
- **Don't** alterar a estrutura ou remover FAQ, modais, avaliações e canais existentes durante ajustes visuais.
- **Don't** declarar contraste verificado sem evidência da validação.
