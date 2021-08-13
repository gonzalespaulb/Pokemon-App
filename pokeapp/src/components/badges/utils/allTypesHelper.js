import { toaster } from "../../../utilities/toast";

export const updateBadgeProgress = (badge, payload, type, count) => {

    let updatedBadge = Object.assign({}, badge);

  if (updatedBadge.currentProgress !== updatedBadge.progressTarget) {

    if (
        payload.types.length > 1
        ? payload.types[0].type.name === type ||
        payload.types[1].type.name === type
        : payload.types[0].type.name === type
    ) {

      switch (count+1) {
        case 10:
            updatedBadge.objectives.tenOwned = true;
          break;
        case 20:
            updatedBadge.objectives.twentyOwned = true;
          break;
        case 30:
            updatedBadge.objectives.thirtyOwned = true;
          break;
        case 40:
            updatedBadge.objectives.fortyOwned = true;
          break;
        case 50:
            updatedBadge.objectives.fiftyOwned = true;
          break;
        case 60:
            updatedBadge.objectives.sixtyOwned = true;
          break;
        case 70:
            updatedBadge.objectives.seventyOwned = true;
          break;
        case 80:
            updatedBadge.objectives.eightyOwned = true;
          break;
        case 90:
            updatedBadge.objectives.ninetyOwned = true;
          break;
        case 100:
            updatedBadge.objectives.hundredOwned = true;
          break;
        default:
          break;
      } //End switch

      if (updatedBadge.objectives.tenOwned) {
        updatedBadge.currentProgress = 1;
      }
      if (updatedBadge.objectives.twentyOwned) {
        updatedBadge.currentProgress = 2;
      }
      if (updatedBadge.objectives.thirtyOwned) {
        updatedBadge.currentProgress = 3;
      }
      if (updatedBadge.objectives.fortyOwned) {
        updatedBadge.currentProgress = 4;
      }
      if (updatedBadge.objectives.fiftyOwned) {
        updatedBadge.currentProgress = 5;
      }
      if (updatedBadge.objectives.sixtyOwned) {
        updatedBadge.currentProgress = 6;
      }
      if (updatedBadge.objectives.seventyOwned) {
        updatedBadge.currentProgress = 7;
      }
      if (updatedBadge.objectives.eightyOwned) {
        updatedBadge.currentProgress = 8;
      }
      if (updatedBadge.objectives.ninetyOwned) {
        updatedBadge.currentProgress = 9;
      }
      if (updatedBadge.objectives.hundredOwned) {
        updatedBadge.currentProgress = 10;
        toaster(badge.name);
      }
    }
  }
  return({updatedBadge, count: count+1}); 
};
