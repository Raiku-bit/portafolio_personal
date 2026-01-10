import './App.css'
import Header from './components/header'
import Perfil from './components/perfil'
import Proyects from './components/proyects'
import Tecnologies from './components/tecnologies'
import gifcat from './assets/nyan-cat.gif' 

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:basis-1/3 w-full">
          <Perfil />
        </div>
        <div className="md:basis-1/3 w-full">
          <Proyects />
        </div>
        <div className="md:basis-1/3 w-full">
          <Tecnologies />
        </div>
      </div>
      <div>
        <img src={gifcat} alt="nyacatgif" className='nyacatgif' />
      </div>
    </>
  )
}

export default App
