export class BookModel {
    constructor(
        public id_libro: number,
        public titulo: string,
        public autores: string,
        public lanzamiento: Date,
        public editorial: string,
        public paginas: number,
        public descripcion: string,
        public cantidad: number,
        public id_genero: number
    ){}
}