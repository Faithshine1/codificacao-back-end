import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from "@nestjs/common";
import { ProdutoService  } from "./produtos.service.js";

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly ProdutosService: ProdutoService){}

    produtos(){
         return this.ProdutosService.listarProdutos();
    }

    private readonly logger = new Logger(ProdutosController.name);

    @Get(':id')
    idProduto(@Param('id') idProd: string){
        const id = Number(idProd);

        if(isNaN(id)){
        this.logger.warn(`Tentativa de acesso busca com ID não numérico: ${idProd}`);
        throw new BadRequestException('ID Inválido. Deve ser um número inteiro!');
        }
        const produto = this.produtos().find((produto)=> produto.id === id);
        if(!produto){
            this.logger.warn(`Produto com Id ${id} não encontrado.`)
            throw new NotFoundException(`Produto com ID ${id} não localizado.`)
        }
        return produto;
    }
}