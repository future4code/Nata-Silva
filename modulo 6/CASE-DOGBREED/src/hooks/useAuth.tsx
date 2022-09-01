
export const UseAuth = () => {
    const token = localStorage.getItem("token")

    const headers = {
        headers: { Authorization: token as string}
    }

    return headers
}

