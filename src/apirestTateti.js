import Tateti from "./tateti";



export async function loadTateti(){
    try {
        const res = await axios.get(environment.backendUrl + "/encontrartabla/" + idtabla);
        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err)
    }
}