import prisma from "../../../config/index";
import conexao from "../../../config/index";

export const userRepository = {
 
    async findAll(){
        try {
            const users = await conexao.user.findMany({
                include:{
                    perfil:true,
                }
            })
            return users
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    },
    async create(data: any){
        try {
            const user = await prisma.user.create({data})
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`); 
        }
    }

}