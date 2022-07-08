import React from 'react'
import { Section } from 'react-scroll-section';

const Contact: React.FC = () => {
	return (
		<Section id="contact" className="h-screen flex justify-center">
			<div className="self-center text-center">
				<p className="text-primary">04. What's next?</p>
				<h2 className="text-4xl md:text-5xl mt-4 font-bold tracking-tighter dark:text-light">Get in Touch</h2>
				
				<p className="mb-12 text-gray-500 dark:text-secondary px-5 md:w-[750px] mt-4 leading-relaxed">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
				
				<a data-mdb-ripple="true" data-mdb-ripple-color="primary" href="mailto:balico.danielshan@gmail.com" className="border border-primary px-6 py-3 rounded-md text-primary hover:bg-primary-light dark:hover:bg-primary-dark transition-all duration-300">
					Say Hello
				</a>	
			</div>
		</Section>
	)
}

export default Contact