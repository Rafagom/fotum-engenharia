import { Envelope, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    // <footer className="grid grid-cols-[8fr,1fr] mb-2">
    <footer className="flex flex-col w-full items-center gap-6  bg-[#f2f2f2] pt-4 pb-2">
      <div className="flex items-center gap-6">
        <a
          href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
          target="_blank"
        >
          <WhatsappLogo size={32} />
        </a>
        <a href="https://www.instagram.com/fotumengenharia/" target="_blank">
          {" "}
          <InstagramLogo size={32} />{" "}
        </a>
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="grid grid-cols-2 text-center gap-6">
          <a
            className="text-xl font-medium flex justify-end"
            href="mailto:contato@fotumengenharia.com.br"
            target="_blank"
          >
            <Envelope size={32} />
            contato@fotumengenharia.com.br
          </a>
          <a
            className="text-xl font-medium flex justify-start"
            href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
            target="_blank"
          >
            <Phone size={32} />
            48 98411 0903
          </a>
        </div>
        <p className="text-sm">
          ©2022 por Fótum Engenharia - Santa Catarina, Brasil
        </p>
      </div>
    </footer>
  );
}
