#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../src/data/germanWords.json');

// Helper function to add words to the JSON
function addWordsToJSON(newWords) {
  try {
    // Read existing data
    const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Merge with new words
    const mergedData = { ...existingData, ...newWords };
    
    // Write back to file with proper formatting
    fs.writeFileSync(dataPath, JSON.stringify(mergedData, null, 2), 'utf8');
    
    console.log(`✅ Added ${Object.keys(newWords).length} words to the database!`);
    console.log(`📊 Total words now: ${Object.keys(mergedData).length}`);
    
  } catch (error) {
    console.error('❌ Error adding words:', error);
  }
}

// Helper function to create a noun entry
function createNoun(key, gender, meaning, singular, plural, alternatives = []) {
  const article = gender === 'masculine' ? 'der' : gender === 'feminine' ? 'die' : 'das';
  const genitiveSingular = gender === 'masculine' || gender === 'neuter' ? 
    (singular.endsWith('s') ? singular + 'es' : singular + 's') : singular;
  
  return {
    [key]: {
      type: 'noun',
      gender,
      meaning,
      cases: {
        nominativ: { singular: `${article} ${singular}`, plural: `die ${plural}` },
        akkusativ: { 
          singular: `${gender === 'masculine' ? 'den' : article} ${singular}`, 
          plural: `die ${plural}` 
        },
        dativ: { 
          singular: `${gender === 'masculine' ? 'dem' : gender === 'feminine' ? 'der' : 'dem'} ${singular}`, 
          plural: `den ${plural}${plural.endsWith('n') ? '' : 'n'}` 
        },
        genitiv: { 
          singular: `${gender === 'masculine' || gender === 'neuter' ? 'des' : 'der'} ${genitiveSingular}`, 
          plural: `der ${plural}` 
        }
      },
      alternatives: [singular.toLowerCase(), plural.toLowerCase(), ...alternatives]
    }
  };
}

// Helper function to create a verb entry
function createVerb(infinitive, meaning, presentForms, pastForms, perfectForms, alternatives = []) {
  return {
    [infinitive]: {
      type: 'verb',
      infinitive,
      meaning,
      conjugations: {
        present: presentForms,
        past: pastForms,
        perfect: perfectForms
      },
      alternatives: [...Object.values(presentForms), ...Object.values(pastForms), ...alternatives]
    }
  };
}

// Example: Add a batch of common nouns
const commonNouns = {
  ...createNoun('das_Auto', 'neuter', 'the car', 'Auto', 'Autos'),
  ...createNoun('der_Computer', 'masculine', 'the computer', 'Computer', 'Computer'),
  ...createNoun('die_Musik', 'feminine', 'the music', 'Musik', '-'),
  ...createNoun('das_Geld', 'neuter', 'the money', 'Geld', 'Gelder'),
  ...createNoun('der_Sport', 'masculine', 'the sport', 'Sport', 'Sportarten'),
  ...createNoun('die_Liebe', 'feminine', 'the love', 'Liebe', '-'),
  ...createNoun('das_Problem', 'neuter', 'the problem', 'Problem', 'Probleme'),
  ...createNoun('der_Freund', 'masculine', 'the friend (male)', 'Freund', 'Freunde'),
  ...createNoun('die_Freundin', 'feminine', 'the friend (female)', 'Freundin', 'Freundinnen'),
  ...createNoun('das_Leben', 'neuter', 'the life', 'Leben', 'Leben'),
};

// Example: Add a batch of common verbs
const commonVerbs = {
  ...createVerb('lieben', 'to love', 
    { ich: 'liebe', du: 'liebst', er: 'liebt', sie: 'liebt', es: 'liebt', wir: 'lieben', ihr: 'liebt', sie_plural: 'lieben' },
    { ich: 'liebte', du: 'liebtest', er: 'liebte', sie: 'liebte', es: 'liebte', wir: 'liebten', ihr: 'liebtet', sie_plural: 'liebten' },
    { ich: 'habe geliebt', du: 'hast geliebt', er: 'hat geliebt', sie: 'hat geliebt', es: 'hat geliebt', wir: 'haben geliebt', ihr: 'habt geliebt', sie_plural: 'haben geliebt' }
  ),
  ...createVerb('arbeiten', 'to work',
    { ich: 'arbeite', du: 'arbeitest', er: 'arbeitet', sie: 'arbeitet', es: 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', sie_plural: 'arbeiten' },
    { ich: 'arbeitete', du: 'arbeitetest', er: 'arbeitete', sie: 'arbeitete', es: 'arbeitete', wir: 'arbeiteten', ihr: 'arbeitetet', sie_plural: 'arbeiteten' },
    { ich: 'habe gearbeitet', du: 'hast gearbeitet', er: 'hat gearbeitet', sie: 'hat gearbeitet', es: 'hat gearbeitet', wir: 'haben gearbeitet', ihr: 'habt gearbeitet', sie_plural: 'haben gearbeitet' }
  ),
};

// Add the words
console.log('🚀 Adding new German words to the database...');
addWordsToJSON({ ...commonNouns, ...commonVerbs });