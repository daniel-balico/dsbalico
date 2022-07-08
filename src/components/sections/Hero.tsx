import React from "react";

const Hero: React.FC = () => {
	const workingOnIt = () => {
		const working = document.getElementById("working");

		if (working) working.classList.remove("hidden");

		setTimeout(() => { if (working) working.classList.add("hidden") }, 5000)
	}

	return (
		<div className="h-screen flex px-5 sm:px-20 lg:px-56 ">
			<div className="self-center">
				<p className="text-sm sm:text-lg text-primary">
					Hi, my name is
				</p>

				<h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tighter dark:text-light">
					Daniel Shan Balico
				</h1>
				<p className="text-gray-500 dark:text-dark-secondary text-sm mt-4">
					I'm a computer science student at{" "}
					<span className="text-primary">
						Technological University of the Philippines
					</span>
					.
				</p>

				<button onClick={() => { workingOnIt() }} data-mdb-ripple="true" data-mdb-ripple-color="primary" 
    					className="mt-8 border relative border-primary px-6 py-3 rounded-md text-primary hover:bg-primary-light dark:hover:bg-primary-dark transition-all duration-300">
					View my resume
					<div id="working" className="hidden absolute inline-block top-5 -right-20 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2 text-xs leading-none text-center whitespace-nowrap align-baseline bg-primary text-white rounded-full z-10">Working on it!</div>
				</button>
			</div>
		</div>
	);
}

export default Hero;
