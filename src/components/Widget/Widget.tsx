import { ChatTeardropDots, WhatsappLogo } from "phosphor-react";
// import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <a
      href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
      target="_blank"
      className="fixed bottom-32 right-0 z-10 "
    >
      <button>
        <div className="bg-green-500 rounded-l-3xl px-5 py-4 text-white items-center flex group absolute bottom-0 right-0">
          <WhatsappLogo className="w-10 h-10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
            &nbsp;WhatsApp
          </span>
        </div>
      </button>
    </a>
  );
}
