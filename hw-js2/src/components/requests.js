export function get(url) {
    return fetch(url).then(d => d.json())
}
export function postJson(url, data) {
    return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(result => result.json())
        .catch(error => {
            this.$refs.error.setError(error);
        });
}
export function putJson(url, data) {
    return fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(result => result.json())
        .catch(error => {
            this.$refs.error.setError(error);
        });
}
export function deleteJson(url) {
    return fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(result => result.json())
        .catch(error => {
            this.$refs.error.setError(error);
        });
}