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
