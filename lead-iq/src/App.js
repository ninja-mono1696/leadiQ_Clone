import './App.css';
import AllRoutes from './pages/AllRoutes';
import Navbar from './components/Navbar/navbar';
import SectionDark from './components/Section/Dark_Section/section-dark';
import SectionNeutral from './components/Section/SectionPart2/lightSection';
import WfSection from './components/Section/SectionPart3/wfSection';
import SectionBlueLight from './components/Section/SectionPart4/SectionBlueLight';
import Footer from './components/Footer/Footer';

function App() {
return (
	<>
		<AllRoutes />
		<Navbar />
		<SectionDark />
		<SectionNeutral />
		<WfSection />
		<SectionBlueLight />
		<Footer />
	</>
);
}

export default App;