export function flatObject(obj) {
  function flat(o) {
    return Object.entries(o).flatMap(([key, val]) => {
      if (typeof val === "object" && val !== null) return flat(val);

      return [[key, val]];
    });
  }

  return Object.fromEntries(flat(obj));
}
