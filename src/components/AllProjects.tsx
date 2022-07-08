import React, { useEffect, useState } from 'react'
import Project from './Project';
import projects from './../contents/projects';

interface iProjects {
	year: number;
	title: string;
	featured?: boolean;
	builtWith: Array<string>;
	external?: string;
	github?: string;
}

type iProjectsType = iProjects[];

const AllProjects = () => {
	const [ projectList, setProjectList ] = useState<iProjectsType>();

	// Ascending
	const sort = () => {
		const temp = projects;

		temp.sort((a, b) => (a.year > b.year ? -1 : 1));

		return temp;
	}

	useEffect(() => {
		const sortedData = sort();

		setProjectList(sortedData);
	}, [])

	return (
		<>
		
			<p className="text-primary mt-2">List of all projects I've worked on</p>
		
			<div className="flex flex-col mt-4">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-hidden rounded-md">
							<table className="min-w-full">
								<thead className="bg-gray-200 dark:bg-darker dark:text-light border-b dark:border-dark transition duration-300 ease-in-out">
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
										projectList ? (
											projectList.map((project, index) => {
												return (
													<Project
														key={project.title}
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
		</>
	)
}

export default AllProjects