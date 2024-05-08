
import './App.css'
import i18next from 'i18next'
import global_en from "./locales/en/global.json"
import global_fr from "./locales/fr/global.json"
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Layout from './pages/Layout';
import ErrorBoundary from './components/ErrorBoundary';

i18next.init({
  interpolation: {escapeValue:false},
  lng: "en",
  resources: {
    en: {
      global:global_en
    },
    fr: {
      global: global_fr
    }
  }
});


function App() {

  return (
    <ErrorBoundary>
      <BrowserRouter>
          <I18nextProvider i18n={i18next}>
            <Layout/>
          </I18nextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
