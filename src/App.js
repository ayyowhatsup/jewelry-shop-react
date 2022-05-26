import { useOutlet } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';




function App() {
    const outlet = useOutlet();
    return(
        <div>
            <Header/>
            {outlet || <HomePage/>}
        </div>
    )
  
}

export default App;
