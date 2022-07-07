import React from 'react'
import FeaturedProject from './../FeaturedProject';
import { Section } from 'react-scroll-section';
import projects from './../../contents/projects';
import AllProjects from './../AllProjects';

const Projects: React.FC = () => {
	return (
		<Section id="projects" className="flex justify-center">
			<div className="self-center px-5 md:px-20 xl:px-56 w-full">
				<p className="font-bold line-after dark:text-light text-xl">
					<span className="text-primary font-normal">03.</span>
					ㅤ Projects
				</p>

				{/* Projects */}
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					
					{
						projects.filter((project) => project.featured === true).map((featured, index) => {
							return (
								<FeaturedProject
									key={`featured_${featured.title}`}
									title={featured.title}
									description={featured.description}
									skills={featured.builtWith}
									github={featured.github}
									external={featured.external}
									index={index}
								/>
							)
						})
					}
					
				</div>

				<div className="text-center mt-4">	
					<button data-mdb-ripple="true" data-mdb-ripple-color="primary" className="x-auto mt-8 border border-primary px-6 py-3 rounded text-primary hover:bg-primary-light dark:hover:bg-primary-dark transition-all duration-300" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						All Projects
					</button>
				</div>

				<div className="collapse mt-12" id="collapseExample">
					<AllProjects />
				</div>
			</div>

			
		</Section>
	)
}

export default Projects