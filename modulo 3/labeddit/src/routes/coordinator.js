
export const irParaLogin = (navigate) => {
    navigate("/")
}

export const irPraCadastro = (navigate) => {
    navigate("/cadastro")
}

export const irPraFeed = (navigate) => {
    navigate("/feed")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/feed/post/${id}`)
}

export const voltar = (navigate) => {
    navigate(-1)
}