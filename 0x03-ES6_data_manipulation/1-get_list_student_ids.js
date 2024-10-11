/**
 * Returns an array of ids from a list of object
 */
export default function getListStudentsIds(students) {
  if (students instanceof Array) {
    return students.map((std) => std.id);
  }
  return [];
}
