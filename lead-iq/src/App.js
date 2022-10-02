import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar/navbar';
import SectionDark from './components/Section/Dark_Section/section-dark';
import SectionNeutral from './components/Section/SectionPart2/lightSection';

function App() {
return (
	<>
		<AllRoutes />
		<Navbar />
		<SectionDark />
		<SectionNeutral />
	</>
);
}

export default App;