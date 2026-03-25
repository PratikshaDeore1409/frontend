function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-busy="true">
      <span className="visually-hidden">Loading page...</span>

      <div className="skeleton skeleton-hero" aria-hidden="true" />

      <div className="page-loader-grid" aria-hidden="true">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line skeleton-line-short" />

        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
      </div>
    </div>
  );
}

export default PageLoader;
