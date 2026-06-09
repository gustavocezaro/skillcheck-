# SkillCheck — Landing page

Site estático. Não precisa de build, servidor de aplicação nem banco de dados — é só HTML + CSS + JS que roda no navegador.

## Como subir

Suba a pasta inteira (mantendo a estrutura) em qualquer hospedagem de site estático:

- **Vercel / Netlify:** arraste a pasta `site-source` ou aponte o deploy para ela. A página principal é `index.html`.
- **GitHub Pages:** coloque os arquivos na raiz do repositório (ou na pasta `/docs`) e ative o Pages.
- **Hospedagem tradicional (cPanel / FTP):** envie `index.html` e a pasta `landing/` para a pasta pública (`public_html`), preservando os caminhos.

A página de entrada é `index.html`.

## Estrutura

```
site-source/
├── index.html            ← página (carrega tudo abaixo)
└── landing/
    ├── styles.css        ← todo o estilo
    ├── i18n.jsx          ← TODOS os textos (PT e EN) — edite aqui o conteúdo
    ├── tweaks-panel.jsx  ← painel de variações (paleta / idioma / hero)
    ├── primitives.jsx    ← helpers (animações, tilt 3D)
    ├── nav.jsx           ← topo / navegação
    ├── hero.jsx          ← seção inicial (3 variantes de hero)
    ├── problem.jsx       ← seção "o problema"
    ├── how.jsx           ← "como funciona" (scroll animado)
    ├── scenarios.jsx     ← cenários
    ├── outputs.jsx       ← resultados (dashboards)
    ├── pricing.jsx       ← planos
    ├── contact.jsx       ← formulário de contato
    ├── faq-cta.jsx       ← FAQ + rodapé
    └── app.jsx           ← monta a página
```

## Onde editar o quê

- **Trocar textos, preços, dados de contato:** `landing/i18n.jsx` (tudo em português está no bloco `pt:`).
- **Cores e tipografia:** `landing/styles.css` (variáveis no topo, `:root`).
- **Dados de contato da empresa:** `landing/i18n.jsx`, procure por `channels`, `address`, `hours`.

## Observação técnica

O HTML usa React + Babel carregados via CDN (links no topo do `index.html`). Isso exige conexão com a internet ao abrir a página. Se quiser uma versão 100% offline em arquivo único, peça a versão "standalone".
