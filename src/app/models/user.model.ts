export class UserModel {
    constructor(
        public id_usuario: number,
        public nombres: string,
        public apellidos: string,
        public telefono: string,
        public direccion: string,
        public sexo: string,
        public edad: string,
        public username: string,
        public contrasenia: string,
        public email: string,
        public roll: string,
        public id_grado: number
    ){}
}