import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import SearchInput from './components/SearchInput';
import WordDisplay from './components/WordDisplay';
import { findWord } from './data/germanWords';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wordResult, setWordResult] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      const result = findWord(term);
      setWordResult(result);
    } else {
      setWordResult(null);
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Header />
        
        <SearchInput 
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Type any German word (e.g., 'soll', 'mann', 'katze')..."
        />

        {wordResult ? (
          <WordDisplay word={wordResult} />
        ) : searchTerm && (
          <div className="no-results">
            No results found for "{searchTerm}". Try another word!
          </div>
        )}

        {!searchTerm && (
          <div className="welcome-message" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>Start typing a German word to see its conjugations, cases, and usage with different pronouns!</p>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
