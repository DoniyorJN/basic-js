const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNumber = parseFloat(sampleActivity);

  if (!sampleActivity 
    || !isFinite(sampleActivityNumber)
    || typeof(sampleActivity) !== 'string' 
    || (sampleActivityNumber >= MODERN_ACTIVITY)
    || (sampleActivityNumber <= 0)
    ) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
};
