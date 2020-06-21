export const randomId = () =>
    Math.floor(Math.random() * 10000);

export const roll20 = () =>
    Math.floor(Math.random() * 20) + 1;
    
export const updateListElement = (list, elementID, key, value) => {
    const listCpy = list.slice(0);
    const index = list.findIndex(el => el.id === elementID);
    listCpy[index][key] = value;
    return listCpy;
}