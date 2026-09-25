import React, { useEffect, useState } from 'react';

const stages = [
  { key: 'generate', label: 'Data generation', detail: 'Orders, stores, drivers, bundles' },
  { key: 'predict', label: 'Prediction service', detail: 'Features into XGBoost inference' },
  { key: 'monitor', label: 'Drift monitoring', detail: 'KS and PSI checks' },
];

const sampleOrders = [
  { id: 'ORD-8F21', city: 'Seattle', minutes: 34 },
  { id: 'ORD-8F22', city: 'Austin', minutes: 28 },
  { id: 'ORD-8F23', city: 'Cincinnati', minutes: 41 },
  { id: 'ORD-8F24', city: 'Seattle', minutes: 37 },
];

function DeliveryMlShowcase() {
  const [run, setRun] = useState(0);
  const [drift, setDrift] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [run]);

  const replay = () => {
    setRun((current) => current + 1);
    setActiveStage(0);
  };

  return (
    <div className="delivery-showcase" aria-label="Animated grocery delivery machine learning pipeline">
      <div className="delivery-showcase__topline">
        <div>
          <span className="eyebrow">LIVE-STYLE PIPELINE</span>
          <h3>From simulated orders to model health</h3>
        </div>
        <div className={`pipeline-status ${drift ? 'pipeline-status--warning' : ''}`}>
          <span className="status-dot" />
          {drift ? 'Drift review' : 'Model healthy'}
        </div>
      </div>

      <div className="pipeline-track">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.key}>
            <div className={`pipeline-stage ${activeStage === index ? 'pipeline-stage--active' : ''}`}>
              <span className="pipeline-stage__number">0{index + 1}</span>
              <strong>{stage.label}</strong>
              <small>{stage.detail}</small>
            </div>
            {index < stages.length - 1 && <span className="pipeline-arrow" aria-hidden="true">-&gt;</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="delivery-showcase__grid">
        <div className="telemetry-panel">
          <div className="panel-heading">
            <span>Run {String(run + 1).padStart(2, '0')}</span>
            <span className="panel-meta">seed: 42</span>
          </div>
          <div className="metric-row"><span>Orders generated</span><strong>1,250</strong></div>
          <div className="metric-row"><span>Predictions returned</span><strong>1,214</strong></div>
          <div className="metric-row"><span>Mean estimate</span><strong>34.6 min</strong></div>
          <div className="metric-row"><span>Drift tests flagged</span><strong className={drift ? 'warning-text' : ''}>{drift ? '6 / 18' : '0 / 18'}</strong></div>
          <div className="sparkline" aria-hidden="true">
            {[38, 46, 42, 58, 51, drift ? 82 : 60, drift ? 92 : 67, drift ? 74 : 64].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="orders-panel">
          <div className="panel-heading"><span>Recent predictions</span><span className="panel-meta">/predict/batch</span></div>
          {sampleOrders.map((order, index) => (
            <div className="order-row" key={order.id} style={{ animationDelay: `${index * 90}ms` }}>
              <span className="order-id">{order.id}</span>
              <span>{order.city}</span>
              <strong>{order.minutes + (drift ? index : 0)} min</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-controls">
        <button type="button" onClick={replay}>Replay pipeline</button>
        <button type="button" className="control-secondary" onClick={() => setDrift((current) => !current)}>
          {drift ? 'Clear drift signal' : 'Simulate drift'}
        </button>
        <span className="showcase-caption">XGBoost + SQLite + MLflow</span>
      </div>
    </div>
  );
}

export default DeliveryMlShowcase;
