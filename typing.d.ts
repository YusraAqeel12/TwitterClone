import { ImageLoaderProps } from "next/image"

export interface tweet extends tweetBody{
    _id : number , 
    _createdAt : string , 
    _updatedAt : string ,
    _type : 'tweet'
}

export interface tweetBody {
    text : string 
    username : string 
    profileimg : any
    img? : any

}