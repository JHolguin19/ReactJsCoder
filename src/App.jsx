import './App.css'
import Header from './Components/Header'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  
  return (
    <>
      <Header/>
      <ItemListContainer texto={"Mensaje introducido a través de Props!!"}/>
    </>
  )
}

export default App
