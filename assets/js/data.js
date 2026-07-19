/* ═══════════════════════════════════════
   INSTITUT DES MARGES SAHARIENNES (IMS) — DONNÉES
   Contenu de lancement. Les publications et décryptages marqués
   "forthcoming" sont des titres de travail à rédiger — à remplacer
   par le texte définitif avant mise en ligne publique.
═══════════════════════════════════════ */

window.IMS_DATA = {

  /* Cinq axes d'expertise — un périmètre resserré */
  categories: [
    { id: "regimes",     label: "Régimes politiques & trajectoires de pouvoir" },
    { id: "securite",    label: "Sécurité régionale & acteurs armés" },
    { id: "economie",    label: "Économie politique des ressources" },
    { id: "gouvernance", label: "Gouvernance des marges & politiques publiques" },
    { id: "strategie",   label: "Études stratégiques & anticipation" }
  ],

  /* Trois blocs régionaux couverts par l'Institut */
  regions: [
    {
      id: "sahel",
      label: "Le Sahel",
      countries: ["Mauritanie", "Mali", "Burkina Faso", "Niger", "Tchad"]
    },
    {
      id: "lac-tchad",
      label: "Bassin du Lac Tchad",
      countries: ["Tchad", "Niger", "Nigéria", "Cameroun"]
    },
    {
      id: "quadrilatere",
      label: "Le Sahara",
      countries: ["Libye", "Soudan", "Tchad", "RCA"]
    }
  ],

  /* ───────── PUBLICATIONS ─────────
     Types : Note de conjoncture (4-6 p., rythme bimensuel),
             Rapport (30-80 p., deux par an),
             Working Paper (production académique). */
  publications: [
    {
          "slug": "quadrangle-saharien-risque-explosion",
          "title": "Décryptage stratégique : le risque d'explosion du quadrangle saharien (Libye-Tchad-Soudan-RCA)",
          "category": "securite",
          "type": "Note de conjoncture",
          "status": "published",
          "date": "15 juillet 2026",
          "pages": "Web",
          "cover": "assets/img/quadrangle-saharien-cover.png",
          "authors": [
                "Tchoudiba Bourdjolbo"
          ],
          "author": "Tchoudiba Bourdjolbo",
          "summary": "Note d'analyse sur l'embrasement du quadrangle Libye-Tchad-Soudan-RCA : la guerre soudanaise comme accélérateur régional, la prédation des ressources (or, antimoine, diamants), plus de 15 millions de déplacés, et des leviers d'action pour les bailleurs fondés sur le Triple Nexus.",
          "excerpt": "L'architecture sécuritaire du centre de l'Afrique s'effondre. La guerre civile soudanaise accélère un embrasement régional touchant la Libye, le Tchad et la RCA — prédation des ressources, plus de 15 millions de déplacés, ingérences étrangères. L'IMS décrypte cette métastase et propose des leviers d'action pour les États et les bailleurs.",
          "tags": [
                "Soudan",
                "Tchad",
                "Libye",
                "RCA",
                "Triple Nexus",
                "or",
                "réfugiés"
          ],
          "body": [
                "<div style=\"background:#17284a;color:#eef1f6;border-left:5px solid #c1440e;border-radius:6px;padding:1.4rem 1.5rem;margin:0 0 1.8rem;\"><span style=\"display:block;font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#c9a86a;margin-bottom:.6rem;\">Résumé exécutif</span><p style=\"margin:0;font-family:Georgia,serif;font-size:1.05rem;line-height:1.6;color:#eef1f6;font-weight:600;\">L'architecture sécuritaire du centre de l'Afrique s'effondre. La guerre civile soudanaise agit aujourd'hui comme l'accélérateur d'un embrasement régional qui contamine la Libye, le Tchad et la RCA. Entre <strong style=\"color:#fff;\">prédation massive des ressources</strong> (or, antimoine, diamants), <strong style=\"color:#fff;\">crise humanitaire sans précédent</strong> (plus de 15 millions de déplacés) et <strong style=\"color:#fff;\">ingérences étrangères décomplexées</strong>, l'IMS décrypte les dynamiques de cette métastase régionale et propose des leviers d'action concrets pour les États et les bailleurs internationaux, fondés sur l'approche du Triple Nexus.</p></div>",
                "<p>Cette note stratégique propose un décryptage systémique des dynamiques de conflictualité qui consument le quadrangle formé par la Libye, le Tchad, le Soudan et la République centrafricaine (RCA). Conçue comme un outil d'aide à la décision, elle croise les impératifs sécuritaires avec les données humanitaires et macroéconomiques issues de sources ouvertes (OSINT). L'objectif : offrir aux acteurs étatiques, aux institutions financières internationales (Banque mondiale, FMI) et aux agences multilatérales (ONU, ONG) une grille de lecture actionnable face à une crise de protection civile et d'effondrement étatique sans précédent.</p>",
                "<h2>1. La métastase régionale : de l'épicentre soudanais à l'échec militaire transfrontalier</h2>",
                "<p>L'architecture sécuritaire du centre de l'Afrique s'est définitivement effondrée. Si la chute de Mouammar Kadhafi, en 2011, a ouvert les vannes de la prolifération des armes, c'est aujourd'hui la guerre civile au Soudan qui agit comme l'accélérateur de l'embrasement. Le corridor du Darfour s'est métamorphosé en un hub logistique transnational, approvisionnant les belligérants de toute la sous-région.</p>",
                "<p>Face à cette onde de choc, l'architecture de sécurité bilatérale promue par N'Djamena a failli. Les incursions et frappes de drones sur la ville frontalière tchadienne de Tiné, l'occupation de la localité d'Am-Dafock (RCA) par une coalition rebelle suréquipée — l'Alliance du sursaut patriotique (ASP) —, et l'attaque du poste d'Erendeguè dans le Sud libyen démontrent l'incapacité criante des « forces mixtes » à endiguer la menace. Cette extrême militarisation des marges s'accompagne d'une ingérence décomplexée des puissances étrangères — Africa Corps russe, soutien ukrainien, financements émiratis — qui déplacent des conflits mondiaux sur le théâtre africain.</p>",
                "<blockquote style=\"border-left:4px solid #c1440e;background:#faf6ee;margin:1.6rem 0;padding:1rem 1.25rem;font-family:Georgia,serif;font-style:italic;font-size:1.1rem;color:#241d15;\">Le Darfour n'est plus un front local : il est devenu la plaque tournante à partir de laquelle armes, combattants et économies de guerre irriguent quatre États à la fois.</blockquote>",
      "<figure style=\"margin:1.8rem 0;\"><img src=\"assets/img/quadrangle-carte-geopolitique.png\" alt=\"Carte géopolitique : zones de conflit et ressources dans le quadrangle Libye-Tchad-Soudan-RCA\" style=\"width:100%;height:auto;border-radius:8px;border:1px solid var(--border);\"/><figcaption style=\"font-size:.8rem;color:#8a8168;margin-top:.5rem;\">Carte IMS — Zones de conflit (Fezzan, Tibesti, Darfour/RCA), gisements d’or et de diamant, et corridors d’armes et de mercenaires transfrontaliers. Schéma analytique, tracés indicatifs.</figcaption></figure>",
                "<h2>2. L'économie politique de la violence : prédation massive des ressources naturelles</h2>",
                "<p>L'économie de guerre a supplanté l'économie formelle. Les conflits s'articulent désormais autour d'une logique d'extraction illicite qui siphonne les revenus fiscaux des États et repousse les investissements directs étrangers (IDE) institutionnels. Dans chacun des quatre pays, une ressource stratégique alimente directement l'effort armé.</p>",
                "<div style=\"overflow-x:auto;margin:1.6rem 0;\"><table style=\"width:100%;border-collapse:collapse;font-family:Segoe UI,Arial,sans-serif;font-size:.9rem;background:#fff;border:1px solid #e3d7bf;\"><caption style=\"caption-side:top;text-align:left;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#9a350a;padding:0 0 .6rem;\">Cartographie de la prédation des ressources</caption><thead><tr><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Pays</th><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Ressources cibles</th><th style=\"background:#17284a;color:#fff;text-align:left;padding:.65rem .8rem;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;\">Chiffres clés &amp; dynamiques de prédation</th></tr></thead><tbody><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;\">Tchad</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;\">Or, antimoine</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;\">L'exploitation illicite dans les régions du Tibesti et du Batha génère jusqu'à <strong>57 milliards de francs CFA par semaine</strong>. L'antimoine, hyper-critique pour l'industrie militaire mondiale, suscite de nouvelles tensions.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;background:#faf6ee;\">Soudan</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;background:#faf6ee;\">Or</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;background:#faf6ee;\">Selon la Banque centrale, <strong>50 à 80 % de la production aurifère</strong> est exportée illégalement. Le panel d'experts de l'ONU estime à <strong>≈ 860 M$</strong> l'or tiré des seules mines du Darfour par les FSR en 2024 — de quoi financer armes lourdes et combattants.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;\">RCA</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;\">Diamants, or</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;\">Depuis la levée de l'embargo du <strong>processus de Kimberley</strong> (novembre 2024), les diamants des zones rebelles se mêlent aux pierres légales. La contrebande finance directement les coalitions rebelles et rémunère les paramilitaires étrangers.</td></tr><tr><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;font-weight:800;color:#9a350a;white-space:nowrap;background:#faf6ee;\">Libye</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;background:#faf6ee;\">Pétrole, hub de l'or</td><td style=\"padding:.7rem .8rem;border-top:1px solid #e3d7bf;vertical-align:top;color:#2c2c2c;background:#faf6ee;\">Le Sud libyen sert de gigantesque blanchisserie pour l'or extrait clandestinement au Sahel, tandis que le pétrole est utilisé comme <strong>arme de chantage</strong> par les milices.</td></tr></tbody></table></div>",
                "<h2>3. Sécurité humaine et asphyxie macroéconomique : le coût de l'instabilité</h2>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Une crise de protection civile et une urgence sanitaire sans précédent</h3>",
                "<p>La sous-région concentre la plus grave crise de déplacements forcés au monde. En 2026, le Soudan compte plus de <strong>15 millions de déracinés</strong> (soit 9,3 millions de déplacés internes et 4,9 millions de réfugiés, selon le HCR). Cette dynamique déborde massivement sur le Tchad, qui accueille désormais plus de <strong>2,2 millions de personnes déracinées</strong> — dont près d'un million de réfugiés soudanais arrivés depuis avril 2023 —, plaçant ses provinces de l'Est (Ouaddaï, Sila, Ennedi) sous une pression insoutenable.</p>",
                "<p>Sur le plan alimentaire, de vastes territoires soudanais et des zones d'accueil au Tchad ont basculé en Phase 4 (Urgence), voire en Phase 5 (Catastrophe/Famine), de l'échelle IPC — le Cadre intégré de classification de la sécurité alimentaire. La militarisation des zones minières s'accompagne par ailleurs de violations graves : les violences basées sur le genre (VBG) sont systématiquement utilisées comme arme de guerre, et le recrutement d'enfants-soldats par les milices rebelles, notamment en RCA, détruit le tissu social.</p>",
                "<div style=\"background:#fff;border:1px solid #e3d7bf;border-top:4px solid #c1440e;border-radius:6px;padding:1.1rem 1.3rem;margin:1.8rem 0;\"><div style=\"font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#9a350a;margin-bottom:.7rem;\">L'urgence humanitaire en chiffres</div><ul style=\"list-style:none;margin:0;padding:0;font-size:.92rem;color:#333;\"><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">15,3 M</strong> déracinés au Soudan en 2026 (9,3 M déplacés internes, 4,9 M réfugiés — HCR)</li><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">2,2 M</strong> personnes déracinées accueillies au Tchad, dont ~936 000 réfugiés soudanais</li><li style=\"padding:.32rem 0;border-bottom:1px dashed #e3d7bf;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">IPC 4-5</strong> zones en phase d'urgence à catastrophe/famine (Soudan, Est du Tchad)</li><li style=\"padding:.32rem 0;\"><strong style=\"color:#17284a;display:inline-block;min-width:74px;\">16 %</strong> du plan de réponse humanitaire du Soudan financé à la mi-2026 (2,9 Mds $ requis)</li></ul></div>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Asphyxie financière et destruction des économies locales</h3>",
                "<p>L'effort de guerre permanent siphonne les budgets nationaux au détriment des investissements sociaux — santé, éducation. Le blocage de routes commerciales vitales, tel que le corridor logistique Douala-Bangui par des groupes armés, provoque une hyperinflation qui asphyxie les populations locales. Dans le même temps, les États sont privés de leurs recettes douanières et fiscales par l'hégémonie de la contrebande et de l'économie grise, rendant impossible tout remboursement de la dette ou investissement structurel sans l'intervention des institutions de Bretton Woods (Banque mondiale, FMI).</p>",
                "<h2>4. Leviers d'action multilatérale et financement de la résilience (cible : bailleurs)</h2>",
                "<p>Face à un tel niveau de criticité, l'approche militaire doit impérativement être complétée par une ingénierie financière et humanitaire robuste. Deux chantiers s'imposent en priorité.</p>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Combler le « funding gap » par l'approche du Triple Nexus</h3>",
                "<p>Les Plans de réponse humanitaire (HRP) des Nations unies pour ces quatre pays souffrent d'un sous-financement chronique : à peine 37 % de couverture en 2024, moins de 40 % en 2025, et un effondrement en 2026 — seuls 16 % des 2,9 milliards de dollars requis pour le seul Soudan étaient réunis à la mi-année. Les pays donateurs doivent réajuster leurs allocations en adoptant la logique du <strong>Triple Nexus</strong> (Humanitaire-Développement-Paix) : il ne s'agit plus seulement de distribuer des rations d'urgence, mais de financer des infrastructures de résilience à long terme — forages d'eau, agriculture adaptée — pour prévenir les conflits intercommunautaires entre réfugiés et populations hôtes, particulièrement dans l'Est du Tchad.</p>",
                "<h3 style=\"font-size:1.05rem;color:#17284a;margin:1.4rem 0 .5rem;\">Activer les cadres légaux et la conformité ESG</h3>",
                "<p>Les chancelleries occidentales et les institutions multilatérales disposent de puissants leviers juridiques sous-exploités. Le financement des groupes armés par l'or ou les diamants constitue une violation des sanctions de l'ONU. Les donateurs internationaux doivent conditionner leur aide macroéconomique à la mise en place de mécanismes de traçabilité rigoureux des minerais. La pression doit en outre être exercée sur les places financières internationales — Dubaï, notamment — via les normes de conformité ESG (Environnement, Social, Gouvernance), afin de bloquer le blanchiment des minerais sahariens qui financent le terrorisme et le mercenariat privé.</p>",
                "<h2>5. Synthèse des recommandations stratégiques</h2>",
                "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.4rem 0;\"><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">Pour les États de la région</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Refonte totale de la sécurité frontalière : abandonner les milices communautaires au profit de garde-frontières professionnels, et adopter une stricte neutralité géopolitique face aux belligérants étrangers.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">Pour les institutions financières (BM, FMI)</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Soutenir d'urgence les budgets nationaux — celui du Tchad en premier lieu — par des appuis budgétaires ciblés, conditionnés à la lutte contre la corruption et à l'intégration économique des réfugiés, pour éviter un krach macroéconomique.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">Pour les Nations unies et les ONG</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Intensifier le plaidoyer pour le déblocage de fonds massifs dédiés aux zones en phase IPC 4/5, tout en renforçant les programmes de protection des civils (PoC) et de prévention des violences basées sur le genre.</p></div><div style=\"background:#fff;border:1px solid #e3d7bf;border-top:3px solid #17284a;border-radius:6px;padding:1rem 1.15rem;\"><h4 style=\"font-family:Segoe UI,Arial,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#17284a;margin:0 0 .45rem;\">Pour les pays donateurs et l'UE</h4><p style=\"margin:0;font-size:.92rem;color:#333;line-height:1.55;\">Renforcer l'arsenal des sanctions ciblées contre les réseaux de contrebande transnationaux et imposer un embargo financier strict sur l'or de conflit issu de ce quadrangle.</p></div></div>",
                "<h2>6. Sources et références méthodologiques</h2>",
                "<div style=\"font-size:.9rem;color:#444;background:#faf6ee;border:1px solid #e3d7bf;border-radius:6px;padding:.9rem 1.1rem;margin:1.2rem 0;\">Ce décryptage a été élaboré en croisant le renseignement de terrain avec les données issues de l'OSINT (Open Source Intelligence) et les rapports des organisations internationales.</div>",
                "<ul style=\"list-style:none;margin:.5rem 0 0;padding:0;font-size:.85rem;color:#5b5346;\"><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">Tchoudiba Bourdjolbo / IMS — « Am-Dafock : quand la guerre du Soudan franchit la frontière centrafricaine », Collection Cahiers du Tibesti, 12 juillet 2026.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">IMS — Analyse géospatiale et sécuritaire sur le front libyen, note interne « La contagion des fronts sahéliens / Le Sud libyen », juillet 2026.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">IPC &amp; PAM — Données 2025-2026 sur les niveaux d'insécurité alimentaire (Phases 4 et 5) au Soudan et dans les provinces orientales du Tchad.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">HCR — <a href=\"https://www.unhcr.org/publications/global-appeal-2026\" style=\"color:#c1440e;\">Global Appeal 2026</a> (15,3 M de déracinés au Soudan) &amp; <a href=\"https://data.unhcr.org/en/country/tcd\" style=\"color:#c1440e;\">Portail opérationnel — Tchad</a>.</li><li style=\"padding:.3rem 0;border-bottom:1px dashed #e3d7bf;\">OCHA — <a href=\"https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-summary\" style=\"color:#c1440e;\">Sudan Humanitarian Needs and Response Plan 2026</a> (2,9 Mds $ requis, ~16 % financé).</li><li style=\"padding:.3rem 0;\">ONU / Panel d'experts sur le Soudan — <a href=\"https://news.un.org/en/story/2026/07/1167944\" style=\"color:#c1440e;\">« Looted gold and gum arabic are bankrolling Sudan's war »</a> (or du Darfour, ≈ 860 M$ pour les FSR en 2024).</li></ul>"
          ]
    },
    {
      slug: "tchad-succession-deby-recompositions",
      title: "Tchad post-2021 : la succession Déby et les recompositions clanico-militaires",
      category: "regimes",
      type: "Note de conjoncture",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Note de conjoncture en préparation sur les équilibres claniques et militaires issus de la succession à la tête de l'État tchadien depuis 2021.",
      tags: ["Tchad", "succession", "clans militaires"]
    },
    {
      slug: "rsf-fact-connexion-tchado-soudanaise",
      title: "RSF-FACT : la connexion tchado-soudanaise et ses zones grises",
      category: "securite",
      type: "Note de conjoncture",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Note de conjoncture en préparation sur les circulations d'hommes et de ressources entre les Forces de soutien rapide, la constellation tchadienne (FACT) et les zones frontalières du Tibesti et du Borkou.",
      tags: ["RSF", "FACT", "Tibesti", "Borkou"]
    },
    {
      slug: "haftar-reconfiguration-sud-libyen",
      title: "Haftar et la reconfiguration du grand Sud libyen",
      category: "regimes",
      type: "Note de conjoncture",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Note de conjoncture en préparation sur les recompositions de pouvoir dans le Fezzan et leurs effets sur les marges tchadiennes et soudanaises.",
      tags: ["Libye", "Fezzan", "Haftar"]
    },
    {
      slug: "or-darfour-economie-contrebande",
      title: "L'or du Darfour : cartographie d'une économie de contrebande transfrontalière",
      category: "economie",
      type: "Note de conjoncture",
      status: "forthcoming",
      pages: "4-6",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Note de conjoncture en préparation sur les circuits aurifères reliant le Darfour au Tchad, à la Libye et aux marchés du Golfe.",
      tags: ["or", "Darfour", "contrebande"]
    },
    {
      slug: "recompositions-clanico-militaires-tchad-rapport",
      title: "Recompositions clanico-militaires au Tchad post-2021",
      category: "regimes",
      type: "Rapport",
      status: "forthcoming",
      pages: "40-50",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Rapport de fond, produit d'appel du lancement de l'Institut : une lecture approfondie des dispositifs de pouvoir tchadiens depuis 2021, de leurs ressorts claniques et militaires, et de leurs prolongements régionaux.",
      tags: ["Tchad", "rapport de fond", "clans militaires"]
    },
    {
      slug: "marge-objet-gouvernement-foncier-pastoral",
      title: "Penser la marge comme objet de gouvernement : le foncier pastoral tchadien",
      category: "gouvernance",
      type: "Working Paper",
      status: "forthcoming",
      pages: "20-30",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Working paper académique en préparation, articulant la question du foncier pastoral tchadien à une réflexion plus large sur la frontière et la marge comme catégories de gouvernement.",
      tags: ["foncier pastoral", "marges", "politiques publiques territoriales"]
    },
    {
      slug: "veille-strategique-methode-anticipation",
      title: "Anticiper les ruptures politiques dans les marges sahélo-sahariennes : une méthode de veille stratégique",
      category: "strategie",
      type: "Working Paper",
      status: "forthcoming",
      pages: "15-25",
      authors: ["Tchoudiba Bourdjolbo"],
      summary: "Working paper méthodologique en préparation, présentant le dispositif de veille et d'anticipation de l'Institut : indicateurs de rupture, sources de terrain et grille de lecture des trajectoires de pouvoir.",
      tags: ["anticipation", "veille stratégique", "méthodologie"]
    }
  ],

  /* ───────── DÉCRYPTAGES ─────────
     Format court (1000-1500 mots), signé par le fondateur ou des contributeurs
     invités, sur l'actualité chaude. Calendrier de lancement — à rédiger. */
  decryptages: [
    {
      slug: "tine-drone-humanitarian-crisis-chad-sudan",
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
      slug: "tine-drone-crise-humanitaire-tchad-soudan",
      title: "Tiné : la guerre du Soudan déverse sa catastrophe humanitaire sur le Tchad",
      category: "securite",
      status: "published",
      date: "12 juillet 2026",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Le 18 mars 2026, une frappe de drone a tué au moins dix-sept civils en deuil à Tiné, ville frontalière coupée en deux entre le Tchad et le Soudan. Derrière l'incident militaire, une crise humanitaire hors de contrôle : 1,3 million de réfugiés, un système d'accueil à l'agonie et une frontière fermée qui piège les civils.",
      body: [
        "<p>Le 18 mars 2026, en début de soirée, un drone s'est abattu sur une foule rassemblée pour un deuil, dans une école coranique servant de lieu de recueillement, à Tiné, ville frontalière coupée en deux entre le Tchad et le Soudan. Le bilan — au moins dix-sept morts, les décomptes variant de quinze à dix-neuf, et soixante-six blessés graves évacués vers l'hôpital — dit la brutalité du geste. Mais derrière l'incident militaire se joue une réalité plus vaste et plus durable : l'effondrement humanitaire d'une frontière devenue le déversoir de la guerre du Soudan.</p>",
        "<h2>Une frappe sur des civils en deuil</h2>",
        "<p>La cible n'était pas une position militaire mais un rassemblement funéraire. Les deux belligérants soudanais se sont mutuellement rejeté la responsabilité de la frappe : les Forces de soutien rapide (FSR) ont dénoncé une « attaque terroriste » de l'armée soudanaise violant la souveraineté tchadienne, tandis que des sources militaires tchadiennes attribuent le tir à un drone des FSR, déjà accusées d'incursions répétées. En réaction, le président Mahamat Idriss Déby Itno a réuni un conseil de défense et placé l'armée en alerte maximale le long de la frontière, promettant des représailles à toute nouvelle attaque.</p>",
        "<p>Ce n'est pas un épisode isolé : il s'agit de la quatrième attaque contre cette ville depuis le début du conflit soudanais. La répétition dit l'essentiel — la fermeture, en février, d'une frontière longue de 1 400 kilomètres n'a nullement enrayé les incursions, et chaque frappe rapproche un peu plus N'Djamena d'une entrée directe dans la guerre.</p>",
        "<h2>Tiné, verrou stratégique et corridor humanitaire</h2>",
        "<p>Tiné n'est pas une bourgade comme les autres. Bastion de la communauté zaghawa, dont l'agglomération se partage entre territoires tchadien et soudanais, elle est à la fois un réservoir de combattants mobilisables, un nœud logistique transfrontalier et un corridor pour les civils du Nord-Darfour fuyant les violences. Depuis la conquête de larges pans du Darfour par les FSR, la ville s'est imposée comme l'une des rares poches de résistance armée, tenue par une mobilisation transfrontalière de combattants zaghawa tchadiens et d'éléments des forces tchadiennes ayant fait défection pour rejoindre leurs alliés soudanais de l'armée régulière.</p>",
        "<p>Cette imbrication communautaire est le cœur du problème. Les Zaghawa combattent des deux côtés — la base au sein de l'armée soudanaise, plusieurs élites et gradés tchadiens en soutien aux FSR ; les Tama, historiquement rivaux, se sont rangés derrière les FSR, accentuant les fractures inter- et intra-communautaires de l'espace soudano-tchadien. À mesure que l'appui émirati aux FSR, longtemps transité par N'Djamena, s'atténue et que le Tchad s'oriente vers une posture plus neutre, Tiné devient pour les FSR un obstacle à réduire. La porosité de la frontière fait le reste : des combattants la traversent à volonté, rendant la crise structurellement durable.</p>",
        "<h2>Une catastrophe humanitaire au ralenti</h2>",
        "<p>C'est ici que se joue le drame le plus grave, et le plus silencieux. Le Tchad accueille aujourd'hui environ 1,3 million de réfugiés soudanais, dont plus de 900 000 arrivés depuis le déclenchement de la guerre en 2023, qui s'ajoutent aux quelque 400 000 accueillis depuis la première crise du Darfour de 2003. Une personne sur treize au Tchad est désormais réfugiée ; dans l'est du pays, c'est une sur trois. Le pays est devenu la première destination des déplacés soudanais — et son système d'accueil, longtemps cité en modèle, cède sous la charge.</p>",
        "<p>La cause immédiate est financière. L'aide disponible par réfugié et par mois est tombée à 4 dollars en 2025, contre 11 dollars en 2022. Faute de moyens, le HCR a dû fermer deux de ses trois centres d'enregistrement ; l'agence a terminé 2025 avec à peine le tiers des ressources nécessaires, et un déficit de 428 millions de dollars menace de réduire encore l'assistance. Plus de 71 000 familles réfugiées de l'est du Tchad n'ont reçu aucune aide au logement. En février, les Nations unies ont lancé un appel de 1,6 milliard de dollars pour les réfugiés soudanais de sept pays — un signal d'alarme resté, pour l'essentiel, sans réponse.</p>",
        "<p>Sur le terrain, les conséquences sont déjà là. Les camps — Iridimi, Touloum, Amnabak — sont situés dans des provinces qui figuraient parmi les plus pauvres du Tchad avant même la guerre. La famine et la malnutrition s'installent, le choléra prospère sur des conditions d'hygiène dégradées, les enfants sont déscolarisés. Or la faim et le désœuvrement ouvrent la voie au recrutement des mineurs par les factions armées, tandis que les femmes et les filles paient le prix fort des violences, jusqu'aux traitements les plus inhumains. Les premières victimes de cette guerre ne portent pas d'uniforme.</p>",
        "<h2>La frontière fermée, ou le piège humanitaire</h2>",
        "<p>Face aux incursions, N'Djamena a fait le choix de la fermeture. Mais un cordon de 1 400 kilomètres que l'État n'a ni les moyens logistiques ni les effectifs de tenir n'arrête pas les combattants des FSR ni les Toroboros, qui maîtrisent parfaitement le terrain. En revanche, il enferme les civils. En interdisant le franchissement dans les deux sens, le pouvoir tchadien empêche des Soudanais fuyant les violences de rejoindre les camps — alors même que, selon l'ONU, près de 60 % de la population soudanaise a besoin d'une aide urgente. Le déplacement des réfugiés de Tiné vers des camps plus éloignés de la frontière, décidé pour libérer le terrain à l'armée, illustre ce basculement : la logique sécuritaire prend le pas sur la protection des personnes.</p>",
        "<h2>Un engrenage régional</h2>",
        "<p>La situation dépasse désormais le seul conflit soudanais. Militarisation transfrontalière, pression des mouvements de réfugiés et affaiblissement interne de l'appareil d'État tchadien se renforcent mutuellement, dans une boucle de rétroaction dangereuse. Les choix de court terme du pouvoir — soutien opportuniste, puis repositionnement — fragilisent sa légitimité intérieure tout en externalisant le conflit. Le rapprochement possible des FSR avec d'autres communautés de l'espace tchado-soudanais, à mesure que l'axe zaghawa se distend, pourrait même, à terme, peser sur la stabilité de N'Djamena. Tiné n'est plus une périphérie : c'est un test de résilience pour toute l'architecture sécuritaire régionale.</p>",
        "<h2>Perspectives et points de vigilance</h2>",
        "<p>Trois évolutions sont à surveiller de près. D'abord, l'aide humanitaire : sans comblement rapide du déficit de financement, l'hiver 2026 s'annonce comme celui de coupes plus profondes, de conditions pires et d'une surmortalité évitable dans les camps de l'est. Ensuite, le seuil militaire : une riposte tchadienne à une nouvelle frappe transformerait un débordement en engagement direct, avec un coût humanitaire démultiplié. Enfin, l'équilibre communautaire : toute reconfiguration des alliances zaghawa-tama-toubou-arabes autour des FSR ferait de la frontière orientale, déjà exsangue, la prochaine ligne de fracture. Dans tous les cas, la priorité qui devrait primer — sécuriser les camps, rouvrir un accès humanitaire, protéger les civils piégés entre deux feux — est précisément celle que la militarisation en cours relègue au second plan.</p>"
      ]
    },
    {
      slug: "am-dafock-guerre-soudan-rca",
      title: "Am-Dafock : quand la guerre du Soudan franchit la frontière centrafricaine",
      category: "securite",
      status: "published",
      date: "12 juillet 2026",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Le 30 juin 2026, la coalition ASP a tenu Am-Dafock cinq jours face aux FACA et à leurs alliés russes. Un basculement tactique qui signale l'entrée de la RCA dans l'orbite de la guerre du Soudan.",
      body: [
        "<p>Le 30 juin 2026, plus de 700 combattants d'une nouvelle coalition, l'Alliance du sursaut patriotique (ASP), ont pris pied à Am-Dafock, à la frontière soudanaise. Reprise cinq jours plus tard par les Forces armées centrafricaines (FACA) et leurs alliés russes, la localité n'est pas un incident isolé : elle signale l'entrée de la République centrafricaine dans l'orbite de la guerre du Soudan et l'ouverture possible d'un nouveau cycle de conflit armé.</p>",
        "<h2>Un basculement tactique, pas un simple raid</h2>",
        "<p>L'offensive contre Am-Dafock, dans la préfecture de la Vakaga, a contraint les FACA et leurs auxiliaires russes au repli vers la base de la MINUSCA, dont l'enceinte a été touchée : trois casques bleus zambiens ont été blessés, l'un grièvement. Le bilan approche la trentaine de morts et plus de 16 000 personnes ont fui vers les campements de déplacés. Les forces gouvernementales n'ont repris la localité que le 5 juillet.</p>",
        "<p>Le fait marquant n'est pas la reprise, mais la durée de l'occupation. Depuis l'offensive de la Coalition des patriotes pour le changement (CPC) en 2021, les groupes armés opéraient selon une logique de harcèlement, sans jamais tenir un terrain au-delà d'une journée face au contrôle aérien FACA-russe. <strong>Am-Dafock rompt ce schéma.</strong> La coalition dispose de lance-roquettes, de missiles antichars, de drones et de mitrailleuses lourdes capables d'encaisser l'appui aérien. Ce passage d'une guerre de mouvement à une guerre de position est le véritable signal d'alerte.</p>",
        "<h2>La matrice soudanaise : l'axe Darfour-RSF</h2>",
        "<p>L'attaque a été lancée depuis le Darfour-Sud, région sous contrôle des Forces de soutien rapide (RSF) d'Hemedti, avec lesquelles plusieurs groupes du nord-est centrafricain, au premier rang desquels le FPRC, entretiennent des liens historiques. La guerre soudanaise a provoqué une circulation accrue d'armes lourdes, de combattants aguerris et de réseaux logistiques à travers des espaces frontaliers faiblement contrôlés.</p>",
        "<p>Am-Dafock se situe sur le corridor reliant le Darfour aux étendues sahéliennes d'Afrique centrale, un couloir historique pour les rébellions, les trafiquants d'armes et les combattants étrangers. La crise centrafricaine devient ainsi un nœud d'un système régional où s'imbriquent la guerre du Soudan, les recompositions du Sahel et l'affirmation de la Russie en Afrique centrale.</p>",
        "<h2>Une coalition soudée par le rejet russe et le troisième mandat</h2>",
        "<p>Créée à la mi-mai 2026, l'ASP rassemble le FPRC de Noureddine Adam (recherché par la CPI), le MDRPC d'Arda Hakouma, le Front commun pour le redressement, des éléments des 3R et le FDLP de Florent Kema, autour de figures de l'ex-Séléka. Deux lignes de force soudent cet attelage hétéroclite : le rejet de la présence militaire russe et l'opposition au troisième mandat du président Faustin-Archange Touadéra, entamé en 2026. Parallèlement, une Coalition centrafricaine pour le redressement (CCR) a menacé, dès le 1er juillet, de marcher sur Bangui.</p>",
        "<h2>Les lignes de faille : trésorerie, MINUSCA et verrou géographique</h2>",
        "<p>Le principal talon d'Achille du pouvoir est financier : l'État peine à payer ses propres soldats, ce qui nourrit le risque de défections. L'hypothèse d'un désengagement de l'allié russe pour impayés reste improbable mais non nulle, d'autant que la transition de Wagner vers l'Africa Corps demeure inachevée. Au même moment, la MINUSCA réduit sa présence dans l'arrière-pays. Am-Dafock est un verrou : le perdre durablement ouvrirait un couloir vers Birao, puis vers les axes menant à Bangui. À l'ouest, un second front se dessine, avec un risque sur le corridor Douala-Bangui, artère vitale d'un pays enclavé.</p>",
        "<h2>Perspectives</h2>",
        "<p>Trois scénarios se dessinent : un <strong>containment</strong> (le plus probable à court terme), où l'appui russe stabilise la Vakaga et l'ASP revient au harcèlement ; une <strong>escalade</strong> avec ouverture d'un second front à l'ouest ; et, en risque de queue, une <strong>déstabilisation du régime</strong> si crise financière, désengagement russe et pression multi-fronts se conjuguent. À surveiller : la capacité des FACA à tenir Birao, la régularité de la solde, l'effectivité de la force mixte Tchad-RCA, le corridor Douala-Bangui et le calendrier du troisième mandat.</p>"
      ]
    },
    {
      slug: "soudan-rapport-de-force-rsf-saf",
      title: "Soudan : où en est le rapport de force entre RSF et forces armées soudanaises ?",
      category: "securite",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Décryptage en préparation sur l'évolution du rapport de force militaire et territorial entre les Forces de soutien rapide et l'armée soudanaise."
    },
    {
      slug: "tchad-transition-deux-ans-apres",
      title: "Tchad : la transition, deux ans après",
      category: "regimes",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Décryptage en préparation dressant un bilan de la transition politique tchadienne et de ses recompositions internes."
    },
    {
      slug: "libye-haftar-carte-du-sud",
      title: "Libye : Haftar et la carte du Sud",
      category: "regimes",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Décryptage en préparation sur les rapports de force dans le Fezzan et leurs répercussions sur les marges tchado-soudanaises."
    },
    {
      slug: "or-contrebande-etats-faibles-sahara-central",
      title: "Or, contrebande et États faibles au Sahara central",
      category: "economie",
      status: "forthcoming",
      author: "Tchoudiba Bourdjolbo",
      excerpt: "Décryptage en préparation sur les circuits informels de l'or et leur rôle dans la fabrique du pouvoir local au Sahara central."
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
      role: "Fondateur & directeur",
      initials: "TB",
      bio: "Fondateur de l'Institut des Marges Sahariennes, Tchoudiba Bourdjolbo conduit des recherches sur les marges sahélo-sahariennes et les politiques publiques territoriales, sur trois blocs régionaux : le Sahel, le bassin du Lac Tchad et le Sahara.",
      focus: ["regimes", "gouvernance"],
      isFounder: true
    }
  ],

  scientificCouncilSeats: [
    { country: "Tchad",          status: "à pourvoir" },
    { country: "Mauritanie",     status: "à pourvoir" },
    { country: "Soudan / Darfour", status: "à pourvoir" },
    { country: "Libye",         status: "à pourvoir" },
    { country: "RDC",           status: "à pourvoir" },
    { country: "Sahel",         status: "à pourvoir" },
    { country: "RCA",           status: "à pourvoir" }
  ],

  partners: [], // en cours de constitution — aucun partenaire confirmé à ce jour

  /* ───────── ÉVÉNEMENTS ─────────
     Trois formats proposés. Pas d'historique fictif : le programme
     est en cours de constitution, aucune date n'est encore confirmée. */
  eventFormats: [
    {
      title: "Séminaires",
      description: "Rencontres fermées, sur invitation, réunissant chercheurs et praticiens autour d'un dossier précis."
    },
    {
      title: "Restitutions",
      description: "Présentation publique ou semi-publique des résultats d'une mission de terrain ou d'un rapport."
    },
    {
      title: "Cycles de formation courts",
      description: "Modules courts destinés aux équipes de bailleurs, d'ONG ou d'entreprises exposées à la zone."
    }
  ],

  /* ───────── SEGMENTS CIBLES & MODÈLE ÉCONOMIQUE ───────── */
  segments: [
    {
      title: "Bailleurs & institutions multilatérales",
      examples: "UE, AFD, GIZ, Banque mondiale, BAD, OCHA, MINUSCA",
      offer: "Abonnement institutionnel (8 000 – 15 000 €/an) et rapports commandés"
    },
    {
      title: "Diplomatie & défense",
      examples: "Directions Afrique, ambassades, écoles de guerre, états-majors",
      offer: "Briefings sur abonnement, conférences fermées"
    },
    {
      title: "Secteur privé exposé",
      examples: "Pétroliers, miniers, BTP, logistique, négoce, assurance",
      offer: "Notes confidentielles à la demande, retainer mensuel"
    },
    {
      title: "Médias de référence",
      examples: "Presse et agences internationales et francophones",
      offer: "Tribunes et interviews"
    },
    {
      title: "Universités & instituts pairs",
      examples: "Centres de recherche français et européens",
      offer: "Partenariats de recherche, séminaires conjoints"
    }
  ]
};
