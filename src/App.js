import "./App.css";
import DetailsPane from "./components/DetailsPane";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState({});
  const [userName, setUserName] = useState('octocat');

   const fetchAPI = async () => {
    var res = await Axios.get('https://api.github.com/users/' + userName);
    setData(res.data);
    console.log(res.data);
   }

   useEffect(() => {
    Axios.get('https://api.github.com/users/' + userName).then(res => {
      setData(res.data);
      console.log(res.data);
    })
  }, []);

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
      <SearchContainer theme={theme} userName={userName} setUserName={setUserName} fetchAPI={fetchAPI}/>
      <DetailsPane theme={theme} data={data}/>
    </div>
  );
}

export default App;
