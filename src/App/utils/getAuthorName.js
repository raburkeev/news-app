export function getAuthorName(id, list) {
    return list.find(el => el.id === id).name
}
