import Typewriter from "typewriter-effect";
import { LogoFb } from "./design/logo-fb";
import { useState, useRef, useEffect } from "react";
import LogoLn from "./design/logo-ln";
import LogoGh from "./design/logo-gh";
import { motion } from "framer-motion";

export const App = () => {
    const [hoveredItems, setHoveredItems] = useState({
        item1: false,
        item2: false,
        item3: false,
    });

    const handleMouseEnter = (itemName) => {
        setHoveredItems((prevState) => ({
            ...prevState,
            [itemName]: true,
        }));
    };

    const handleMouseLeave = (itemName) => {
        setHoveredItems((prevState) => ({
            ...prevState,
            [itemName]: false,
        }));
    };
    const containerVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        hover: {
            scale: 1.2,
            rotate: [-5, 5, -5, 0],
            border: "6px solid transparent",
        },
    };
    return (
        <>
            <section
                className="container flex max-w-full place-content-center bg-gray-800"
                id="inicio"
            >
                <nav className="flex w-4/5 place-content-between items-center p-8">
                    <h3 className="text-2xl font-bold text-white max-lg:block">
                        Hello, Welcome site!{" "}
                        <span className="text-2xl text-cyan-500">ツ</span>
                    </h3>

                    <ul className="flex place-content-end gap-8 text-lg font-bold text-white max-lg:hidden">
                        <li className="group relative">
                            <a className="group-hover:text-cyan-500">Home</a>
                            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="group relative">
                            <a className="group-hover:text-cyan-500">About</a>
                            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="group relative">
                            <a className="group-hover:text-cyan-500">
                                Services
                            </a>
                            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="group relative">
                            <a className="group-hover:text-cyan-500">
                                Portfolio
                            </a>
                            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="group relative">
                            <a className="group-hover:text-cyan-500">Contact</a>
                            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className="relative flex min-h-screen max-w-full place-content-center items-center overflow-hidden bg-gray-800 bg-[url('./baner3.jpg')] bg-fixed transition-all duration-1000">
                <div className="absolute flex w-4/5 place-content-between place-items-center p-8 max-lg:relative max-lg:flex-col max-lg:gap-8 max-lg:p-0">
                    <div className="flex flex-col font-bold text-white">
                        <h3 className="text-3xl font-bold">Hola, me llamo</h3>
                        <h1
                            id="name-develop"
                            className="text-shadow text-8xl font-bold"
                        >
                            DIEGO FLORES
                        </h1>
                        <h3 className="block text-3xl" id="info">
                            y soy{" "}
                            <span className="text-shadow text-3xl text-cyan-500">
                                <Typewriter
                                    options={{ loop: true }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                "Diseñador y Desarrollador de Software"
                                            )
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .start();
                                    }}
                                />
                            </span>
                        </h3>
                        <div className="mt-8 flex gap-8">
                            <article
                                onMouseEnter={() => handleMouseEnter("item1")}
                                onMouseLeave={() => handleMouseLeave("item1")}
                                className="box-shadow2 flex h-12 w-12 place-content-center items-center rounded-[50%] border-2 border-solid border-[#00eeff] bg-gray-800 hover:bg-[#00eeff]"
                            >
                                <a
                                    href="https://www.facebook.com/diego.floresjara.165/"
                                    target="_blank"
                                >
                                    <LogoFb
                                        className={`${
                                            hoveredItems.item1
                                                ? "fill-current text-black"
                                                : "fill-current text-[#00eeff]"
                                        }`}
                                    />
                                </a>
                            </article>
                            <article
                                onMouseEnter={() => handleMouseEnter("item2")}
                                onMouseLeave={() => handleMouseLeave("item2")}
                                className="box-shadow2 flex h-12 w-12 place-content-center items-center rounded-[50%] border-2 border-solid border-[#00eeff] bg-gray-800 hover:bg-[#00eeff]"
                            >
                                <a
                                    href="https://github.com/Diego27xD"
                                    target="_blank"
                                >
                                    <LogoGh
                                        className={`${
                                            hoveredItems.item2
                                                ? "fill-current text-black"
                                                : "fill-current text-[#00eeff]"
                                        }`}
                                    />
                                </a>
                            </article>
                            <article
                                onMouseEnter={() => handleMouseEnter("item3")}
                                onMouseLeave={() => handleMouseLeave("item3")}
                                className="box-shadow2 flex h-12 w-12 place-content-center items-center rounded-[50%] border-2 border-solid border-[#00eeff] bg-gray-800 hover:bg-[#00eeff]"
                            >
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/diego-edwin-flores-jara"
                                >
                                    <LogoLn
                                        className={`${
                                            hoveredItems.item3
                                                ? "fill-current text-black"
                                                : "fill-current text-[#00eeff]"
                                        }`}
                                    />
                                </a>
                            </article>
                        </div>
                        <div className="mt-8 flex cursor-pointer">
                            <a
                                href="./CV-PROFESIONAL-DF.pdf"
                                download
                                className="box-shadow2 flex h-10 items-center rounded-full bg-cyan-500 p-4 text-center text-black hover:bg-[#00eeff]"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="flex w-1/3 items-center justify-center overflow-hidden max-lg:w-full">
                        <img src="./perfil-foto.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-800">
                <div className="mb-16 mt-16 flex w-4/5 flex-row gap-8 max-lg:flex-col-reverse">
                    <div className="flex w-1/3 items-center justify-center overflow-hidden max-lg:w-full">
                        <img src="./perfil-foto.jpg" alt="" />
                    </div>
                    <div className="flex w-2/3 flex-col place-content-center place-items-center max-lg:w-full">
                        <h1 className="w-2/3 text-center text-5xl text-white">
                            ACERCA DE <span className="text-cyan-500">MI</span>
                        </h1>
                        <div className="text-shadow text-3xl text-cyan-500">
                            <Typewriter
                                options={{ loop: true }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Fullstack Developer Web")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </div>
                        <div className="container mt-8 flex flex-col text-white">
                            <p>
                                Hola, mi nombre es Diego Flores, tengo 22 años y
                                soy de Lima,
                                <span className="text-cyan-500"> Perú</span>.
                            </p>
                            <br />
                            <p>
                                He estado cerca de una computadora desde
                                temprano años, y desde entonces me ha apasionado
                                el mundo del internet y la
                                <span className="text-cyan-500"> web</span> .
                            </p>

                            <br />
                            <p className="text-justify">
                                Busco mi primer trabajo como desarrollador
                                full-stack junior para poder brindar todo mi
                                conocimiento y ayuda a la empresa y comenzar mi
                                carrera profesional para poder aprender aún más
                                sobre esta hermosa profesión y pasión que es la
                                <span className="text-cyan-500">
                                    {" "}
                                    programación
                                </span>
                                .
                            </p>
                        </div>
                        {/* <div className="mt-8 flex w-full place-content-center place-items-center">
                            <iframe
                                width="960"
                                height="500"
                                src="https://youtube.com/embed/pf4Oo2ZlGjU"
                                
                            ></iframe>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-600">
                <div className="mb-16 mt-16 flex w-4/5 flex-col place-content-center place-items-center gap-8">
                    <div className="container flex place-content-center text-center text-5xl">
                        <h3 className="text-shadow text-white">
                            Mis <span className="text-cyan-600">Servicios</span>
                        </h3>
                    </div>
                    <div className="mt-8 flex max-w-full flex-grow place-content-around gap-20 max-lg:flex-col max-lg:gap-20">
                        <div className="w-1/3 max-lg:w-full">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                variants={containerVariants}
                                transition={{ duration: 0.5 }}
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    color: "white",
                                    backgroundColor: "rgb(31, 41, 55)",
                                    animation: `snake 2s linear infinite`,
                                    border: "2px solid transparent",
                                }}
                            >
                                <img
                                    src="./code-icon.svg"
                                    alt=""
                                    className="px-4"
                                />
                                <h3 className="px-4 text-center text-3xl">
                                    Desarrollo back-end
                                </h3>
                                <p className="mt-4 px-4 pb-4 text-justify">
                                    Mi experiencia en el desarrollo backend
                                    incluye el manejo de bases de datos, la
                                    implementación de API, la gestión de
                                    servidores y la optimización del
                                    rendimiento. Trabajo estrechamente con los
                                    equipos de frontend y diseño para garantizar
                                    una integración perfecta y una experiencia
                                    de usuario fluida.
                                </p>
                                <div className="mt-8 flex w-full cursor-pointer place-content-center place-items-center">
                                    <a
                                        href="./CV-PROFESIONAL-DF.pdf"
                                        download
                                        className="box-shadow2 flex h-10 items-center rounded-full bg-cyan-500 p-4 text-center text-black hover:bg-[#00eeff]"
                                    >
                                        Leer más
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-1/3 max-lg:w-full">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                variants={containerVariants}
                                transition={{ duration: 0.5 }}
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    color: "white",
                                    backgroundColor: "rgb(31, 41, 55)",
                                    animation: `snake 2s linear infinite`,
                                    border: "2px solid transparent",
                                }}
                            >
                                <img
                                    src="./android-icon.svg"
                                    alt=""
                                    className="h-[80px] w-[80px] px-4"
                                />
                                <h3 className="px-4 text-center text-3xl">
                                    Desarrollo mobile
                                </h3>
                                <p className="mt-4 px-4 pb-4 text-justify">
                                    Como desarrollador mobile especializado en
                                    Kotlin, tengo un enfoque apasionado en la
                                    creación de aplicaciones móviles eficientes
                                    y de alta calidad para dispositivos Android.
                                    Kotlin es un lenguaje de programación
                                    moderno y versátil que me permite
                                    desarrollar aplicaciones de manera más
                                    rápida y segura.
                                </p>
                                <div className="mt-8 flex w-full cursor-pointer place-content-center place-items-center">
                                    <a
                                        href="./CV-PROFESIONAL-DF.pdf"
                                        download
                                        className="box-shadow2 flex h-10 items-center rounded-full bg-cyan-500 p-4 text-center text-black hover:bg-[#00eeff]"
                                    >
                                        Leer más
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="w-1/3 max-lg:w-full">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                variants={containerVariants}
                                transition={{ duration: 0.5 }}
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    color: "white",
                                    backgroundColor: "rgb(31, 41, 55)",
                                    animation: `snake 2s linear infinite`,
                                    border: "2px solid transparent",
                                }}
                            >
                                <img
                                    src="./code-icon.svg"
                                    alt=""
                                    className="px-4"
                                />
                                <h3 className="px-4 text-center text-3xl">
                                    Desarrollo front-end
                                </h3>
                                <p className="mt-4 px-4 pb-4 text-justify">
                                    Mi experiencia en el desarrollo front-end
                                    incluye el uso de frameworks y librerías
                                    populares como React, Angular y Vue.js.
                                    Estas herramientas me permiten crear
                                    interfaces dinámicas, responsivas y
                                    optimizadas para diferentes dispositivos y
                                    navegadores. Además, tengo habilidades en el
                                    diseño de UI/UX
                                </p>
                                <div className="mt-8 flex w-full cursor-pointer place-content-center place-items-center">
                                    <a
                                        href="./CV-PROFESIONAL-DF.pdf"
                                        download
                                        className="box-shadow2 flex h-10 items-center rounded-full bg-cyan-500 p-4 text-center text-black hover:bg-[#00eeff]"
                                    >
                                        Leer más
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-800">
                <div className="mb-16 mt-16 flex w-4/5 flex-col place-content-center place-items-center gap-8">
                    <div className="flex place-content-center text-center text-5xl">
                        <h3 className="text-shadow text-white">
                            Mis{" "}
                            <span className="text-cyan-600 ">Habilidades</span>
                        </h3>
                    </div>
                    <div className="flex flex-grow place-content-between place-items-center gap-8 max-lg:flex-col max-lg:gap-12 max-lg:p-4">
                        <div className="flex flex-grow flex-col place-content-center place-items-center gap-12 ">
                            <article className="box-shadow2 flex flex-row place-content-between gap-16 rounded-full bg-transparent p-12 text-white shadow-lg transition duration-300 hover:scale-105 hover:border-2 hover:border-b-4 hover:border-cyan-400 hover:text-cyan-400 max-sm:flex-col">
                                <div className="flex flex-col place-content-center place-items-center gap-4">
                                    <img
                                        src="./icos/nodejs-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>Node JS</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/springio-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3 className="text-center">Spring Boot</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/djangoproject-icon.svg"
                                        alt="django"
                                        className="h-20 w-20"
                                    />
                                    <h3>Django</h3>
                                </div>
                            </article>
                            <article className="box-shadow2 flex flex-row place-content-between gap-16 rounded-full bg-gray-600 p-12 text-white shadow-lg transition duration-300 hover:scale-105 hover:border-2 hover:border-b-4 hover:border-cyan-400 hover:text-cyan-400 max-sm:flex-col">
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/postgresql-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>PostgreSQL</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/mysql-official.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>MySQL</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/mongodb-ar.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>HTML</h3>
                                </div>
                            </article>
                        </div>
                        <div>
                            <img
                                src="./laptop.png"
                                alt=""
                                className="transition duration-300 hover:scale-105 max-lg:hidden"
                            />
                        </div>

                        <div className="flex flex-col place-content-center place-items-center gap-12">
                            <article className="box-shadow2 flex flex-row place-content-between gap-16 rounded-full bg-gray-600 p-12 text-white shadow-lg transition duration-300 hover:scale-105 hover:border-2 hover:border-b-4 hover:border-cyan-400 hover:text-cyan-400 max-sm:flex-col">
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/web-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>HTML/CSS/JS</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4 hover:text-cyan-400">
                                    <img
                                        src="./icos/reactjs-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>React JS</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4 hover:text-cyan-400">
                                    <img
                                        src="./icos/kotlin-icon.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>HTML</h3>
                                </div>
                            </article>
                            <article className="box-shadow2 flex flex-row place-content-between gap-16 rounded-full bg-transparent p-12 text-white shadow-lg transition duration-300 hover:scale-105 hover:border-2 hover:border-b-4 hover:border-cyan-400 hover:text-cyan-400 max-sm:flex-col">
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/amazon_aws-ar21.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>AWS</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/docker-official.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>Docker</h3>
                                </div>
                                <div className="flex flex-col place-items-center gap-4">
                                    <img
                                        src="./icos/git-scm-ar21.svg"
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <h3>Git/hub</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-600">
                <div className="mb-16 mt-16 flex w-4/5 flex-col place-content-center place-items-center gap-8 ">
                    <div className="container flex place-content-center text-center text-5xl">
                        <h3 className="text-white">
                            Mis <span className="text-cyan-600">Proyectos</span>
                        </h3>
                    </div>
                    <div className="flex w-full flex-row gap-8 max-lg:flex-col max-lg:gap-8 ">
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./proyecto1.png"
                                alt="imagen.png"
                                className="imgpj  h-80 object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">Calculator</h4>
                                <p className="text-white">
                                    HTML, CSS, JAVASCRIPT
                                </p>
                            </div>
                        </div>
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./projecto2.png"
                                alt="imagen.png"
                                className="imgpj  h-80 object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">PokeApi Web</h4>
                                <p className="text-white">REACT JS</p>
                            </div>
                        </div>
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./proyecto3.png"
                                alt="imagen.png"
                                className="imgpj  h-80 object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">
                                    Ecommerce de Accesorios
                                </h4>
                                <p className="text-white">
                                    React - Spring boot
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-row gap-8 max-lg:flex-col max-lg:gap-8">
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./proyecto4.png"
                                alt="imagen.png"
                                className="imgpj h-80 object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">Organizador</h4>
                                <p className="text-white">React - storage</p>
                            </div>
                        </div>
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./proyecto5.png"
                                alt="imagen.png"
                                className="imgpj h-80 object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">
                                    Web para dibujar online
                                </h4>
                                <p className="text-white">NodeJs - socket</p>
                            </div>
                        </div>
                        <div className="box-padre box-shadow2 relative flex h-2/5 w-1/3 flex-col overflow-hidden max-lg:w-full">
                            <img
                                src="./proyecto6.png"
                                alt="imagen.png"
                                className="imgpj h-80 w-full object-contain grayscale-[1] transition duration-300"
                            />
                            <div className="box-hijo box-shadow2 absolute bottom-[-40px] flex h-2/3 w-full flex-col gap-4 bg-[rgba(31,54,55,0.9)] ps-4 text-start text-cyan-400 opacity-0">
                                <h4 className="mt-4 text-4xl">
                                    PokeApi mobile
                                </h4>
                                <p className="text-white">Android-Kotlin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-800">
                <div className="mb-16 mt-16 flex w-4/5 flex-col place-content-center place-items-center gap-8">
                    <div className="container flex place-content-center text-center text-5xl">
                        <h3 className="text-white">
                            Contacta<span className="text-cyan-600">me</span>
                        </h3>
                    </div>
                    <div className="mt-4 flex w-full flex-row place-content-center place-items-center gap-8 max-lg:flex-col">
                        <div className="form mt-8 flex w-1/2 flex-col place-content-center place-items-center max-lg:w-full">
                            <form className="space-y-4">
                                <div className="flex w-full flex-row gap-4">
                                    <div className="w-1/2">
                                        <input
                                            placeholder="Nombre completo"
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full rounded-md border border-gray-800 bg-gray-600  px-4 py-2 focus:border-cyan-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <input
                                            placeholder="Dirección de email"
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full rounded-md border border-gray-800  bg-gray-600 px-4 py-2 focus:border-cyan-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        placeholder="Asunto..."
                                        type="text"
                                        id="asunto"
                                        name="asunto"
                                        className="w-full rounded-md border border-gray-800  bg-gray-600 px-4 py-2 focus:border-cyan-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tu mensaje..."
                                        id="message"
                                        name="message"
                                        className="w-full rounded-md border border-gray-800 bg-gray-600 px-4 py-2 focus:border-cyan-500 focus:outline-none"
                                        rows="8"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex place-content-center place-items-center">
                                    <button
                                        type="submit"
                                        className="box-shadow2 flex h-10 items-center rounded-full bg-cyan-500 p-4 text-center text-black hover:bg-[#00eeff]"
                                    >
                                        Enviar mensaje
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8 flex flex-col place-content-center place-items-center  space-y-4 text-gray-400 hover:text-cyan-400">
                                <div className="flex place-content-center place-items-center gap-8">
                                    <img
                                        src="./icos/PaperPlaneTilt.svg"
                                        alt=""
                                    />

                                    <p>flores2001diego@gmail.com</p>
                                </div>

                                <div className="flex flex-row gap-8">
                                    <div className="flex flex-row place-content-center place-items-center gap-4">
                                        <a
                                            href="https://www.linkedin.com/in/diego-edwin-flores-jara"
                                            target="_blank"
                                        >
                                            <img
                                                src="./icos/linkedin-icon.svg"
                                                alt=""
                                            />
                                        </a>
                                        <p>Diego Edwin Flores Jara</p>
                                    </div>
                                    <div className="flex flex-row place-content-center place-items-center gap-2">
                                        <div>
                                            <a
                                                href="https://github.com/Diego27xD"
                                                target="_blank"
                                            >
                                                <img
                                                    src="./icos/icons8-github.svg"
                                                    alt="git"
                                                    className="cursor-pointer"
                                                />
                                            </a>
                                        </div>

                                        <p>Diego27xD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex w-1/2 flex-col place-content-center place-items-center overflow-hidden max-lg:w-full">
                            <img src="./download.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex max-w-full place-content-center place-items-center bg-gray-600">
                <div className="mb-6 mt-6 flex w-4/5 flex-row place-content-center place-items-center gap-8">
                    <div className="w-full">
                        <h1 className="text-start text-white">
                            Designed © 2023 by Diego Flores | All Rights
                            Reserved.
                        </h1>
                    </div>

                    <div className="box-shadow2 flex h-12 w-12 cursor-pointer place-content-center place-items-center rounded-lg bg-cyan-400">
                        <a href="#inicio">
                            <img
                                src="./flecha2.png"
                                alt="flecha"
                                className="h-6 w-8"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
