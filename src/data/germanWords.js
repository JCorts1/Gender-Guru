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