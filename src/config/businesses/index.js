import clinicConfig from './clinic';
import salonConfig from './salon';
import gymConfig from './gym';
import coachingConfig from './coaching';
import consultingConfig from './consulting';
import restaurantConfig from './restaurant';
import realEstateConfig from './realEstate';
import dentalClinicConfig from './dentalClinic';

export {
  clinicConfig,
  salonConfig,
  gymConfig,
  coachingConfig,
  consultingConfig,
  restaurantConfig,
  realEstateConfig,
  dentalClinicConfig
};

export const businessPresets = {
  clinic: clinicConfig,
  salon: salonConfig,
  gym: gymConfig,
  coaching: coachingConfig,
  consulting: consultingConfig,
  restaurant: restaurantConfig,
  realEstate: realEstateConfig,
  'dental-clinic': dentalClinicConfig
};

export default businessPresets;
