export class User {
    constructor(
        public _id: number = Math.floor(Math.random()*100),
        public name: string = "",
        public picture : string = "",
        public _age: number,
        public breed: string = "",
        public location: string = ""
    ){   
    }
}
