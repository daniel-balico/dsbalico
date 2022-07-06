import React, { useState, useEffect } from 'react'
import Navbar from './../components/Navbar';
import Project from './../components/Project';
import projects from './../contents/projects';
import Footer from './../components/sections/Footer';

interface iProjects {
	year: number;
	title: string;
	featured?: boolean;
	builtWith: Array<string>;
	external?: string;
	github?: string;
}

type iProjectsType = iProjects[];

const ProjectList: React.FC = () => {
	const [ projectsVar, setProjectsVar ] = useState<iProjectsType>();

	// Ascending
	const sort = () => {
		const temp = projects;

		temp.sort((a, b) => (a.year > b.year ? -1 : 1));

		return temp;
	}

	useEffect(() => {
		const sortedData = sort();

		setProjectsVar(sortedData);
	}, [])

	return (
		<div>
			<Navbar project={true} />

			<div className="pt-40 px-5 sm:px-20 lg:px-56 pb-20">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-light">
					Projects
				</h1>
				<p className="text-primary mt-2">List of all projects I've worked on</p>
			
				<div className="flex flex-col mt-4">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-hidden">
								<table className="min-w-full">
									<thead className="bg-gray-100 dark:bg-darker dark:text-light border-b dark:border-dark transition duration-300 ease-in-out">
										<tr>
											<th scope="col" className="text-sm font-medium px-6 py-4 text-left">
												Year
											</th>
											<th scope="col" className="text-sm font-medium px-6 py-4 text-left">
												Title
											</th>
											<th scope="col" className=" text-sm font-medium px-6 py-4 text-left">
												Built with
											</th>
											<th scope="col" className="text-sm font-medium px-6 py-4 text-left">
												Link
											</th>
										</tr>
									</thead>
									<tbody>
										
										{
											projectsVar ? (
												projectsVar.map((project, index) => {
													return (
														<Project
															key={index}
															year={project.year}
															title={project.title}
															featured={project.featured}
															builtWith={project.builtWith}
															external={project.external}
															github={project.github}
														/>
													)
												})
											): null
										}
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default ProjectList