const NotFoundPage = () => {
  return (
    <section className="app-state">
      <h1>الصفحة غير موجودة</h1>
      <p>الرابط الذي تحاول الوصول إليه غير متاح.</p>
      <a className="btn btn-success px-4 py-3 text-white" href="/">
        العودة للرئيسية
      </a>
    </section>
  );
};

export default NotFoundPage;
