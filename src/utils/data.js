/**
 * Filtra los elementos en newItems para actualizar currentItems sólo con aquellos
 * que son nuevos.
 * @param {Array} currentItems El arreglo con los elementos actuales.
 * @param {Array} newItems El arreglo con todos los elementos.
 */
const getWithoutDuplicates = (currentItems, newItems) => {
  let nonDuplicates = [];
  newItems.forEach((item) => {
    if (currentItems.findIndex((_item) => _item.id === item.id) === -1) {
      nonDuplicates.push(item);
    }
  });
  return nonDuplicates;
};

export { getWithoutDuplicates }
