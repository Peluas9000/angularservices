import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { Observable } from "rxjs";

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

}