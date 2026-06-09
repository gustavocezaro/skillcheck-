// i18n.jsx — PT (default) + EN for SkillTrack landing
const I18N = {
  pt: {
    nav: {
      product: "Produto",
      scenarios: "Cenários",
      outputs: "Resultados",
      pricing: "Planos",
      faq: "FAQ",
      login: "Entrar",
      demo: "Agendar demo",
    },

    /* Three hero directions. Switched via Tweaks (heroVariant) */
    hero: {
      eyebrow: "",
      ctaPrimary: "Contratar",
      ctaGhost: "Ver plataforma",

      // shared by variants A & C
      stat1n: "100%",
      stat1l: "da equipe avaliada -\nnão apenas uma amostra",
      stat2n: "10 ou 15min",
      stat2l: "por sessão · chat ou voz",
      stat3n: "95%",
      stat3l: "menos custo vs.\ncliente oculto presencial",

      variants: {
        // A · conversational (default)
        chat: {
          title_a: "Simulações com IA",
          title_em: "que avaliam",
          title_b: " sua equipe de verdade.",
          lede: "A SkillCheck conversa com seus colaboradores em cenários realistas, por chat ou voz, e mede como cada um performa. Avaliação, score, indicadores e evidências.",
        },
        // B · measurement-led
        metrics: {
          title_a: "Performance da equipe em",
          title_em: "dado mensurável",
          title_b: ".",
          lede: "Cada simulação vira score, indicador e evidência citada. Você decide o formato da avaliação - a plataforma entrega, auditável trecho a trecho.",
        },
        // C · personas-led
        personas: {
          title_a: "Configure a persona.",
          title_em: "A IA assume",
          title_b: " o papel.",
          lede: "Cliente, supervisor, paciente, comprador. A IA mantém o personagem durante toda a conversa e gera a avaliação ao final — em escala, sem cliente oculto.",
        },
      },
    },

    sim: {
      live: "Sessão ao vivo",
      voice: "Voz",
      text: "Texto",
      persona: "Cliente · indeciso econômico",
      contextNow: "Sondagem da necessidade",
      msgAi: "Olha, eu quero um tênis pra correr, mas confesso que tô meio perdido. Vi um modelo de R$ 899 ali, mas será que vale tanto assim? Pra mim parece tudo igual.",
      msgUser: "Faz sentido — antes de te mostrar opção: você corre na rua, esteira ou trilha? E faz uns quantos quilômetros por semana?",
      analyzing: "Avaliando · sondagem",
      score: "8.5",
      criterion: "Sondagem",
      floatTitle: "Score em tempo real",
      floatHint: "Critério · Conhecimento de produto",
      voiceLabel: "Voz ao vivo",
      voiceTime: "00:14",
      userRole: "Vendedor",
    },

    personas: {
      eyebrow: "Personas configuráveis",
      cycleHint: "Trocando persona…",
      list: [
        {
          initial: "M",
          name: "Marcos",
          archetype: "Indeciso · econômico",
          traits: ["Orçamento limitado", "Conhece pouco", "Hesita no fechamento"],
          line: "Vi esse modelo aí, mas será que vale tudo isso mesmo? Pra mim parece tudo igual.",
        },
        {
          initial: "R",
          name: "Renata",
          archetype: "Exigente · informada",
          traits: ["Pré-pesquisada", "Compara specs", "Ticket alto"],
          line: "Comparei online com a versão anterior. Vale a pena pagar a diferença pelo novo modelo?",
        },
        {
          initial: "J",
          name: "João",
          archetype: "Apressado · prático",
          traits: ["Tempo curto", "Recompra", "Decisão rápida"],
          line: "Olha, eu já comprei aqui, quero o mesmo modelo, número 41. Tem em estoque?",
        },
      ],
    },

    problem: {
      eyebrow: "O problema",
      h: "Você sabe quem na sua operação realmente performa?",
      sub: "Avaliação de habilidade na ponta é cara, esporádica e subjetiva.\nTrês caminhos comuns - todos com limites estruturais.",
      c1: {
        n: "01",
        h: "Cliente oculto presencial",
        p: "Custa entre R$ 200 e R$ 600 por visita. Cobre uma amostra mínima da equipe, resultados chegam em semanas e a variação entre avaliadores compromete a comparabilidade.",
      },
      c2: {
        n: "02",
        h: "Supervisão direta",
        p: "Depende do tempo do gerente. Em redes com várias lojas, funcionários ou turnos, é matematicamente impossível supervisionar todo mundo com a mesma régua.",
      },
      c3: {
        n: "03",
        h: "Investimento em treinamentos",
        p: "Ensina, mas não valida. O colaborador termina o curso e ninguém mede se ele de fato aplica o conteúdo na prática.",
      },
    },
    how: {
      eyebrow: "Como funciona",
      h: "Quatro passos, infinitas sessões.",
      sub: "Conversas realistas simuladas com IA para avaliar o conhecimento, comportamento e desempenho profissional. ",
      steps: [
        {
          n: "01",
          h: "Você desenha o cenário",
          p: "Defina objetivo, persona, regras, procedimentos, formato de avaliação e insere materiais de apoio. Cenário fica versionado e reutilizável.",
        },
        {
          n: "02",
          h: "A IA interage de forma realista",
          p: "Cliente, supervisor, auditor, comprador, paciente - a IA mantém personalidade e contexto durante toda a conversa, por texto ou voz.",
        },
        {
          n: "03",
          h: "O colaborador conduz a sessão",
          p: "Acesso pelo portal web. Ele sabe que está sendo avaliado. A conversa, no entanto, segue dinâmica e realista.",
        },
        {
          n: "04",
          h: "Plataforma entrega o resultado",
          p: "Score, indicadores, comentários, relatórios.  O formato que você definir. Com evidência trecho a trecho e indicadores consolidados.",
        },
      ],
      frame: {
        scenarioTtl: "Editor de cenário · Vendas / Tênis esportivo",
        scenarioDraft: "Cenários",
        bRows: [
          ["Persona", ["Cliente", "Indeciso", "Econômico"]],
          ["Contexto", ["Loja física", "Compra para si"]],
          ["Objetivo", ["Sondagem", "Recomendação", "Fechamento"]],
          ["Avaliação", ["7 critérios"]],
          ["Anexos", ["Catálogo PDF", "Política de troca"]],
        ],
        scoreTtl: "Sessão #1284 · Avaliação concluída",
        scoreLabel: "Score final",
        critRows: [
          ["Abordagem", 92],
          ["Sondagem", 85],
          ["Conhecimento de produto", 78],
          ["Contorno de objeção", 71],
          ["Fechamento", 80],
        ],
      },
    },

    scenarios: {
      eyebrow: "Cenários",
      h: "Configure qualquer interação.\nA IA assume o papel.",
      sub: "Vendas, atendimento, compliance, operação.\nCada cenário roda em chat ou voz, com persona, contexto e resultados próprios.",
      featured: {
        tag: "Comercial · Varejo",
        h: "Vendas em loja",
        p: "A IA simula clientes com perfis diferentes — indeciso, exigente, apressado. Avalia sondagem, contorno de objeções, fechamento e cordialidade.",
        personas: [
          { initial: "M", name: "Marcos · indeciso econômico", meta: "Orçamento limitado · conhece pouco" },
          { initial: "R", name: "Renata · exigente informada", meta: "Já pesquisou · compara specs" },
          { initial: "J", name: "João · apressado prático", meta: "Tempo curto · recompra" },
        ],
      },
      tiles: [
        {
          tag: "Atendimento ao cliente",
          h: "Atendimento SAC",
          p: "Cliente irritado, dúvida técnica, pedido de cancelamento, retenção. Avalia empatia, escuta ativa e resolução na primeira interação.",
        },
        {
          tag: "Compliance & conduta",
          h: "Postura ética e LGPD",
          p: "Auditor virtual avalia aderência a políticas internas, antissuborno, privacidade e brand standards antes que o problema aconteça.",
        },
        {
          tag: "Operação & logística",
          h: "SOP, segurança e SLA",
          p: "Procedimentos internos, conferência de mercadoria, tratamento de divergência e protocolos críticos validados em conversa.",
        },
        {
          tag: "Onboarding & certificação",
          h: "Onboarding",
          p: "Certificação prática de novos colaboradores antes da liberação para operação real. Histórico individual desde o primeiro dia.",
        },
      ],
      customCta: {
        tag: "Sob medida",
        h: "Qualquer cenário que sua operação precise.",
        p: "Crie do zero, use um template ou peça desenho consultivo. Versionável, auditável, exportável.",
        cta: "Conversar com a gente →",
      },
    },

    outputs: {
      eyebrow: "Resultados",
      h: "Você decide o formato.\nA plataforma entrega.",
      sub: "Cada conversa vira dado estruturado. O recorte é seu: score numérico, indicadores, comentários qualitativos ou relatórios consolidados.",

      formats: {
        title: "Formato de avaliação configurável por cenário",
        items: [
          { k: "01", h: "Score numérico", p: "Nota por critério (0-10), agregada e ponderada pela análise que você define." },
          { k: "02", h: "Indicadores", p: "KPIs binários ou de escala: aderência a script, citou tecnologia, cumpriu protocolo." },
          { k: "03", h: "Comentários qualitativos", p: "Avaliação em texto livre - fortalezas, pontos de melhoria e recomendações pontuais." },
          { k: "04", h: "Relatórios consolidados", p: "Reports por loja, equipe, região ou ciclo. PDF, CSV, exportação por API." },
        ],
      },

      score: {
        ttl: "Score da sessão",
        desc: "Nota agregada, ponderada pelos critérios da sua avaliação.",
        label: "Sessão #1284",
      },
      graph: {
        ttl: "Mapa de skills da equipe",
        desc: "Veja onde a equipe brilha e onde precisa de reforço.\nPor critério, loja e turno.",
      },
      rank: {
        ttl: "Ranking por colaborador",
        desc: "Compare performance em diferentes perfis de cliente.",
      },
      evol: {
        ttl: "Evolução individual",
        desc: "Cada vendedor acumula histórico. Veja o efeito de treinamentos e feedbacks.",
      },
      evid: {
        ttl: "Evidência trecho por trecho",
        desc: "Nada é caixa-preta. Cada nota vem com os trechos exatos da conversa que motivaram a pontuação.",
        sessionLabel: "Sessão · sondagem da necessidade",
        bubbles: [
          { who: "ai", lbl: "Cliente · IA", t: "Eu queria um tênis pra correr, mas confesso que tô meio perdido nas opções." },
          { who: "user", lbl: "Vendedor", t: "Faz sentido. Antes de te mostrar opção — você corre na rua, esteira ou trilha?" },
          { who: "ai", lbl: "Cliente · IA", t: "Mais na rua mesmo. E uns 15 km por semana, no máximo." },
          { who: "user", lbl: "Vendedor", t: "Perfeito. Pra esse volume e asfalto, eu te mostraria três opções — uma com mais amortecimento e duas mais leves." },
        ],
        evals: [
          {
            crit: "Sondagem da necessidade",
            v: "8.5",
            quote: "Antes de te mostrar opção — você corre na rua, esteira ou trilha?",
            note: "Pergunta aberta capturou a finalidade antes de sugerir produto. Ideal.",
          },
          {
            crit: "Conhecimento de produto",
            v: "7.8",
            quote: "Pra esse volume e asfalto, eu te mostraria três opções...",
            note: "Boa contextualização. Poderia ter citado tecnologia específica do modelo.",
          },
        ],
      },
    },

    faq: {
      eyebrow: "Perguntas frequentes",
      h: "Tudo que perguntam antes do primeiro piloto.",
      sub: "Não encontrou? Conversa com a gente.",
      items: [
        { q: "Como monto os cenários?", a: "Você não está sozinho. Nossa equipe te treina no editor de cenários e, se preferir, desenhamos os cenários com você - do levantamento da rubrica e dos perfis de cliente até a publicação. No plano Corporativo, o desenho consultivo de cenários é parte do escopo." },
        { q: "Posso subir materiais de apoio?", a: "Sim. Manuais de instrução, protocolos internos, políticas, catálogos de produto, documentos regulatórios - qualquer material que a IA precise para conduzir a conversa e avaliar o desempenho. Os documentos enriquecem o contexto do personagem e servem de fonte para a análise crítica do score." },
        { q: "Como a IA mantém o personagem durante a conversa?", a: "Você define persona, contexto, restrições e objetivos. A IA é orientada a manter caráter e nunca quebra o papel, mesmo que o colaborador tente. Cada cenário pode incluir 'âncoras' que reforçam o comportamento do personagem em pontos específicos." },
        { q: "Posso escolher o formato da avaliação?", a: "Sim. Em cada cenário você decide se quer score numérico, indicadores binários, comentários qualitativos, relatórios consolidados ou uma combinação dos quatro. A avaliação é totalmente configurável e versionável." },
        { q: "Voz funciona mesmo em tempo real?", a: "Sim. Sessão por voz roda em conversa contínua, com latência baixa o suficiente para soar natural. A transcrição completa fica disponível ao final, junto com o áudio." },
        { q: "Como vocês tratam LGPD e consentimento?", a: "O colaborador sabe que está sendo avaliado e aceita explicitamente os termos antes de cada sessão. Dados são isolados por empresa (multi-tenancy), retenção é configurável e há direito ao apagamento sob demanda." },
        { q: "Vamos fazer integração com nosso HRIS ou LMS?", a: "Sim, no plano Corporativo. Integramos via API com os principais sistemas para sincronizar colaboradores, atribuir sessões e exportar resultados consolidados." },
        { q: "Quanto tempo leva para colocar o primeiro cenário em produção?", a: "Cenário estruturado roda em até duas semanas: setup, onboarding da equipe e avaliações. Cenários simples pode ir ao ar no mesmo dia." },
      ],
    },

    pricing: {
      eyebrow: "Planos",
      h: "Pacotes por volume.\nSem mensalidade fixa.",
      sub: "Você contrata um pacote de sessões para serem consumidas em até 90 dias.\nSem mensalidade fixa, sem letra miúda.",
      note: "Ambos os planos são personalizáveis. Você decide volume, frequência e formato da avaliação.",
      priceLabel: "valor por sessão",
      chatLabel: "Chat",
      voiceLabel: "Voz",
      plans: [
        {
          tag: "",
          name: "Business",
          volume: "500 sessões",
          period: "válidas por 90 dias",
          duration: "Sessões de 10 min",
          desc: "",
          prices: { chat: "R$ 14", voice: "R$ 19" },
          features: [
            "Personas configuráveis",
            "Chat e voz",
            "Score auditável com evidência",
            "Rubrica customizada com sua equipe",
            "Catálogo de produtos & materiais de apoio",
            "Desenho consultivo de cenários",
            "Suporte prioritário",
          ],
          cta: "Contratar",
          highlighted: true,
        },
        {
          tag: "Enterprise",
          name: "Corporativo",
          volume: "2.000+ sessões",
          period: "ciclos contínuos",
          duration: "Sessões de 15 min",
          desc: "",
          prices: { custom: "Sob consulta" },
          features: [
            "Tudo da Operação",
            "Personas com dados da rede",
            "SLA dedicado · 99,9%",
            "Onboarding guiado",
            "Integrações HRIS / LMS via API",
            "Gerente de conta dedicado",
          ],
          cta: "Falar com Vendas",
          highlighted: false,
        },
      ],
    },
    cta: {
      eyebrow: "Próximo passo",
      h: "Pronto para transformar sua operação?",
      p: "Escolha o melhor plano e comece a avaliar sua equipe hoje mesmo.",
      ctaPrimary: "Contratar",
    },

    contact: {
      eyebrow: "Vamos conversar",
      h: "Desenhe o primeiro cenário com a gente.",
      sub: "Em até 1 dia útil retornamos com uma proposta de piloto sob medida para o seu setor.",
      formTitle: "Preços personalizados, conversa próxima",
      formSub: "Conte um pouco sobre você — a gente prepara uma demo focada na sua realidade.",
      fields: {
        name: { label: "Nome completo", placeholder: "Como podemos te chamar?" },
        company: { label: "Empresa", placeholder: "Nome da empresa" },
        email: { label: "E-mail corporativo (opcional)", placeholder: "voce@empresa.com" },
        phone: { label: "Telefone", placeholder: "(00) 00000-0000" },
        size: {
          label: "Número de colaboradores",
          placeholder: "Selecione...",
          options: ["Até 50", "51 – 200", "201 – 500", "501 – 2.000", "2.000+"],
        },
        interest: {
          label: "Tenho interesse em",
          options: [
            { value: "subscribe", label: "Contratar" },
            { value: "info", label: "Mais informações" },
          ],
        },
        message: { label: "O que você quer avaliar?", placeholder: "Conte brevemente o cenário (vendas em loja, atendimento, compliance...)" },
      },
      submit: "Enviar contato",
      submitting: "Enviando...",
      success: {
        title: "Recebemos seu contato.",
        body: "Em até 1 dia útil um especialista entra em contato pelo e-mail informado.",
        again: "Enviar outro contato",
      },
      sideTitle: "Ou fale direto com a gente",
      sideSub: "Equipe comercial Tevon Labs — horário comercial (GMT-3).",
      channels: [
        { k: "E-mail",   v: "comercial@tevon.com.br", href: "mailto:comercial@tevon.com.br" },
        { k: "Telefone", v: "(11) 94191-1520",     href: "tel:+5511941911520" },
      ],
      address: {
        title: "Sede",
        lines: ["Av. Brigadeiro Faria Lima, 0000", "Itaim Bibi · São Paulo · SP", "CEP 00000-000"],
      },
      hours: {
        title: "Atendimento",
        lines: ["Seg – Sex · 09:00 – 19:00", "Resposta em até 1 dia útil"],
      },
    },
    footer: {
      tag: "Workforce intelligence analysis platform",
      legal: "© 2026 SkillCheck · Tevon Labs",
      links: { privacy: "Privacidade", security: "Segurança", contact: "Contato" },
    },
  },

  en: {
    nav: { product: "Product", scenarios: "Scenarios", outputs: "Outputs", pricing: "Plans", faq: "FAQ", login: "Sign in", demo: "Book a demo" },
    hero: {
      eyebrow: "",
      ctaPrimary: "Subscribe",
      ctaGhost: "See the platform",
      stat1n: "100%",
      stat1l: "of the team evaluated — not just a sample",
      stat2n: "15min",
      stat2l: "per session · chat or voice",
      stat3n: "—95%",
      stat3l: "lower cost vs. in-person mystery shopping",
      variants: {
        chat: {
          title_a: "AI simulations",
          title_em: "that score",
          title_b: " your team for real.",
          lede: "SkillTrack talks to your employees in realistic scenarios — chat or voice — and measures how each one actually performs. Score, indicators and transcript-cited evidence.",
        },
        metrics: {
          title_a: "Team performance as",
          title_em: "measurable data",
          title_b: ".",
          lede: "Every simulation becomes a score, an indicator, a cited piece of evidence. You pick the format — the platform delivers, auditable line by line.",
        },
        personas: {
          title_a: "Configure a persona.",
          title_em: "AI takes",
          title_b: " the role.",
          lede: "Customer, supervisor, patient, buyer. AI holds the character through the whole conversation and delivers the evaluation at the end — at scale, no mystery shoppers.",
        },
      },
    },
    sim: {
      live: "Live session",
      voice: "Voice",
      text: "Text",
      persona: "Customer · undecided / budget",
      contextNow: "Needs discovery",
      msgAi: "Look, I want a pair of running shoes, but honestly I'm a bit lost. I saw a $190 model over there — is it really worth that much? Looks the same to me.",
      msgUser: "Makes sense — before I show you options: do you run on the road, treadmill, or trails? And how many km per week?",
      analyzing: "Scoring · discovery",
      score: "8.5",
      criterion: "Discovery",
      floatTitle: "Live scoring",
      floatHint: "Criterion · Product knowledge",
      voiceLabel: "Live voice",
      voiceTime: "00:14",
      userRole: "Sales rep",
    },
    personas: {
      eyebrow: "Configurable personas",
      cycleHint: "Switching persona…",
      list: [
        { initial: "M", name: "Marcus", archetype: "Undecided · budget", traits: ["Limited budget", "Low knowledge", "Hesitates to close"], line: "I saw that one — is it really worth it? Looks the same to me." },
        { initial: "R", name: "Renata", archetype: "Demanding · informed", traits: ["Pre-researched", "Compares specs", "High ticket"], line: "I compared this online with last year's model. Is the upgrade worth it?" },
        { initial: "J", name: "John", archetype: "Pragmatic · fast", traits: ["No time", "Repeat buyer", "Quick decision"], line: "I've bought here before. Same model, size 9. Got it in stock?" },
      ],
    },
    problem: {
      eyebrow: "The problem",
      h: "Do you actually know who in your operation performs?",
      sub: "Skill assessment on the front line is expensive, sporadic, and subjective. Three common paths — all with structural limits.",
      c1: { n: "01", h: "In-person mystery shopping", p: "$30–$100 per visit. Covers a tiny sample, results take weeks, and inter-evaluator variation compromises comparability." },
      c2: { n: "02", h: "Direct supervision", p: "Depends on the manager's time. Across stores or shifts, it's mathematically impossible to supervise everyone with the same yardstick." },
      c3: { n: "03", h: "Standardized training", p: "It teaches but doesn't validate. The employee finishes the course and nobody measures whether they actually apply it in a real customer conversation." },
    },
    how: {
      eyebrow: "How it works",
      h: "Four steps, infinite sessions.",
      sub: "Realistic AI-simulated conversations to assess knowledge, behavior and professional performance.",
      steps: [
        { n: "01", h: "You design the scenario", p: "Set objective, persona, rules, procedures, scoring rubric and reference materials. Versioned and reusable." },
        { n: "02", h: "AI takes the role", p: "Customer, supervisor, auditor, buyer, patient — AI holds personality and context for the whole conversation, over text or voice." },
        { n: "03", h: "Employee runs the session", p: "Web portal access. They know they're being evaluated — yet the conversation stays dynamic and realistic." },
        { n: "04", h: "Platform delivers the output", p: "Score, indicators, comments, reports — in whatever format you choose. With transcript-cited evidence and consolidated dashboards." },
      ],
      frame: {
        scenarioTtl: "Scenario editor · Sales / Athletic shoes",
        scenarioDraft: "Draft · v3",
        bRows: [
          ["Persona", ["Customer", "Undecided", "Budget"]],
          ["Context", ["Brick-and-mortar", "Self-purchase"]],
          ["Objective", ["Discovery", "Recommendation", "Close"]],
          ["Rubric", ["7 criteria"]],
          ["Attachments", ["Product catalog", "Return policy"]],
        ],
        scoreTtl: "Session #1284 · Evaluation complete",
        scoreLabel: "Final score",
        critRows: [
          ["Approach", 92],
          ["Discovery", 85],
          ["Product knowledge", 78],
          ["Objection handling", 71],
          ["Close", 80],
        ],
      },
    },
    scenarios: {
      eyebrow: "Scenarios",
      h: "Configure any interaction. AI takes the role.",
      sub: "Sales, customer care, compliance, operations — each scenario runs in chat or voice, with its own persona, context, and rubric.",
      featured: {
        tag: "Sales · Retail",
        h: "In-store sales",
        p: "AI plays different customer profiles — undecided, demanding, in a rush. Scores discovery, objection handling, close, and rapport.",
        personas: [
          { initial: "M", name: "Marcus · undecided / budget", meta: "Limited budget · low product knowledge" },
          { initial: "R", name: "Renata · demanding / informed", meta: "Pre-researched · compares specs" },
          { initial: "J", name: "John · pragmatic / fast", meta: "No time · repeat purchase" },
        ],
      },
      tiles: [
        { tag: "Customer care", h: "Front-line service & support", p: "Angry customer, technical question, cancellation, retention. Scores empathy, active listening and first-contact resolution." },
        { tag: "Compliance & conduct", h: "Ethics, anti-bribery & privacy", p: "Virtual auditor scores adherence to internal policies, anti-bribery, privacy and brand standards — before incidents happen." },
        { tag: "Operations & logistics", h: "SOPs, safety & SLA", p: "Internal procedures, cargo verification, discrepancy handling, critical protocols — validated in conversation." },
        { tag: "Onboarding & certification", h: "Ready for the front line in 30 days", p: "Practical certification of new hires before release to real operation. Individual track record from day one." },
      ],
      customCta: {
        tag: "Bespoke",
        h: "Any scenario your operation needs.",
        p: "Build from scratch, use templates, or co-design with our team. Versioned, auditable, exportable.",
        cta: "Talk to us →",
      },
    },
    outputs: {
      eyebrow: "Outputs",
      h: "You choose the format. The platform delivers.",
      sub: "Every conversation becomes structured data. The cut is yours: numeric scores, indicators, qualitative comments, or consolidated reports.",
      formats: {
        title: "Evaluation format · configurable per scenario",
        items: [
          { k: "01", h: "Numeric score", p: "Score per criterion (0-10), aggregated and weighted by your rubric." },
          { k: "02", h: "Indicators", p: "Binary or scale KPIs: script adherence, mentioned tech, followed protocol." },
          { k: "03", h: "Qualitative comments", p: "Free-text evaluation — strengths, areas to improve, targeted recommendations." },
          { k: "04", h: "Consolidated reports", p: "Reports by store, team, region or cycle. PDF, CSV, API export." },
        ],
      },
      score: { ttl: "Session score", desc: "Aggregated score, weighted by your rubric criteria.", label: "Session #1284" },
      graph: { ttl: "Team skill map", desc: "See where the team shines and where it needs work — by criterion, store, and shift." },
      rank: { ttl: "Employee ranking", desc: "Compare performance across customer profiles." },
      evol: { ttl: "Individual evolution", desc: "Each rep accumulates history. See the effect of training and feedback." },
      evid: {
        ttl: "Evidence, line by line",
        desc: "Nothing is black box. Each score comes with the exact transcript line that drove it.",
        sessionLabel: "Session · needs discovery",
        bubbles: [
          { who: "ai", lbl: "Customer · AI", t: "I wanted running shoes but honestly I'm lost in the options." },
          { who: "user", lbl: "Sales rep", t: "Makes sense. Before I show options — do you run on road, treadmill, or trails?" },
          { who: "ai", lbl: "Customer · AI", t: "On the road mostly. About 15 km per week, tops." },
          { who: "user", lbl: "Sales rep", t: "Perfect. For that volume on asphalt I'd show you three options — one with more cushioning and two lighter ones." },
        ],
        evals: [
          { crit: "Needs discovery", v: "8.5", quote: "Before I show options — do you run on road, treadmill, or trails?", note: "Open question captured intent before recommending. Textbook." },
          { crit: "Product knowledge", v: "7.8", quote: "For that volume on asphalt I'd show you three options...", note: "Good contextualization. Could have cited specific shoe technology." },
        ],
      },
    },
    faq: {
      eyebrow: "Frequently asked",
      h: "Everything they ask before the first pilot.",
      sub: "Didn't find it? Talk to us.",
      items: [
        { q: "How do I build the scenarios?", a: "You're not on your own. Our team trains you on the scenario editor and, if you prefer, designs the scenarios with you — from rubric and customer-profile discovery to publication. In Operation and Corporate plans, consultative scenario design is part of the scope." },
        { q: "Can I upload supporting materials?", a: "Yes. Instruction manuals, internal protocols, policies, product catalogs, regulatory documents — any material the AI needs to conduct the conversation and evaluate performance. Documents enrich the character's context and serve as the source for the critical analysis of the score." },
        { q: "How does the AI stay in character?", a: "You define persona, context, constraints and goals. The AI is instructed to never break character — even when the employee tries to test it. Each scenario can include 'anchors' that reinforce behavior at specific points." },
        { q: "Can I choose the evaluation format?", a: "Yes. In every scenario you decide whether you want numeric score, binary indicators, qualitative comments, consolidated reports — or any combination. The rubric is fully configurable and versioned." },
        { q: "Does voice really work in real time?", a: "Yes. Voice sessions run as continuous conversation with low enough latency to feel natural. Full transcript is available at session end, alongside the audio." },
        { q: "How do you handle data privacy and consent?", a: "The employee knows they're being evaluated and explicitly accepts terms before each session. Data is tenant-isolated, retention is configurable, and there's right-to-delete on demand." },
        { q: "Do you integrate with our HRIS or LMS?", a: "Yes — in enterprise plans. We integrate via API with major systems to sync employees, assign sessions, and export consolidated results." },
        { q: "How long to get the first scenario in production?", a: "Structured pilot runs in four weeks: week 1 setup, week 2 team onboarding, weeks 3–4 volume execution. A simple scenario can go live the same day." },
      ],
    },

    pricing: {
      eyebrow: "Plans",
      h: "Session packages. No subscription.",
      sub: "You buy a pack of sessions to consume within 90 days. No monthly fee, no fine print.",
      note: "Both plans are customizable. You decide volume, cadence and evaluation format.",
      priceLabel: "per session",
      chatLabel: "Chat",
      voiceLabel: "Voice",
      plans: [
        { tag: "Recommended", name: "Operation", volume: "500 sessions", period: "valid for 90 days", duration: "10-min sessions", desc: "Network with multiple stores and teams running in parallel.", prices: { chat: "$4", voice: "$8" }, features: ["Configurable personas", "Chat and voice", "Auditable scoring with evidence", "Custom rubric co-designed with you", "Product catalog & supporting docs", "Consultative scenario design", "Priority support"], cta: "Talk to sales", highlighted: true },
        { tag: "Enterprise", name: "Corporate", volume: "2,000+ sessions", period: "continuous cycles", duration: "15-min sessions", desc: "Networks with multiple regions, departments and continuous cycles.", prices: { custom: "On request" }, features: ["Everything in Operation", "Personas with network data", "Dedicated SLA · 99.9%", "In-person onboarding", "HRIS / LMS API integrations", "Dedicated account manager"], cta: "Design contract", highlighted: false },
      ],
    },
    cta: { eyebrow: "Next step", h: "Ready to transform your operation?", p: "Choose a plan to get started today.", ctaPrimary: "Subscribe" },
    contact: {
      eyebrow: "Let's talk",
      h: "Design the first scenario with us.",
      sub: "Within 1 business day we'll come back with a pilot proposal tailored to your sector.",
      formTitle: "Custom pricing, close conversation",
      formSub: "Tell us about you — we'll prep a demo focused on your reality.",
      fields: {
        name: { label: "Full name", placeholder: "What should we call you?" },
        company: { label: "Company", placeholder: "Company name" },
        email: { label: "Work email", placeholder: "you@company.com" },
        phone: { label: "Phone (optional)", placeholder: "+1 (000) 000-0000" },
        size: { label: "Number of employees", placeholder: "Select...", options: ["Up to 50", "51 – 200", "201 – 500", "501 – 2,000", "2,000+"] },
        interest: { label: "I'm interested in", options: [{ value: "subscribe", label: "Subscribe" }, { value: "info", label: "More information" }] },
        message: { label: "What do you want to evaluate?", placeholder: "Briefly describe the scenario (in-store sales, support, compliance...)" },
      },
      submit: "Send contact",
      submitting: "Sending...",
      success: { title: "We got your message.", body: "Within 1 business day a specialist will reach out via the email provided.", again: "Send another message" },
      sideTitle: "Or talk to us directly",
      sideSub: "Tevon Labs sales team — business hours (GMT-3).",
      channels: [
        { k: "Email", v: "comercial@tevon.com.br", href: "mailto:comercial@tevon.com.br" },
        { k: "Phone", v: "(11) 94191-1520", href: "tel:+5511941911520" },
      ],
      address: { title: "HQ",  lines: ["Av. Brigadeiro Faria Lima, 0000", "Itaim Bibi · São Paulo · SP", "00000-000"] },
      hours:   { title: "Hours", lines: ["Mon – Fri · 09:00 – 19:00", "Reply within 1 business day"] },
    },
    footer: { tag: "Workforce intelligence platform", legal: "© 2026 SkillTrack · Tevon Labs", links: { privacy: "Privacy", security: "Security", contact: "Contact" } },
  },
};

window.I18N = I18N;
