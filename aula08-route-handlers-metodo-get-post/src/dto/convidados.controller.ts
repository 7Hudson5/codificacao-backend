import { Controller, Get, Post, Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidado.dto.js";

@Controller('convidados')
export class ConvidadosController{
    
    @Get()
    listarConvidados(){
        return ['amanda' , 'davi', 'adam', 'gabrielly', 'yuri']
    }

    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto){
        console.log(`[porteiro digital] novo convidado recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} adicionado com sucesso!`,
            dados: CriarConvidadoDto,
        };
    }
}