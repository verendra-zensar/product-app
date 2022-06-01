export class Customer {

    constructor(
        public firstname='',
        public lastName='',
        public email ='',
        public sendCatalog =false,
        public address1?:string, //? means optional parmeter
        public address2?:string,
        public state:string=''
    )
    {}
}
