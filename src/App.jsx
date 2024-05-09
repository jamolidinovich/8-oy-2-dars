import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import styles from "./App.module.css";
// import { ThemeContext } from "../../App";
import { useContext } from "react";
export const ThemeContext = createContext();
function App() {
  const dataTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("uz");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme == "light" ? styles.manLight : styles.manDark}>
        {/* <header>
        <div className="logo">
          <nav>
            <ul>
              <li>{t("Home")}</li>
              <li>{t("hello")}</li>
              <li>
                <select value={lang} onChange={handelChange}>
                  <option value="uz">Uz</option>
                  <option value="en">En</option>
                  <option value="ru">Ru</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
        <Header></Header>
        <hr style={{ marginTop: "15px" }} />
        <Hero></Hero>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
