interface props {
  children: React.ReactNode;
  aboveTitle?: React.ReactNode;
  color?: string;
  title?: string;
  noMinHeight?: boolean;
  id?: string;
}

const PageSection = ({
  children = <></>,
  color = "light",
  title,
  aboveTitle,
  noMinHeight,
  id,
}: props) => {
  return (
    <section
      className={`page-section row bg-${color} justify-content-center ${
        noMinHeight ? "page-section--compact" : ""
      }`}
      id={id}
    >
      {aboveTitle}

      {title && (
        <div className="col-12">
          <h2 className="section-title text-center text-success">{title}</h2>
        </div>
      )}

      {children}
    </section>
  );
};

export default PageSection;
