export const germanWords = {
  // Verbs
  sollen: {
    type: 'verb',
    infinitive: 'sollen',
    meaning: 'should, ought to',
    conjugations: {
      present: {
        ich: 'soll',
        du: 'sollst',
        er: 'soll',
        sie: 'soll',
        es: 'soll',
        wir: 'sollen',
        ihr: 'sollt',
        sie_plural: 'sollen'
      },
      past: {
        ich: 'sollte',
        du: 'solltest',
        er: 'sollte',
        sie: 'sollte',
        es: 'sollte',
        wir: 'sollten',
        ihr: 'solltet',
        sie_plural: 'sollten'
      },
      perfect: {
        ich: 'habe gesollt',
        du: 'hast gesollt',
        er: 'hat gesollt',
        sie: 'hat gesollt',
        es: 'hat gesollt',
        wir: 'haben gesollt',
        ihr: 'habt gesollt',
        sie_plural: 'haben gesollt'
      }
    },
    alternatives: ['soll']
  },

  sein: {
    type: 'verb',
    infinitive: 'sein',
    meaning: 'to be',
    conjugations: {
      present: {
        ich: 'bin',
        du: 'bist',
        er: 'ist',
        sie: 'ist',
        es: 'ist',
        wir: 'sind',
        ihr: 'seid',
        sie_plural: 'sind'
      },
      past: {
        ich: 'war',
        du: 'warst',
        er: 'war',
        sie: 'war',
        es: 'war',
        wir: 'waren',
        ihr: 'wart',
        sie_plural: 'waren'
      },
      perfect: {
        ich: 'bin gewesen',
        du: 'bist gewesen',
        er: 'ist gewesen',
        sie: 'ist gewesen',
        es: 'ist gewesen',
        wir: 'sind gewesen',
        ihr: 'seid gewesen',
        sie_plural: 'sind gewesen'
      }
    },
    alternatives: ['bin', 'bist', 'ist', 'sind', 'seid', 'war', 'warst', 'waren', 'wart']
  },

  haben: {
    type: 'verb',
    infinitive: 'haben',
    meaning: 'to have',
    conjugations: {
      present: {
        ich: 'habe',
        du: 'hast',
        er: 'hat',
        sie: 'hat',
        es: 'hat',
        wir: 'haben',
        ihr: 'habt',
        sie_plural: 'haben'
      },
      past: {
        ich: 'hatte',
        du: 'hattest',
        er: 'hatte',
        sie: 'hatte',
        es: 'hatte',
        wir: 'hatten',
        ihr: 'hattet',
        sie_plural: 'hatten'
      },
      perfect: {
        ich: 'habe gehabt',
        du: 'hast gehabt',
        er: 'hat gehabt',
        sie: 'hat gehabt',
        es: 'hat gehabt',
        wir: 'haben gehabt',
        ihr: 'habt gehabt',
        sie_plural: 'haben gehabt'
      }
    },
    alternatives: ['habe', 'hast', 'hat', 'haben', 'habt', 'hatte', 'hattest', 'hatten', 'hattet']
  },

  // Nouns with cases
  der_Mann: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the man',
    cases: {
      nominativ: { singular: 'der Mann', plural: 'die Männer' },
      akkusativ: { singular: 'den Mann', plural: 'die Männer' },
      dativ: { singular: 'dem Mann', plural: 'den Männern' },
      genitiv: { singular: 'des Mannes', plural: 'der Männer' }
    },
    alternatives: ['mann', 'männer']
  },

  die_Frau: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the woman',
    cases: {
      nominativ: { singular: 'die Frau', plural: 'die Frauen' },
      akkusativ: { singular: 'die Frau', plural: 'die Frauen' },
      dativ: { singular: 'der Frau', plural: 'den Frauen' },
      genitiv: { singular: 'der Frau', plural: 'der Frauen' }
    },
    alternatives: ['frau', 'frauen']
  },

  das_Kind: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the child',
    cases: {
      nominativ: { singular: 'das Kind', plural: 'die Kinder' },
      akkusativ: { singular: 'das Kind', plural: 'die Kinder' },
      dativ: { singular: 'dem Kind', plural: 'den Kindern' },
      genitiv: { singular: 'des Kindes', plural: 'der Kinder' }
    },
    alternatives: ['kind', 'kinder']
  },

  das_Haus: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the house',
    cases: {
      nominativ: { singular: 'das Haus', plural: 'die Häuser' },
      akkusativ: { singular: 'das Haus', plural: 'die Häuser' },
      dativ: { singular: 'dem Haus', plural: 'den Häusern' },
      genitiv: { singular: 'des Hauses', plural: 'der Häuser' }
    },
    alternatives: ['haus', 'häuser']
  },

  der_Hund: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the dog',
    cases: {
      nominativ: { singular: 'der Hund', plural: 'die Hunde' },
      akkusativ: { singular: 'den Hund', plural: 'die Hunde' },
      dativ: { singular: 'dem Hund', plural: 'den Hunden' },
      genitiv: { singular: 'des Hundes', plural: 'der Hunde' }
    },
    alternatives: ['hund', 'hunde']
  },

  die_Katze: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the cat',
    cases: {
      nominativ: { singular: 'die Katze', plural: 'die Katzen' },
      akkusativ: { singular: 'die Katze', plural: 'die Katzen' },
      dativ: { singular: 'der Katze', plural: 'den Katzen' },
      genitiv: { singular: 'der Katze', plural: 'der Katzen' }
    },
    alternatives: ['katze', 'katzen']
  },

  // More verbs
  gehen: {
    type: 'verb',
    infinitive: 'gehen',
    meaning: 'to go',
    conjugations: {
      present: {
        ich: 'gehe',
        du: 'gehst',
        er: 'geht',
        sie: 'geht',
        es: 'geht',
        wir: 'gehen',
        ihr: 'geht',
        sie_plural: 'gehen'
      },
      past: {
        ich: 'ging',
        du: 'gingst',
        er: 'ging',
        sie: 'ging',
        es: 'ging',
        wir: 'gingen',
        ihr: 'gingt',
        sie_plural: 'gingen'
      },
      perfect: {
        ich: 'bin gegangen',
        du: 'bist gegangen',
        er: 'ist gegangen',
        sie: 'ist gegangen',
        es: 'ist gegangen',
        wir: 'sind gegangen',
        ihr: 'seid gegangen',
        sie_plural: 'sind gegangen'
      }
    },
    alternatives: ['gehe', 'gehst', 'geht', 'ging', 'gingst', 'gingen', 'gingt']
  },

  kommen: {
    type: 'verb',
    infinitive: 'kommen',
    meaning: 'to come',
    conjugations: {
      present: {
        ich: 'komme',
        du: 'kommst',
        er: 'kommt',
        sie: 'kommt',
        es: 'kommt',
        wir: 'kommen',
        ihr: 'kommt',
        sie_plural: 'kommen'
      },
      past: {
        ich: 'kam',
        du: 'kamst',
        er: 'kam',
        sie: 'kam',
        es: 'kam',
        wir: 'kamen',
        ihr: 'kamt',
        sie_plural: 'kamen'
      },
      perfect: {
        ich: 'bin gekommen',
        du: 'bist gekommen',
        er: 'ist gekommen',
        sie: 'ist gekommen',
        es: 'ist gekommen',
        wir: 'sind gekommen',
        ihr: 'seid gekommen',
        sie_plural: 'sind gekommen'
      }
    },
    alternatives: ['komme', 'kommst', 'kommt', 'kam', 'kamst', 'kamen', 'kamt']
  },

  machen: {
    type: 'verb',
    infinitive: 'machen',
    meaning: 'to make, to do',
    conjugations: {
      present: {
        ich: 'mache',
        du: 'machst',
        er: 'macht',
        sie: 'macht',
        es: 'macht',
        wir: 'machen',
        ihr: 'macht',
        sie_plural: 'machen'
      },
      past: {
        ich: 'machte',
        du: 'machtest',
        er: 'machte',
        sie: 'machte',
        es: 'machte',
        wir: 'machten',
        ihr: 'machtet',
        sie_plural: 'machten'
      },
      perfect: {
        ich: 'habe gemacht',
        du: 'hast gemacht',
        er: 'hat gemacht',
        sie: 'hat gemacht',
        es: 'hat gemacht',
        wir: 'haben gemacht',
        ihr: 'habt gemacht',
        sie_plural: 'haben gemacht'
      }
    },
    alternatives: ['mache', 'machst', 'macht', 'machte', 'machtest', 'machten', 'machtet']
  },

  // More nouns
  die_Schule: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the school',
    cases: {
      nominativ: { singular: 'die Schule', plural: 'die Schulen' },
      akkusativ: { singular: 'die Schule', plural: 'die Schulen' },
      dativ: { singular: 'der Schule', plural: 'den Schulen' },
      genitiv: { singular: 'der Schule', plural: 'der Schulen' }
    },
    alternatives: ['schule', 'schulen']
  },

  der_Tisch: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the table',
    cases: {
      nominativ: { singular: 'der Tisch', plural: 'die Tische' },
      akkusativ: { singular: 'den Tisch', plural: 'die Tische' },
      dativ: { singular: 'dem Tisch', plural: 'den Tischen' },
      genitiv: { singular: 'des Tisches', plural: 'der Tische' }
    },
    alternatives: ['tisch', 'tische']
  },

  das_Buch: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the book',
    cases: {
      nominativ: { singular: 'das Buch', plural: 'die Bücher' },
      akkusativ: { singular: 'das Buch', plural: 'die Bücher' },
      dativ: { singular: 'dem Buch', plural: 'den Büchern' },
      genitiv: { singular: 'des Buches', plural: 'der Bücher' }
    },
    alternatives: ['buch', 'bücher']
  },

  // More verbs
  können: {
    type: 'verb',
    infinitive: 'können',
    meaning: 'to be able to, can',
    conjugations: {
      present: {
        ich: 'kann',
        du: 'kannst',
        er: 'kann',
        sie: 'kann',
        es: 'kann',
        wir: 'können',
        ihr: 'könnt',
        sie_plural: 'können'
      },
      past: {
        ich: 'konnte',
        du: 'konntest',
        er: 'konnte',
        sie: 'konnte',
        es: 'konnte',
        wir: 'konnten',
        ihr: 'konntet',
        sie_plural: 'konnten'
      },
      perfect: {
        ich: 'habe gekonnt',
        du: 'hast gekonnt',
        er: 'hat gekonnt',
        sie: 'hat gekonnt',
        es: 'hat gekonnt',
        wir: 'haben gekonnt',
        ihr: 'habt gekonnt',
        sie_plural: 'haben gekonnt'
      }
    },
    alternatives: ['kann', 'kannst', 'könnt', 'konnte', 'konntest', 'konnten', 'konntet']
  },

  wollen: {
    type: 'verb',
    infinitive: 'wollen',
    meaning: 'to want to',
    conjugations: {
      present: {
        ich: 'will',
        du: 'willst',
        er: 'will',
        sie: 'will',
        es: 'will',
        wir: 'wollen',
        ihr: 'wollt',
        sie_plural: 'wollen'
      },
      past: {
        ich: 'wollte',
        du: 'wolltest',
        er: 'wollte',
        sie: 'wollte',
        es: 'wollte',
        wir: 'wollten',
        ihr: 'wolltet',
        sie_plural: 'wollten'
      },
      perfect: {
        ich: 'habe gewollt',
        du: 'hast gewollt',
        er: 'hat gewollt',
        sie: 'hat gewollt',
        es: 'hat gewollt',
        wir: 'haben gewollt',
        ihr: 'habt gewollt',
        sie_plural: 'haben gewollt'
      }
    },
    alternatives: ['will', 'willst', 'wollt', 'wollte', 'wolltest', 'wollten', 'wolltet']
  },

  müssen: {
    type: 'verb',
    infinitive: 'müssen',
    meaning: 'to have to, must',
    conjugations: {
      present: {
        ich: 'muss',
        du: 'musst',
        er: 'muss',
        sie: 'muss',
        es: 'muss',
        wir: 'müssen',
        ihr: 'müsst',
        sie_plural: 'müssen'
      },
      past: {
        ich: 'musste',
        du: 'musstest',
        er: 'musste',
        sie: 'musste',
        es: 'musste',
        wir: 'mussten',
        ihr: 'musstet',
        sie_plural: 'mussten'
      },
      perfect: {
        ich: 'habe gemusst',
        du: 'hast gemusst',
        er: 'hat gemusst',
        sie: 'hat gemusst',
        es: 'hat gemusst',
        wir: 'haben gemusst',
        ihr: 'habt gemusst',
        sie_plural: 'haben gemusst'
      }
    },
    alternatives: ['muss', 'musst', 'müsst', 'musste', 'musstest', 'mussten', 'musstet']
  },

  // BAKERY AND FOOD RELATED WORDS
  die_Bäckerei: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the bakery',
    cases: {
      nominativ: { singular: 'die Bäckerei', plural: 'die Bäckereien' },
      akkusativ: { singular: 'die Bäckerei', plural: 'die Bäckereien' },
      dativ: { singular: 'der Bäckerei', plural: 'den Bäckereien' },
      genitiv: { singular: 'der Bäckerei', plural: 'der Bäckereien' }
    },
    alternatives: ['bäckerei', 'bäckereien']
  },

  das_Brot: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the bread',
    cases: {
      nominativ: { singular: 'das Brot', plural: 'die Brote' },
      akkusativ: { singular: 'das Brot', plural: 'die Brote' },
      dativ: { singular: 'dem Brot', plural: 'den Broten' },
      genitiv: { singular: 'des Brotes', plural: 'der Brote' }
    },
    alternatives: ['brot', 'brote']
  },

  der_Kuchen: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the cake',
    cases: {
      nominativ: { singular: 'der Kuchen', plural: 'die Kuchen' },
      akkusativ: { singular: 'den Kuchen', plural: 'die Kuchen' },
      dativ: { singular: 'dem Kuchen', plural: 'den Kuchen' },
      genitiv: { singular: 'des Kuchens', plural: 'der Kuchen' }
    },
    alternatives: ['kuchen']
  },

  die_Milch: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the milk',
    cases: {
      nominativ: { singular: 'die Milch', plural: '-' },
      akkusativ: { singular: 'die Milch', plural: '-' },
      dativ: { singular: 'der Milch', plural: '-' },
      genitiv: { singular: 'der Milch', plural: '-' }
    },
    alternatives: ['milch']
  },

  das_Fleisch: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the meat',
    cases: {
      nominativ: { singular: 'das Fleisch', plural: '-' },
      akkusativ: { singular: 'das Fleisch', plural: '-' },
      dativ: { singular: 'dem Fleisch', plural: '-' },
      genitiv: { singular: 'des Fleisches', plural: '-' }
    },
    alternatives: ['fleisch']
  },

  // FAMILY AND PEOPLE
  die_Familie: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the family',
    cases: {
      nominativ: { singular: 'die Familie', plural: 'die Familien' },
      akkusativ: { singular: 'die Familie', plural: 'die Familien' },
      dativ: { singular: 'der Familie', plural: 'den Familien' },
      genitiv: { singular: 'der Familie', plural: 'der Familien' }
    },
    alternatives: ['familie', 'familien']
  },

  der_Vater: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the father',
    cases: {
      nominativ: { singular: 'der Vater', plural: 'die Väter' },
      akkusativ: { singular: 'den Vater', plural: 'die Väter' },
      dativ: { singular: 'dem Vater', plural: 'den Vätern' },
      genitiv: { singular: 'des Vaters', plural: 'der Väter' }
    },
    alternatives: ['vater', 'väter']
  },

  die_Mutter: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the mother',
    cases: {
      nominativ: { singular: 'die Mutter', plural: 'die Mütter' },
      akkusativ: { singular: 'die Mutter', plural: 'die Mütter' },
      dativ: { singular: 'der Mutter', plural: 'den Müttern' },
      genitiv: { singular: 'der Mutter', plural: 'der Mütter' }
    },
    alternatives: ['mutter', 'mütter']
  },

  der_Bruder: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the brother',
    cases: {
      nominativ: { singular: 'der Bruder', plural: 'die Brüder' },
      akkusativ: { singular: 'den Bruder', plural: 'die Brüder' },
      dativ: { singular: 'dem Bruder', plural: 'den Brüdern' },
      genitiv: { singular: 'des Bruders', plural: 'der Brüder' }
    },
    alternatives: ['bruder', 'brüder']
  },

  die_Schwester: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the sister',
    cases: {
      nominativ: { singular: 'die Schwester', plural: 'die Schwestern' },
      akkusativ: { singular: 'die Schwester', plural: 'die Schwestern' },
      dativ: { singular: 'der Schwester', plural: 'den Schwestern' },
      genitiv: { singular: 'der Schwester', plural: 'der Schwestern' }
    },
    alternatives: ['schwester', 'schwestern']
  },

  // PLACES AND BUILDINGS
  die_Stadt: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the city',
    cases: {
      nominativ: { singular: 'die Stadt', plural: 'die Städte' },
      akkusativ: { singular: 'die Stadt', plural: 'die Städte' },
      dativ: { singular: 'der Stadt', plural: 'den Städten' },
      genitiv: { singular: 'der Stadt', plural: 'der Städte' }
    },
    alternatives: ['stadt', 'städte']
  },

  das_Krankenhaus: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the hospital',
    cases: {
      nominativ: { singular: 'das Krankenhaus', plural: 'die Krankenhäuser' },
      akkusativ: { singular: 'das Krankenhaus', plural: 'die Krankenhäuser' },
      dativ: { singular: 'dem Krankenhaus', plural: 'den Krankenhäusern' },
      genitiv: { singular: 'des Krankenhauses', plural: 'der Krankenhäuser' }
    },
    alternatives: ['krankenhaus', 'krankenhäuser']
  },

  die_Universität: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the university',
    cases: {
      nominativ: { singular: 'die Universität', plural: 'die Universitäten' },
      akkusativ: { singular: 'die Universität', plural: 'die Universitäten' },
      dativ: { singular: 'der Universität', plural: 'den Universitäten' },
      genitiv: { singular: 'der Universität', plural: 'der Universitäten' }
    },
    alternatives: ['universität', 'universitäten', 'uni']
  },

  der_Bahnhof: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the train station',
    cases: {
      nominativ: { singular: 'der Bahnhof', plural: 'die Bahnhöfe' },
      akkusativ: { singular: 'den Bahnhof', plural: 'die Bahnhöfe' },
      dativ: { singular: 'dem Bahnhof', plural: 'den Bahnhöfen' },
      genitiv: { singular: 'des Bahnhofs', plural: 'der Bahnhöfe' }
    },
    alternatives: ['bahnhof', 'bahnhöfe']
  },

  das_Restaurant: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the restaurant',
    cases: {
      nominativ: { singular: 'das Restaurant', plural: 'die Restaurants' },
      akkusativ: { singular: 'das Restaurant', plural: 'die Restaurants' },
      dativ: { singular: 'dem Restaurant', plural: 'den Restaurants' },
      genitiv: { singular: 'des Restaurants', plural: 'der Restaurants' }
    },
    alternatives: ['restaurant', 'restaurants']
  },

  // TRANSPORTATION
  das_Auto: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the car',
    cases: {
      nominativ: { singular: 'das Auto', plural: 'die Autos' },
      akkusativ: { singular: 'das Auto', plural: 'die Autos' },
      dativ: { singular: 'dem Auto', plural: 'den Autos' },
      genitiv: { singular: 'des Autos', plural: 'der Autos' }
    },
    alternatives: ['auto', 'autos']
  },

  der_Zug: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the train',
    cases: {
      nominativ: { singular: 'der Zug', plural: 'die Züge' },
      akkusativ: { singular: 'den Zug', plural: 'die Züge' },
      dativ: { singular: 'dem Zug', plural: 'den Zügen' },
      genitiv: { singular: 'des Zuges', plural: 'der Züge' }
    },
    alternatives: ['zug', 'züge']
  },

  das_Flugzeug: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the airplane',
    cases: {
      nominativ: { singular: 'das Flugzeug', plural: 'die Flugzeuge' },
      akkusativ: { singular: 'das Flugzeug', plural: 'die Flugzeuge' },
      dativ: { singular: 'dem Flugzeug', plural: 'den Flugzeugen' },
      genitiv: { singular: 'des Flugzeugs', plural: 'der Flugzeuge' }
    },
    alternatives: ['flugzeug', 'flugzeuge']
  },

  // TIME AND WEATHER
  die_Zeit: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the time',
    cases: {
      nominativ: { singular: 'die Zeit', plural: 'die Zeiten' },
      akkusativ: { singular: 'die Zeit', plural: 'die Zeiten' },
      dativ: { singular: 'der Zeit', plural: 'den Zeiten' },
      genitiv: { singular: 'der Zeit', plural: 'der Zeiten' }
    },
    alternatives: ['zeit', 'zeiten']
  },

  der_Tag: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the day',
    cases: {
      nominativ: { singular: 'der Tag', plural: 'die Tage' },
      akkusativ: { singular: 'den Tag', plural: 'die Tage' },
      dativ: { singular: 'dem Tag', plural: 'den Tagen' },
      genitiv: { singular: 'des Tages', plural: 'der Tage' }
    },
    alternatives: ['tag', 'tage']
  },

  die_Nacht: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the night',
    cases: {
      nominativ: { singular: 'die Nacht', plural: 'die Nächte' },
      akkusativ: { singular: 'die Nacht', plural: 'die Nächte' },
      dativ: { singular: 'der Nacht', plural: 'den Nächten' },
      genitiv: { singular: 'der Nacht', plural: 'der Nächte' }
    },
    alternatives: ['nacht', 'nächte']
  },

  das_Wetter: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the weather',
    cases: {
      nominativ: { singular: 'das Wetter', plural: '-' },
      akkusativ: { singular: 'das Wetter', plural: '-' },
      dativ: { singular: 'dem Wetter', plural: '-' },
      genitiv: { singular: 'des Wetters', plural: '-' }
    },
    alternatives: ['wetter']
  },

  // COLORS
  die_Farbe: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the color',
    cases: {
      nominativ: { singular: 'die Farbe', plural: 'die Farben' },
      akkusativ: { singular: 'die Farbe', plural: 'die Farben' },
      dativ: { singular: 'der Farbe', plural: 'den Farben' },
      genitiv: { singular: 'der Farbe', plural: 'der Farben' }
    },
    alternatives: ['farbe', 'farben']
  },

  // BODY PARTS
  der_Kopf: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the head',
    cases: {
      nominativ: { singular: 'der Kopf', plural: 'die Köpfe' },
      akkusativ: { singular: 'den Kopf', plural: 'die Köpfe' },
      dativ: { singular: 'dem Kopf', plural: 'den Köpfen' },
      genitiv: { singular: 'des Kopfes', plural: 'der Köpfe' }
    },
    alternatives: ['kopf', 'köpfe']
  },

  die_Hand: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the hand',
    cases: {
      nominativ: { singular: 'die Hand', plural: 'die Hände' },
      akkusativ: { singular: 'die Hand', plural: 'die Hände' },
      dativ: { singular: 'der Hand', plural: 'den Händen' },
      genitiv: { singular: 'der Hand', plural: 'der Hände' }
    },
    alternatives: ['hand', 'hände']
  },

  das_Auge: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the eye',
    cases: {
      nominativ: { singular: 'das Auge', plural: 'die Augen' },
      akkusativ: { singular: 'das Auge', plural: 'die Augen' },
      dativ: { singular: 'dem Auge', plural: 'den Augen' },
      genitiv: { singular: 'des Auges', plural: 'der Augen' }
    },
    alternatives: ['auge', 'augen']
  },

  // WORK AND PROFESSIONS
  die_Arbeit: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the work',
    cases: {
      nominativ: { singular: 'die Arbeit', plural: 'die Arbeiten' },
      akkusativ: { singular: 'die Arbeit', plural: 'die Arbeiten' },
      dativ: { singular: 'der Arbeit', plural: 'den Arbeiten' },
      genitiv: { singular: 'der Arbeit', plural: 'der Arbeiten' }
    },
    alternatives: ['arbeit', 'arbeiten']
  },

  der_Arzt: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the doctor (male)',
    cases: {
      nominativ: { singular: 'der Arzt', plural: 'die Ärzte' },
      akkusativ: { singular: 'den Arzt', plural: 'die Ärzte' },
      dativ: { singular: 'dem Arzt', plural: 'den Ärzten' },
      genitiv: { singular: 'des Arztes', plural: 'der Ärzte' }
    },
    alternatives: ['arzt', 'ärzte']
  },

  die_Ärztin: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the doctor (female)',
    cases: {
      nominativ: { singular: 'die Ärztin', plural: 'die Ärztinnen' },
      akkusativ: { singular: 'die Ärztin', plural: 'die Ärztinnen' },
      dativ: { singular: 'der Ärztin', plural: 'den Ärztinnen' },
      genitiv: { singular: 'der Ärztin', plural: 'der Ärztinnen' }
    },
    alternatives: ['ärztin', 'ärztinnen']
  },

  der_Lehrer: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the teacher (male)',
    cases: {
      nominativ: { singular: 'der Lehrer', plural: 'die Lehrer' },
      akkusativ: { singular: 'den Lehrer', plural: 'die Lehrer' },
      dativ: { singular: 'dem Lehrer', plural: 'den Lehrern' },
      genitiv: { singular: 'des Lehrers', plural: 'der Lehrer' }
    },
    alternatives: ['lehrer']
  },

  die_Lehrerin: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the teacher (female)',
    cases: {
      nominativ: { singular: 'die Lehrerin', plural: 'die Lehrerinnen' },
      akkusativ: { singular: 'die Lehrerin', plural: 'die Lehrerinnen' },
      dativ: { singular: 'der Lehrerin', plural: 'den Lehrerinnen' },
      genitiv: { singular: 'der Lehrerin', plural: 'der Lehrerinnen' }
    },
    alternatives: ['lehrerin', 'lehrerinnen']
  },

  // MORE COMMON VERBS
  sehen: {
    type: 'verb',
    infinitive: 'sehen',
    meaning: 'to see',
    conjugations: {
      present: {
        ich: 'sehe',
        du: 'siehst',
        er: 'sieht',
        sie: 'sieht',
        es: 'sieht',
        wir: 'sehen',
        ihr: 'seht',
        sie_plural: 'sehen'
      },
      past: {
        ich: 'sah',
        du: 'sahst',
        er: 'sah',
        sie: 'sah',
        es: 'sah',
        wir: 'sahen',
        ihr: 'saht',
        sie_plural: 'sahen'
      },
      perfect: {
        ich: 'habe gesehen',
        du: 'hast gesehen',
        er: 'hat gesehen',
        sie: 'hat gesehen',
        es: 'hat gesehen',
        wir: 'haben gesehen',
        ihr: 'habt gesehen',
        sie_plural: 'haben gesehen'
      }
    },
    alternatives: ['sehe', 'siehst', 'sieht', 'seht', 'sah', 'sahst', 'sahen', 'saht']
  },

  hören: {
    type: 'verb',
    infinitive: 'hören',
    meaning: 'to hear',
    conjugations: {
      present: {
        ich: 'höre',
        du: 'hörst',
        er: 'hört',
        sie: 'hört',
        es: 'hört',
        wir: 'hören',
        ihr: 'hört',
        sie_plural: 'hören'
      },
      past: {
        ich: 'hörte',
        du: 'hörtest',
        er: 'hörte',
        sie: 'hörte',
        es: 'hörte',
        wir: 'hörten',
        ihr: 'hörtet',
        sie_plural: 'hörten'
      },
      perfect: {
        ich: 'habe gehört',
        du: 'hast gehört',
        er: 'hat gehört',
        sie: 'hat gehört',
        es: 'hat gehört',
        wir: 'haben gehört',
        ihr: 'habt gehört',
        sie_plural: 'haben gehört'
      }
    },
    alternatives: ['höre', 'hörst', 'hört', 'hörte', 'hörtest', 'hörten', 'hörtet']
  },

  sprechen: {
    type: 'verb',
    infinitive: 'sprechen',
    meaning: 'to speak',
    conjugations: {
      present: {
        ich: 'spreche',
        du: 'sprichst',
        er: 'spricht',
        sie: 'spricht',
        es: 'spricht',
        wir: 'sprechen',
        ihr: 'sprecht',
        sie_plural: 'sprechen'
      },
      past: {
        ich: 'sprach',
        du: 'sprachst',
        er: 'sprach',
        sie: 'sprach',
        es: 'sprach',
        wir: 'sprachen',
        ihr: 'spracht',
        sie_plural: 'sprachen'
      },
      perfect: {
        ich: 'habe gesprochen',
        du: 'hast gesprochen',
        er: 'hat gesprochen',
        sie: 'hat gesprochen',
        es: 'hat gesprochen',
        wir: 'haben gesprochen',
        ihr: 'habt gesprochen',
        sie_plural: 'haben gesprochen'
      }
    },
    alternatives: ['spreche', 'sprichst', 'spricht', 'sprecht', 'sprach', 'sprachst', 'sprachen', 'spracht']
  },

  denken: {
    type: 'verb',
    infinitive: 'denken',
    meaning: 'to think',
    conjugations: {
      present: {
        ich: 'denke',
        du: 'denkst',
        er: 'denkt',
        sie: 'denkt',
        es: 'denkt',
        wir: 'denken',
        ihr: 'denkt',
        sie_plural: 'denken'
      },
      past: {
        ich: 'dachte',
        du: 'dachtest',
        er: 'dachte',
        sie: 'dachte',
        es: 'dachte',
        wir: 'dachten',
        ihr: 'dachtet',
        sie_plural: 'dachten'
      },
      perfect: {
        ich: 'habe gedacht',
        du: 'hast gedacht',
        er: 'hat gedacht',
        sie: 'hat gedacht',
        es: 'hat gedacht',
        wir: 'haben gedacht',
        ihr: 'habt gedacht',
        sie_plural: 'haben gedacht'
      }
    },
    alternatives: ['denke', 'denkst', 'denkt', 'dachte', 'dachtest', 'dachten', 'dachtet']
  },

  essen: {
    type: 'verb',
    infinitive: 'essen',
    meaning: 'to eat',
    conjugations: {
      present: {
        ich: 'esse',
        du: 'isst',
        er: 'isst',
        sie: 'isst',
        es: 'isst',
        wir: 'essen',
        ihr: 'esst',
        sie_plural: 'essen'
      },
      past: {
        ich: 'aß',
        du: 'aßt',
        er: 'aß',
        sie: 'aß',
        es: 'aß',
        wir: 'aßen',
        ihr: 'aßt',
        sie_plural: 'aßen'
      },
      perfect: {
        ich: 'habe gegessen',
        du: 'hast gegessen',
        er: 'hat gegessen',
        sie: 'hat gegessen',
        es: 'hat gegessen',
        wir: 'haben gegessen',
        ihr: 'habt gegessen',
        sie_plural: 'haben gegessen'
      }
    },
    alternatives: ['esse', 'isst', 'esst', 'aß', 'aßt', 'aßen']
  },

  trinken: {
    type: 'verb',
    infinitive: 'trinken',
    meaning: 'to drink',
    conjugations: {
      present: {
        ich: 'trinke',
        du: 'trinkst',
        er: 'trinkt',
        sie: 'trinkt',
        es: 'trinkt',
        wir: 'trinken',
        ihr: 'trinkt',
        sie_plural: 'trinken'
      },
      past: {
        ich: 'trank',
        du: 'trankst',
        er: 'trank',
        sie: 'trank',
        es: 'trank',
        wir: 'tranken',
        ihr: 'trankt',
        sie_plural: 'tranken'
      },
      perfect: {
        ich: 'habe getrunken',
        du: 'hast getrunken',
        er: 'hat getrunken',
        sie: 'hat getrunken',
        es: 'hat getrunken',
        wir: 'haben getrunken',
        ihr: 'habt getrunken',
        sie_plural: 'haben getrunken'
      }
    },
    alternatives: ['trinke', 'trinkst', 'trinkt', 'trank', 'trankst', 'tranken', 'trankt']
  },

  schlafen: {
    type: 'verb',
    infinitive: 'schlafen',
    meaning: 'to sleep',
    conjugations: {
      present: {
        ich: 'schlafe',
        du: 'schläfst',
        er: 'schläft',
        sie: 'schläft',
        es: 'schläft',
        wir: 'schlafen',
        ihr: 'schlaft',
        sie_plural: 'schlafen'
      },
      past: {
        ich: 'schlief',
        du: 'schliefst',
        er: 'schlief',
        sie: 'schlief',
        es: 'schlief',
        wir: 'schliefen',
        ihr: 'schlieft',
        sie_plural: 'schliefen'
      },
      perfect: {
        ich: 'habe geschlafen',
        du: 'hast geschlafen',
        er: 'hat geschlafen',
        sie: 'hat geschlafen',
        es: 'hat geschlafen',
        wir: 'haben geschlafen',
        ihr: 'habt geschlafen',
        sie_plural: 'haben geschlafen'
      }
    },
    alternatives: ['schlafe', 'schläfst', 'schläft', 'schlaft', 'schlief', 'schliefst', 'schliefen', 'schlieft']
  },

  arbeiten: {
    type: 'verb',
    infinitive: 'arbeiten',
    meaning: 'to work',
    conjugations: {
      present: {
        ich: 'arbeite',
        du: 'arbeitest',
        er: 'arbeitet',
        sie: 'arbeitet',
        es: 'arbeitet',
        wir: 'arbeiten',
        ihr: 'arbeitet',
        sie_plural: 'arbeiten'
      },
      past: {
        ich: 'arbeitete',
        du: 'arbeitetest',
        er: 'arbeitete',
        sie: 'arbeitete',
        es: 'arbeitete',
        wir: 'arbeiteten',
        ihr: 'arbeitetet',
        sie_plural: 'arbeiteten'
      },
      perfect: {
        ich: 'habe gearbeitet',
        du: 'hast gearbeitet',
        er: 'hat gearbeitet',
        sie: 'hat gearbeitet',
        es: 'hat gearbeitet',
        wir: 'haben gearbeitet',
        ihr: 'habt gearbeitet',
        sie_plural: 'haben gearbeitet'
      }
    },
    alternatives: ['arbeite', 'arbeitest', 'arbeitet', 'arbeitete', 'arbeitetest', 'arbeiteten', 'arbeitetet']
  },

  lernen: {
    type: 'verb',
    infinitive: 'lernen',
    meaning: 'to learn',
    conjugations: {
      present: {
        ich: 'lerne',
        du: 'lernst',
        er: 'lernt',
        sie: 'lernt',
        es: 'lernt',
        wir: 'lernen',
        ihr: 'lernt',
        sie_plural: 'lernen'
      },
      past: {
        ich: 'lernte',
        du: 'lerntest',
        er: 'lernte',
        sie: 'lernte',
        es: 'lernte',
        wir: 'lernten',
        ihr: 'lerntet',
        sie_plural: 'lernten'
      },
      perfect: {
        ich: 'habe gelernt',
        du: 'hast gelernt',
        er: 'hat gelernt',
        sie: 'hat gelernt',
        es: 'hat gelernt',
        wir: 'haben gelernt',
        ihr: 'habt gelernt',
        sie_plural: 'haben gelernt'
      }
    },
    alternatives: ['lerne', 'lernst', 'lernt', 'lernte', 'lerntest', 'lernten', 'lerntet']
  },

  leben: {
    type: 'verb',
    infinitive: 'leben',
    meaning: 'to live',
    conjugations: {
      present: {
        ich: 'lebe',
        du: 'lebst',
        er: 'lebt',
        sie: 'lebt',
        es: 'lebt',
        wir: 'leben',
        ihr: 'lebt',
        sie_plural: 'leben'
      },
      past: {
        ich: 'lebte',
        du: 'lebtest',
        er: 'lebte',
        sie: 'lebte',
        es: 'lebte',
        wir: 'lebten',
        ihr: 'lebtet',
        sie_plural: 'lebten'
      },
      perfect: {
        ich: 'habe gelebt',
        du: 'hast gelebt',
        er: 'hat gelebt',
        sie: 'hat gelebt',
        es: 'hat gelebt',
        wir: 'haben gelebt',
        ihr: 'habt gelebt',
        sie_plural: 'haben gelebt'
      }
    },
    alternatives: ['lebe', 'lebst', 'lebt', 'lebte', 'lebtest', 'lebten', 'lebtet']
  },

  lieben: {
    type: 'verb',
    infinitive: 'lieben',
    meaning: 'to love',
    conjugations: {
      present: {
        ich: 'liebe',
        du: 'liebst',
        er: 'liebt',
        sie: 'liebt',
        es: 'liebt',
        wir: 'lieben',
        ihr: 'liebt',
        sie_plural: 'lieben'
      },
      past: {
        ich: 'liebte',
        du: 'liebtest',
        er: 'liebte',
        sie: 'liebte',
        es: 'liebte',
        wir: 'liebten',
        ihr: 'liebtet',
        sie_plural: 'liebten'
      },
      perfect: {
        ich: 'habe geliebt',
        du: 'hast geliebt',
        er: 'hat geliebt',
        sie: 'hat geliebt',
        es: 'hat geliebt',
        wir: 'haben geliebt',
        ihr: 'habt geliebt',
        sie_plural: 'haben geliebt'
      }
    },
    alternatives: ['liebe', 'liebst', 'liebt', 'liebte', 'liebtest', 'liebten', 'liebtet']
  },

  finden: {
    type: 'verb',
    infinitive: 'finden',
    meaning: 'to find',
    conjugations: {
      present: {
        ich: 'finde',
        du: 'findest',
        er: 'findet',
        sie: 'findet',
        es: 'findet',
        wir: 'finden',
        ihr: 'findet',
        sie_plural: 'finden'
      },
      past: {
        ich: 'fand',
        du: 'fandest',
        er: 'fand',
        sie: 'fand',
        es: 'fand',
        wir: 'fanden',
        ihr: 'fandet',
        sie_plural: 'fanden'
      },
      perfect: {
        ich: 'habe gefunden',
        du: 'hast gefunden',
        er: 'hat gefunden',
        sie: 'hat gefunden',
        es: 'hat gefunden',
        wir: 'haben gefunden',
        ihr: 'habt gefunden',
        sie_plural: 'haben gefunden'
      }
    },
    alternatives: ['finde', 'findest', 'findet', 'fand', 'fandest', 'fanden', 'fandet']
  },

  verstehen: {
    type: 'verb',
    infinitive: 'verstehen',
    meaning: 'to understand',
    conjugations: {
      present: {
        ich: 'verstehe',
        du: 'verstehst',
        er: 'versteht',
        sie: 'versteht',
        es: 'versteht',
        wir: 'verstehen',
        ihr: 'versteht',
        sie_plural: 'verstehen'
      },
      past: {
        ich: 'verstand',
        du: 'verstandest',
        er: 'verstand',
        sie: 'verstand',
        es: 'verstand',
        wir: 'verstanden',
        ihr: 'verstandet',
        sie_plural: 'verstanden'
      },
      perfect: {
        ich: 'habe verstanden',
        du: 'hast verstanden',
        er: 'hat verstanden',
        sie: 'hat verstanden',
        es: 'hat verstanden',
        wir: 'haben verstanden',
        ihr: 'habt verstanden',
        sie_plural: 'haben verstanden'
      }
    },
    alternatives: ['verstehe', 'verstehst', 'versteht', 'verstand', 'verstandest', 'verstanden', 'verstandet']
  },

  // ADJECTIVES WITH DECLENSIONS
  gut: {
    type: 'adjective',
    meaning: 'good',
    base_form: 'gut',
    comparative: 'besser',
    superlative: 'best-',
    declensions: {
      strong: {
        nominativ: { m: 'guter', f: 'gute', n: 'gutes', pl: 'gute' },
        akkusativ: { m: 'guten', f: 'gute', n: 'gutes', pl: 'gute' },
        dativ: { m: 'gutem', f: 'guter', n: 'gutem', pl: 'guten' },
        genitiv: { m: 'guten', f: 'guter', n: 'guten', pl: 'guter' }
      },
      weak: {
        nominativ: { m: 'gute', f: 'gute', n: 'gute', pl: 'guten' },
        akkusativ: { m: 'guten', f: 'gute', n: 'gute', pl: 'guten' },
        dativ: { m: 'guten', f: 'guten', n: 'guten', pl: 'guten' },
        genitiv: { m: 'guten', f: 'guten', n: 'guten', pl: 'guten' }
      },
      mixed: {
        nominativ: { m: 'guter', f: 'gute', n: 'gutes', pl: 'guten' },
        akkusativ: { m: 'guten', f: 'gute', n: 'gutes', pl: 'guten' },
        dativ: { m: 'guten', f: 'guten', n: 'guten', pl: 'guten' },
        genitiv: { m: 'guten', f: 'guten', n: 'guten', pl: 'guten' }
      }
    },
    alternatives: ['guter', 'gute', 'gutes', 'guten', 'gutem', 'besser']
  },

  schön: {
    type: 'adjective',
    meaning: 'beautiful',
    base_form: 'schön',
    comparative: 'schöner',
    superlative: 'schönst-',
    declensions: {
      strong: {
        nominativ: { m: 'schöner', f: 'schöne', n: 'schönes', pl: 'schöne' },
        akkusativ: { m: 'schönen', f: 'schöne', n: 'schönes', pl: 'schöne' },
        dativ: { m: 'schönem', f: 'schöner', n: 'schönem', pl: 'schönen' },
        genitiv: { m: 'schönen', f: 'schöner', n: 'schönen', pl: 'schöner' }
      },
      weak: {
        nominativ: { m: 'schöne', f: 'schöne', n: 'schöne', pl: 'schönen' },
        akkusativ: { m: 'schönen', f: 'schöne', n: 'schöne', pl: 'schönen' },
        dativ: { m: 'schönen', f: 'schönen', n: 'schönen', pl: 'schönen' },
        genitiv: { m: 'schönen', f: 'schönen', n: 'schönen', pl: 'schönen' }
      },
      mixed: {
        nominativ: { m: 'schöner', f: 'schöne', n: 'schönes', pl: 'schönen' },
        akkusativ: { m: 'schönen', f: 'schöne', n: 'schönes', pl: 'schönen' },
        dativ: { m: 'schönen', f: 'schönen', n: 'schönen', pl: 'schönen' },
        genitiv: { m: 'schönen', f: 'schönen', n: 'schönen', pl: 'schönen' }
      }
    },
    alternatives: ['schöner', 'schöne', 'schönes', 'schönen', 'schönem']
  },

  groß: {
    type: 'adjective',
    meaning: 'big, large',
    base_form: 'groß',
    comparative: 'größer',
    superlative: 'größt-',
    declensions: {
      strong: {
        nominativ: { m: 'großer', f: 'große', n: 'großes', pl: 'große' },
        akkusativ: { m: 'großen', f: 'große', n: 'großes', pl: 'große' },
        dativ: { m: 'großem', f: 'großer', n: 'großem', pl: 'großen' },
        genitiv: { m: 'großen', f: 'großer', n: 'großen', pl: 'großer' }
      },
      weak: {
        nominativ: { m: 'große', f: 'große', n: 'große', pl: 'großen' },
        akkusativ: { m: 'großen', f: 'große', n: 'große', pl: 'großen' },
        dativ: { m: 'großen', f: 'großen', n: 'großen', pl: 'großen' },
        genitiv: { m: 'großen', f: 'großen', n: 'großen', pl: 'großen' }
      },
      mixed: {
        nominativ: { m: 'großer', f: 'große', n: 'großes', pl: 'großen' },
        akkusativ: { m: 'großen', f: 'große', n: 'großes', pl: 'großen' },
        dativ: { m: 'großen', f: 'großen', n: 'großen', pl: 'großen' },
        genitiv: { m: 'großen', f: 'großen', n: 'großen', pl: 'großen' }
      }
    },
    alternatives: ['großer', 'große', 'großes', 'großen', 'großem', 'größer']
  },

  klein: {
    type: 'adjective',
    meaning: 'small',
    base_form: 'klein',
    comparative: 'kleiner',
    superlative: 'kleinst-',
    declensions: {
      strong: {
        nominativ: { m: 'kleiner', f: 'kleine', n: 'kleines', pl: 'kleine' },
        akkusativ: { m: 'kleinen', f: 'kleine', n: 'kleines', pl: 'kleine' },
        dativ: { m: 'kleinem', f: 'kleiner', n: 'kleinem', pl: 'kleinen' },
        genitiv: { m: 'kleinen', f: 'kleiner', n: 'kleinen', pl: 'kleiner' }
      },
      weak: {
        nominativ: { m: 'kleine', f: 'kleine', n: 'kleine', pl: 'kleinen' },
        akkusativ: { m: 'kleinen', f: 'kleine', n: 'kleine', pl: 'kleinen' },
        dativ: { m: 'kleinen', f: 'kleinen', n: 'kleinen', pl: 'kleinen' },
        genitiv: { m: 'kleinen', f: 'kleinen', n: 'kleinen', pl: 'kleinen' }
      },
      mixed: {
        nominativ: { m: 'kleiner', f: 'kleine', n: 'kleines', pl: 'kleinen' },
        akkusativ: { m: 'kleinen', f: 'kleine', n: 'kleines', pl: 'kleinen' },
        dativ: { m: 'kleinen', f: 'kleinen', n: 'kleinen', pl: 'kleinen' },
        genitiv: { m: 'kleinen', f: 'kleinen', n: 'kleinen', pl: 'kleinen' }
      }
    },
    alternatives: ['kleiner', 'kleine', 'kleines', 'kleinen', 'kleinem']
  },

  jung: {
    type: 'adjective',
    meaning: 'young',
    base_form: 'jung',
    comparative: 'jünger',
    superlative: 'jüngst-',
    declensions: {
      strong: {
        nominativ: { m: 'junger', f: 'junge', n: 'junges', pl: 'junge' },
        akkusativ: { m: 'jungen', f: 'junge', n: 'junges', pl: 'junge' },
        dativ: { m: 'jungem', f: 'junger', n: 'jungem', pl: 'jungen' },
        genitiv: { m: 'jungen', f: 'junger', n: 'jungen', pl: 'junger' }
      },
      weak: {
        nominativ: { m: 'junge', f: 'junge', n: 'junge', pl: 'jungen' },
        akkusativ: { m: 'jungen', f: 'junge', n: 'junge', pl: 'jungen' },
        dativ: { m: 'jungen', f: 'jungen', n: 'jungen', pl: 'jungen' },
        genitiv: { m: 'jungen', f: 'jungen', n: 'jungen', pl: 'jungen' }
      },
      mixed: {
        nominativ: { m: 'junger', f: 'junge', n: 'junges', pl: 'jungen' },
        akkusativ: { m: 'jungen', f: 'junge', n: 'junges', pl: 'jungen' },
        dativ: { m: 'jungen', f: 'jungen', n: 'jungen', pl: 'jungen' },
        genitiv: { m: 'jungen', f: 'jungen', n: 'jungen', pl: 'jungen' }
      }
    },
    alternatives: ['junger', 'junge', 'junges', 'jungen', 'jungem', 'jünger']
  },

  alt: {
    type: 'adjective',
    meaning: 'old',
    base_form: 'alt',
    comparative: 'älter',
    superlative: 'ältest-',
    declensions: {
      strong: {
        nominativ: { m: 'alter', f: 'alte', n: 'altes', pl: 'alte' },
        akkusativ: { m: 'alten', f: 'alte', n: 'altes', pl: 'alte' },
        dativ: { m: 'altem', f: 'alter', n: 'altem', pl: 'alten' },
        genitiv: { m: 'alten', f: 'alter', n: 'alten', pl: 'alter' }
      },
      weak: {
        nominativ: { m: 'alte', f: 'alte', n: 'alte', pl: 'alten' },
        akkusativ: { m: 'alten', f: 'alte', n: 'alte', pl: 'alten' },
        dativ: { m: 'alten', f: 'alten', n: 'alten', pl: 'alten' },
        genitiv: { m: 'alten', f: 'alten', n: 'alten', pl: 'alten' }
      },
      mixed: {
        nominativ: { m: 'alter', f: 'alte', n: 'altes', pl: 'alten' },
        akkusativ: { m: 'alten', f: 'alte', n: 'altes', pl: 'alten' },
        dativ: { m: 'alten', f: 'alten', n: 'alten', pl: 'alten' },
        genitiv: { m: 'alten', f: 'alten', n: 'alten', pl: 'alten' }
      }
    },
    alternatives: ['alter', 'alte', 'altes', 'alten', 'altem', 'älter']
  },

  // HOUSEHOLD AND DAILY LIFE
  das_Zimmer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the room',
    cases: {
      nominativ: { singular: 'das Zimmer', plural: 'die Zimmer' },
      akkusativ: { singular: 'das Zimmer', plural: 'die Zimmer' },
      dativ: { singular: 'dem Zimmer', plural: 'den Zimmern' },
      genitiv: { singular: 'des Zimmers', plural: 'der Zimmer' }
    },
    alternatives: ['zimmer']
  },

  das_Schlafzimmer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the bedroom',
    cases: {
      nominativ: { singular: 'das Schlafzimmer', plural: 'die Schlafzimmer' },
      akkusativ: { singular: 'das Schlafzimmer', plural: 'die Schlafzimmer' },
      dativ: { singular: 'dem Schlafzimmer', plural: 'den Schlafzimmern' },
      genitiv: { singular: 'des Schlafzimmers', plural: 'der Schlafzimmer' }
    },
    alternatives: ['schlafzimmer']
  },

  die_Küche: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the kitchen',
    cases: {
      nominativ: { singular: 'die Küche', plural: 'die Küchen' },
      akkusativ: { singular: 'die Küche', plural: 'die Küchen' },
      dativ: { singular: 'der Küche', plural: 'den Küchen' },
      genitiv: { singular: 'der Küche', plural: 'der Küchen' }
    },
    alternatives: ['küche', 'küchen']
  },

  das_Badezimmer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the bathroom',
    cases: {
      nominativ: { singular: 'das Badezimmer', plural: 'die Badezimmer' },
      akkusativ: { singular: 'das Badezimmer', plural: 'die Badezimmer' },
      dativ: { singular: 'dem Badezimmer', plural: 'den Badezimmern' },
      genitiv: { singular: 'des Badezimmers', plural: 'der Badezimmer' }
    },
    alternatives: ['badezimmer', 'bad']
  },

  das_Wohnzimmer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the living room',
    cases: {
      nominativ: { singular: 'das Wohnzimmer', plural: 'die Wohnzimmer' },
      akkusativ: { singular: 'das Wohnzimmer', plural: 'die Wohnzimmer' },
      dativ: { singular: 'dem Wohnzimmer', plural: 'den Wohnzimmern' },
      genitiv: { singular: 'des Wohnzimmers', plural: 'der Wohnzimmer' }
    },
    alternatives: ['wohnzimmer']
  },

  das_Bett: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the bed',
    cases: {
      nominativ: { singular: 'das Bett', plural: 'die Betten' },
      akkusativ: { singular: 'das Bett', plural: 'die Betten' },
      dativ: { singular: 'dem Bett', plural: 'den Betten' },
      genitiv: { singular: 'des Bettes', plural: 'der Betten' }
    },
    alternatives: ['bett', 'betten']
  },

  der_Stuhl: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the chair',
    cases: {
      nominativ: { singular: 'der Stuhl', plural: 'die Stühle' },
      akkusativ: { singular: 'den Stuhl', plural: 'die Stühle' },
      dativ: { singular: 'dem Stuhl', plural: 'den Stühlen' },
      genitiv: { singular: 'des Stuhls', plural: 'der Stühle' }
    },
    alternatives: ['stuhl', 'stühle']
  },

  das_Sofa: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the sofa',
    cases: {
      nominativ: { singular: 'das Sofa', plural: 'die Sofas' },
      akkusativ: { singular: 'das Sofa', plural: 'die Sofas' },
      dativ: { singular: 'dem Sofa', plural: 'den Sofas' },
      genitiv: { singular: 'des Sofas', plural: 'der Sofas' }
    },
    alternatives: ['sofa', 'sofas']
  },

  der_Schrank: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the wardrobe/cabinet',
    cases: {
      nominativ: { singular: 'der Schrank', plural: 'die Schränke' },
      akkusativ: { singular: 'den Schrank', plural: 'die Schränke' },
      dativ: { singular: 'dem Schrank', plural: 'den Schränken' },
      genitiv: { singular: 'des Schranks', plural: 'der Schränke' }
    },
    alternatives: ['schrank', 'schränke']
  },

  das_Fenster: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the window',
    cases: {
      nominativ: { singular: 'das Fenster', plural: 'die Fenster' },
      akkusativ: { singular: 'das Fenster', plural: 'die Fenster' },
      dativ: { singular: 'dem Fenster', plural: 'den Fenstern' },
      genitiv: { singular: 'des Fensters', plural: 'der Fenster' }
    },
    alternatives: ['fenster']
  },

  die_Tür: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the door',
    cases: {
      nominativ: { singular: 'die Tür', plural: 'die Türen' },
      akkusativ: { singular: 'die Tür', plural: 'die Türen' },
      dativ: { singular: 'der Tür', plural: 'den Türen' },
      genitiv: { singular: 'der Tür', plural: 'der Türen' }
    },
    alternatives: ['tür', 'türen']
  },

  der_Fernseher: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the television',
    cases: {
      nominativ: { singular: 'der Fernseher', plural: 'die Fernseher' },
      akkusativ: { singular: 'den Fernseher', plural: 'die Fernseher' },
      dativ: { singular: 'dem Fernseher', plural: 'den Fernsehern' },
      genitiv: { singular: 'des Fernsehers', plural: 'der Fernseher' }
    },
    alternatives: ['fernseher', 'tv']
  },

  der_Computer: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the computer',
    cases: {
      nominativ: { singular: 'der Computer', plural: 'die Computer' },
      akkusativ: { singular: 'den Computer', plural: 'die Computer' },
      dativ: { singular: 'dem Computer', plural: 'den Computern' },
      genitiv: { singular: 'des Computers', plural: 'der Computer' }
    },
    alternatives: ['computer', 'pc']
  },

  das_Telefon: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the telephone',
    cases: {
      nominativ: { singular: 'das Telefon', plural: 'die Telefone' },
      akkusativ: { singular: 'das Telefon', plural: 'die Telefone' },
      dativ: { singular: 'dem Telefon', plural: 'den Telefonen' },
      genitiv: { singular: 'des Telefons', plural: 'der Telefone' }
    },
    alternatives: ['telefon', 'telefone']
  },

  die_Lampe: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the lamp',
    cases: {
      nominativ: { singular: 'die Lampe', plural: 'die Lampen' },
      akkusativ: { singular: 'die Lampe', plural: 'die Lampen' },
      dativ: { singular: 'der Lampe', plural: 'den Lampen' },
      genitiv: { singular: 'der Lampe', plural: 'der Lampen' }
    },
    alternatives: ['lampe', 'lampen']
  },

  der_Spiegel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the mirror',
    cases: {
      nominativ: { singular: 'der Spiegel', plural: 'die Spiegel' },
      akkusativ: { singular: 'den Spiegel', plural: 'die Spiegel' },
      dativ: { singular: 'dem Spiegel', plural: 'den Spiegeln' },
      genitiv: { singular: 'des Spiegels', plural: 'der Spiegel' }
    },
    alternatives: ['spiegel']
  },

  der_Kühlschrank: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the refrigerator',
    cases: {
      nominativ: { singular: 'der Kühlschrank', plural: 'die Kühlschränke' },
      akkusativ: { singular: 'den Kühlschrank', plural: 'die Kühlschränke' },
      dativ: { singular: 'dem Kühlschrank', plural: 'den Kühlschränken' },
      genitiv: { singular: 'des Kühlschranks', plural: 'der Kühlschränke' }
    },
    alternatives: ['kühlschrank', 'kühlschränke']
  },

  der_Herd: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the stove',
    cases: {
      nominativ: { singular: 'der Herd', plural: 'die Herde' },
      akkusativ: { singular: 'den Herd', plural: 'die Herde' },
      dativ: { singular: 'dem Herd', plural: 'den Herden' },
      genitiv: { singular: 'des Herds', plural: 'der Herde' }
    },
    alternatives: ['herd', 'herde']
  },

  das_Geschirr: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the dishes',
    cases: {
      nominativ: { singular: 'das Geschirr', plural: '-' },
      akkusativ: { singular: 'das Geschirr', plural: '-' },
      dativ: { singular: 'dem Geschirr', plural: '-' },
      genitiv: { singular: 'des Geschirrs', plural: '-' }
    },
    alternatives: ['geschirr']
  },

  der_Teller: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the plate',
    cases: {
      nominativ: { singular: 'der Teller', plural: 'die Teller' },
      akkusativ: { singular: 'den Teller', plural: 'die Teller' },
      dativ: { singular: 'dem Teller', plural: 'den Tellern' },
      genitiv: { singular: 'des Tellers', plural: 'der Teller' }
    },
    alternatives: ['teller']
  },

  die_Tasse: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the cup',
    cases: {
      nominativ: { singular: 'die Tasse', plural: 'die Tassen' },
      akkusativ: { singular: 'die Tasse', plural: 'die Tassen' },
      dativ: { singular: 'der Tasse', plural: 'den Tassen' },
      genitiv: { singular: 'der Tasse', plural: 'der Tassen' }
    },
    alternatives: ['tasse', 'tassen']
  },

  das_Glas: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the glass',
    cases: {
      nominativ: { singular: 'das Glas', plural: 'die Gläser' },
      akkusativ: { singular: 'das Glas', plural: 'die Gläser' },
      dativ: { singular: 'dem Glas', plural: 'den Gläsern' },
      genitiv: { singular: 'des Glases', plural: 'der Gläser' }
    },
    alternatives: ['glas', 'gläser']
  },

  das_Messer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the knife',
    cases: {
      nominativ: { singular: 'das Messer', plural: 'die Messer' },
      akkusativ: { singular: 'das Messer', plural: 'die Messer' },
      dativ: { singular: 'dem Messer', plural: 'den Messern' },
      genitiv: { singular: 'des Messers', plural: 'der Messer' }
    },
    alternatives: ['messer']
  },

  die_Gabel: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the fork',
    cases: {
      nominativ: { singular: 'die Gabel', plural: 'die Gabeln' },
      akkusativ: { singular: 'die Gabel', plural: 'die Gabeln' },
      dativ: { singular: 'der Gabel', plural: 'den Gabeln' },
      genitiv: { singular: 'der Gabel', plural: 'der Gabeln' }
    },
    alternatives: ['gabel', 'gabeln']
  },

  der_Löffel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the spoon',
    cases: {
      nominativ: { singular: 'der Löffel', plural: 'die Löffel' },
      akkusativ: { singular: 'den Löffel', plural: 'die Löffel' },
      dativ: { singular: 'dem Löffel', plural: 'den Löffeln' },
      genitiv: { singular: 'des Löffels', plural: 'der Löffel' }
    },
    alternatives: ['löffel']
  },

  // DAILY ACTIVITIES VERBS
  wachen: {
    type: 'verb',
    infinitive: 'wachen',
    meaning: 'to wake up',
    conjugations: {
      present: {
        ich: 'wache',
        du: 'wachst',
        er: 'wacht',
        sie: 'wacht',
        es: 'wacht',
        wir: 'wachen',
        ihr: 'wacht',
        sie_plural: 'wachen'
      },
      past: {
        ich: 'wachte',
        du: 'wachtest',
        er: 'wachte',
        sie: 'wachte',
        es: 'wachte',
        wir: 'wachten',
        ihr: 'wachtet',
        sie_plural: 'wachten'
      },
      perfect: {
        ich: 'bin gewacht',
        du: 'bist gewacht',
        er: 'ist gewacht',
        sie: 'ist gewacht',
        es: 'ist gewacht',
        wir: 'sind gewacht',
        ihr: 'seid gewacht',
        sie_plural: 'sind gewacht'
      }
    },
    alternatives: ['wache', 'wachst', 'wacht', 'wachte', 'wachtest', 'wachten', 'wachtet']
  },

  aufstehen: {
    type: 'verb',
    infinitive: 'aufstehen',
    meaning: 'to get up',
    conjugations: {
      present: {
        ich: 'stehe auf',
        du: 'stehst auf',
        er: 'steht auf',
        sie: 'steht auf',
        es: 'steht auf',
        wir: 'stehen auf',
        ihr: 'steht auf',
        sie_plural: 'stehen auf'
      },
      past: {
        ich: 'stand auf',
        du: 'standst auf',
        er: 'stand auf',
        sie: 'stand auf',
        es: 'stand auf',
        wir: 'standen auf',
        ihr: 'standet auf',
        sie_plural: 'standen auf'
      },
      perfect: {
        ich: 'bin aufgestanden',
        du: 'bist aufgestanden',
        er: 'ist aufgestanden',
        sie: 'ist aufgestanden',
        es: 'ist aufgestanden',
        wir: 'sind aufgestanden',
        ihr: 'seid aufgestanden',
        sie_plural: 'sind aufgestanden'
      }
    },
    alternatives: ['stehe auf', 'stehst auf', 'steht auf', 'stand auf', 'standst auf', 'standen auf', 'standet auf']
  },

  waschen: {
    type: 'verb',
    infinitive: 'waschen',
    meaning: 'to wash',
    conjugations: {
      present: {
        ich: 'wasche',
        du: 'wäschst',
        er: 'wäscht',
        sie: 'wäscht',
        es: 'wäscht',
        wir: 'waschen',
        ihr: 'wascht',
        sie_plural: 'waschen'
      },
      past: {
        ich: 'wusch',
        du: 'wuschst',
        er: 'wusch',
        sie: 'wusch',
        es: 'wusch',
        wir: 'wuschen',
        ihr: 'wuscht',
        sie_plural: 'wuschen'
      },
      perfect: {
        ich: 'habe gewaschen',
        du: 'hast gewaschen',
        er: 'hat gewaschen',
        sie: 'hat gewaschen',
        es: 'hat gewaschen',
        wir: 'haben gewaschen',
        ihr: 'habt gewaschen',
        sie_plural: 'haben gewaschen'
      }
    },
    alternatives: ['wasche', 'wäschst', 'wäscht', 'wascht', 'wusch', 'wuschst', 'wuschen', 'wuscht']
  },

  putzen: {
    type: 'verb',
    infinitive: 'putzen',
    meaning: 'to clean',
    conjugations: {
      present: {
        ich: 'putze',
        du: 'putzt',
        er: 'putzt',
        sie: 'putzt',
        es: 'putzt',
        wir: 'putzen',
        ihr: 'putzt',
        sie_plural: 'putzen'
      },
      past: {
        ich: 'putzte',
        du: 'putztest',
        er: 'putzte',
        sie: 'putzte',
        es: 'putzte',
        wir: 'putzten',
        ihr: 'putztet',
        sie_plural: 'putzten'
      },
      perfect: {
        ich: 'habe geputzt',
        du: 'hast geputzt',
        er: 'hat geputzt',
        sie: 'hat geputzt',
        es: 'hat geputzt',
        wir: 'haben geputzt',
        ihr: 'habt geputzt',
        sie_plural: 'haben geputzt'
      }
    },
    alternatives: ['putze', 'putzt', 'putzte', 'putztest', 'putzten', 'putztet']
  },

  kochen: {
    type: 'verb',
    infinitive: 'kochen',
    meaning: 'to cook',
    conjugations: {
      present: {
        ich: 'koche',
        du: 'kochst',
        er: 'kocht',
        sie: 'kocht',
        es: 'kocht',
        wir: 'kochen',
        ihr: 'kocht',
        sie_plural: 'kochen'
      },
      past: {
        ich: 'kochte',
        du: 'kochtest',
        er: 'kochte',
        sie: 'kochte',
        es: 'kochte',
        wir: 'kochten',
        ihr: 'kochtet',
        sie_plural: 'kochten'
      },
      perfect: {
        ich: 'habe gekocht',
        du: 'hast gekocht',
        er: 'hat gekocht',
        sie: 'hat gekocht',
        es: 'hat gekocht',
        wir: 'haben gekocht',
        ihr: 'habt gekocht',
        sie_plural: 'haben gekocht'
      }
    },
    alternatives: ['koche', 'kochst', 'kocht', 'kochte', 'kochtest', 'kochten', 'kochtet']
  },

  kaufen: {
    type: 'verb',
    infinitive: 'kaufen',
    meaning: 'to buy',
    conjugations: {
      present: {
        ich: 'kaufe',
        du: 'kaufst',
        er: 'kauft',
        sie: 'kauft',
        es: 'kauft',
        wir: 'kaufen',
        ihr: 'kauft',
        sie_plural: 'kaufen'
      },
      past: {
        ich: 'kaufte',
        du: 'kauftest',
        er: 'kaufte',
        sie: 'kaufte',
        es: 'kaufte',
        wir: 'kauften',
        ihr: 'kauftet',
        sie_plural: 'kauften'
      },
      perfect: {
        ich: 'habe gekauft',
        du: 'hast gekauft',
        er: 'hat gekauft',
        sie: 'hat gekauft',
        es: 'hat gekauft',
        wir: 'haben gekauft',
        ihr: 'habt gekauft',
        sie_plural: 'haben gekauft'
      }
    },
    alternatives: ['kaufe', 'kaufst', 'kauft', 'kaufte', 'kauftest', 'kauften', 'kauftet']
  },

  // ANIMALS AND NATURE
  das_Tier: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the animal',
    cases: {
      nominativ: { singular: 'das Tier', plural: 'die Tiere' },
      akkusativ: { singular: 'das Tier', plural: 'die Tiere' },
      dativ: { singular: 'dem Tier', plural: 'den Tieren' },
      genitiv: { singular: 'des Tieres', plural: 'der Tiere' }
    },
    alternatives: ['tier', 'tiere']
  },

  das_Pferd: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the horse',
    cases: {
      nominativ: { singular: 'das Pferd', plural: 'die Pferde' },
      akkusativ: { singular: 'das Pferd', plural: 'die Pferde' },
      dativ: { singular: 'dem Pferd', plural: 'den Pferden' },
      genitiv: { singular: 'des Pferdes', plural: 'der Pferde' }
    },
    alternatives: ['pferd', 'pferde']
  },

  die_Kuh: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the cow',
    cases: {
      nominativ: { singular: 'die Kuh', plural: 'die Kühe' },
      akkusativ: { singular: 'die Kuh', plural: 'die Kühe' },
      dativ: { singular: 'der Kuh', plural: 'den Kühen' },
      genitiv: { singular: 'der Kuh', plural: 'der Kühe' }
    },
    alternatives: ['kuh', 'kühe']
  },

  das_Schwein: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the pig',
    cases: {
      nominativ: { singular: 'das Schwein', plural: 'die Schweine' },
      akkusativ: { singular: 'das Schwein', plural: 'die Schweine' },
      dativ: { singular: 'dem Schwein', plural: 'den Schweinen' },
      genitiv: { singular: 'des Schweines', plural: 'der Schweine' }
    },
    alternatives: ['schwein', 'schweine']
  },

  das_Schaf: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the sheep',
    cases: {
      nominativ: { singular: 'das Schaf', plural: 'die Schafe' },
      akkusativ: { singular: 'das Schaf', plural: 'die Schafe' },
      dativ: { singular: 'dem Schaf', plural: 'den Schafen' },
      genitiv: { singular: 'des Schafes', plural: 'der Schafe' }
    },
    alternatives: ['schaf', 'schafe']
  },

  der_Vogel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the bird',
    cases: {
      nominativ: { singular: 'der Vogel', plural: 'die Vögel' },
      akkusativ: { singular: 'den Vogel', plural: 'die Vögel' },
      dativ: { singular: 'dem Vogel', plural: 'den Vögeln' },
      genitiv: { singular: 'des Vogels', plural: 'der Vögel' }
    },
    alternatives: ['vogel', 'vögel']
  },

  der_Fisch: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the fish',
    cases: {
      nominativ: { singular: 'der Fisch', plural: 'die Fische' },
      akkusativ: { singular: 'den Fisch', plural: 'die Fische' },
      dativ: { singular: 'dem Fisch', plural: 'den Fischen' },
      genitiv: { singular: 'des Fisches', plural: 'der Fische' }
    },
    alternatives: ['fisch', 'fische']
  },

  die_Maus: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the mouse',
    cases: {
      nominativ: { singular: 'die Maus', plural: 'die Mäuse' },
      akkusativ: { singular: 'die Maus', plural: 'die Mäuse' },
      dativ: { singular: 'der Maus', plural: 'den Mäusen' },
      genitiv: { singular: 'der Maus', plural: 'der Mäuse' }
    },
    alternatives: ['maus', 'mäuse']
  },

  der_Elefant: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the elephant',
    cases: {
      nominativ: { singular: 'der Elefant', plural: 'die Elefanten' },
      akkusativ: { singular: 'den Elefanten', plural: 'die Elefanten' },
      dativ: { singular: 'dem Elefanten', plural: 'den Elefanten' },
      genitiv: { singular: 'des Elefanten', plural: 'der Elefanten' }
    },
    alternatives: ['elefant', 'elefanten']
  },

  der_Löwe: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the lion',
    cases: {
      nominativ: { singular: 'der Löwe', plural: 'die Löwen' },
      akkusativ: { singular: 'den Löwen', plural: 'die Löwen' },
      dativ: { singular: 'dem Löwen', plural: 'den Löwen' },
      genitiv: { singular: 'des Löwen', plural: 'der Löwen' }
    },
    alternatives: ['löwe', 'löwen']
  },

  der_Bär: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the bear',
    cases: {
      nominativ: { singular: 'der Bär', plural: 'die Bären' },
      akkusativ: { singular: 'den Bären', plural: 'die Bären' },
      dativ: { singular: 'dem Bären', plural: 'den Bären' },
      genitiv: { singular: 'des Bären', plural: 'der Bären' }
    },
    alternatives: ['bär', 'bären']
  },

  das_Kaninchen: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the rabbit',
    cases: {
      nominativ: { singular: 'das Kaninchen', plural: 'die Kaninchen' },
      akkusativ: { singular: 'das Kaninchen', plural: 'die Kaninchen' },
      dativ: { singular: 'dem Kaninchen', plural: 'den Kaninchen' },
      genitiv: { singular: 'des Kaninchens', plural: 'der Kaninchen' }
    },
    alternatives: ['kaninchen']
  },

  // NATURE AND ENVIRONMENT
  der_Baum: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the tree',
    cases: {
      nominativ: { singular: 'der Baum', plural: 'die Bäume' },
      akkusativ: { singular: 'den Baum', plural: 'die Bäume' },
      dativ: { singular: 'dem Baum', plural: 'den Bäumen' },
      genitiv: { singular: 'des Baumes', plural: 'der Bäume' }
    },
    alternatives: ['baum', 'bäume']
  },

  die_Blume: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the flower',
    cases: {
      nominativ: { singular: 'die Blume', plural: 'die Blumen' },
      akkusativ: { singular: 'die Blume', plural: 'die Blumen' },
      dativ: { singular: 'der Blume', plural: 'den Blumen' },
      genitiv: { singular: 'der Blume', plural: 'der Blumen' }
    },
    alternatives: ['blume', 'blumen']
  },

  das_Gras: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the grass',
    cases: {
      nominativ: { singular: 'das Gras', plural: 'die Gräser' },
      akkusativ: { singular: 'das Gras', plural: 'die Gräser' },
      dativ: { singular: 'dem Gras', plural: 'den Gräsern' },
      genitiv: { singular: 'des Grases', plural: 'der Gräser' }
    },
    alternatives: ['gras', 'gräser']
  },

  der_Wald: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the forest',
    cases: {
      nominativ: { singular: 'der Wald', plural: 'die Wälder' },
      akkusativ: { singular: 'den Wald', plural: 'die Wälder' },
      dativ: { singular: 'dem Wald', plural: 'den Wäldern' },
      genitiv: { singular: 'des Waldes', plural: 'der Wälder' }
    },
    alternatives: ['wald', 'wälder']
  },

  der_Berg: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the mountain',
    cases: {
      nominativ: { singular: 'der Berg', plural: 'die Berge' },
      akkusativ: { singular: 'den Berg', plural: 'die Berge' },
      dativ: { singular: 'dem Berg', plural: 'den Bergen' },
      genitiv: { singular: 'des Berges', plural: 'der Berge' }
    },
    alternatives: ['berg', 'berge']
  },

  der_Fluss: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the river',
    cases: {
      nominativ: { singular: 'der Fluss', plural: 'die Flüsse' },
      akkusativ: { singular: 'den Fluss', plural: 'die Flüsse' },
      dativ: { singular: 'dem Fluss', plural: 'den Flüssen' },
      genitiv: { singular: 'des Flusses', plural: 'der Flüsse' }
    },
    alternatives: ['fluss', 'flüsse']
  },

  der_See: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the lake',
    cases: {
      nominativ: { singular: 'der See', plural: 'die Seen' },
      akkusativ: { singular: 'den See', plural: 'die Seen' },
      dativ: { singular: 'dem See', plural: 'den Seen' },
      genitiv: { singular: 'des Sees', plural: 'der Seen' }
    },
    alternatives: ['see', 'seen']
  },

  das_Meer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the sea/ocean',
    cases: {
      nominativ: { singular: 'das Meer', plural: 'die Meere' },
      akkusativ: { singular: 'das Meer', plural: 'die Meere' },
      dativ: { singular: 'dem Meer', plural: 'den Meeren' },
      genitiv: { singular: 'des Meeres', plural: 'der Meere' }
    },
    alternatives: ['meer', 'meere']
  },

  der_Himmel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the sky/heaven',
    cases: {
      nominativ: { singular: 'der Himmel', plural: 'die Himmel' },
      akkusativ: { singular: 'den Himmel', plural: 'die Himmel' },
      dativ: { singular: 'dem Himmel', plural: 'den Himmeln' },
      genitiv: { singular: 'des Himmels', plural: 'der Himmel' }
    },
    alternatives: ['himmel']
  },

  die_Sonne: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the sun',
    cases: {
      nominativ: { singular: 'die Sonne', plural: 'die Sonnen' },
      akkusativ: { singular: 'die Sonne', plural: 'die Sonnen' },
      dativ: { singular: 'der Sonne', plural: 'den Sonnen' },
      genitiv: { singular: 'der Sonne', plural: 'der Sonnen' }
    },
    alternatives: ['sonne', 'sonnen']
  },

  der_Mond: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the moon',
    cases: {
      nominativ: { singular: 'der Mond', plural: 'die Monde' },
      akkusativ: { singular: 'den Mond', plural: 'die Monde' },
      dativ: { singular: 'dem Mond', plural: 'den Monden' },
      genitiv: { singular: 'des Mondes', plural: 'der Monde' }
    },
    alternatives: ['mond', 'monde']
  },

  der_Stern: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the star',
    cases: {
      nominativ: { singular: 'der Stern', plural: 'die Sterne' },
      akkusativ: { singular: 'den Stern', plural: 'die Sterne' },
      dativ: { singular: 'dem Stern', plural: 'den Sternen' },
      genitiv: { singular: 'des Sterns', plural: 'der Sterne' }
    },
    alternatives: ['stern', 'sterne']
  },

  der_Regen: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the rain',
    cases: {
      nominativ: { singular: 'der Regen', plural: '-' },
      akkusativ: { singular: 'den Regen', plural: '-' },
      dativ: { singular: 'dem Regen', plural: '-' },
      genitiv: { singular: 'des Regens', plural: '-' }
    },
    alternatives: ['regen']
  },

  der_Schnee: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the snow',
    cases: {
      nominativ: { singular: 'der Schnee', plural: '-' },
      akkusativ: { singular: 'den Schnee', plural: '-' },
      dativ: { singular: 'dem Schnee', plural: '-' },
      genitiv: { singular: 'des Schnees', plural: '-' }
    },
    alternatives: ['schnee']
  },

  der_Wind: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the wind',
    cases: {
      nominativ: { singular: 'der Wind', plural: 'die Winde' },
      akkusativ: { singular: 'den Wind', plural: 'die Winde' },
      dativ: { singular: 'dem Wind', plural: 'den Winden' },
      genitiv: { singular: 'des Windes', plural: 'der Winde' }
    },
    alternatives: ['wind', 'winde']
  },

  das_Feuer: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the fire',
    cases: {
      nominativ: { singular: 'das Feuer', plural: 'die Feuer' },
      akkusativ: { singular: 'das Feuer', plural: 'die Feuer' },
      dativ: { singular: 'dem Feuer', plural: 'den Feuern' },
      genitiv: { singular: 'des Feuers', plural: 'der Feuer' }
    },
    alternatives: ['feuer']
  },

  das_Wasser: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the water',
    cases: {
      nominativ: { singular: 'das Wasser', plural: 'die Wässer' },
      akkusativ: { singular: 'das Wasser', plural: 'die Wässer' },
      dativ: { singular: 'dem Wasser', plural: 'den Wässern' },
      genitiv: { singular: 'des Wassers', plural: 'der Wässer' }
    },
    alternatives: ['wasser', 'wässer']
  },

  die_Erde: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the earth/ground',
    cases: {
      nominativ: { singular: 'die Erde', plural: 'die Erden' },
      akkusativ: { singular: 'die Erde', plural: 'die Erden' },
      dativ: { singular: 'der Erde', plural: 'den Erden' },
      genitiv: { singular: 'der Erde', plural: 'der Erden' }
    },
    alternatives: ['erde', 'erden']
  },

  // EMOTIONS AND FEELINGS
  glücklich: {
    type: 'adjective',
    meaning: 'happy',
    base_form: 'glücklich',
    comparative: 'glücklicher',
    superlative: 'glücklichst-',
    alternatives: ['glücklich', 'glücklicher']
  },

  traurig: {
    type: 'adjective',
    meaning: 'sad',
    base_form: 'traurig',
    comparative: 'trauriger',
    superlative: 'traurigst-',
    alternatives: ['traurig', 'trauriger']
  },

  müde: {
    type: 'adjective',
    meaning: 'tired',
    base_form: 'müde',
    comparative: 'müder',
    superlative: 'müdest-',
    alternatives: ['müde', 'müder']
  },

  wütend: {
    type: 'adjective',
    meaning: 'angry',
    base_form: 'wütend',
    comparative: 'wütender',
    superlative: 'wütendst-',
    alternatives: ['wütend', 'wütender']
  },

  nervös: {
    type: 'adjective',
    meaning: 'nervous',
    base_form: 'nervös',
    comparative: 'nervöser',
    superlative: 'nervösest-',
    alternatives: ['nervös', 'nervöser']
  },

  // MORE COLORS
  rot: {
    type: 'adjective',
    meaning: 'red',
    base_form: 'rot',
    comparative: 'röter',
    superlative: 'rötest-',
    alternatives: ['rot', 'röter', 'rote', 'rotes', 'roter']
  },

  blau: {
    type: 'adjective',
    meaning: 'blue',
    base_form: 'blau',
    comparative: 'blauer',
    superlative: 'blauest-',
    alternatives: ['blau', 'blauer', 'blaue', 'blaues']
  },

  grün: {
    type: 'adjective',
    meaning: 'green',
    base_form: 'grün',
    comparative: 'grüner',
    superlative: 'grünst-',
    alternatives: ['grün', 'grüner', 'grüne', 'grünes']
  },

  gelb: {
    type: 'adjective',
    meaning: 'yellow',
    base_form: 'gelb',
    comparative: 'gelber',
    superlative: 'gelbst-',
    alternatives: ['gelb', 'gelber', 'gelbe', 'gelbes']
  },

  schwarz: {
    type: 'adjective',
    meaning: 'black',
    base_form: 'schwarz',
    comparative: 'schwärzer',
    superlative: 'schwärzest-',
    alternatives: ['schwarz', 'schwärzer', 'schwarze', 'schwarzes', 'schwarzer']
  },

  weiß: {
    type: 'adjective',
    meaning: 'white',
    base_form: 'weiß',
    comparative: 'weißer',
    superlative: 'weißest-',
    alternatives: ['weiß', 'weißer', 'weiße', 'weißes']
  },

  // MORE DESCRIPTIVE ADJECTIVES
  schnell: {
    type: 'adjective',
    meaning: 'fast/quick',
    base_form: 'schnell',
    comparative: 'schneller',
    superlative: 'schnellst-',
    alternatives: ['schnell', 'schneller', 'schnelle', 'schnelles']
  },

  langsam: {
    type: 'adjective',
    meaning: 'slow',
    base_form: 'langsam',
    comparative: 'langsamer',
    superlative: 'langsamst-',
    alternatives: ['langsam', 'langsamer', 'langsame', 'langsames']
  },

  warm: {
    type: 'adjective',
    meaning: 'warm',
    base_form: 'warm',
    comparative: 'wärmer',
    superlative: 'wärmst-',
    alternatives: ['warm', 'wärmer', 'warme', 'warmes', 'warmer']
  },

  kalt: {
    type: 'adjective',
    meaning: 'cold',
    base_form: 'kalt',
    comparative: 'kälter',
    superlative: 'kältest-',
    alternatives: ['kalt', 'kälter', 'kalte', 'kaltes', 'kalter']
  },

  heiß: {
    type: 'adjective',
    meaning: 'hot',
    base_form: 'heiß',
    comparative: 'heißer',
    superlative: 'heißest-',
    alternatives: ['heiß', 'heißer', 'heiße', 'heißes']
  },

  neu: {
    type: 'adjective',
    meaning: 'new',
    base_form: 'neu',
    comparative: 'neuer',
    superlative: 'neuest-',
    alternatives: ['neu', 'neuer', 'neue', 'neues']
  },

  // FOOD AND DRINKS
  der_Apfel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the apple',
    cases: {
      nominativ: { singular: 'der Apfel', plural: 'die Äpfel' },
      akkusativ: { singular: 'den Apfel', plural: 'die Äpfel' },
      dativ: { singular: 'dem Apfel', plural: 'den Äpfeln' },
      genitiv: { singular: 'des Apfels', plural: 'der Äpfel' }
    },
    alternatives: ['apfel', 'äpfel']
  },

  die_Banane: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the banana',
    cases: {
      nominativ: { singular: 'die Banane', plural: 'die Bananen' },
      akkusativ: { singular: 'die Banane', plural: 'die Bananen' },
      dativ: { singular: 'der Banane', plural: 'den Bananen' },
      genitiv: { singular: 'der Banane', plural: 'der Bananen' }
    },
    alternatives: ['banane', 'bananen']
  },

  die_Orange: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the orange',
    cases: {
      nominativ: { singular: 'die Orange', plural: 'die Orangen' },
      akkusativ: { singular: 'die Orange', plural: 'die Orangen' },
      dativ: { singular: 'der Orange', plural: 'den Orangen' },
      genitiv: { singular: 'der Orange', plural: 'der Orangen' }
    },
    alternatives: ['orange', 'orangen']
  },

  der_Kaffee: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the coffee',
    cases: {
      nominativ: { singular: 'der Kaffee', plural: 'die Kaffees' },
      akkusativ: { singular: 'den Kaffee', plural: 'die Kaffees' },
      dativ: { singular: 'dem Kaffee', plural: 'den Kaffees' },
      genitiv: { singular: 'des Kaffees', plural: 'der Kaffees' }
    },
    alternatives: ['kaffee', 'kaffees']
  },

  der_Tee: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the tea',
    cases: {
      nominativ: { singular: 'der Tee', plural: 'die Tees' },
      akkusativ: { singular: 'den Tee', plural: 'die Tees' },
      dativ: { singular: 'dem Tee', plural: 'den Tees' },
      genitiv: { singular: 'des Tees', plural: 'der Tees' }
    },
    alternatives: ['tee', 'tees']
  },

  das_Bier: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the beer',
    cases: {
      nominativ: { singular: 'das Bier', plural: 'die Biere' },
      akkusativ: { singular: 'das Bier', plural: 'die Biere' },
      dativ: { singular: 'dem Bier', plural: 'den Bieren' },
      genitiv: { singular: 'des Bieres', plural: 'der Biere' }
    },
    alternatives: ['bier', 'biere']
  },

  // CLOTHING
  die_Kleidung: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the clothing',
    cases: {
      nominativ: { singular: 'die Kleidung', plural: '-' },
      akkusativ: { singular: 'die Kleidung', plural: '-' },
      dativ: { singular: 'der Kleidung', plural: '-' },
      genitiv: { singular: 'der Kleidung', plural: '-' }
    },
    alternatives: ['kleidung']
  },

  das_Hemd: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the shirt',
    cases: {
      nominativ: { singular: 'das Hemd', plural: 'die Hemden' },
      akkusativ: { singular: 'das Hemd', plural: 'die Hemden' },
      dativ: { singular: 'dem Hemd', plural: 'den Hemden' },
      genitiv: { singular: 'des Hemdes', plural: 'der Hemden' }
    },
    alternatives: ['hemd', 'hemden']
  },

  die_Hose: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the pants/trousers',
    cases: {
      nominativ: { singular: 'die Hose', plural: 'die Hosen' },
      akkusativ: { singular: 'die Hose', plural: 'die Hosen' },
      dativ: { singular: 'der Hose', plural: 'den Hosen' },
      genitiv: { singular: 'der Hose', plural: 'der Hosen' }
    },
    alternatives: ['hose', 'hosen']
  },

  der_Schuh: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the shoe',
    cases: {
      nominativ: { singular: 'der Schuh', plural: 'die Schuhe' },
      akkusativ: { singular: 'den Schuh', plural: 'die Schuhe' },
      dativ: { singular: 'dem Schuh', plural: 'den Schuhen' },
      genitiv: { singular: 'des Schuhs', plural: 'der Schuhe' }
    },
    alternatives: ['schuh', 'schuhe']
  },

  // MORE VERBS - COMMON ACTIONS
  lesen: {
    type: 'verb',
    infinitive: 'lesen',
    meaning: 'to read',
    conjugations: {
      present: {
        ich: 'lese',
        du: 'liest',
        er: 'liest',
        sie: 'liest',
        es: 'liest',
        wir: 'lesen',
        ihr: 'lest',
        sie_plural: 'lesen'
      },
      past: {
        ich: 'las',
        du: 'lasest',
        er: 'las',
        sie: 'las',
        es: 'las',
        wir: 'lasen',
        ihr: 'last',
        sie_plural: 'lasen'
      },
      perfect: {
        ich: 'habe gelesen',
        du: 'hast gelesen',
        er: 'hat gelesen',
        sie: 'hat gelesen',
        es: 'hat gelesen',
        wir: 'haben gelesen',
        ihr: 'habt gelesen',
        sie_plural: 'haben gelesen'
      }
    },
    alternatives: ['lese', 'liest', 'lest', 'las', 'lasest', 'lasen', 'last']
  },

  schreiben: {
    type: 'verb',
    infinitive: 'schreiben',
    meaning: 'to write',
    conjugations: {
      present: {
        ich: 'schreibe',
        du: 'schreibst',
        er: 'schreibt',
        sie: 'schreibt',
        es: 'schreibt',
        wir: 'schreiben',
        ihr: 'schreibt',
        sie_plural: 'schreiben'
      },
      past: {
        ich: 'schrieb',
        du: 'schriebst',
        er: 'schrieb',
        sie: 'schrieb',
        es: 'schrieb',
        wir: 'schrieben',
        ihr: 'schriebt',
        sie_plural: 'schrieben'
      },
      perfect: {
        ich: 'habe geschrieben',
        du: 'hast geschrieben',
        er: 'hat geschrieben',
        sie: 'hat geschrieben',
        es: 'hat geschrieben',
        wir: 'haben geschrieben',
        ihr: 'habt geschrieben',
        sie_plural: 'haben geschrieben'
      }
    },
    alternatives: ['schreibe', 'schreibst', 'schreibt', 'schrieb', 'schriebst', 'schrieben', 'schriebt']
  },

  fahren: {
    type: 'verb',
    infinitive: 'fahren',
    meaning: 'to drive/travel',
    conjugations: {
      present: {
        ich: 'fahre',
        du: 'fährst',
        er: 'fährt',
        sie: 'fährt',
        es: 'fährt',
        wir: 'fahren',
        ihr: 'fahrt',
        sie_plural: 'fahren'
      },
      past: {
        ich: 'fuhr',
        du: 'fuhrst',
        er: 'fuhr',
        sie: 'fuhr',
        es: 'fuhr',
        wir: 'fuhren',
        ihr: 'fuhrt',
        sie_plural: 'fuhren'
      },
      perfect: {
        ich: 'bin gefahren',
        du: 'bist gefahren',
        er: 'ist gefahren',
        sie: 'ist gefahren',
        es: 'ist gefahren',
        wir: 'sind gefahren',
        ihr: 'seid gefahren',
        sie_plural: 'sind gefahren'
      }
    },
    alternatives: ['fahre', 'fährst', 'fährt', 'fahrt', 'fuhr', 'fuhrst', 'fuhren', 'fuhrt']
  },

  spielen: {
    type: 'verb',
    infinitive: 'spielen',
    meaning: 'to play',
    conjugations: {
      present: {
        ich: 'spiele',
        du: 'spielst',
        er: 'spielt',
        sie: 'spielt',
        es: 'spielt',
        wir: 'spielen',
        ihr: 'spielt',
        sie_plural: 'spielen'
      },
      past: {
        ich: 'spielte',
        du: 'spieltest',
        er: 'spielte',
        sie: 'spielte',
        es: 'spielte',
        wir: 'spielten',
        ihr: 'spieltet',
        sie_plural: 'spielten'
      },
      perfect: {
        ich: 'habe gespielt',
        du: 'hast gespielt',
        er: 'hat gespielt',
        sie: 'hat gespielt',
        es: 'hat gespielt',
        wir: 'haben gespielt',
        ihr: 'habt gespielt',
        sie_plural: 'haben gespielt'
      }
    },
    alternatives: ['spiele', 'spielst', 'spielt', 'spielte', 'spieltest', 'spielten', 'spieltet']
  },

  laufen: {
    type: 'verb',
    infinitive: 'laufen',
    meaning: 'to run/walk',
    conjugations: {
      present: {
        ich: 'laufe',
        du: 'läufst',
        er: 'läuft',
        sie: 'läuft',
        es: 'läuft',
        wir: 'laufen',
        ihr: 'lauft',
        sie_plural: 'laufen'
      },
      past: {
        ich: 'lief',
        du: 'liefst',
        er: 'lief',
        sie: 'lief',
        es: 'lief',
        wir: 'liefen',
        ihr: 'lieft',
        sie_plural: 'liefen'
      },
      perfect: {
        ich: 'bin gelaufen',
        du: 'bist gelaufen',
        er: 'ist gelaufen',
        sie: 'ist gelaufen',
        es: 'ist gelaufen',
        wir: 'sind gelaufen',
        ihr: 'seid gelaufen',
        sie_plural: 'sind gelaufen'
      }
    },
    alternatives: ['laufe', 'läufst', 'läuft', 'lauft', 'lief', 'liefst', 'liefen', 'lieft']
  },

  schwimmen: {
    type: 'verb',
    infinitive: 'schwimmen',
    meaning: 'to swim',
    conjugations: {
      present: {
        ich: 'schwimme',
        du: 'schwimmst',
        er: 'schwimmt',
        sie: 'schwimmt',
        es: 'schwimmt',
        wir: 'schwimmen',
        ihr: 'schwimmt',
        sie_plural: 'schwimmen'
      },
      past: {
        ich: 'schwamm',
        du: 'schwammst',
        er: 'schwamm',
        sie: 'schwamm',
        es: 'schwamm',
        wir: 'schwammen',
        ihr: 'schwammt',
        sie_plural: 'schwammen'
      },
      perfect: {
        ich: 'bin geschwommen',
        du: 'bist geschwommen',
        er: 'ist geschwommen',
        sie: 'ist geschwommen',
        es: 'ist geschwommen',
        wir: 'sind geschwommen',
        ihr: 'seid geschwommen',
        sie_plural: 'sind geschwommen'
      }
    },
    alternatives: ['schwimme', 'schwimmst', 'schwimmt', 'schwamm', 'schwammst', 'schwammen', 'schwammt']
  },

  // NUMBERS
  eins: {
    type: 'number',
    meaning: 'one',
    alternatives: ['eins', 'ein', 'eine']
  },

  zwei: {
    type: 'number',
    meaning: 'two',
    alternatives: ['zwei']
  },

  drei: {
    type: 'number',
    meaning: 'three',
    alternatives: ['drei']
  },

  vier: {
    type: 'number',
    meaning: 'four',
    alternatives: ['vier']
  },

  fünf: {
    type: 'number',
    meaning: 'five',
    alternatives: ['fünf']
  },

  sechs: {
    type: 'number',
    meaning: 'six',
    alternatives: ['sechs']
  },

  sieben: {
    type: 'number',
    meaning: 'seven',
    alternatives: ['sieben']
  },

  acht: {
    type: 'number',
    meaning: 'eight',
    alternatives: ['acht']
  },

  neun: {
    type: 'number',
    meaning: 'nine',
    alternatives: ['neun']
  },

  zehn: {
    type: 'number',
    meaning: 'ten',
    alternatives: ['zehn']
  },

  // TECHNOLOGY AND MODERN LIFE
  das_Internet: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the internet',
    cases: {
      nominativ: { singular: 'das Internet', plural: '-' },
      akkusativ: { singular: 'das Internet', plural: '-' },
      dativ: { singular: 'dem Internet', plural: '-' },
      genitiv: { singular: 'des Internets', plural: '-' }
    },
    alternatives: ['internet']
  },

  das_Handy: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the mobile phone',
    cases: {
      nominativ: { singular: 'das Handy', plural: 'die Handys' },
      akkusativ: { singular: 'das Handy', plural: 'die Handys' },
      dativ: { singular: 'dem Handy', plural: 'den Handys' },
      genitiv: { singular: 'des Handys', plural: 'der Handys' }
    },
    alternatives: ['handy', 'handys']
  },

  die_Email: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the email',
    cases: {
      nominativ: { singular: 'die Email', plural: 'die Emails' },
      akkusativ: { singular: 'die Email', plural: 'die Emails' },
      dativ: { singular: 'der Email', plural: 'den Emails' },
      genitiv: { singular: 'der Email', plural: 'der Emails' }
    },
    alternatives: ['email', 'emails']
  },

  // BUSINESS AND WORK
  das_Büro: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the office',
    cases: {
      nominativ: { singular: 'das Büro', plural: 'die Büros' },
      akkusativ: { singular: 'das Büro', plural: 'die Büros' },
      dativ: { singular: 'dem Büro', plural: 'den Büros' },
      genitiv: { singular: 'des Büros', plural: 'der Büros' }
    },
    alternatives: ['büro', 'büros']
  },

  der_Job: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the job',
    cases: {
      nominativ: { singular: 'der Job', plural: 'die Jobs' },
      akkusativ: { singular: 'den Job', plural: 'die Jobs' },
      dativ: { singular: 'dem Job', plural: 'den Jobs' },
      genitiv: { singular: 'des Jobs', plural: 'der Jobs' }
    },
    alternatives: ['job', 'jobs']
  },

  das_Geld: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the money',
    cases: {
      nominativ: { singular: 'das Geld', plural: 'die Gelder' },
      akkusativ: { singular: 'das Geld', plural: 'die Gelder' },
      dativ: { singular: 'dem Geld', plural: 'den Geldern' },
      genitiv: { singular: 'des Geldes', plural: 'der Gelder' }
    },
    alternatives: ['geld', 'gelder']
  },

  // MORE HOUSEHOLD ITEMS
  der_Schlüssel: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the key',
    cases: {
      nominativ: { singular: 'der Schlüssel', plural: 'die Schlüssel' },
      akkusativ: { singular: 'den Schlüssel', plural: 'die Schlüssel' },
      dativ: { singular: 'dem Schlüssel', plural: 'den Schlüsseln' },
      genitiv: { singular: 'des Schlüssels', plural: 'der Schlüssel' }
    },
    alternatives: ['schlüssel']
  },

  die_Uhr: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the clock/watch',
    cases: {
      nominativ: { singular: 'die Uhr', plural: 'die Uhren' },
      akkusativ: { singular: 'die Uhr', plural: 'die Uhren' },
      dativ: { singular: 'der Uhr', plural: 'den Uhren' },
      genitiv: { singular: 'der Uhr', plural: 'der Uhren' }
    },
    alternatives: ['uhr', 'uhren']
  },

  das_Handtuch: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the towel',
    cases: {
      nominativ: { singular: 'das Handtuch', plural: 'die Handtücher' },
      akkusativ: { singular: 'das Handtuch', plural: 'die Handtücher' },
      dativ: { singular: 'dem Handtuch', plural: 'den Handtüchern' },
      genitiv: { singular: 'des Handtuchs', plural: 'der Handtücher' }
    },
    alternatives: ['handtuch', 'handtücher']
  },

  die_Seife: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the soap',
    cases: {
      nominativ: { singular: 'die Seife', plural: 'die Seifen' },
      akkusativ: { singular: 'die Seife', plural: 'die Seifen' },
      dativ: { singular: 'der Seife', plural: 'den Seifen' },
      genitiv: { singular: 'der Seife', plural: 'der Seifen' }
    },
    alternatives: ['seife', 'seifen']
  },

  // TIME EXPRESSIONS
  heute: {
    type: 'adverb',
    meaning: 'today',
    alternatives: ['heute']
  },

  morgen: {
    type: 'adverb',
    meaning: 'tomorrow',
    alternatives: ['morgen']
  },

  gestern: {
    type: 'adverb',
    meaning: 'yesterday',
    alternatives: ['gestern']
  },

  jetzt: {
    type: 'adverb',
    meaning: 'now',
    alternatives: ['jetzt']
  },

  später: {
    type: 'adverb',
    meaning: 'later',
    alternatives: ['später']
  },

  früh: {
    type: 'adverb',
    meaning: 'early',
    alternatives: ['früh']
  },

  spät: {
    type: 'adverb',
    meaning: 'late',
    alternatives: ['spät']
  },

  // COMMON PHRASES AND PARTICLES
  ja: {
    type: 'particle',
    meaning: 'yes',
    alternatives: ['ja']
  },

  nein: {
    type: 'particle',
    meaning: 'no',
    alternatives: ['nein']
  },

  bitte: {
    type: 'particle',
    meaning: 'please/you\'re welcome',
    alternatives: ['bitte']
  },

  danke: {
    type: 'particle',
    meaning: 'thank you',
    alternatives: ['danke']
  },

  entschuldigung: {
    type: 'phrase',
    meaning: 'excuse me/sorry',
    alternatives: ['entschuldigung']
  },

  // MORE BODY PARTS
  der_Fuß: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the foot',
    cases: {
      nominativ: { singular: 'der Fuß', plural: 'die Füße' },
      akkusativ: { singular: 'den Fuß', plural: 'die Füße' },
      dativ: { singular: 'dem Fuß', plural: 'den Füßen' },
      genitiv: { singular: 'des Fußes', plural: 'der Füße' }
    },
    alternatives: ['fuß', 'füße']
  },

  das_Bein: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the leg',
    cases: {
      nominativ: { singular: 'das Bein', plural: 'die Beine' },
      akkusativ: { singular: 'das Bein', plural: 'die Beine' },
      dativ: { singular: 'dem Bein', plural: 'den Beinen' },
      genitiv: { singular: 'des Beines', plural: 'der Beine' }
    },
    alternatives: ['bein', 'beine']
  },

  der_Arm: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the arm',
    cases: {
      nominativ: { singular: 'der Arm', plural: 'die Arme' },
      akkusativ: { singular: 'den Arm', plural: 'die Arme' },
      dativ: { singular: 'dem Arm', plural: 'den Armen' },
      genitiv: { singular: 'des Arms', plural: 'der Arme' }
    },
    alternatives: ['arm', 'arme']
  },

  der_Finger: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the finger',
    cases: {
      nominativ: { singular: 'der Finger', plural: 'die Finger' },
      akkusativ: { singular: 'den Finger', plural: 'die Finger' },
      dativ: { singular: 'dem Finger', plural: 'den Fingern' },
      genitiv: { singular: 'des Fingers', plural: 'der Finger' }
    },
    alternatives: ['finger']
  },

  der_Mund: {
    type: 'noun',
    gender: 'masculine',
    meaning: 'the mouth',
    cases: {
      nominativ: { singular: 'der Mund', plural: 'die Münder' },
      akkusativ: { singular: 'den Mund', plural: 'die Münder' },
      dativ: { singular: 'dem Mund', plural: 'den Mündern' },
      genitiv: { singular: 'des Mundes', plural: 'der Münder' }
    },
    alternatives: ['mund', 'münder']
  },

  die_Nase: {
    type: 'noun',
    gender: 'feminine',
    meaning: 'the nose',
    cases: {
      nominativ: { singular: 'die Nase', plural: 'die Nasen' },
      akkusativ: { singular: 'die Nase', plural: 'die Nasen' },
      dativ: { singular: 'der Nase', plural: 'den Nasen' },
      genitiv: { singular: 'der Nase', plural: 'der Nasen' }
    },
    alternatives: ['nase', 'nasen']
  },

  das_Ohr: {
    type: 'noun',
    gender: 'neuter',
    meaning: 'the ear',
    cases: {
      nominativ: { singular: 'das Ohr', plural: 'die Ohren' },
      akkusativ: { singular: 'das Ohr', plural: 'die Ohren' },
      dativ: { singular: 'dem Ohr', plural: 'den Ohren' },
      genitiv: { singular: 'des Ohres', plural: 'der Ohren' }
    },
    alternatives: ['ohr', 'ohren']
  }
};

