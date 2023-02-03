import './App.css';

function App() {
  return (
    <div className="App" style={{fontFamily: "monospace"}}>
      <h1>GitHub User Search App</h1>
      <form action="#">
        <input type="text" />
        <button type="submit" onSubmit={console.log("searching..........")}>Search</button>
      </form>
    </div>
  );
}

export default App;
