import React from 'react'

const FooterSection = ({ title, items }) => (
    <div>
        <h3 className="font-semibold text-xl text-white mb-3 leading-14 ">{title}</h3>
        <ul className="space-y-2 text-white/80 text-lg font-medium">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
);

export default FooterSection