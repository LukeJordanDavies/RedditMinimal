import UseData from "./hooks/useData";
import Post from "./card";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function App() {
  const { data, setSubreddit, error, setError } = UseData();

  return (
    <div className="layout">
      <header className="header">
        <Navbar setSubreddit={setSubreddit} error={error} setError={setError}/>
      </header>

      <main  className="main-content">
        <div className="post-container">
          {error ? <p>Subreddit not found!</p> : <Post data={data}/>}
        </div>

         <aside className="sidebar-container">
          <Sidebar setSubreddit={setSubreddit} error={error} setError={setError} />
        </aside>
      </main>
    </div>
  );
}

export default App;
