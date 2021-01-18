import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ThemeContext, {themes} from './context/theme-context';

function App() {
  const [theme, setTheme] = useState(themes.first);
  const toggleTheme = () => {

    theme.id === 1 && setTheme(themes.second);
    theme.id === 2 && setTheme(themes.third);
    theme.id === 3 && setTheme(themes.fourth);
    theme.id === 4 && setTheme(themes.fifth);
    theme.id === 5 && setTheme(themes.sixth);
    theme.id === 6 && setTheme(themes.first);
}

  if(theme.id ===1) {
    document.body.style.fontFamily = 'Ubuntu';
  }else if(theme.id === 2){
    document.body.style.fontFamily = 'Grandstander';
  }else if(theme.id === 3){
    document.body.style.fontFamily = 'Montserrat';
  }else if(theme.id === 4){
    document.body.style.fontFamily = 'Indie Flower';
    document.body.style.fontSize = '20px';
  }else if(theme.id === 5){
    document.body.style.fontFamily = 'Rubik';
  }else if(theme.id === 6){
    document.body.style.fontFamily = 'Itim';
  }else{
    document.body.style.fontFamily = 'Ubuntu';
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div id="page-top">
        <Navbar toggleTheme={toggleTheme} />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}


export default App;
