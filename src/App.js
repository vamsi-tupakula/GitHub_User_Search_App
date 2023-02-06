import "./App.css";
import DetailsPane from "./components/DetailsPane";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState('');

  const changeTheme = () => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#141d2f';
      document.getElementById('user-details').style.backgroundColor = '#1e2a47';
      setTheme('dark');
    } else {
      document.body.style.backgroundColor = '#f6f8ff';
      document.getElementById('user-details').style.backgroundColor = '#ffffff';
      setTheme('light');
    }
  }

  return (
    <div className="container">
      <Header theme={theme} changeTheme={changeTheme}/>
      <SearchContainer theme={theme} userName={userName} setUserName={setUserName}/>
      <DetailsPane theme={theme}/>
    </div>
  );
}

export default App;
