module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return (
    members.map((elem) => {
    if (typeof elem === 'string') return elem.trim()[0].toUpperCase();}).sort().join(''));
  };