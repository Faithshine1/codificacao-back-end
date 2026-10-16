import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CriarProdutoDTO } from "./dto/criar-produto.dto.js";

@ApiTags('Produtos')
@Controller('Produtos')
export class ProdutosController {
    @Post()
    @ApiOperation({
        summary:'Cadastrar um novo produto no catálogo'
    })
    @ApiResponse({
        status:201, description: 'Produto Cadastrado com sucesso'
    })
    @ApiResponse({
        status:400, description: 'Playload enviado com dados inválidos'
    })
    async criar(@Body() CriarProdutoDTO: CriarProdutoDTO){
        return{
            id: 150,
            ...CriarProdutoDTO,
            criadoEm: new Date().toLocaleDateString(),
        };
    }

}