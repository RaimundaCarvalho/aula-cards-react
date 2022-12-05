
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Cards from'./components/Cards'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App">
      <Header content="Minhas Comidas Favoritas"/> 
      <Bio/>
      <Cards/>
      <Footer description=" Feito com carinho por Trindade"/>

    </div>
  )
}

export default App
