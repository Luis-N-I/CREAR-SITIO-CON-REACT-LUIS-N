import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Tabla from './Tabla';
import Tarjeta from './Tarjeta';

function App() {
  let date = [
    {
      matricula: '123',
      nombre: 'Jose',
      apellido: 'torres'
    },
    {
      matricula: '456',
      nombre: 'Joseph',
      apellido: 'towers'
    }
  ]

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><Link to="/">Inicio</Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#"><Link to="/Tabla">Tabla</Link></a>
              <a class="nav-link" href="#"><Link to="/Tarjeta">Tarjeta</Link></a>
            </div>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Tabla' element={<Tabla info={date} />} />
        <Route path='/Tarjeta' element={<Tarjeta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
