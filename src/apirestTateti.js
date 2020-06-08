<<<<<<< HEAD
// import Tateti from "./tateti";



// export async function loadTateti(){
//     try {
//         const res = await axios.get(environment.backendUrl + "/encontrartabla/" + idtabla);
//         return Promise.resolve(res.data);
//     } catch (err) {
//         console.log(err)
//     }
// }
=======
import Tateti from "./tateti";



export async function loadTateti(){
    try {
        const res = await axios.get(environment.backendUrl + "/encontrartabla/" + idtabla);
        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err)
    }
}
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
