import Image from "next/image";

const HeaderSection = () => (
  <section className="hero-section" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <span className="eyebrow" lang="en" dir="ltr">
        ROOTED IN BALANCE
      </span>
      <p className="hero-kicker">صحتك تنمو · مع كل خطوة</p>
      <h1 className="hero-title" id="hero-title">
        فاطمة محمد
        <span className="d-block">
          أخصائية <span>تغذية</span> في الأردن
        </span>
      </h1>
      <p className="hero-subtitle">
        أنا فاطمة محمد، أخصائية تغذية سريرية وحميات في الأردن. أقدم استشارات
        تغذية وخططًا غذائية شخصية تنطلق من حياتك اليومية لتبني عادات متوازنة،
        دون حرمان أو تعقيد.
      </p>
      <div className="hero-actions">
        <a className="btn btn-hero-primary" href="#contact">
          ابدأ رحلتك الصحية <span aria-hidden="true">↗</span>
        </a>
        <a className="btn btn-hero-secondary" href="#services">
          اكتشف خدماتي <span aria-hidden="true">←</span>
        </a>
      </div>
      <div className="hero-points">
        <span>خطط شخصية</span>
        <span>متابعة مرنة</span>
        <span>استشارات أونلاين</span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-emblem">
        <Image
          src="/images/logo/logo-c.png"
          alt="شعار فاطمة محمد المستوحى من غصن الزيتون"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="hero-signature">
        <span lang="en" dir="ltr">
          Fatima Mohammad
        </span>
        <small>جذور صحية. حياة متوازنة.</small>
      </div>
      <span className="hero-side-note" lang="en" dir="ltr">
        NOURISH · GROW · FLOURISH
      </span>
    </div>
    <div className="hero-bottom">
      <span lang="en" dir="ltr">
        NUTRITION, NATURALLY.
      </span>
      <a href="#about">
        تعرّف عليّ <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
);
export default HeaderSection;
