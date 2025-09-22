import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const menus = [
    { id: "home", label: "Muhammad Yusri", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrolled);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menus.forEach((menu) => {
      const el = document.getElementById(menu.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScrolled);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id, href) => {
    setIsActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full py-9 z-50 px-10 xl:px-0">
      <div
        className={`max-w-7xl mx-auto flex rounded-lg items-center justify-between px-6 py-3 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-md backdrop-saturate-150"
            : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home", "#home");
          }}
          className={`relative text-slate-200 text-2xl ${
            isScrolled ? "text-slate-900" : ""
          }`}
        >
          Muhammad Yusri
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 ${
              isActive === "home" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>

        <ul className="hidden md:flex gap-6">
          {menus
            .filter((m) => m.id !== "home")
            .map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(menu.id, menu.href);
                  }}
                  className={`relative text-slate-200 text-2xl group ${
                    isScrolled ? "text-slate-900" : ""
                  }`}
                >
                  {menu.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 ${
                      isActive === menu.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
        </ul>
        <div className="hidden md:flex justify-center items-center">
          <button className="p-3 rounded-lg bg-amber-400">Download CV</button>
        </div>
      </div>
    </nav>
  );
}
