import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { ThemeContext } from "../../App";
import styles from "./index.module.css";
import Logo from "../../assets/Logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import profile from "../../assets/Profile.svg";
import { FaBars } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;
function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const dataTheme = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
  }, []);
  function handelChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }
  function handelChangeTheme(e) {
    dataTheme.setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <header
        className={
          dataTheme.theme == "light"
            ? styles.containerLight
            : styles.containerDark
        }
      >
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
              <li>
                <select value={dataTheme.theme} onChange={handelChangeTheme}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      <div
        className={
          dataTheme.theme == "light"
            ? styles.containerLight
            : styles.containerDark
        }
      >
        <div className="w-full bg-black">
          <div className={styles.selekt}>
            {/* <FaBars fontSize={"23px"} /> */}

            <button
              //   className="pt-2 pb-2"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <FaBars fontSize={"23px"} />
            </button>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className={styles.pazeshin}>
              <select
                className={styles.select1}
                value={lang}
                onChange={handelChange}
              >
                <option value="uz">Uz</option>
                <option value="en">En</option>
                <option value="ru">Ru</option>
              </select>
              <select
                className={styles.select2}
                value={dataTheme.theme}
                onChange={handelChangeTheme}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>

              {/* <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
              </div> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <div className="dropdown dropdown-end">
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      top: "7px",
                    }}
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                </div>
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click outside to close
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <IconButton
                style={{ color: "#92929d", marginTop: "-5px" }}
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
        <header className={styles.header}>
          <div className="logo">
            <Link>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <img src={icon1} alt="" />
                {t("Asosiy")}
              </li>
              <li className={styles.li}>
                <img src={icon2} alt="" />
                {t("Mijozlar bazasi")}
              </li>
              <li className={styles.li}>
                <img src={icon3} alt="" />
                {t(" Tracking loyihalari")}
              </li>
              <li className={styles.li}>
                <img src={icon4} alt="" />
                {t("Sharh olish loyihalari")}
              </li>
              <li className={styles.li}>
                <img src={icon5} alt="" />
                {t(" Redirect loyihalari")}
              </li>
            </ul>
          </div>
          <div className={styles.selectt}>
            <div>
              <img src={profile} alt="" />
              <select>
                <option value="Austin Robertson">
                  {t("Austin Robertson")}
                </option>
                <option value="Austin Robertson">Austin Robertson</option>
              </select>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
