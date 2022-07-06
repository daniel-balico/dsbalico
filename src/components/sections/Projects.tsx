import React from 'react'
import FeaturedProject from './../FeaturedProject';
import { useNavigate } from 'react-router-dom';
import { Section } from 'react-scroll-section';
import featuredProjects from './../../contents/featuredProjects';

const Projects: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Section id="projects" className="h-auto md:h-screen flex justify-center">
			<div className="self-center px-5 md:px-20 xl:px-56 w-full">
				<p className="font-bold line-after dark:text-light text-xl">
					<span className="text-primary font-normal">03.</span>
					ㅤ Projects
				</p>

				{/* Projects */}
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{
						featuredProjects.map((featured, index) => {
							return (
								<FeaturedProject
									key={index}
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
					<button onClick={() => navigate('/projects')} className="x-auto mt-8 border border-primary px-6 py-3 rounded text-primary hover:bg-primary-light dark:hover:bg-primary-dark transition-all duration-300">
						All Projects
					</button>
				</div>
			</div>
		</Section>
	)
}

export default Projects