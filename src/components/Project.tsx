import React from "react";
import {External, Github} from './Icons';

interface Props {
	year: number;
	title: string;
	builtWith: Array<string>;
	external?: string;
	github?: string;
}

const Project: React.FC<Props> = ({ year, title, builtWith, external, github }) => {
	return (
		<tr className="bg-gray-100 dark:bg-darker text-light-secondary dark:text-dark-secondary border-b dark:border-dark">
			<td className="px-6 py-4 whitespace-nowrap text-primary text-sm font-medium">
				{ year }
			</td>
			<td className="text-sm font-light px-6 py-4 whitespace-nowrap leading-4">
				{ title }
			</td>
			<td className="text-sm break-all text-xs font-light px-6 py-4">
				{ builtWith.map((tech, index, row) => {
					return (
						<span key="index">
							<span className="whitespace-nowrap">{tech}</span> {index + 1 === row.length ? null : "· "}
						</span>
					);
				}) }
			</td>
			<td className="text-sm font-light px-6 py-4 whitespace-nowrap">
				<div className="flex gap-4">
					{
						external ? (
							<a
								title="External Link"
								href={ external }
								className="hover:text-primary transition=all"
							>
								<External />
							</a>
						): null
					}
					{
						github ? (
							<a title="Github Link" href={ external } className="hover:text-primary transition=all">
								<Github />
							</a>
						): null
					}
				</div>
			</td>
		</tr>
	);
};

export default Project;
