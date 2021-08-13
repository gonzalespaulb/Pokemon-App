
export const Badge = ({ badge }) => {

  let percentComplete = badge?.currentProgress * (100 / badge?.progressTarget);

  const progress = {
    width: `${percentComplete}%`,
  }

  return (
   
    <div className="badge">

      <div className="badge-icon">
        <img className="badge-img" src={badge?.icon} alt={badge?.name} />
      </div>

      <div className="badge-info">
        <div className="badge-name">
          <h4>{badge?.name}</h4>
        </div>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={progress}></div>
          </div>
          <div className="progress-percentage">
                <h4 className="percent-complete">{`${percentComplete}%`}</h4>
          </div>
        </div>
      </div>
      <div className="badge-overlay">
          <p>{badge.description}</p>
      </div>

    </div>
  );
}; 
