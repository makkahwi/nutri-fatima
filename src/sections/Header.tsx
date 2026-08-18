const HeaderSection = () => {
  return (
    <section className="hero-section justify-content-center">
      <div className="hero-copy">
        <span className="hero-kicker">تغذية علاجية بخطة واقعية</span>

        <h1 className="hero-title">فاطمة محمد</h1>

        <p className="hero-subtitle">
          أخصائية تغذية سريرية وحميات تساعدك على بناء نمط غذائي يناسب صحتك،
          يومك، وأهدافك دون حرمان أو تعقيد.
        </p>

        <div className="hero-actions">
          <a className="btn btn-hero-primary" href="#contact">
            ابدأ رحلتك الصحية
          </a>

          <a className="btn btn-hero-secondary" href="#services">
            تعرّف على الخدمات
          </a>
        </div>

        <div className="hero-points">
          <span>خطط شخصية</span>
          <span>متابعة مرنة</span>
          <span>استشارات أونلاين</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
