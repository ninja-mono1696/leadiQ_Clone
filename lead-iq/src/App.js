import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar/navbar';
import SectionDark from './components/Section/Dark_Section/section-dark';
import SectionNeutral from './components/Section/SectionPart2/lightSection';
import WfSection from './components/Section/SectionPart3/wfSection';
import SectionBlueLight from './components/Section/SectionPart4/SectionBlueLight';

function App() {
return (
	<>
		<AllRoutes />
		<Navbar />
		<SectionDark />
		<SectionNeutral />
		<WfSection />
		<SectionBlueLight />
	</>
);
}

export default App;