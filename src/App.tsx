import './App.css';
import SearchBar from './components/SearchBar';
import Logo from './components/ui/Logo';
import Home from './pages/Home';

function App() {
    return(
      <>
        <Home>
          <Logo/>
          <SearchBar/>
        </Home>
      </>
    );
}

export default App;
