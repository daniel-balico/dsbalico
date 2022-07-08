import React, { useEffect } from 'react'

interface Props {
	title: string;
	description?: string;
	skills: Array<string>;
	github?: string;
	external?: string;
	index: number;
}

const FeaturedProject: React.FC<Props> = ({index, title, description, skills, github, external}) => {
	useEffect(() => {
		if (index === 2) {
			const featured_project = document.getElementById(String(index)) as HTMLElement;

			if (featured_project) {
				featured_project.classList.add("sm:col-span-2");
				featured_project.classList.add("lg:col-span-1");
			}
		}
	}, [index])

	return (
		<div id={String(index)} className="rounded-md relative bg-gray-50 dark:bg-darker w-full h-full md:h-[380px] mx-auto shadow-sm p-10">
			<p className="text-primary text-sm">Featured Project</p>

			{/* Title */}
			<h3 className="dark:text-light font-bold text-2xl mt-1 mb-8">{ title }</h3>

			{/* Description */}
			<p  dangerouslySetInnerHTML={{__html: description!}}
				className="proj-desc text-light-secondary dark:text-dark-secondary text-sm leading-relaxed">
			</p>
			
			<div className="md:absolute bottom-11">
				{/* Skills */}
				<div className="flex gap-3 mt-8 text-sm text-light-secondary dark:text-dark-secondary">
					{
						skills.map((skill, index) => {
							return (
								<span className="whitespace-nowrap" key={`featured_${skill}`}>{skill}</span>
							)
						})
					}
				</div>

				{/* Links */}
				<div className="flex mt-2 gap-3 dark:text-light">
					<a title="Github" 
					   href={github} 
					   className="hover:text-primary transition=all"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
					</a>

					<a title="External Link" 
					   href={external} 
					   className="hover:text-primary transition=all"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><g id="surface854522"><path  fill="currentColor" d="M 5 3 C 3.90625 3 3 3.90625 3 5 L 3 19 C 3 20.09375 3.90625 21 5 21 L 19 21 C 20.09375 21 21 20.09375 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 Z M 14 3 L 14 5 L 17.585938 5 L 8.292969 14.292969 L 9.707031 15.707031 L 19 6.414062 L 19 10 L 21 10 L 21 3 Z M 14 3 "/></g></svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProject