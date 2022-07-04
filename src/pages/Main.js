import React from "react";

import Navbar from "./../components/Navbar";

// Sections
import Hero from "./../components/sections/Hero";
import About from "./../components/sections/About";
import Skills from "./../components/sections/Skills";
import Projects from "./../components/sections/Projects";
import Contact from "./../components/sections/Contact";
import Footer from "./../components/sections/Footer";


const Main: React.FC = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default Main;
