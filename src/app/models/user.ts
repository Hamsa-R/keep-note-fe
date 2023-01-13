export type User ={
    firstName?:string,
    lastName?:string,
    email?:string,
    password?:string,
    confirmPassword?:string,
    gender?:string,
    age?:number,
    phone?:number,
    address?:{
        street?:string,
        city?:string,
        state?:string,
        zip?:string}
    
}