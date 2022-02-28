import logo from './logo.svg';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
