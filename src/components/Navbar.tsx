import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from "./ThemeProvider";
import { useScrollSections } from 'react-scroll-section';

interface Props {
	project?: boolean;
}

const Navbar: React.FC<Props> = ({ project }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { theme, toggleTheme } = useDarkMode();
	const navigate = useNavigate();
	const sections = useScrollSections();

	useEffect(() => {
		const darkModeToggle = document.getElementById("darkModeToggle") as HTMLInputElement;

		if (theme === "dark") darkModeToggle.checked = true;
		else darkModeToggle.checked = false;

	}, [theme]);

	useEffect(() => {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.getElementById("navbar");
		const nav_bottom_layer = document.getElementById("nav-bottom-layer");

		if (hamburger && navbar && nav_bottom_layer) {
			hamburger.classList.toggle("is-active");

			if (isOpen) {
				navbar.classList.remove("animation_wipe-right");
				navbar.classList.add("animation_wipe-left");
				navbar.classList.remove("hidden");

				nav_bottom_layer.classList.remove("hidden");
			}
			else {
				navbar.classList.remove("animation_wipe-left");
				navbar.classList.add("animation_wipe-right");

				nav_bottom_layer.classList.add("hidden");

				setTimeout(() => navbar.classList.add("hidden"), 300);
			}
		}
	}, [isOpen])

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="z-50 md:hidden hamburger fixed right-5 top-5"
				id="hamburger"
			>
				<span className="line bg-primary"></span>
				<span className="line bg-primary"></span>
				<span className="line bg-primary"></span>
			</button>

			<div
				id="navbar"
				className="fixed z-30 bg-gray-100 dark:bg-dark hidden md:block w-60 right-0 h-full shadow-lg md:shadow-none px-1 md:w-full md:h-auto"
			>
				<ul className="mt-20 md:mt-0 md:flex md:justify-end md:p-8">
					{
						sections.map(({ id, onClick, selected}, index) => {
							return (
								<li onClick={ () => { 
										if (project) { navigate("/"); setTimeout(() => onClick(), 765); }
										else { onClick(); setIsOpen(false);}
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

			{/* Darken Background */}
			<div id="nav-bottom-layer" className="z-[2] hidden fixed w-full h-full bg-dark opacity-90"></div>
		</>
	);
};

export default Navbar;