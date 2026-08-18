"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <section className="app-state">
      <h1>حدث خطأ غير متوقع</h1>
      <p>تعذر تحميل الصفحة بشكل صحيح. يمكنك المحاولة مرة أخرى.</p>
      <button className="btn btn-success px-4 py-3 text-white" onClick={reset}>
        إعادة المحاولة
      </button>
    </section>
  );
};

export default ErrorPage;
