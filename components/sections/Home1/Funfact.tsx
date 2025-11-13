'use client';

import CounterUp from '../../elements/CounterUp';

export default function Funfact() {
  const counters = [
    { id: 1, end: 20, label: 'Projects' },
    { id: 2, end: 10, label: 'People' },
    { id: 3, end: 40, label: 'Years' },
    { id: 4, end: 30, label: 'Award Winner' },
  ];

  return (
    <section className="funfact-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: 'url(/images/icons/bg-shape2.png)' }}
      ></div>
      <div className="container">
        <div className="fact-counter">
          <div className="row">
            {counters.map((counter) => (
              <div key={counter.id} className="counter-block-one col-lg-3 col-sm-6">
                <div className="inner-box">
                  <div className="count-box">
                    <span className="count-text">
                      <CounterUp end={counter.end} />
                    </span>
                  </div>
                  <div className="counter-text">{counter.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


