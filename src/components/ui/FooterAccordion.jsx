import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FooterAccordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/20">
            <button
                className="w-full flex items-center justify-between py-3"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold">{title}</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="pb-3">{children}</div>
            </div>
        </div>
    );
};

export default FooterAccordion