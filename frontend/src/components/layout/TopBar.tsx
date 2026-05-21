export function TopBar() {
  return (
    <div className="hidden md:block bg-primary-dark text-white/85 text-[13px] py-2.5">
      <div className="container-prosun flex items-center justify-between gap-5 flex-wrap">
        <div className="flex gap-6 flex-wrap">
          <a href="mailto:info@prosun.sa" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <i className="fa-regular fa-envelope text-accent" /> info@prosun.sa
          </a>
          <a href="tel:+966500000000" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <i className="fa-solid fa-phone text-accent" /> ‎+966 50 000 0000
          </a>
          <span className="inline-flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-accent" /> الرياض، المملكة العربية السعودية
          </span>
        </div>
        <div className="flex gap-2">
          {[
            { icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
            { icon: "fa-brands fa-x-twitter", label: "X" },
            { icon: "fa-brands fa-instagram", label: "Instagram" },
            { icon: "fa-brands fa-youtube", label: "YouTube" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-7 h-7 inline-flex items-center justify-center bg-white/10 rounded-full text-xs hover:bg-accent transition-colors"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
