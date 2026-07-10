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
