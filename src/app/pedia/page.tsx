import type { Metadata } from "next";
import Link from "next/link";
import NavbarComp from "@/sections/Navbar";
import FooterSection from "@/sections/Footer";
import { pediaArticles } from "@/data/pedia";

export const metadata: Metadata = {
  title: "موسوعة التغذية الصحية العربية | فاطمة محمد",
  description:
    "مقالات عربية موثقة وعملية عن التغذية المتوازنة، تخطيط الوجبات، السعرات، الملصقات الغذائية ومصادر البروتين.",
  alternates: { canonical: "/pedia" },
  openGraph: {
    title: "موسوعة التغذية الصحية",
    description: "معلومة واضحة، عملية، ومرتبطة بمصادرها الأصلية.",
    type: "website",
    locale: "ar_JO",
  },
};

export default function PediaPage() {
  const categories = Array.from(
    new Set(pediaArticles.map((article) => article.category)),
  );
  return (
    <>
      <NavbarComp />
      <main className="pedia-page">
        <header className="pedia-hero">
          <div className="pedia-shell">
            <nav className="breadcrumbs" aria-label="مسار الصفحة">
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <span>الموسوعة</span>
            </nav>
            <p className="pedia-kicker">موسوعة التغذية الصحية</p>
            <h2>معلومة تغذوية واضحة، تصلح للحياة اليومية.</h2>
            <p>
              نشرح الأساسيات بلغة عربية بسيطة، ونربط كل موضوع بمراجعه الأصلية.
              لا قوائم ممنوعات ولا وعود سريعة؛ فقط خطوات قابلة للتطبيق.
            </p>
            <div className="pedia-trust">
              <span>مراجع موثوقة</span>
              <span>مراجعة دورية</span>
              <span>{pediaArticles.length} أدلة عملية</span>
            </div>
          </div>
        </header>
        <section
          className="pedia-shell pedia-content"
          aria-labelledby="articles-title"
        >
          <div className="pedia-heading">
            <div>
              <p className="pedia-kicker">ابدأ من هنا</p>
              <h2 id="articles-title">موضوعات الموسوعة</h2>
            </div>
            <p>
              اختر الموضوع الأقرب لسؤالك. صُممت المقالات لتُقرأ مستقلة، مع روابط
              تقودك إلى الموضوع التالي.
            </p>
          </div>
          <div className="category-row" aria-label="تصنيفات الموسوعة">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="pedia-grid">
            {pediaArticles.map((article, index) => (
              <article className="pedia-card" key={article.slug}>
                <span className="pedia-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pedia-card-meta">
                  {article.category} · {article.readingTime}
                </p>
                <h2>
                  <Link href={`/pedia/${article.slug}`}>{article.title}</Link>
                </h2>
                <p>{article.description}</p>
                <Link
                  className="pedia-card-link"
                  href={`/pedia/${article.slug}`}
                >
                  اقرأ الدليل <span aria-hidden="true">←</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <aside className="pedia-shell editorial-note">
          <strong>كيف نكتب؟</strong>
          <p>
            نحوّل الإرشادات العامة من الجهات الصحية والغذائية الموثوقة إلى شرح
            عربي أصيل، ونضع المصادر وتاريخ المراجعة بوضوح. المحتوى للتثقيف ولا
            يغني عن التقييم الفردي.
          </p>
        </aside>
      </main>
      <FooterSection />
    </>
  );
}
