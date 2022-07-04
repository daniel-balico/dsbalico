import React from "react";

interface iThemeContext {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface iThemeContextProvider {
	initialTheme?: string;
	children: any;
}

const getInitialTheme = (): string => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("current-theme");
		if (storedPrefs) return storedPrefs;

		if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";		
	}

	return "dark";
};

export const ThemeContext = React.createContext<iThemeContext>({
	theme: getInitialTheme(),
	setTheme: () => {},
});

export const ThemeProvider: React.FC<iThemeContextProvider> = ({initialTheme, children,}) => {

	const [theme, setTheme] = React.useState<string>(initialTheme ?? getInitialTheme());

	const checkTheme = (existing: string) => {
		const root = window.document.documentElement;
		const isDark = existing === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(existing);

		localStorage.setItem("current-theme", existing);
	};

	React.useLayoutEffect(() => { checkTheme(theme); }, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useDarkMode = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	const toggleTheme = () => { setTheme(theme === "light" ? "dark" : "light"); };

	return { theme, toggleTheme };
};
