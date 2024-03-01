import logo from './logo.svg';
import './App.css';
import Nav1 from './component/Nav1';
import Navbar from './component/Navbar';
import Hostings from './component/Hostings';
import Deals from './component/Deals';
import Footer from './component/Footer';

function App() {
  return (
    <div className=' justify-center '>
        <Nav1 />
      <div className='bg-[#FBFCFD] w-full lg:w-[1024px] mx-auto sm:px-10 px-5 lg:px-0'>
        <Navbar />
        <Hostings />
        <Deals />
      </div>
        <Footer />
    </div>
  );
}

export default App;
