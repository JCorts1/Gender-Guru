# Gender Guru 🇩🇪🇦🇹

A beautiful, AI-inspired German language learning app that helps you master German grammar, pronouns, and verb conjugations. Built with React + Vite for lightning-fast performance and perfect for deployment on Netlify.

## ✨ Features

- 🔍 **Smart Word Search**: Type any German word (like "soll" for "sollen") and get comprehensive grammar information
- 🔀 **Verb Conjugations**: Complete conjugation tables for all tenses (present, past, perfect) with all pronouns
- 📝 **Noun Cases**: Full declension tables showing Nominativ, Akkusativ, Dativ, and Genitiv cases
- 🌙 **Dark/Light Mode**: Beautiful theme switcher with smooth transitions
- ✨ **AI-Inspired Design**: Transparent containers, smooth animations, and modern gradients
- 📱 **Responsive**: Works perfectly on desktop and mobile
- 🇩🇪🇦🇹 **German & Austrian**: Represents both German-speaking countries

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gender-guru
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Building for Production

To build the app for production (perfect for Netlify deployment):

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎯 How to Use

1. **Search for Words**: Type any German word in the search box
   - Try "soll" → shows "sollen" conjugations
   - Try "bäckerei" → shows "die Bäckerei" with all cases
   - Try "gut" → shows adjective declensions (strong, weak, mixed)
   - Try "essen" → shows "essen" verb conjugations
   - Try "krankenhaus" → shows "das Krankenhaus" cases

2. **Switch Themes**: Click the theme toggle in the top-left corner to switch between light and dark modes

3. **Explore Grammar**: Each word shows:
   - Complete pronoun conjugations (ich, du, er, sie, es, wir, ihr, sie)
   - All German cases (Nominativ, Akkusativ, Dativ, Genitiv)
   - Present, past, and perfect tenses for verbs

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **CSS Custom Properties** - For theming and animations
- **ES6 Modules** - Modern JavaScript

## 📚 Word Database

The app includes comprehensive data for **100+ German words**:

### Verbs (20+ verbs with full conjugations)
- **Modal verbs**: sollen, können, wollen, müssen
- **Essential verbs**: sein, haben, gehen, kommen, machen
- **Common verbs**: sehen, hören, sprechen, denken, essen, trinken, schlafen, arbeiten, lernen, leben, lieben, finden, verstehen

### Nouns (50+ nouns with all cases)
- **Family**: Familie, Vater, Mutter, Bruder, Schwester, Kind
- **Food & Places**: Bäckerei, Brot, Kuchen, Milch, Fleisch, Restaurant
- **Buildings**: Haus, Schule, Krankenhaus, Universität, Bahnhof
- **Transportation**: Auto, Zug, Flugzeug
- **Body parts**: Kopf, Hand, Auge
- **Professions**: Arzt/Ärztin, Lehrer/Lehrerin, Arbeit
- **Time & Weather**: Zeit, Tag, Nacht, Wetter
- **Animals**: Hund, Katze
- **And many more**: Stadt, Farbe, Mann, Frau, Tisch...

### Adjectives (10+ adjectives with all declensions)
- **Common adjectives**: gut, schön, groß, klein, jung, alt
- **All three declension types**: Strong, weak, and mixed declensions
- **Comparative forms**: besser, schöner, größer, etc.
- **All genders and cases**: Masculine, feminine, neuter, plural

### Smart Features
- **Fuzzy search**: Type "bäckerei" and find "die Bäckerei"
- **Conjugation matching**: Type "soll" and get "sollen" conjugations
- **Case variations**: Type "mann" and see all cases of "der Mann"
- **Alternative forms**: Multiple search terms for each word

## 🎨 Design Features

- **Glassmorphism**: Transparent containers with backdrop blur
- **Smooth Animations**: Fade-ins, hover effects, and smooth transitions
- **AI Color Palette**: Modern blue, purple, and cyan gradients
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Typography**: Clean, modern fonts with proper hierarchy

## 🚀 Deployment on Netlify

This app is designed to be deployed on Netlify for free:

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🤝 Contributing

Feel free to contribute by:
- Adding more German words to the database
- Improving the UI/UX
- Adding new features
- Fixing bugs

## 📄 License

This project is open source and available under the MIT License.
