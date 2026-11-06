interface FooterProps {
  pendingCount: number;
  onReviewRequests: () => void;
}

function Footer({ pendingCount, onReviewRequests }: FooterProps) {
  return (
    <>
      <section className="mx-auto mt-4 flex max-w-[1500px] flex-col items-start justify-between gap-3 rounded-xl bg-sage-light px-4 py-4 sm:flex-row sm:items-center sm:px-5 lg:ml-[292px] lg:mr-7">
        <div>
          <p className="text-sm font-semibold text-forest">
            {pendingCount} request{pendingCount === 1 ? "" : "s"} waiting for review.
          </p>
          <p className="mt-1 text-xs text-muted">Check office needs and available stock before approval.</p>
        </div>
        <button onClick={onReviewRequests} className="rounded-lg bg-forest px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-forest-dark">
          Review requests
        </button>
      </section>
      <footer className="mx-auto mt-5 max-w-[1500px] px-4 pb-6 text-xs text-muted sm:px-7 lg:ml-[292px] lg:px-7">
        CBSUA Sipocot · Supply Office
      </footer>
    </>
  );
}

export default Footer;
