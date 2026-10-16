import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDTO {
    @ApiProperty({
        example: 'Pasta de dente Sorriso',
        description: 'Nome comercial do Produto cadastrado',
    })
    nome: string;

    @ApiProperty({
        example: 5.99,
        description: 'Preço unitário de venda',
    })
    preco: number;

    @ApiProperty({
        example: 'Higiênico',
        description: 'Categoria a qual o produto pertence.',
    })
    categoria: string;
}