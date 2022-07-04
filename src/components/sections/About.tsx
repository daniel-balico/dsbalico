import React from "react";
import { Section } from 'react-scroll-section';

const About: React.FC = () => {
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

					<div className="mt-4 text-sm sm:text-base dark:text-dark-secondary">
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

						<p className="mt-4">
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

				{/* Image */}
				<div className="flex-none image-outline after:border after:border-primary w-64 h-64 mt-12 mx-auto">
					<div className="image-fill w-full h-full bg-primary opacity-50 transition-all"></div>
				</div>
			</div>
		</Section>
	);
}

export default About;
