/* ═══════════════════════════════════════
   INSTITUTE FOR SAHARAN MARGINS (IMS) — DATA
   Launch content. Publications and analysis pieces marked
   "forthcoming" are working titles still to be written — replace
   with final text before public release.
═══════════════════════════════════════ */

window.IMS_DATA = {

  /* Seven research areas — broad thematic remit, narrow geographical area */
  categories: [
    { id: "regimes",     label: "Political regimes & trajectories of power" },
    { id: "securite",    label: "Regional security & armed actors" },
    { id: "economie",    label: "Political economy of resources" },
    { id: "gouvernance", label: "Governance of the margins & conflict resolution" },
    { id: "climat",      label: "Climate, environment & agro-pastoral systems" },
    { id: "migrations",  label: "Migration, mobility & urbanisation" },
    { id: "strategie",   label: "Strategic studies, technology & foresight" }
  ],

  /* Four regional blocs covered by the Institute */
  regions: [
    {
      id: "sahel",
      label: "The Sahel",
      countries: ["Mauritania", "Mali", "Burkina Faso", "Niger", "Chad"]
    },
    {
      id: "lac-tchad",
      label: "Lake Chad Basin",
      countries: ["Chad", "Niger", "Nigeria", "Cameroon"]
    },
    {
      id: "quadrilatere",
      label: "The Sahara",
      countries: ["Libya", "Sudan", "Chad", "CAR"]
    },
    {
      id: "mer-rouge",
      label: "Red Sea & Horn of Africa",
      countries: ["Sudan", "Eritrea", "Djibouti", "Ethiopia", "Somalia"]
    }
  ],

  /* ───────── PUBLICATIONS ─────────
     Types : Note de conjoncture (4-6 p., rythme bimensuel),
             Rapport (30-80 p., deux par an),
             Working Paper (production académique). */
  publications: [
    {
          "slug": "quadrangle-saharien-risque-explosion",
          "title": "Strategic analysis: the risk of the Saharan quadrangle blowing up (Libya-Chad-Sudan-CAR)",
          "category": "securite",
          "type": "Situation note",
          "status": "published",
          "date": "15 July 2026",
          "pages": "Web",
          "cover": "../assets/img/quadrangle-saharien-cover.png",
          "authors": [
                "Tchoudiba Bourdjolbo"
          ],
          "author": "Tchoudiba Bourdjolbo",
          "summary": "Analysis of the conflagration in the Libya-Chad-Sudan-CAR quadrangle: Sudan's war as a regional accelerant, resource predation (gold, antimony, diamonds), more than 15 million displaced people, and levers for donors grounded in the Triple Nexus.",
          "excerpt": "The security architecture of central Africa is collapsing. Sudan's civil war is accelerating a regional conflagration reaching Libya, Chad and CAR — resource predation, more than 15 million displaced people, foreign interference. IMS analyses this metastasis and proposes levers for states and donors.",
          "tags": [
                "Sudan",
                "Chad",
                "Libya",
                "CAR",
                "Triple Nexus",
                "gold",
                "refugees"
          ],
          "body": [
                "<div style=\"background:#17284a;color:#eef1f6;border-left:5px solid #c1440e;border-radius:6px;padding:1.4rem 1.5rem;margin:0 0 1.8rem;\"><span style=\"display:block;font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#c9a86a;margin-bottom:.6rem;\">Executive summary</span><p style=\"margin:0;font-family:Georgia,serif;font-size:1.05rem;line-height:1.6;color:#eef1f6;font-weight:600;\">The security architecture of central Africa is collapsing. Sudan's civil war now acts as the accelerant of a regional conflagration spreading into Libya, Chad and CAR. Between <strong style=\"color:#fff;\">large-scale resource predation</strong> (gold, antimony, diamonds), an <strong style=\"color:#fff;\">unprecedented humanitarian crisis</strong> (more than 15 million displaced) and <strong style=\"color:#fff;\">unabashed foreign interference</strong>, IMS sets out the dynamics of this regional metastasis and proposes concrete levers for states and international donors, grounded in the Triple Nexus approach.</p></div>",
                "<p>This strategic note offers a systemic reading of the conflict dynamics consuming the quadrangle formed by Libya, Chad, Sudan and the Central African Republic (CAR). Designed as a decision-support tool, it combines security imperatives with humanitarian and macroeconomic data drawn from open sources (OSINT). The aim: to give state actors, international financial institutions (World Bank, IMF) and multilateral agencies (UN, NGOs) an actionable reading grid in the face of an unprecedented crisis of civilian protection and state collapse.</p>",
                "<h2>1. Regional metastasis: from the Sudanese epicentre to cross-border military failure</h2>",
                "<p>The security architecture of central Africa has definitively collapsed. If the fall of Muammar Gaddafi in 2011 opened the floodgates of arms proliferation, it is Sudan's civil war that now acts as the accelerant. The Darfur corridor has been transformed into a transnational logistics hub, supplying belligerents across the whole sub-region.</p>",
                "<p>Against this shockwave, the bilateral security architecture promoted by N'Djamena has failed. Drone incursions and strikes on the Chadian border town of Tiné, the occupation of Am-Dafock (CAR) by an over-equipped rebel coalition — the Alliance du sursaut patriotique (ASP) — and the attack on the Erendeguè post in southern Libya expose the glaring inability of the « mixed forces » to contain the threat. This extreme militarisation of the margins comes with unabashed interference by foreign powers — the Russian Africa Corps, Ukrainian support, Emirati funding — displacing global conflicts onto the African theatre.</p>",
                "<blockquote style=\"border-left:4px solid #c1440e;background:#faf6ee;margin:1.6rem 0;padding:1rem 1.25rem;font-family:Georgia,serif;font-style:italic;font-size:1.1rem;color:#241d15;\">Darfur is no longer a local front: it has become the hub from which weapons, fighters and war economies feed four states at once.</blockquote>",
      "<figure style=\"margin:1.8rem 0;\"><img loading=\"lazy\" decoding=\"async\" src=\"../assets/img/carte-geopolitique-detaillee.jpg\" alt=\"Geopolitical map: North-Central Africa — conflict &amp; resources (Libya, Chad, Sudan, CAR)\" style=\"width:100%;height:auto;border-radius:8px;border:1px solid var(--border);\"/><figcaption style=\"font-size:.8rem;color:#8a8168;margin-top:.5rem;\">Detailed map (original source, in English) — conflict zones (Fezzan, Tibesti, Darfur/CAR), gold and diamond deposits, arms and mercenary corridors. Focus on Libya – Chad – Sudan – CAR.</figcaption></figure>",
                "<h2>2. The political economy of violence: large-scale predation of natural resources</h2>",
                "<p>The war economy has supplanted the formal economy. Conflicts now revolve around a logic of illicit extraction that siphons off state tax revenue and deters institutional foreign direct investment (FDI). In each of the four countries, a strategic resource directly funds the armed effort.</p>",
                "<div style=\"overflow-x:auto;margin:1.6rem 0;\"><table style=\"width:100%;border-collapse:collapse;font-family:Segoe UI,Arial,sans-serif;font-size:.9rem;background:#fff;border:1px solid #e3d7bf;\"><caption style=\"caption-side:top;text-align:left;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#9a350a;padding:0 0 .6rem;\">Mapping resource predation</caption><thead><tr><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Country</th><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Target resources</th><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Key figures &amp; predation dynamics</th></tr></thead><tbody><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;\">Chad</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;\">Gold, antimony</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;\">Illicit extraction in the Tibesti and Batha regions generates up to <strong>57 billion CFA francs a week</strong>. Antimony, hyper-critical for the global defence industry, is generating fresh tensions.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;background:#faf6ee;\">Sudan</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;background:#faf6ee;\">Gold</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;background:#faf6ee;\">According to the central bank, <strong>50 to 80% of gold output</strong> is exported illegally. The UN panel of experts puts at <strong>≈ $860M</strong> the gold taken from Darfur mines alone by the RSF in 2024 — enough to fund heavy weapons and fighters.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;\">CAR</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;\">Diamonds, gold</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;\">Since the lifting of the <strong>Kimberley Process</strong> embargo (November 2024), diamonds from rebel-held areas have been mixing with legal stones. Smuggling directly funds rebel coalitions and pays foreign paramilitaries.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;background:#faf6ee;\">Libya</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;background:#faf6ee;\">Oil, gold hub</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;background:#faf6ee;\">Southern Libya serves as a vast laundering facility for gold mined clandestinely in the Sahel, while oil is used as a <strong>bargaining weapon</strong> by militias.</td></tr></tbody></table></div>",
      "<figure style=\"margin:1.8rem 0;\"><img loading=\"lazy\" decoding=\"async\" src=\"../assets/img/infographie-diamant-or.jpg\" alt=\"IPIS infographic — The economic shift: from embargoed diamonds to less-regulated conflict gold.\" style=\"width:100%;height:auto;border-radius:8px;border:1px solid var(--border);\"/><figcaption style=\"font-size:.8rem;color:#8a8168;margin-top:.5rem;\">IPIS infographic — The economic shift: from embargoed diamonds to less-regulated conflict gold.</figcaption></figure>",
                "<h2>3. Human security and macroeconomic asphyxia: the cost of instability</h2>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">An unprecedented civilian protection crisis and health emergency</h3>",
                "<p>The sub-region concentrates the world's most severe forced displacement crisis. In 2026, Sudan counts more than <strong>15 million uprooted people</strong> (9.3 million internally displaced and 4.9 million refugees, according to UNHCR). This spills massively into Chad, which now hosts more than <strong>2.2 million uprooted people</strong> — including close to a million Sudanese refugees arrived since April 2023 — placing its eastern provinces (Ouaddaï, Sila, Ennedi) under unsustainable pressure.</p>",
                "<p>On food security, vast areas of Sudan and hosting zones in Chad have tipped into Phase 4 (Emergency), and in places Phase 5 (Catastrophe/Famine), of the IPC scale — the Integrated Food Security Phase Classification. The militarisation of mining areas is also accompanied by grave violations: gender-based violence (GBV) is systematically used as a weapon of war, and the recruitment of child soldiers by rebel militias, notably in CAR, is destroying the social fabric.</p>",
                "<div style=\"background:#fff;border:1px solid #e3d7bf;border-top:4px solid #c1440e;border-radius:6px;padding:1.1rem 1.3rem;margin:1.8rem 0;\"><div style=\"font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#9a350a;margin-bottom:.7rem;\">The humanitarian emergency in figures</div><ul style=\"list-style:none;margin:0;padding:0;font-size:.92rem;color:#333;\"><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">15,3 M</strong> uprooted in Sudan in 2026 (9.3M internally displaced, 4.9M refugees — UNHCR)</li><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">2,2 M</strong> uprooted people hosted in Chad, including ~936,000 Sudanese refugees</li><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">IPC 4-5</strong> areas in emergency to catastrophe/famine phase (Sudan, eastern Chad)</li><li style=\"padding:.32rem 0;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">16 %</strong> of Sudan's humanitarian response plan funded by mid-2026 ($2.9bn required)</li></ul></div>",
      "<figure style=\"margin:1.8rem 0;\"><img loading=\"lazy\" decoding=\"async\" src=\"../assets/img/infographie-cout-humain.jpg\" alt=\"IPIS infographic — The human cost: mining mortality, actor responsibility and systemic extortion (ACLED / IPIS data).\" style=\"width:100%;height:auto;border-radius:8px;border:1px solid var(--border);\"/><figcaption style=\"font-size:.8rem;color:#8a8168;margin-top:.5rem;\">IPIS infographic — The human cost: mining mortality, actor responsibility and systemic extortion (ACLED / IPIS data).</figcaption></figure>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Financial asphyxia and the destruction of local economies</h3>",
                "<p>The permanent war effort siphons off national budgets at the expense of social investment — health, education. The blocking of vital trade routes, such as the Douala-Bangui logistics corridor by armed groups, triggers hyperinflation that suffocates local populations. At the same time, states are deprived of customs and tax revenue by the dominance of smuggling and the grey economy, making debt repayment or structural investment impossible without intervention by the Bretton Woods institutions (World Bank, IMF).</p>",
                "<h2>4. Multilateral levers and resilience financing (target: donors)</h2>",
                "<p>At this level of criticality, the military approach must be complemented by solid financial and humanitarian engineering. Two priorities stand out.</p>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Closing the funding gap through the Triple Nexus approach</h3>",
                "<p>The United Nations Humanitarian Response Plans (HRPs) for these four countries are chronically underfunded: barely 37% coverage in 2024, under 40% in 2025, and a collapse in 2026 — only 16% of the $2.9 billion required for Sudan alone had been raised by mid-year. Donor countries must rebalance their allocations by adopting the logic of the <strong>Triple Nexus</strong> (Humanitarian-Development-Peace): the task is no longer only to distribute emergency rations, but to fund long-term resilience infrastructure — boreholes, adapted agriculture — to prevent intercommunal conflict between refugees and host populations, particularly in eastern Chad.</p>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Activating legal frameworks and ESG compliance</h3>",
                "<p>Western foreign ministries and multilateral institutions hold powerful legal levers that are underused. Funding armed groups through gold or diamonds constitutes a violation of UN sanctions. International donors should make macroeconomic aid conditional on rigorous mineral traceability mechanisms. Pressure must also be applied to international financial centres — Dubai in particular — through ESG (Environmental, Social, Governance) compliance standards, in order to block the laundering of Saharan minerals that fund terrorism and private mercenary activity.</p>",
                "<h2>5. Summary of strategic recommendations</h2>",
                "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.4rem 0;\"><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">For states in the region</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">A complete overhaul of border security: abandon community militias in favour of professional border guards, and adopt strict geopolitical neutrality towards foreign belligerents.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">For financial institutions (World Bank, IMF)</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Urgently support national budgets — Chad's first — through targeted budget support conditional on anti-corruption measures and the economic integration of refugees, to avoid a macroeconomic crash.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">For the United Nations and NGOs</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Step up advocacy for the release of large-scale funding for IPC phase 4/5 areas, while strengthening civilian protection (PoC) and gender-based violence prevention programmes.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">For donor countries and the EU</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Strengthen the arsenal of targeted sanctions against transnational smuggling networks and impose a strict financial embargo on conflict gold from this quadrangle.</p></div></div>",
                "<h2>6. Sources and methodological references</h2>",
                "<div style=\"font-size:.9rem;color:#444;background:#faf6ee;border:1px solid #e3d7bf;border-radius:6px;padding:.9rem 1.1rem;margin:1.2rem 0;\">This analysis was produced by combining field intelligence with OSINT (Open Source Intelligence) data and reports from international organisations.</div>",
                "<ul style=\"list-style:none;margin:.5rem 0 0;padding:0;font-size:.85rem;color:#5b5346;\"><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">Tchoudiba Bourdjolbo / IMS — « Am-Dafock: when Sudan's war crosses into the Central African Republic », Cahiers du Tibesti collection, 12 July 2026.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">IMS — Geospatial and security analysis on the Libyan front, internal note « The contagion of Sahelian fronts / Southern Libya », July 2026.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">IPC &amp; WFP — 2025-2026 data on food insecurity levels (Phases 4 and 5) in Sudan and the eastern provinces of Chad.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">UNHCR — <a href=\"https://www.unhcr.org/publications/global-appeal-2026\" style=\"color:#c1440e;\">Global Appeal 2026</a> (15.3M uprooted in Sudan) &amp; <a href=\"https://data.unhcr.org/en/country/tcd\" style=\"color:#c1440e;\">Operational portal — Chad</a>.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">OCHA — <a href=\"https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-summary\" style=\"color:#c1440e;\">Sudan Humanitarian Needs and Response Plan 2026</a> ($2.9bn required, ~16% funded).</li><li style=\"padding:.3rem 0;\">UN / Panel of Experts on Sudan — <a href=\"https://news.un.org/en/story/2026/07/1167944\" style=\"color:#c1440e;\">« Looted gold and gum arabic are bankrolling Sudan's war »</a> (Darfur gold, ≈ $860M for the RSF in 2024).</li></ul>"
          ]
    },
    {
      slug: "tchad-succession-deby-recompositions",
      title: "Chad after 2021: the Déby succession and clan-military realignments",
      category: "regimes",
      type: "Situation note",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Situation note in preparation on the clan and military balances arising from the succession at the head of the Chadian state since 2021.",
      tags: ["Chad", "succession", "military clans"]
    },
    {
      slug: "rsf-fact-connexion-tchado-soudanaise",
      title: "RSF-FACT: the Chad-Sudan connection and its grey zones",
      category: "securite",
      type: "Situation note",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Situation note in preparation on the movement of people and resources between the Rapid Support Forces, the Chadian FACT constellation and the border areas of Tibesti and Borkou.",
      tags: ["RSF", "FACT", "Tibesti", "Borkou"]
    },
    {
      slug: "haftar-reconfiguration-sud-libyen",
      title: "Haftar and the reconfiguration of Libya's far south",
      category: "regimes",
      type: "Situation note",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Situation note in preparation on power realignments in the Fezzan and their effects on the Chadian and Sudanese margins.",
      tags: ["Libya", "Fezzan", "Haftar"]
    },
    {
      slug: "or-darfour-economie-contrebande",
      title: "Darfur gold: mapping a cross-border smuggling economy",
      category: "economie",
      type: "Situation note",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Situation note in preparation on the gold circuits linking Darfur to Chad, Libya and Gulf markets.",
      tags: ["gold", "Darfur", "smuggling"]
    },
    {
      slug: "recompositions-clanico-militaires-tchad-rapport",
      title: "Clan-military realignments in Chad after 2021",
      category: "regimes",
      type: "Report",
      status: "forthcoming",
      pages: "40-50",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "In-depth report, the flagship of the Institute's launch: a close reading of Chadian power structures since 2021, their clan and military underpinnings, and their regional extensions.",
      tags: ["Chad", "in-depth report", "military clans"]
    },
    {
      slug: "marge-objet-gouvernement-foncier-pastoral",
      title: "Thinking the margin as an object of government: pastoral land tenure in Chad",
      category: "gouvernance",
      type: "Working Paper",
      status: "forthcoming",
      pages: "20-30",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Academic working paper in preparation, linking Chadian pastoral land tenure to a wider reflection on the border and the margin as categories of government.",
      tags: ["pastoral land tenure", "margins", "territorial public policy"]
    },
    {
      slug: "veille-strategique-methode-anticipation",
      title: "Anticipating political ruptures in the Sahelo-Saharan margins: a strategic monitoring method",
      category: "strategie",
      type: "Working Paper",
      status: "forthcoming",
      pages: "15-25",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Methodological working paper in preparation, setting out the Institute's monitoring and foresight framework: rupture indicators, field sources and a reading grid for trajectories of power.",
      tags: ["foresight", "strategic monitoring", "methodology"]
    }
  ],

  /* ───────── DÉCRYPTAGES ─────────
     Format court (1000-1500 mots), signé par le fondateur ou des contributeurs
     invités, sur l'actualité chaude. Calendrier de lancement — à rédiger. */
  decryptages: [
    {
      slug: "tine-drone-humanitarian-crisis-chad-sudan",
      altSlug: "tine-drone-crise-humanitaire-tchad-soudan",
      title: "Tiné: Sudan's War Spills Its Humanitarian Catastrophe onto Chad",
      category: "securite",
      status: "published",
      date: "12 July 2026",
      lang: "en",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "On 18 March 2026, a drone strike killed at least seventeen mourners in Tiné, a border town split between Chad and Sudan. Beyond the military incident lies a runaway humanitarian crisis: 1.3 million refugees, a collapsing reception system and a closed border that traps civilians.",
      body: [
        "<p>On the evening of 18 March 2026, a drone struck a crowd gathered for a funeral, in a Quranic school used as a place of mourning, in Tiné, a border town split in two between Chad and Sudan. The toll — at least seventeen dead, with counts ranging from fifteen to nineteen, and sixty-six people seriously wounded and evacuated to hospital — speaks to the brutality of the act. But behind the military incident lies a wider and more lasting reality: the humanitarian collapse of a border that has become the outlet for Sudan's war.</p>",
        "<h2>A strike on mourning civilians</h2>",
        "<p>The target was not a military position but a funeral gathering. The two Sudanese belligerents traded blame for the strike: the Rapid Support Forces (RSF) denounced a « terrorist attack » by the Sudanese army in violation of Chadian sovereignty, while Chadian military sources attribute the strike to an RSF drone, already accused of repeated incursions. In response, President Mahamat Idriss Déby Itno convened a defence council and placed the army on maximum alert along the border, promising reprisals against any further attack.</p>",
        "<p>This is not an isolated episode: it is the fourth attack on the town since the start of the Sudanese conflict. The repetition says it all — February's closure of a 1,400-kilometre border did nothing to halt the incursions, and each strike brings N'Djamena a step closer to direct entry into the war.</p>",
        "<h2>Tiné, strategic lock and humanitarian corridor</h2>",
        "<p>Tiné is no ordinary town. A stronghold of the Zaghawa community, its urban area straddling both Chadian and Sudanese territory, it is at once a reservoir of mobilisable fighters, a cross-border logistical hub and a corridor for civilians from North Darfur fleeing the violence. Since the RSF conquered large swathes of Darfur, the town has emerged as one of the few pockets of armed resistance, held by a cross-border mobilisation of Chadian Zaghawa fighters and elements of the Chadian forces who defected to join their Sudanese allies in the regular army.</p>",
        "<p>This communal entanglement is the heart of the problem. The Zaghawa fight on both sides — the rank and file within the Sudanese army, several elites and Chadian officers in support of the RSF; the Tama, historic rivals, have aligned with the RSF, deepening the inter- and intra-communal fractures of the Sudanese-Chadian space. As Emirati support for the RSF, long routed through N'Djamena, wanes and Chad shifts toward a more neutral posture, Tiné becomes an obstacle the RSF seeks to remove. The porousness of the border does the rest: fighters cross at will, making the crisis structurally durable.</p>",
        "<h2>A slow-motion humanitarian catastrophe</h2>",
        "<p>This is where the gravest — and quietest — drama unfolds. Chad now hosts around 1.3 million Sudanese refugees, more than 900,000 of them having arrived since the war began in 2023, on top of some 400,000 taken in since the first Darfur crisis of 2003. One in thirteen people in Chad is now a refugee; in the east of the country, it is one in three. Chad has become the leading destination for displaced Sudanese — and its reception system, long held up as a model, is buckling under the strain.</p>",
        "<p>The immediate cause is financial. Available assistance per refugee per month fell to 4 dollars in 2025, down from 11 dollars in 2022. For lack of resources, UNHCR has had to close two of its three registration centres; the agency ended 2025 with barely a third of the resources it needed, and a 428-million-dollar shortfall threatens to cut assistance further. More than 71,000 refugee families in eastern Chad have received no shelter assistance. In February, the United Nations launched a 1.6-billion-dollar appeal for Sudanese refugees across seven countries — an alarm that has, for the most part, gone unanswered.</p>",
        "<p>On the ground, the consequences are already here. The camps — Iridimi, Touloum, Amnabak — sit in provinces that were among Chad's poorest even before the war. Famine and malnutrition are setting in, cholera thrives on degraded sanitation, and children are out of school. Hunger and idleness open the way to the recruitment of minors by armed factions, while women and girls pay the heaviest price of the violence, up to the most inhuman treatment. The first victims of this war wear no uniform.</p>",
        "<h2>The closed border, or the humanitarian trap</h2>",
        "<p>Facing the incursions, N'Djamena chose closure. But a 1,400-kilometre cordon that the state has neither the logistics nor the manpower to hold does not stop RSF fighters or the Toroboro, who know the terrain perfectly. It does, however, lock in civilians. By banning crossings in both directions, the Chadian authorities prevent Sudanese fleeing the violence from reaching the camps — even as, according to the UN, nearly 60 % of Sudan's population needs urgent aid. The relocation of refugees from Tiné to camps farther from the border, decided to clear ground for the army, illustrates the shift: security logic takes precedence over the protection of people.</p>",
        "<h2>A regional spiral</h2>",
        "<p>The situation now extends well beyond the Sudanese conflict alone. Cross-border militarisation, the pressure of refugee movements and the internal weakening of the Chadian state apparatus reinforce one another in a dangerous feedback loop. The government's short-term choices — opportunistic support, then repositioning — erode its domestic legitimacy while externalising the conflict. A possible RSF rapprochement with other communities of the Chadian-Sudanese space, as the Zaghawa axis loosens, could in time even weigh on the stability of N'Djamena itself. Tiné is no longer a periphery: it is a resilience test for the entire regional security architecture.</p>",
        "<h2>Outlook and points to watch</h2>",
        "<p>Three developments deserve close attention. First, humanitarian aid: without a rapid closing of the funding gap, the winter of 2026 looms as one of deeper cuts, worse conditions and avoidable excess mortality in the eastern camps. Second, the military threshold: a Chadian riposte to a fresh strike would turn a spillover into direct engagement, with a vastly multiplied humanitarian cost. Third, the communal balance: any realignment of Zaghawa-Tama-Toubou-Arab alliances around the RSF would make the already-exhausted eastern border the next fault line. In every case, the priority that should come first — securing the camps, reopening humanitarian access, protecting civilians caught between two fires — is precisely the one the ongoing militarisation pushes into the background.</p>"
      ]
    },
    {
      slug: "am-dafock-guerre-soudan-rca",
      title: "Am-Dafock: when Sudan's war crosses into the Central African Republic",
      category: "securite",
      status: "published",
      date: "12 July 2026",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "On 30 June 2026, the ASP coalition held Am-Dafock for five days against the FACA and their Russian allies. A tactical shift that signals CAR's entry into the orbit of Sudan's war.",
      body: [
        "<p>On 30 June 2026, more than 700 fighters from a new coalition, the Alliance du sursaut patriotique (ASP), took control of Am-Dafock on the Sudanese border. Retaken five days later by the Central African Armed Forces (FACA) and their Russian allies, the town is not an isolated incident: it signals the Central African Republic's entry into the orbit of Sudan's war and the possible opening of a new cycle of armed conflict.</p>",
        "<h2>A tactical shift, not just a raid</h2>",
        "<p>The offensive against Am-Dafock, in Vakaga prefecture, forced the FACA and their Russian auxiliaries to fall back on the MINUSCA base, whose perimeter was hit: three Zambian peacekeepers were wounded, one seriously. The toll approaches thirty dead and more than 16,000 people fled to displacement sites. Government forces only retook the town on 5 July.</p>",
        "<p>The striking fact is not the recapture but the length of the occupation. Since the Coalition of Patriots for Change (CPC) offensive in 2021, armed groups had operated on a harassment logic, never holding ground for more than a day against FACA-Russian air control. <strong>Am-Dafock breaks that pattern.</strong> The coalition has rocket launchers, anti-tank missiles, drones and heavy machine guns capable of absorbing air support. This shift from a war of movement to a war of position is the real warning signal.</p>",
        "<h2>The Sudanese matrix: the Darfur-RSF axis</h2>",
        "<p>The attack was launched from South Darfur, a region under the control of Hemedti's Rapid Support Forces (RSF), with which several groups in north-eastern CAR — the FPRC foremost among them — maintain historic ties. Sudan's war has driven increased circulation of heavy weapons, seasoned fighters and logistics networks across weakly controlled border spaces.</p>",
        "<p>Am-Dafock sits on the corridor linking Darfur to the Sahelian expanses of central Africa, a historic route for rebellions, arms traffickers and foreign fighters. The Central African crisis thus becomes a node in a regional system where Sudan's war, Sahelian realignments and Russia's assertion in central Africa interlock.</p>",
        "<h2>A coalition bound by rejection of Russia and of the third term</h2>",
        "<p>Created in mid-May 2026, the ASP brings together Noureddine Adam's FPRC (wanted by the ICC), Arda Hakouma's MDRPC, the Front commun pour le redressement, elements of the 3R and Florent Kema's FDLP, around former Séléka figures. Two forces bind this disparate assembly: rejection of the Russian military presence and opposition to President Faustin-Archange Touadéra's third term, begun in 2026. In parallel, a Central African Coalition for Recovery (CCR) threatened, from 1 July, to march on Bangui.</p>",
        "<h2>The fault lines: cash flow, MINUSCA and a geographic chokepoint</h2>",
        "<p>The government's main Achilles heel is financial: the state struggles to pay its own soldiers, feeding the risk of defections. Russian disengagement over unpaid bills remains unlikely but not impossible, all the more so as the transition from Wagner to the Africa Corps is unfinished. At the same time, MINUSCA is scaling back its presence in the interior. Am-Dafock is a chokepoint: losing it durably would open a corridor to Birao, then to the routes leading to Bangui. To the west, a second front is taking shape, with risk to the Douala-Bangui corridor, the vital artery of a landlocked country.</p>",
        "<h2>Outlook</h2>",
        "<p>Three scenarios are emerging: <strong>containment</strong> (most likely in the short term), where Russian support stabilises Vakaga and the ASP returns to harassment; <strong>escalation</strong> with a second front opening to the west; and, as tail risk, <strong>destabilisation of the regime</strong> if financial crisis, Russian disengagement and multi-front pressure combine. Watch: the FACA's ability to hold Birao, the regularity of pay, the effectiveness of the joint Chad-CAR force, the Douala-Bangui corridor and the third-term timetable.</p>"
      ]
    },
    {
      slug: "soudan-rapport-de-force-rsf-saf",
      title: "Sudan: where does the balance of power between the RSF and the armed forces stand?",
      category: "securite",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Analysis in preparation on the shifting military and territorial balance between the Rapid Support Forces and the Sudanese army."
    },
    {
      slug: "tchad-transition-deux-ans-apres",
      title: "Chad: the transition, two years on",
      category: "regimes",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Analysis in preparation taking stock of Chad's political transition and its internal realignments."
    },
    {
      slug: "libye-haftar-carte-du-sud",
      title: "Libya: Haftar and the map of the south",
      category: "regimes",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Analysis in preparation on the balance of power in the Fezzan and its repercussions on the Chad-Sudan margins."
    },
    {
      slug: "or-contrebande-etats-faibles-sahara-central",
      title: "Gold, smuggling and weak states in the central Sahara",
      category: "economie",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Analysis in preparation on informal gold circuits and their role in the making of local power in the central Sahara."
    }
  ],

  /* ───────── ÉQUIPE & GOUVERNANCE ─────────
     Le conseil scientifique est en cours de constitution : les postes
     ci-dessous sont des intitulés de couverture géographique à pourvoir,
     pas des noms réels. Ne pas inventer de noms. */
  team: [
    {
      slug: "tchoudiba-bourdjolbo",
      name: "Tchoudiba Bourdjolbo",
      role: "Founder & director",
      initials: "TB",
      bio: "Founder of the Institute for Saharan Margins, Tchoudiba Bourdjolbo conducts research on the Sahelo-Saharan margins and territorial public policy across four regional blocs: the Sahel, the Lake Chad basin, the Sahara and the Red Sea.",
      focus: ["regimes", "gouvernance"],
      isFounder: true
    }
  ],

  scientificCouncilSeats: [
    { country: "Chad",          status: "to be filled" },
    { country: "Mauritania",     status: "to be filled" },
    { country: "Sudan / Darfur", status: "to be filled" },
    { country: "Libya",         status: "to be filled" },
    { country: "DRC",           status: "to be filled" },
    { country: "Sahel",         status: "to be filled" },
    { country: "CAR",           status: "to be filled" }
  ],

  partners: [], // en cours de constitution — aucun partenaire confirmé à ce jour

  /* ───────── ÉVÉNEMENTS ─────────
     Trois formats proposés. Pas d'historique fictif : le programme
     est en cours de constitution, aucune date n'est encore confirmée. */
  eventFormats: [
    {
      title: "Seminars",
      description: "Closed, invitation-only meetings bringing researchers and practitioners together around a specific file."
    },
    {
      title: "Briefings",
      description: "Public or semi-public presentation of the findings of a field mission or a report."
    },
    {
      title: "Short training cycles",
      description: "Short modules for teams from donors, NGOs or companies exposed to the region."
    }
  ],

  /* ───────── SEGMENTS CIBLES & MODÈLE ÉCONOMIQUE ───────── */
  segments: [
    {
      title: "Donors & multilateral institutions",
      examples: "EU, AFD, GIZ, World Bank, AfDB, OCHA, MINUSCA",
      offer: "Institutional subscription (€8,000 – €15,000/year) and commissioned reports"
    },
    {
      title: "Diplomacy & defence",
      examples: "Africa desks, embassies, war colleges, general staffs",
      offer: "Subscription briefings, closed conferences"
    },
    {
      title: "Exposed private sector",
      examples: "Oil, mining, construction, logistics, trading, insurance",
      offer: "Confidential notes on request, monthly retainer"
    },
    {
      title: "Leading media",
      examples: "International and French-language press and agencies",
      offer: "Op-eds and interviews"
    },
    {
      title: "Universities & peer institutes",
      examples: "French and European research centres",
      offer: "Research partnerships, joint seminars"
    }
  ]
};
