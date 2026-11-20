"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const selector = "[data-reveal]:not(.is-visible)";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(selector).forEach((node) => {
        node.classList.add("is-visible");
      });
      return;
    }

    const check = () => {
      const threshold = window.innerHeight * 0.94;
      document.querySelectorAll(selector).forEach((node) => {
        if (node.getBoundingClientRect().top < threshold) {
          node.classList.add("is-visible");
        }
      });
    };

    check();
    root.classList.add("scroll-reveal-ready");
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    const mutations = new MutationObserver(check);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      mutations.disconnect();
      root.classList.remove("scroll-reveal-ready");
    };
  }, [pathname]);

  return null;
}
