import React from 'react';
import {Facebook, Twitter, Instagram, Linkedin, Github} from './../Icons';

const Footer: React.FC = () => {
	const copyEmail = () => {
		navigator.clipboard.writeText("balico.danielshan@gmail.com");

		const emailCopied = document.getElementById("email_copied");

		if (emailCopied) emailCopied.classList.remove("hidden");

		setTimeout(() => { if (emailCopied) emailCopied.classList.add("hidden") }, 5000)
	}
	
	return (
		<div className="pb-12 text-gray-500 dark:text-secondary text-center">
			<div className="text-center flex gap-8 justify-center">
				<a href="https://www.facebook.com/daniel.balico" className="hover:text-primary transition=all">
					<Facebook/>
				</a>
				<a href="https://twitter.com/dsbalico" className="hover:text-primary transition=all">
					<Twitter/>
				</a>
				<a href="https://www.instagram.com/dnl.blc" className="hover:text-primary transition=all">
					<Instagram/>
				</a>
				<a href="https://www.linkedin.com/in/daniel-shan-balico" className="hover:text-primary transition=all">
					<Linkedin/>
				</a>
				<a href="https://github.com/daniel-balico" className="hover:text-primary transition=all">
					<Github/>
				</a>
			</div>
			<button onClick={() => { copyEmail() }} className="hover:text-primary relative transition-all text-xs mt-4">
				{/* Notification if copied */}
				<div id="email_copied" className="hidden absolute inline-block top-2 -right-10 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-0.5 px-2 text-xs leading-none text-center whitespace-nowrap align-baseline bg-primary text-white rounded-full z-10">Copied!</div>
				balico.danielshan@gmail.com
			</button>
		</div>
	)
}

export default Footer