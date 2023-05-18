import './App.css';
import { NavBar } from './components'

function App() {


  //used for counting or keep data to update
  //const [index, setIndex] = useState(10)

  //it is triggered when a component is modified
  // useEffect( _ => {
  //     console.log('component modified');
  // }, [])

  return (
    <>
      <NavBar/>
    </>
  );
}

export default App;
