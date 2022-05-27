import { useOutlet } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';




function App() {
    const outlet = useOutlet();
    return(
        <>
            <Header/>        
            {outlet || <HomePage></HomePage>}
            <Footer></Footer> 
        </>
    )
  
}

export default App;
