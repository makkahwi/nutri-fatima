import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarComp from "@/sections/Navbar";
import FooterSection from "@/sections/Footer";
import { getPediaArticle, pediaArticles } from "@/data/pedia";

type Props = { params: { slug: string } };

export function generateStaticParams() { return pediaArticles.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const article = getPediaArticle(params.slug);
  if (!article) return {};
  return { title: `${article.title} | موسوعة التغذية الصحية`, description: article.description, alternates: { canonical: `/pedia/${article.slug}` }, openGraph: { title: article.title, description: article.description, type: "article", locale: "ar_JO" } };
}

export default function ArticlePage({ params }: Props) {
  const article = getPediaArticle(params.slug);
  if (!article) notFound();
  const related = pediaArticles.filter(item => item.slug !== article.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, inLanguage: "ar", dateModified: "2026-09-19", author: { "@type": "Person", name: "فاطمة محمد" }, publisher: { "@type": "Person", name: "فاطمة محمد" }, mainEntity: article.faq.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <>
    <NavbarComp />
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="article-header"><div className="article-shell">
        <nav className="breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/pedia">الموسوعة</Link><span>/</span><span>{article.category}</span></nav>
        <p className="pedia-kicker">{article.category}</p><h1>{article.title}</h1><p className="article-deck">{article.description}</p>
        <div className="article-byline"><span>إعداد: فاطمة محمد</span><span>{article.readingTime}</span><span>آخر مراجعة: {article.reviewedAt}</span></div>
      </div></header>
      <div className="article-shell article-layout"><article className="article-body">
        <p className="article-intro">{article.intro}</p>
        <aside className="takeaway"><span>الخلاصة</span><p>{article.takeaway}</p></aside>
        {article.sections.map(section => <section id={section.heading} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
        <section className="article-faq"><p className="pedia-kicker">أسئلة شائعة</p><h2>إجابات مختصرة</h2>{article.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
        <section className="article-sources"><p className="pedia-kicker">المراجع</p><h2>المصادر المستخدمة</h2><ol>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a><span>{source.publisher}</span></li>)}</ol><p className="source-note">تم الاطلاع على المصادر في 19 سبتمبر 2026. صيغ المحتوى بالعربية للتثقيف ولم يُنقل ترجمةً حرفية.</p></section>
      </article><aside className="article-sidebar"><div><strong>في هذا الدليل</strong>{article.sections.map(section => <a key={section.heading} href={`#${section.heading}`}>{section.heading}</a>)}</div><p>هذه المعلومات عامة ولا تستبدل تشخيص الطبيب أو خطة اختصاصي التغذية.</p></aside></div>
      <section className="article-related"><div className="article-shell"><p className="pedia-kicker">أكمل القراءة</p><h2>موضوعات مرتبطة</h2><div className="related-grid">{related.map(item => <Link href={`/pedia/${item.slug}`} key={item.slug}><small>{item.category}</small><strong>{item.title}</strong><span>اقرأ المقال ←</span></Link>)}</div></div></section>
    </main>
    <FooterSection />
  </>;
}
