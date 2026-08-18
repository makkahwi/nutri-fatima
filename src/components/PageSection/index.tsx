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
  color = "white",
  title,
  aboveTitle,
  noMinHeight,
  id,
}: props) => {
  return (
    <div
      className={`page-section row bg-${color} justify-content-center ${
        noMinHeight ? "page-section--compact" : ""
      }`}
      id={id}
    >
      {aboveTitle}

      {title && (
        <div className="col-12">
          <h1 className="section-title text-center text-success">{title}</h1>
        </div>
      )}

      {children}
    </div>
  );
};

export default PageSection;
