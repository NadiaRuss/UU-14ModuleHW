import { createContext, Dispatch, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`container ${theme}`}>
      <div className='mainContainer'>
      <Header />
      <Main />
      <Footer />
      </div>
    </div>
    </ThemeContext.Provider>
  )

}
export default App
