import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";
@Injectable()
export class ServiceComics {

    getComics():Promise<Array<Comic>>{
    let path="./assets/comics.json";
   return fetch(path)
    .then(response => response.json())
    .then((data:any[] ) => {
        let arrayComics=[];

      for(let element of data){
        //creamos un comic de angular
        let comic:Comic=new Comic(element.nombre,element.imagen,element.descripcion);
       
        arrayComics.push(comic);
      }
      return arrayComics;

    }) 
    }

    async getComicsAsync():Promise<Array<Comic>>{
    let path="./assets/comics.json";
    let response=await fetch(path);
    let data=await response.json();
    let arrayComics:Array<Comic>=[];
    
      for(let element of data){
        //creamos un comic de angular
        let comic:Comic=new Comic(element.nombre,element.imagen,element.descripcion);
       
        arrayComics.push(comic);
      }
      return arrayComics;

    }
}