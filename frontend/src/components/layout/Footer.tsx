import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/75 pt-20">
      <div className="container-prosun grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] pb-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-extrabold text-[22px] text-white">
            <span className="relative w-[42px] h-[42px] inline-flex items-center justify-center rounded-xl text-white text-2xl font-black bg-gradient-to-br from-accent to-accent-dark">
              P
              <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-white" />
            </span>
            <span>
              PRO<strong className="text-accent">SUN</strong>
            </span>
          </Link>
          <p className="my-5 leading-loose text-sm">
            منظومة متخصصة في هندسة الاستثمار والتشغيل بقطاع الطفولة المبكرة داخل المملكة العربية السعودية.
          </p>
          <div className="flex gap-2.5">
            {["fa-brands fa-linkedin-in", "fa-brands fa-x-twitter", "fa-brands fa-instagram", "fa-brands fa-youtube"].map(
              (i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 text-white rounded-full inline-flex items-center justify-center text-sm hover:bg-accent hover:-translate-y-1 transition-all"
                >
                  <i className={i} />
                </a>
              )
            )}
          </div>
        </div>

        <FooterCol title="روابط سريعة">
          <FooterLink href="/">الرئيسية</FooterLink>
          <FooterLink href="/#about">من نحن</FooterLink>
          <FooterLink href="/#journeys">رحلات التطوير</FooterLink>
          <FooterLink href="/#methodology">المنهجية</FooterLink>
          <FooterLink href="/blog">المدونة</FooterLink>
        </FooterCol>

        <FooterCol title="رحلات التطوير">
          <FooterLink href="/journeys/decision">Decision Journey</FooterLink>
          <FooterLink href="/journeys/build">Build Journey</FooterLink>
          <FooterLink href="/journeys/operate">Operate Journey</FooterLink>
          <FooterLink href="/journeys/scale">Scale Journey</FooterLink>
        </FooterCol>

        <FooterCol title="تواصل معنا">
          <li className="flex gap-2.5 items-start text-sm leading-relaxed">
            <i className="fa-solid fa-location-dot text-accent mt-1.5" /> الرياض، المملكة العربية السعودية
          </li>
          <li className="flex gap-2.5 items-start text-sm leading-relaxed">
            <i className="fa-solid fa-phone text-accent mt-1.5" /> ‎+966 50 000 0000
          </li>
          <li className="flex gap-2.5 items-start text-sm leading-relaxed">
            <i className="fa-regular fa-envelope text-accent mt-1.5" /> info@prosun.sa
          </li>
        </FooterCol>
      </div>

      <div className="bg-black/25 py-5 border-t border-white/5">
        <div className="container-prosun flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <p>© 2026 PROSUN. جميع الحقوق محفوظة.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="text-white text-[17px] font-bold mb-5 pb-3 relative after:absolute after:right-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-accent after:rounded">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm hover:text-accent hover:pr-1.5 transition-all inline-block">
        {children}
      </Link>
    </li>
  );
}
