import React from 'react'
import { Section } from 'react-scroll-section';
import skills from './../../contents/skills';

const Skills: React.FC = () => {
	return (
		<Section id="skills" className="h-screen flex justify-center">
			<div className="self-center px-5 md:px-0">
				<p className="font-bold line-after dark:text-light text-xl">
					<span className="text-primary font-normal">02.</span>
					ㅤSkills
				</p>

				<div className="text-light-secondary dark:text-dark-secondary">
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

						{/* Programming Languages */}
						<div className="p-4">
							<p className="text-dark dark:text-light mb-2">Programming Languages</p>
							<ul className="leading-relaxed">
								{
									skills[0].map((language) => {
										return (
											<li key={language}><span className="text-primary font-bold">▹</span> {language}</li>
										)
									})
								}
							</ul>
						</div>

						{/* Libraries and Frameworks */}
						<div className="p-4">
							<p className="text-dark dark:text-light mb-2">Libraries and Frameworks</p>
							<ul className="leading-relaxed">
								{
									skills[1].map((framework) => {
										return (
											<li key={framework}><span className="text-primary font-bold">▹</span> {framework}</li>
										)
									})
								}
							</ul>
						</div>

						{/* Tools and Platforms */}
						<div className="p-4">
							<p className="text-dark dark:text-light mb-2">Tools and Platforms</p>
							<ul className="leading-relaxed">
								{
									skills[2].map((platform) => {
										return (
											<li key={platform}><span className="text-primary font-bold">▹</span> {platform}</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Skills