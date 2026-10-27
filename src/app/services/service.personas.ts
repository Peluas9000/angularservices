import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    //debemos recibir l objeto del HttpClient en el constructor 
    constructor(private _http: HttpClient) { }
   //TENEMOS DOS OPCIONES PARA TRABAJAR 
   //DEVOLVER LA PETICION O DEVOLVER UNA PROMESA 
   
   //DEVOLVEMOS LA PETICION A MLA LLAMADA UTILIZANDO Observable 
    getPersonas():Observable<any>{  
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);

    }

    //DEVOLVEMOS UNA PROMESA A LA LLAMADA UTILIZANDO PROMISE
    getPeronasPromesa():Promise<any>{
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise=new Promise((resolve)=>{
            this._http.get(urlApi).subscribe((response)=>{
                resolve(response);
            })
        });
        return promise;
    }



    getPersonasAsync():Promise<Persona[]>{
    let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
    return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }
    
}