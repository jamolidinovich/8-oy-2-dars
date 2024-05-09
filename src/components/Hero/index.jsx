import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import arrow from "../../assets/arrow.svg";
import arrow2 from "../../assets/arrow2.png";
import frame from "../../assets/frame.svg";
import FormControl from "@mui/joy/FormControl";
import Slider from "@mui/material/Slider";
// import Box from "@mui/material/Box";
// import TabContext from "@mui/lab/TabContext";

// import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Label } from "@mui/icons-material";
function Hero() {
  const [line, setLine] = useState("");
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const dataTheme = useContext(ThemeContext);
  const [desc, setDesc] = useState(null);
  const [value, setValue] = React.useState("1");
  const [value1, setValue1] = useState([20, 37]);
  const minDistance = 10;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
  }, []);
  function handelChangeTheme(e) {
    dataTheme.setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  }
  const handleChang2 = (event, newValue) => {
    setValue(newValue);
  };
  function handleContext() {}
  return (
    <div
      className={dataTheme.theme == "light" ? styles.manLight : styles.manDark}
    >
      {/* dataTheme.theme == "light"
            ? styles.containerLight
            : styles.containerDark */}
      <div
        className={
          dataTheme.theme == "light"
            ? styles.containerLight
            : styles.containerDark
        }
      >
        <div>
          <div className={styles.header}>
            <div className={styles.header_title}>
              <img width={"24px"} height={"24px"} src={arrow} alt="" />
              <h1>{t("Subloyiha ochish")}</h1>
            </div>
            <button>
              {t("Davom etish")} <img src={arrow2} alt="" />
            </button>
          </div>
          <hr />
          <div className={styles.input_top}>
            <div style={{ marginTop: "15px" }}>
              <label
                className={
                  dataTheme.theme == "light" ? styles.label : styles.labelDark
                }
                htmlFor="1"
              >
                {t("Loyiha nomi")}
              </label>
              <br />
              <input
                className={
                  dataTheme.theme == "light" ? styles.input : styles.inputDark
                }
                type="text"
                id="1"
                // placeholder={t("Loyiha nomi")}
                placeholder="Loyiha nomi"
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="1">{t("Tag")}</label>
              <br />
              <select
                className={
                  dataTheme.theme == "light" ? styles.select : styles.selectDark
                }
              >
                <option value="Tag">{t("Tag")}</option>
              </select>
            </div>
          </div>
          {/*  */}
          <div className={styles.input_top}>
            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
              <label htmlFor="1">
                <div className="form-control">
                  <input
                    style={{
                      width: "20px",
                    }}
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                  />
                </div>
                {t("Boshlanish vaqti")}
              </label>
              <br />
              <input
                className={
                  dataTheme.theme == "light" ? styles.input : styles.inputDark
                }
                type="time"
                id="1"
                placeholder=" Boshlanish vaqti"
              />
            </div>
            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
              <label htmlFor="1">
                <div className="form-control">
                  <input
                    style={{
                      width: "20px",
                    }}
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                  />
                </div>
                {t("Qancha vaqtda habar yuboriladi?")}
              </label>
              <br />
              <select
                className={
                  dataTheme.theme == "light" ? styles.select : styles.selectDark
                }
              >
                <option value="Tag">{t("O’sha zahoti")}</option>
              </select>
            </div>
          </div>
          <div className={styles.input_top}>
            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
              <label htmlFor="1">
                <div className="form-control">
                  <input
                    style={{
                      width: "20px",
                    }}
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                  />
                </div>
                {t("Habar yuborilmaydigan vaqt")}
              </label>
              <br />
              {/*  */}
              <div>
                {/* <ul className="timeline">
                  <li value={setLine}>
                    <div className="timeline-start">1984</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">
                      First Macintosh computer
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">1998</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">iMac</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">2001</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">iPod</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">2007</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">iPhone</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">2015</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">Apple Watch</div>
                  </li>
                </ul> */}

                <Box sx={{ width: "1410px" }} />
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value1}
                  onChange={handleChange1}
                  getAriaValueText={valuetext}
                  disableSwap
                />
                <div
                  className="timer"
                  style={{ gap: "23px", position: "absolute", display: "flex" }}
                >
                  <p>13:00</p>
                  <p>14:00</p>
                  <p>15:00</p>
                  <p>16:00</p>
                  <p>17:00</p>
                  <p>18:00</p>
                  <p>19:00</p>
                  <p>20:00</p>
                  <p>21:00</p>
                  <p>22:00</p>
                  <p>23:00</p>
                  <p>00:00</p>
                  <p>01:00</p>
                  <p>02:00</p>
                  <p>03:00</p>
                  <p>04:00</p>
                  <p>05:00</p>
                  <p>06:00</p>
                  <p>07:00</p>
                  <p>08:00</p>
                  <p>09:00</p>
                  <p>10:00</p>
                  <p>11:00</p>
                  <p>12:00</p>
                </div>
              </div>
            </div>

            <div
              className={
                dataTheme.theme == "light"
                  ? styles.xabarlar
                  : styles.xabarlarDark
              }
            >
              <div className={styles.phone}>
                <div className={styles.xabar_desc}>
                  <h1>{t("Habarning ko’rinishi")}</h1>
                  <div style={{ marginTop: "15px" }}>
                    <label htmlFor="1">{t("Shablon")}</label>
                    <br />
                    <select
                      className={
                        dataTheme.theme == "light"
                          ? styles.select
                          : styles.selectDark
                      }
                      style={{ width: "762px" }}
                    >
                      <option value="Tag">{t("Shablon")}</option>
                    </select>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <label htmlFor="1">{t("Link")}</label>
                    <br />
                    <input
                      className={
                        dataTheme.theme == "light"
                          ? styles.input
                          : styles.inputDark
                      }
                      style={{ width: "762px" }}
                      type="url"
                      id="1"
                      placeholder="Link"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "762px",
                      justifyContent: "space-between",
                      marginTop: "15px",
                      fontSize: "20px",
                    }}
                  >
                    <h2>{t("Habar")}</h2>
                    <img src={frame} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                    }}
                  >
                    <div className="tabs">
                      <Box sx={{ width: "100%", typography: "body1" }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              onChange={handleChang2}
                              aria-label="lab API tabs example"
                            >
                              <Tab
                                style={{ color: "#9ca3af" }}
                                sx={{ width: "251px" }}
                                label={t("O’zbekcha")}
                                value="1"
                              />
                              <Tab
                                style={{ color: "#9ca3af" }}
                                sx={{ width: "251px" }}
                                label={t("Русский")}
                                value="2"
                              />
                              <Tab
                                style={{ color: "#9ca3af" }}
                                sx={{ width: "251px" }}
                                label={t("English")}
                                value="3"
                              />
                            </TabList>
                          </Box>
                          <TabPanel value="1">
                            <textarea
                              onChange={handleContext}
                              style={{
                                marginLeft: "-25px",
                                width: "760px",
                                height: "250px",
                              }}
                              value={desc}
                              placeholder="Habar matni..."
                              className="textarea"
                            ></textarea>
                          </TabPanel>
                          <TabPanel value="2">
                            <textarea
                              onChange={handleContext}
                              style={{
                                marginLeft: "-25px",
                                width: "760px",
                                height: "250px",
                              }}
                              value={desc}
                              placeholder="Текст сообщения..."
                              className="textarea"
                            ></textarea>
                          </TabPanel>
                          <TabPanel value="3">
                            <textarea
                              onChange={handleContext}
                              style={{
                                marginLeft: "-25px",
                                width: "760px",
                                height: "250px",
                              }}
                              value={desc}
                              placeholder="Message text... "
                              className="textarea"
                            ></textarea>
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </div>
                  </div>
                </div>
                <div
                  className="xabar_img"
                  style={{
                    marginLeft: "200px",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                      <div className="artboard artboard-demo phone-1">
                        <div className="chat chat-start">
                          <div className="chat-bubble chat-bubble-primary">
                            {t("Bu qanday bema'nilik")}
                          </div>
                        </div>
                        <div className="chat chat-start">
                          <div className="chat-bubble chat-bubble-secondary">
                            {t("Meni Kengashga qo'ying va Ustoz qilma!??")}
                          </div>
                        </div>
                        <div
                          style={{ width: "400px" }}
                          className="chat chat-start"
                        ></div>
                        <div
                          className="chat chat-end"
                          style={{ marginRight: "-150px" }}
                        >
                          <div className="chat-bubble chat-bubble-info">
                            {t("Tinchlaning, Anakin.")}
                          </div>
                        </div>
                        <div
                          className="chat chat-end"
                          style={{ marginRight: "-100px" }}
                        >
                          <div className="chat-bubble chat-bubble-success">
                            {t("Sizga katta sharaf berildi.")}
                          </div>
                        </div>
                        <div
                          style={{ marginRight: "-100px" }}
                          className="chat chat-end"
                        ></div>

                        <div
                          style={{ marginTop: "60px" }}
                          className="flex justify-center gap-1 my-1 w-full"
                        >
                          <kbd className="kbd">q</kbd>
                          <kbd className="kbd">w</kbd>
                          <kbd className="kbd">e</kbd>
                          <kbd className="kbd">r</kbd>
                          <kbd className="kbd">t</kbd>
                          <kbd className="kbd">y</kbd>
                          <kbd className="kbd">u</kbd>
                          <kbd className="kbd">i</kbd>
                          <kbd className="kbd">o</kbd>
                          <kbd className="kbd">p</kbd>
                        </div>
                        <div className="flex justify-center gap-1 my-1 w-full">
                          <kbd className="kbd">a</kbd>
                          <kbd className="kbd">s</kbd>
                          <kbd className="kbd">d</kbd>
                          <kbd className="kbd">f</kbd>
                          <kbd className="kbd">g</kbd>
                          <kbd className="kbd">h</kbd>
                          <kbd className="kbd">j</kbd>
                          <kbd className="kbd">k</kbd>
                          <kbd className="kbd">l</kbd>
                        </div>
                        <div className="flex justify-center gap-1 my-1 w-full">
                          <kbd className="kbd">z</kbd>
                          <kbd className="kbd">x</kbd>
                          <kbd className="kbd">c</kbd>
                          <kbd className="kbd">v</kbd>
                          <kbd className="kbd">b</kbd>
                          <kbd className="kbd">n</kbd>
                          <kbd className="kbd">m</kbd>
                          <kbd className="kbd">/</kbd>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Hero;
