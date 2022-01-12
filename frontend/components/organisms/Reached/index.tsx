import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem desc1="290M+" desc2="Players Top Up" />
          <ReachedItem desc1="12.500" desc2="Games Available" />
          <ReachedItem desc1="99,9%" desc2="Happy Players" />
          <ReachedItem desc1="4.7" desc2="Rating Worldwide" isLast />
        </div>
      </div>
    </section>
  );
}
