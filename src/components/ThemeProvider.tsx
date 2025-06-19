
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode for space theme

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    // Add visual feedback to body
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`${isDark ? 'dark' : ''} transition-all duration-500 ease-in-out`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
