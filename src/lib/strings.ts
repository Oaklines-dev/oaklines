export const strings = {
  nav: {
    logo: 'Oaklines',
    links: [
      { label: 'Paslaugos', href: '#paslaugos' },
      { label: 'Kaip tai veikia', href: '#how' },
      { label: 'Tyrimai', href: '#tyrimai' },
      { label: 'D.U.K.', href: '#duk' },
      { label: 'Kontaktai', href: '#kontaktai' },
    ],
    cta: 'Nemokama konsultacija',
  },

  hero: {
    tag: 'AI augimo sistema',
    headlineLines: [
      'Daugiau klientų.',
      'Mažiau rankų darbo.',
      'Su dirbtiniu intelektu.',
    ],
    subtext:
      'Oaklines kuria ir valdo AI sistemas, kurios automatiškai generuoja potencialius klientus, užmezga ryšį ir konvertuoja — visą parą, 7 dienas per savaitę.',
    ctaPrimary: 'Pradėkite nemokamai',
    ctaSecondary: 'Žiūrėti demonstraciją',
    trustPills: [
      'Integruojama per 14 dienų',
      'Jokių ilgalaikių sutarčių',
      'Matomi rezultatai per 30 dienų',
    ],
    dashboard: {
      title: 'Oaklines AI platforma',
      stats: [
        { value: 2840, suffix: '+', label: 'Sugeneruoti kontaktai' },
        { value: 38, suffix: '%', label: 'Konversijos augimas' },
        { value: 28, suffix: 's', label: 'Vidutinis atsakymo laikas' },
      ],
      chartLabel: 'Mėnesiniai kontaktai',
      leads: [
        { name: 'UAB Technorama', status: 'Aktyvus', color: 'green' },
        { name: 'MB Sprendimai', status: 'Išsiųsta', color: 'blue' },
        { name: 'UAB Verslasio', status: 'Laukiama', color: 'muted' },
        { name: 'Digitalus Pro', status: 'Aktyvu', color: 'purple' },
      ],
      floatBadge1: 'Aktyvūs kontaktai: 142',
      floatBadge2: 'Automatizacijos mazgai: 8',
    },
  },

  marquee: {
    items: [
      'AI Klientų generavimas',
      'Automatizuoti pardavimai',
      'CRM integracija',
      'Realaus laiko analizė',
      'Personalizuotas kontaktas',
      'Daugiakanalė rinkodara',
      'Išmanūs AI agentai',
      'ROI stebėjimas',
    ],
  },

  compare: {
    tag: 'Palyginimas',
    title: 'AI prieš tradicinę rinkodarą',
    subtitle:
      'Sužinokite, kodėl daugiau kaip 1 200 verslų renkasi AI sprendimus vietoj senų metodų.',
    conversionLabel: 'Vidutinis konversijos rodiklis',
    traditional: { label: 'Tradicinė rinkodara', value: '10–15%' },
    oaklines: { label: 'Oaklines AI', value: '30–45%' },
    rows: [
      {
        label: 'Atsakymo greitis',
        traditional: '12–48 valandos',
        oaklines: '< 30 sekundžių',
      },
      { label: 'Veikimas 24/7', traditional: false, oaklines: true },
      {
        label: 'Personalizacija',
        traditional: 'Ribota',
        oaklines: 'Pilna AI personalizacija',
      },
      {
        label: 'Mastelinis augimas',
        traditional: 'Brangus ir lėtas',
        oaklines: 'Automatinis ir greitas',
      },
      {
        label: 'Duomenų analizė',
        traditional: 'Rankinė ataskaita',
        oaklines: 'Realiu laiku',
      },
      { label: 'Kaina už kontaktą', traditional: '€18–€45', oaklines: '€3–€8' },
    ],
    calc: {
      tag: 'Gyva analizė',
      title: 'ROI skaičiuoklė',
      subtitle:
        'Sujudinkite slankiklius ir pamatykite, ką AI gali padaryti jūsų verslui.',
      sliders: [
        {
          label: 'Mėnesiniai kontaktai',
          key: 'leads',
          min: 50,
          max: 2000,
          step: 50,
          default: 500,
          unit: '',
        },
        {
          label: 'Dabartinis atsakymo laikas',
          key: 'responseTime',
          min: 1,
          max: 48,
          step: 1,
          default: 8,
          unit: 'val.',
        },
        {
          label: 'Rankinio darbo dalis',
          key: 'manualPct',
          min: 10,
          max: 90,
          step: 5,
          default: 60,
          unit: '%',
        },
      ],
      teamChips: ['Mažas', 'Vidutinis', 'Didelis', 'Enterprise'],
      outputs: [
        {
          key: 'hoursSaved',
          label: 'Sutaupytos valandos / mėn.',
          icon: 'clock',
          color: 'blue',
          unit: 'val.',
        },
        {
          key: 'recoverableLeads',
          label: 'Atkuriami kontaktai',
          icon: 'users',
          color: 'green',
          unit: '',
        },
        {
          key: 'speedImprovement',
          label: 'Greičio pagerinimas',
          icon: 'zap',
          color: 'purple',
          unit: 'x',
        },
        {
          key: 'automationCoverage',
          label: 'Automatizacijos aprėptis',
          icon: 'cpu',
          color: 'orange',
          unit: '%',
        },
      ],
      insights: {
        high: 'Didelis rankinio darbo lygis rodo, kad jūsų komanda galėtų sutaupyti daugiau kaip 200 valandų per mėnesį naudodama AI automatizavimą.',
        medium:
          'Jūsų srovė rodo solidų automatizacijos potencialą. AI gali padidinti konversijų rodiklius iki 40% pagerindamas atsakymo laiką.',
        low: 'Jūsų procesas yra gana optimizuotas — AI integravimas pagerins kokybę ir toliau sumažins kainą kiekvienam kontaktui.',
        fast: 'Jūsų greitai reaguojanti komanda jau lenkia konkurentus. AI pridės 24/7 aprėptį ir pašalins likusius rankinio darbo taškus.',
      },
      disclaimer:
        'Skaičiuoklės rezultatai yra apytiksliai ir pagrįsti vidutiniais pramonės duomenimis. Tikroji nauda priklauso nuo verslo tipo, sektoriaus ir proceso sudėtingumo.',
    },
  },

  services: {
    tag: 'Paslaugos',
    title: 'Viskas, ko reikia augti su AI',
    subtitle:
      'Integruoti sprendimai, padedantys kiekvienam verslo etapui — nuo pirmojo kontakto iki ilgalaikio lojalumo.',
    items: [
      {
        id: 'lead-gen',
        name: 'AI klientų generavimas',
        description:
          'Automatiškai aptinkame ir kvalifikuojame potencialius klientus iš kelių kanalų, pristatydami jūsų komandai tik tinkamiausius kontaktus.',
        bullets: [
          'Daugiakanalis kontaktų paieška',
          'AI kvalifikavimo filtrai',
          'Automatiniai pirminiai pokalbiai',
          'CRM integracija realiuoju laiku',
        ],
      },
      {
        id: 'auto-sales',
        name: 'Automatizuotas pardavimų procesas',
        description:
          'Sukuriame ir valdome visą pardavimų piltuvą — nuo pirmojo ryšio iki sandorio uždarymo — naudodami pažangius AI darbo srautus.',
        bullets: [
          'Personalizuoti sekimo scenarijai',
          'Pažangūs atsakymų algoritmai',
          'A/B testavimas automatiškai',
          'Sandorių prognozavimas',
        ],
      },
      {
        id: 'ai-assistant',
        name: 'AI pardavimų asistentas',
        description:
          'Pokalbių AI agentas, kuris veikia kaip jūsų geriausias pardavėjas — visą parą, niekada nepailsta, visada žino atsakymą.',
        bullets: [
          'GPT-4 lygio pokalbiai',
          'Produktų žinių bazė',
          'Susitikimų planavimas',
          'Sklandus perdavimas komandai',
        ],
      },
      {
        id: 'data-analytics',
        name: 'Duomenų analizė ir įžvalgos',
        description:
          'Realaus laiko prietaisų lentelės ir automatinės ataskaitos, parodančios, kas veikia, kas ne ir kur yra augimo galimybės.',
        bullets: [
          'Gyvas veiklos stebėjimas',
          'Prognozuojamoji analizė',
          'Konversijų kelių žemėlapis',
          'Savaitiniai AI suvestiniai',
        ],
      },
      {
        id: 'outreach',
        name: 'Personalizuotas kontaktas',
        description:
          'Mastelinis, bet asmeniškas el. pašto ir žinučių kontaktas, naudojantis AI duomenų praturtinimą kiekvienam gavėjui.',
        bullets: [
          'Dinaminė turinio personalizacija',
          'Optimalaus laiko siuntimas',
          'Atsako reitingavimo algoritmas',
          'Šaltojo pašto infrastruktūra',
        ],
      },
      {
        id: 'crm',
        name: 'CRM ir sistemų integracija',
        description:
          'Sklandžiai jungiame Oaklines AI su jūsų esama technologijų sistema — Salesforce, HubSpot, Pipedrive ir daugelio kitų.',
        bullets: [
          'Daugiau kaip 40 vietinių jungiamųjų elementų',
          'Dvikryptė duomenų sinchronizacija',
          'Automatiniai darbo srautai',
          'Pasirinktinė API integracija',
        ],
      },
    ],
  },

  howItWorks: {
    tag: 'Procesas',
    title: 'Kaip mes dirbame',
    subtitle:
      'Aiški, struktūrizuota sistema, kuri perkelia jūsų verslą nuo pradinės analizės iki pilnai veikiančio AI augimo mechanizmo.',
    steps: [
      {
        num: '01',
        title: 'Analizė ir strategija',
        description:
          'Kruopščiai išanalizuojame jūsų verslą, klientų kelionę ir konkurencinę aplinką. Sukuriame pritaikytą augimo strategiją su aiškiais tikslais.',
      },
      {
        num: '02',
        title: 'Sistemos konfigūracija',
        description:
          'Konfigūruojame AI modelius, pardavimų srautus ir automatizacijos taisykles pagal jūsų unikalius verslo poreikius ir įvaizdį.',
      },
      {
        num: '03',
        title: 'Integracija ir paleidimas',
        description:
          'Jungiame sistemą su jūsų CRM, el. paštu ir kitais kanalais. Paleidžiame bandomąją kampaniją ir kruopščiai optimizuojame.',
      },
      {
        num: '04',
        title: 'Optimizavimas ir augimas',
        description:
          'Stebime rezultatus realiuoju laiku, nuolat tobuliname algoritmų parametrus ir plečiame sėkmingus srautus pagal duomenis.',
      },
      {
        num: '05',
        title: 'Partnerystė ir plėtra',
        description:
          'Esame ilgalaikiai partneriai — mėnesio ataskaitose aptariame pažangą, strategiją koreguojame kartu ir augame kartu su jumis.',
      },
    ],
    chat: {
      header: 'Oaklines AI asistentas',
      status: 'Aktyvus dabar',
      messages: [
        {
          type: 'ai' as const,
          text: 'Sveiki! Esu Oaklines AI asistentas. Padėsiu jums rasti geriausią sprendimą klientų generavimui. Kokia jūsų pagrindinė problema?',
          delay: 600,
        },
        {
          type: 'user' as const,
          text: 'Mano komanda sugaišta per daug laiko rankinei kontaktų paieškai.',
          delay: 1800,
        },
        {
          type: 'ai' as const,
          text: 'Suprantu — tai dažna problema. Paprastai tai reiškia 60–70 % laiko eikvojimą neproduktyviam darbui.',
          delay: 3200,
        },
        {
          type: 'user' as const,
          text: 'Kaip greitai galite tai išspręsti?',
          delay: 4800,
        },
        {
          type: 'ai' as const,
          text: 'Per 14 dienų galite turėti pilnai veikiančią AI sistemą, kuri automatiškai suranda, kvalifikuoja ir susisiekia su potencialiais klientais.',
          delay: 6200,
        },
      ],
    },
  },

  results: {
    tag: 'Tyrimai',
    title: 'Duomenimis pagrįsti rezultatai',
    subtitle:
      'Mūsų išvados pagrįstos plačiais pramonės tyrimais ir šimtų klientų atvejų analize.',
    stats: [
      { value: 78, suffix: '%', label: 'Vidutinis kontaktų augimas per 90 dienų' },
      { value: 80, suffix: '%', label: 'Laiko sutaupymas pardavimų komandai' },
      { value: 67, suffix: '%', label: 'Konversijų rodiklių pagerėjimas' },
      { value: 14, suffix: 'x', label: 'Vidutinis investicijų grąžos rodiklis' },
    ],
    insightCards: [
      {
        icon: 'trending-up',
        category: 'Potencialūs klientai',
        stat: '+340%',
        headline: 'AI sistemos generuoja 3,4x daugiau kvalifikuotų kontaktų',
        detail:
          'Lyginant su tradicinėmis metodikomis, AI valdomi kontaktų generavimo srautai nuosekliai tiekia daugiau aukštos kokybės kontaktų mažesnėmis sąnaudomis.',
        source: 'McKinsey AI vertybių ataskaita, 2024',
      },
      {
        icon: 'clock',
        category: 'Laikas ir efektyvumas',
        stat: '6,2 val.',
        headline: 'Vidutiniškai sutaupyta per dieną kiekvienam pardavimų atstovui',
        detail:
          'Automatizuodami duomenų įvedimą, tolesnę veiklą ir kontaktų paiešką, AI išlaisvina komandas strateginiam darbui.',
        source: 'Salesforce būsenos ataskaita, 2024',
      },
      {
        icon: 'zap',
        category: 'Greitis',
        stat: '28 sek.',
        headline: 'AI atsako laikas prieš 14 valandų pramonės vidurkį',
        detail:
          'Pirminiai tyrimai rodo, kad kontaktai, su kuriais susisiekiama per 5 minutes, konvertuoja 21 kartą geriau nei tie, su kuriais susisiekiama vėliau.',
        source: 'Harvard Business Review, 2023',
      },
      {
        icon: 'dollar-sign',
        category: 'ROI',
        stat: '€4,80',
        headline: 'Vidutinė kaina už kontaktą su Oaklines AI',
        detail:
          'Lyginant su pramonės vidurkiu €18–€45, AI sistema pasiekia aukštesnę kokybę žymiai mažesnėmis sąnaudomis.',
        source: 'Vidaus duomenys, 2024 m. II ketv.',
      },
      {
        icon: 'users',
        category: 'Klientų išlaikymas',
        stat: '+52%',
        headline: 'Geresnis klientų išlaikymas su AI personalizavimu',
        detail:
          'Personalizuoti, laiku pateikti žinutės iki 52 % pagerina klientų išlaikymą lyginant su masinės rinkodaros metodais.',
        source: 'Gartner ryšių tyrimas, 2024',
      },
    ],
    channelCard: {
      title: 'Kanalų veiksmingumas',
      subtitle: 'Konversijos rodikliai pagal kanalą',
      channels: [
        { name: 'El. paštas (AI)', value: '38,4%', pct: 85, color: 'blue' },
        { name: 'LinkedIn kontaktas', value: '24,1%', pct: 62, color: 'purple' },
        { name: 'Pokalbių botas', value: '31,7%', pct: 74, color: 'green' },
        { name: 'SMS / žinutės', value: '19,3%', pct: 48, color: 'orange' },
        { name: 'Tradicinis el. paštas', value: '8,2%', pct: 22, color: 'muted' },
      ],
    },
    disclaimer:
      'Duomenys pagrįsti viešai prieinamais pramonės tyrimais ir vidutiniais klientų rodikliais. Individualūs rezultatai priklauso nuo sektoriaus, rinkos ir diegimo.',
  },

  whoWeHelp: {
    tag: 'Sektoriai',
    title: 'Kam tinka Oaklines',
    subtitle:
      'Mūsų AI sistemų lankstumas leidžia prisitaikyti prie bet kurio sektoriaus specifikos.',
    industries: [
      { name: 'E-komercija ir mažmeninė prekyba', icon: 'shopping-bag' },
      { name: 'Nekilnojamasis turtas', icon: 'home' },
      { name: 'Sveikatos priežiūra', icon: 'heart' },
      { name: 'Finansai ir draudimas', icon: 'bar-chart-2' },
      { name: 'Švietimas ir mokymai', icon: 'book-open' },
      { name: 'Teisės paslaugos', icon: 'shield' },
      { name: 'Technologijos ir SaaS', icon: 'cpu' },
      { name: 'Viešbučiai ir restouranai', icon: 'coffee' },
    ],
  },

  approach: {
    tag: 'Mūsų principai',
    title: 'Skaidrumas ir sąžiningumas',
    subtitle: 'Tikėjimas, kad technologija turi dirbti žmonėms, ne atvirkščiai.',
    cards: [
      {
        icon: 'clock',
        title: 'Greitas ir matomas poveikis',
        quote:
          '„Suprojektavome kiekvieną sistemą taip, kad klientai matytų pirmuosius rezultatus per 30 dienų — ne po 6 mėnesių."',
        authors: 'Pijus & Alaa, Oaklines įkūrėjai',
      },
      {
        icon: 'check-circle',
        title: 'Jokių sufabrikuotų atvejų tyrimų.',
        body: 'Mes rodomais duomenimis — ir tik tais, kuriuos galime pagrįsti. Nėra perdėtų žadų, tik aiškūs rodikliai ir realūs pavyzdžiai iš mūsų klientų.',
      },
      {
        icon: 'layers',
        title: 'Sistemos, augančios kartu su jumis.',
        body: 'Sukuriame modulines sistemas, kurias galima lengvai išplėsti. Pradedame nuo esminio proceso automatizavimo ir plečiamės kartu su jūsų verslo poreikiais.',
      },
    ],
  },

  features: {
    tag: 'Galimybės',
    title: 'Platforma, sukurta augimui',
    subtitle:
      'Viskas vienoje vietoje — nuo kontaktų paieškos iki sandorių analizės.',
    items: [
      {
        icon: 'zap',
        title: 'Momentinis reagavimas',
        description: 'AI atsako į užklausas per 28 sekundes, nepaisant paros laiko.',
      },
      {
        icon: 'layers',
        title: 'Daugiakanalė automatizacija',
        description: 'Valdo el. paštą, LinkedIn, SMS ir pokalbių botus iš vienos platformos.',
      },
      {
        icon: 'trending-up',
        title: 'Prognozuojamoji analizė',
        description: 'Anticipuoja klientų elgseną ir prisitaiko prie pardavimų tendencijų.',
      },
      {
        icon: 'shield',
        title: 'BDAR atitikimas',
        description: 'Visiškai atitinka Europos duomenų apsaugos reglamentus.',
      },
      {
        icon: 'users',
        title: 'Komandos bendradarbiavimas',
        description: 'Bendrinamos prietaisų lentelės, vaidmenų sistema ir veiklos valdymas.',
      },
      {
        icon: 'settings',
        title: 'API ir integracija',
        description: 'Atviras API ir 40+ pagamintos integracijos populiariausioms CRM sistemoms.',
      },
    ],
    panel: {
      title: 'Sistemos veikimas realiuoju laiku',
      metrics: [
        { label: 'Kontaktų kokybė', value: 87, color: 'blue' },
        { label: 'Susitikimų užsakymas', value: 72, color: 'green' },
        { label: 'Atsakymo greitis', value: 95, color: 'purple' },
      ],
      channels: [
        { name: 'El. paštas', value: '38,4%', pct: 84 },
        { name: 'LinkedIn', value: '24,1%', pct: 62 },
        { name: 'Pokalbių botas', value: '31,7%', pct: 74 },
        { name: 'SMS', value: '19,3%', pct: 48 },
        { name: 'Kiti', value: '11,2%', pct: 28 },
      ],
      costLabel: 'Vidutinė kaina / kontaktas',
      costValue: '€4,80',
    },
  },

  faq: {
    tag: 'D.U.K.',
    title: 'Dažniausiai užduodami klausimai',
    subtitle:
      'Neradote atsakymo? Susisiekite su mūsų komanda — atsakysime per kelias valandas.',
    items: [
      {
        question: 'Kaip veikia Oaklines AI sistema?',
        answer:
          'Oaklines AI sistema naudoja pažangius dirbtinio intelekto modelius, kad automatiškai užmegztų pirmąjį ryšį ir kvalifikuotų klientą. Sistema mokosi iš kiekvienos sąveikos ir nuolat tobulina rezultatus. Jūsų komanda gauna tik jau paruoštus, kvalifikuotus kontaktus.',
      },
      {
        question: 'Kiek laiko užtrunka sistemos įdiegimas?',
        answer:
          'Standartinis sistemos įdiegimas dažniausiai užtrunka 10–14 darbo dienų. Procesas apima verslo analizę, sistemos konfigūraciją, CRM integraciją ir automatizacijų paleidimą. Pirmieji rezultatai bei kontaktai dažniausiai pasirodo jau per pirmąją savaitę po sistemos aktyvavimo.',
      },
      {
        question: 'Ar galiu naudoti su esama CRM sistema?',
        answer:
          'Taip. Sistema gali būti integruojama su jūsų naudojama CRM platforma bei kitais verslo įrankiais, kad duomenys ir procesai veiktų vienoje vietoje.',
      },
      {
        question: 'Kokie rezultatai galimi?',
        answer:
          'AI sistemos padeda optimizuoti klientų komunikaciją, automatizuoti pasikartojančius procesus ir efektyviau valdyti potencialius klientus. Galutinis rezultatas priklauso nuo jūsų verslo modelio, naudojamų sistemų ir automatizacijos apimties.',
      },
      {
        question: 'Kiek kainuoja Oaklines paslaugos?',
        answer:
          'Kainos priklauso nuo jūsų verslo poreikių, automatizacijos apimties ir pasirinktų sprendimų. Po trumpos konsultacijos pateikiame aiškų ir individualų pasiūlymą pagal jūsų situaciją.',
      },
      {
        question: 'Ar reikalingos techninės žinios naudojimui?',
        answer:
          'Ne. AI sistemos sukurtos taip, kad jas būtų paprasta naudoti kasdienėje veikloje. Visą techninę dalį, automatizacijų priežiūrą ir sistemos veikimą prižiūri mūsų komanda.',
      },
      {
        question: 'Kaip matuojate rezultatus?',
        answer:
          'Stebime pagrindinius rodiklius, tokius kaip užklausų skaičius, atsakymo greitis, klientų komunikacijos efektyvumas ir automatizuotų procesų veikimas. Pagal surinktus duomenis optimizuojame sistemas ir siekiame geresnių rezultatų.',
      },
    ],
  },

  cta: {
    tag: 'Pradėkite šiandien',
    title: 'Pasiruošę automatizuoti klientų komunikaciją?',
    subtitle:
      'Atraskite, kaip AI sistemos gali padėti efektyviau valdyti užklausas, automatizuoti procesus ir taupyti jūsų laiką.',
    button: 'Gauti nemokamą konsultaciją',
  },

  contact: {
    tag: 'Kontaktai',
    title: 'Susisiekite su mumis',
    subtitle:
      'Papasakokite apie savo verslą — per 24 valandas atsiųsime pritaikytą augimo pasiūlymą.',
    info: [
      { icon: 'mail', label: 'El. paštas', value: 'info@oaklines.co' },
      { icon: 'phone', label: 'Telefonas', value: '+370 647 23422' },
      { icon: 'map-pin', label: 'Vieta', value: 'Kaunas, Lietuva' },
    ],
    founders: {
      label: 'Įkūrėjai',
      value: 'Pijus & Alaa',
    },
    company: {
      name: 'UAB Oaklines',
      code: 'Įmonės kodas: 306481920',
      vat: 'PVM kodas: LT100015481917',
    },
    form: {
      namePlaceholder: 'Vardas',
      lastnamePlaceholder: 'Pavardė',
      emailPlaceholder: 'El. paštas',
      phonePlaceholder: 'Telefono numeris',
      businessType: {
        label: 'Verslo tipas',
        options: [
          'Pasirinkite verslo tipą',
          'E-komercija / mažmeninė prekyba',
          'B2B paslaugos',
          'Nekilnojamasis turtas',
          'Sveikatos priežiūra',
          'Finansai / draudimas',
          'Švietimas',
          'Technologijos / SaaS',
          'Kita',
        ],
      },
      messagePlaceholder: 'Papasakokite apie savo verslą ir tikslus...',
      submit: 'Siųsti užklausą',
      submitting: 'Siunčiama...',
      successTitle: 'Žinutė išsiųsta!',
      successText:
        'Ačiū — atsakysime per 24 valandas su personalizuotu pasiūlymu jūsų verslui.',
    },
  },

  footer: {
    description:
      'AI augimo ir klientų generavimo agentūra, padedanti verslams augti greičiau su pažangiomis technologijomis.',
    services: {
      title: 'Paslaugos',
      links: [
        'AI klientų generavimas',
        'Automatizuoti pardavimai',
        'AI asistentai',
        'Duomenų analizė',
        'CRM integracija',
      ],
    },
    company: {
      title: 'Įmonė',
      links: ['Apie mus', 'Kaip dirbame', 'Tyrimai', 'Atvejų studijos', 'Straipsniai'],
    },
    contact: {
      title: 'Kontaktai',
      email: 'info@oaklines.co',
      phone: '+370 647 23422',
      bookCall: 'Rezervuoti skambutį',
      location: 'Kaunas, Lietuva',
    },
    copyright: '© 2025 Oaklines. Visos teisės saugomos.',
    tagline: 'Augkite greičiau su AI.',
  },
}