export const pronouns = {
  personal: {
    nominativ: ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie'],
    akkusativ: ['mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie'],
    dativ: ['mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen']
  },
  possessive: {
    nominativ: {
      ich: { m: 'mein', f: 'meine', n: 'mein', pl: 'meine' },
      du: { m: 'dein', f: 'deine', n: 'dein', pl: 'deine' },
      er: { m: 'sein', f: 'seine', n: 'sein', pl: 'seine' },
      sie: { m: 'ihr', f: 'ihre', n: 'ihr', pl: 'ihre' },
      es: { m: 'sein', f: 'seine', n: 'sein', pl: 'seine' },
      wir: { m: 'unser', f: 'unsere', n: 'unser', pl: 'unsere' },
      ihr: { m: 'euer', f: 'eure', n: 'euer', pl: 'eure' },
      sie_plural: { m: 'ihr', f: 'ihre', n: 'ihr', pl: 'ihre' }
    }
  }
};

export const findWord = (searchTerm) => {
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  for (const [key, wordData] of Object.entries(germanWords)) {
    if (key.toLowerCase().includes(normalizedSearch)) {
      return { key, ...wordData };
    }
    
    if (wordData.alternatives && wordData.alternatives.some(alt => 
      alt.toLowerCase().includes(normalizedSearch) || 
      normalizedSearch.includes(alt.toLowerCase())
    )) {
      return { key, ...wordData };
    }
    
    if (wordData.type === 'verb' && wordData.conjugations) {
      for (const tense of Object.values(wordData.conjugations)) {
        for (const form of Object.values(tense)) {
          if (form.toLowerCase().includes(normalizedSearch)) {
            return { key, ...wordData };
          }
        }
      }
    }
  }
  
  return null;
};