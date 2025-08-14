// Import JSON data
import germanWordsData from './germanWords.json';

export const germanWords = germanWordsData;

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