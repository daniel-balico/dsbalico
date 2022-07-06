import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from "./ThemeProvider";
import { useScrollSections } from 'react-scroll-section';

interface Props {
	project?: boolean;
}

const Navbar: React.FC<Props> = ({ project }) => {
	const { theme, toggleTheme } = useDarkMode();
	const navigate = useNavigate();
	const sections = useScrollSections();

	useEffect(() => {
		const darkModeToggle = document.getElementById("darkModeToggle") as HTMLInputElement;

		if (theme === "dark") darkModeToggle.checked = true;
		else darkModeToggle.checked = false;

	}, [theme]);

	useEffect(() => {
		const offcanvasRight = document.getElementById("offcanvasRight") as HTMLInputElement;
		const mediaQuery = window.matchMedia("(min-width: 768px)")
		
		if(offcanvasRight) {
			mediaQuery.addListener(() => {
				if (mediaQuery.matches) { // If media query matches
					offcanvasRight.classList.remove("offcanvas-end");

					offcanvasRight.style.removeProperty("visibility")
				} else {
					offcanvasRight.classList.add("offcanvas-end");
				}
			}) 	
		}
		
	}, []);

	return (
		<>
			<button className="z-50 md:hidden hamburger fixed right-5 top-5"id="hamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
				<span className="line bg-primary"></span><span className="line bg-primary"></span><span className="line bg-primary"></span>
			</button>

			<div
				className="offcanvas fixed bg-gray-100 dark:bg-dark invisible md:visible w-72 right-0 h-full shadow-lg md:shadow-none px-1 md:w-full md:h-auto transition duration-300 ease-in-out bg-clip-padding shadow-sm outline-none"
				tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
			>
				<div className="offcanvas-header flex md:hidden items-center justify-between p-4">
					<button type="button" id="hamburger" className="is-active z-50 md:hidden hamburger fixed right-5 top-5" data-bs-dismiss="offcanvas" aria-label="Close">
						<span className="line bg-primary"></span><span className="line bg-primary"></span><span className="line bg-primary"></span>
					</button>
				</div>

				<ul className="mt-20 md:mt-0 md:flex md:justify-end md:p-8">
					{
						sections.map(({ id, onClick, selected}, index) => {
							return (
								<li onClick={ () => { 
										if (project) { navigate("/"); setTimeout(() => onClick(), 765); }
										else { onClick(); }
								}} data-selected={selected} key={id} className="cursor-pointer relative">
									<span
										
										className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-light-secondary dark:text-secondary text-ellipsis whitespace-nowrap rounded hover:text-primary dark:hover:text-primary transition duration-300 ease-in-out"
										
									>
										<span className="text-primary mr-2">0{index+1}.</span> 
										{ id.charAt(0).toUpperCase() + id.slice(1) }
									</span>
								</li>
							)
						})
					}
					<li className="">
						<div className="form-check form-switch ml-5 mt-3">
							<input
								className="form-check-input checked:bg-primary appearance-none w-9 -ml-10 mr-2 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-dark-secondary focus:outline-none cursor-pointer shadow-sm"
								onChange={toggleTheme}
								type="checkbox"
								role="switch"
								id="darkModeToggle"
							/>
							<label
								className="form-check-label inline-block text-sm text-light-secondary dark:text-secondary"
								htmlFor="flexSwitchCheckDefault"
							>
								Dark mode
							</label>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;