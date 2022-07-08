import React from "react";
import { Section } from 'react-scroll-section';
import image from './../../images/profile.webp'

const About: React.FC = () => {
	
	const imgMouseEnter = () => {
		const border = document.getElementById("border");

		if(border) {
			border.classList.remove("top-3");
			border.classList.remove("left-3");

			border.classList.add("top-2");
			border.classList.add("left-2");
		}
	}

	const imgMouseLeave = () => {
		const border = document.getElementById("border");

		if(border) {
			border.classList.add("top-3");
			border.classList.add("left-3");

			border.classList.remove("top-2");
			border.classList.remove("left-2");
		}
	}

	return (
		<Section
			id="about"
			className="h-screen text-dark flex justify-center"
		>
			<div className="px-5 sm:px-20 self-center md:flex gap-8">
				<div className="lg:w-[38rem]">
					<p className="font-bold line-after dark:text-light text-xl">
						<span className="text-primary font-normal">01.</span>
						ㅤAbout Me
					</p>
					<div className="mt-4 text-sm sm:text-base dark:text-dark-secondary leading-relaxed">
						<p>
							Hello! I am Daniel Shan Balico, and I enjoy
							programming and building software applications.
						</p>

						<p className="mt-4">
							I started to learn programming after taking an ICT
							strand that focuses on Mobile App and Web
							Development at{" "}
							<a href="!#" className="text-primary">
								STI College Caloocan
							</a>
						</p>

						<p className="mt-4">
							Now, I am currently taking a bachelor of science in
							computer science at{" "}
							<a href="!#" className="text-primary">
								Technological University of the Philippines
							</a>
						</p>

						<p className="mt-4 v">
							Here are a few technologies I've been working with
							recently:
						</p>

						<div className="mt-5 grid grid-cols-2">
							<p>
								<span className="text-primary font-bold">▹</span> Mongo DB
							</p>
							<p>
								<span className="text-primary font-bold">▹</span> Express
							</p>
							<p>
								<span className="text-primary font-bold">▹</span> React
							</p>
							<p>
								<span className="text-primary font-bold">▹</span> NodeJS
							</p>
						</div>
					</div>
				</div>

				<div className="relative w-64 h-64 bg-no-repeat bg-cover max-w-xs  flex-none mt-12 mx-auto">
			    	<img src={image} className="z-50 rounded-md" alt="Daniel Shan Balico" />
			    	<button onMouseEnter={imgMouseEnter} onMouseLeave={imgMouseLeave} className="rounded-md absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-40 hover:opacity-0 transition duration-300 ease-in-out bg-blue-400"></button>
			    	<div id="border" className="absolute top-3 left-3 w-full h-full border -z-10 rounded-md transition-all border-primary duration-300"></div>
			    </div>
			</div>
		</Section>
	);
}

export default About;
