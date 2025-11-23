const FooterLinksColumn = ({ title, links }) => {
    return (
        <div className="footer_col mb-6 md:mb-0">
            <h3 className="font-semibold mb-3 text-white">{title}</h3>
            <div className="flex flex-col space-y-2">
                {links.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterLinksColumn;
