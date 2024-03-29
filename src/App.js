import logo from './logo.svg';
import './App.css';
import Nav1 from './component/Nav1';
import Navbar from './component/Navbar';
import Hostings from './component/Hostings';
import Deals from './component/Deals';
import Footer from './component/Footer';

function App() {
  return (
    <div className=''>
        <Nav1 />
      <div className='element bg-[#FBFCFD] sm:w-[100%] w-full lg:w-[1000px] mx-auto sm:px-[2rem] lg:px-4'>
        <Navbar />
        <Hostings />
        <Deals />
      </div>
        <Footer />
    </div>
  );
}

export default App;
