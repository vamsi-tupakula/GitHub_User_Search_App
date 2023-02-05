import "./App.css";
import DetailsPane from "./components/DetailsPane";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#141d2f';
      setTheme('dark');
    } else {
      document.body.style.backgroundColor = '#ffffff';
      setTheme('light');
    }
  }

  return (
    <div className="container">
      <Header theme={theme} changeTheme={changeTheme}/>
      <SearchContainer />
      <DetailsPane />
    </div>
  );
}

export default App;
