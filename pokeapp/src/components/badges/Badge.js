import ProgressBar from "@ramonak/react-progress-bar";

export const Badge = ({ badge }) => {

  let percentComplete = badge.currentProgress*(100/badge.progressTarget);

  return (
    <div>
      <h4>{badge.name}</h4>
      <img src={badge.icon} />
      <ProgressBar completed={percentComplete} />
    </div>
  );
};
