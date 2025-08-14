import React from 'react';

const WordDisplay = ({ word }) => {
  if (!word) return null;

  const renderVerbConjugations = () => {
    if (word.type !== 'verb' || !word.conjugations) return null;

    return (
      <div className="conjugation-section">
        <h2 className="section-title">
          <span role="img" aria-label="Conjugation">🔀</span>
          Conjugations
        </h2>
        
        {Object.entries(word.conjugations).map(([tense, conjugations]) => (
          <div key={tense} className="tense-group">
            <h3 className="tense-title">{tense}</h3>
            <div className="conjugation-grid">
              {Object.entries(conjugations).map(([pronoun, form]) => (
                <div key={pronoun} className="pronoun-item">
                  <span className="pronoun">
                    {pronoun === 'sie_plural' ? 'sie (they)' : pronoun}
                  </span>
                  <span className="conjugation">{form}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderNounCases = () => {
    if (word.type !== 'noun' || !word.cases) return null;

    return (
      <div className="cases-section">
        <h2 className="section-title">
          <span role="img" aria-label="Cases">📝</span>
          Cases ({word.gender})
        </h2>
        
        {Object.entries(word.cases).map(([caseName, forms]) => (
          <div key={caseName} className="case-group">
            <h3 className="case-title">{caseName}</h3>
            <div className="cases-grid">
              <div className="pronoun-item">
                <span className="pronoun">Singular</span>
                <span className="case-form">{forms.singular}</span>
              </div>
              <div className="pronoun-item">
                <span className="pronoun">Plural</span>
                <span className="case-form">{forms.plural}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAdjectiveDeclensions = () => {
    if (word.type !== 'adjective' || !word.declensions) return null;

    return (
      <div className="adjective-section">
        <h2 className="section-title">
          <span role="img" aria-label="Adjective">✨</span>
          Adjective Declensions
        </h2>
        
        <div className="comparative-forms" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-tertiary)' }}>Forms</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span><strong>Base:</strong> {word.base_form}</span>
            <span><strong>Comparative:</strong> {word.comparative}</span>
            <span><strong>Superlative:</strong> {word.superlative}</span>
          </div>
        </div>

        {Object.entries(word.declensions).map(([declensionType, cases]) => (
          <div key={declensionType} className="declension-group">
            <h3 className="case-title">
              {declensionType === 'strong' ? 'Strong Declension (no article)' : 
               declensionType === 'weak' ? 'Weak Declension (with definite article)' :
               'Mixed Declension (with indefinite article)'}
            </h3>
            
            {Object.entries(cases).map(([caseName, genders]) => (
              <div key={caseName} className="case-subgroup" style={{ marginBottom: '1rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'capitalize' }}>
                  {caseName}
                </h4>
                <div className="cases-grid">
                  <div className="pronoun-item">
                    <span className="pronoun">Masculine</span>
                    <span className="case-form">{genders.m}</span>
                  </div>
                  <div className="pronoun-item">
                    <span className="pronoun">Feminine</span>
                    <span className="case-form">{genders.f}</span>
                  </div>
                  <div className="pronoun-item">
                    <span className="pronoun">Neuter</span>
                    <span className="case-form">{genders.n}</span>
                  </div>
                  <div className="pronoun-item">
                    <span className="pronoun">Plural</span>
                    <span className="case-form">{genders.pl}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="word-result">
      <h1 className="word-title">
        {word.infinitive || word.base_form || word.key.replace(/_/g, ' ')}
      </h1>
      <p className="word-meaning">{word.meaning}</p>
      
      {renderVerbConjugations()}
      {renderNounCases()}
      {renderAdjectiveDeclensions()}
    </div>
  );
};

export default WordDisplay;