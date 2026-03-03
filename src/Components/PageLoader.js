function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="page-loader-spinner" aria-hidden="true"></div>
      <p className="page-loader-text">Loading page...</p>
    </div>
  );
}

export default PageLoader;
