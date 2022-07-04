import React from "react";

const Hero: React.FC = () => {
	return (
		<div className="h-screen flex px-5 sm:px-20 lg:px-56">
			<div className="self-center">
				<p className="text-sm sm:text-lg text-primary">
					Hi, my name is
				</p>
				<h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tighter dark:text-light">
					Daniel Shan Balico.
				</h1>
				<p className="text-gray-500 dark:text-dark-secondary text-sm mt-4">
					I'm a computer science student at{" "}
					<span className="text-primary">
						Technological University of the Philippines
					</span>
					.
				</p>

				<button className="mt-8 border border-primary px-6 py-3 rounded text-primary hover:bg-primary-light dark:hover:bg-primary-dark transition-all duration-300">
					View my resume
				</button>
			</div>
		</div>
	);
}

export default Hero;
