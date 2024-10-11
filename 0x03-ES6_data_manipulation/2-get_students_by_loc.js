/**
 * Return an array of objects who are located in a specific location
 */
export default function getStudentsByLocation(stdnts, city) {
  if (stdnts instanceof Array) {
    return stdnts.filter((stdt) => stdt.location === city);
  }
  return [];
}
