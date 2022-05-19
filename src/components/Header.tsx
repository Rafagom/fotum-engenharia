import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <section>
      <div className="bg-white w-full fixed h-16 z-10">
        <header className="flex h-16  justify-between max-w-[80vw] items-center mx-auto mb-16 ">
          <img
            className="w-[120px] h-12"
            src="/logo.png"
            alt="Logo Fótum Engenharia"
          />
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-4 font-semibold">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/services">Serviços</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
                target="_blank"
              >
                <WhatsappLogo size={32} />
              </a>
              <a
                href="https://www.instagram.com/fotumengenharia/"
                target="_blank"
              >
                {" "}
                <InstagramLogo size={32} />{" "}
              </a>
            </div>
          </nav>
        </header>
      </div>
      <div className="h-16"></div>
    </section>
  );
}
