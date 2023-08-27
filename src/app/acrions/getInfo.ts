export function getInfo(url: string) {
    return fetch(`${url}`).then(res => res.json());
}
