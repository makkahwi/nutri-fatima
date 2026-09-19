import PageSection from "@/components/PageSection";
import Link from "next/link";
import { pediaArticles } from "@/data/pedia";

const JoinMeSection = () => {
  return (
    <PageSection title="موسوعة التغذية الصحية" color="light" id="pedia">
      <div className="col-md-12 mb-4">
        <h5 className="text-block text-justify section-lead">
          أدلة عربية مبسّطة وموثقة تساعدك على فهم التغذية واتخاذ خيارات عملية،
          بعيداً عن المبالغات وقوائم الممنوعات.
        </h5>
      </div>
      <div className="col-md-12"><div className="pedia-preview-grid">
        {pediaArticles.slice(0, 3).map(article => <article className="pedia-preview" key={article.slug}><small>{article.category}</small><h3>{article.title}</h3><p>{article.description}</p><Link href={`/pedia/${article.slug}`}>اقرأ الدليل ←</Link></article>)}
      </div><div className="text-center mt-5"><Link href="/pedia" className="btn btn-success pedia-all-link">تصفح الموسوعة كاملة</Link></div>
      </div>
    </PageSection>
  );
};

export default JoinMeSection;
