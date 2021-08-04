import ProgressBar from "@ramonak/react-progress-bar";

export const Badge = ({ badge }) => {
  return (
    <div>
      <h4>{badge.name}</h4>
      <img src={badge.icon} />
      <ProgressBar completed={badge.currentProgress * 100} />
    </div>
  );
};
