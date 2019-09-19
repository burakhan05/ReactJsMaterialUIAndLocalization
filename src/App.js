import React,{useState} from 'react';
import LocalizedStrings from 'react-localization';
import { data } from './data/translations.js'
import Dashboard from './app/Dashboard';
import { LocalizationProvider } from './app/LocalizationContext.js';

let strings = new LocalizedStrings(data);

function App() {
  const [language, setLanguage] = useState("en");
  strings.setLanguage(language);

  var localizationContext={
    strings : strings,
    language:language,
    setLanguage : setLanguage // for change languages
  }
  
  return (
    <div>
      <LocalizationProvider value={localizationContext}>
        <Dashboard/>
      </LocalizationProvider>
    </div>
  );
}

export default App;
