"use client";

import { useEffect, useState } from "react";

export default function ViewportDebug() {
  const [data, setData] = useState<Record<string, number | string>>({});

  useEffect(() => {
    const update = () => {
      const header = document.querySelector("header");
      const contact = document.querySelector("#contact");
      const footer = document.querySelector("footer");

      const headerRect = header?.getBoundingClientRect();
      const contactRect = contact?.getBoundingClientRect();
      const footerRect = footer?.getBoundingClientRect();

      setData({
        innerHeight: window.innerHeight,
        visualViewport: window.visualViewport?.height ?? "none",
        scrollY: Math.round(window.scrollY),
        scrollHeight: document.documentElement.scrollHeight,
        remainingScroll:
          document.documentElement.scrollHeight -
          window.innerHeight -
          window.scrollY,
        headerHeight: headerRect?.height ?? "none",
        headerBottom: headerRect?.bottom ?? "none",
        contactTop: contactRect?.top ?? "none",
        contactHeight: contactRect?.height ?? "none",
        contactBottom: contactRect?.bottom ?? "none",
        footerTop: footerRect?.top ?? "none",
        footerBottom: footerRect?.bottom ?? "none",
        viewportBottom: window.innerHeight,
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    window.visualViewport?.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-[9999] max-w-xs rounded bg-black/80 p-3 text-[11px] leading-5 text-white">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {key}: {String(value)}
        </div>
      ))}
    </div>
  );
}
