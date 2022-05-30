export class LendModel {
    constructor(
        public id_usuario: number,
        public id_libro:number,
        public fecha_retorno: Date,
        public nota: string
    ){}
}