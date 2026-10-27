import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";
import { Plantilla } from "../models/plantilla";


@Injectable()
export class ServicePlantillas {
    constructor(private _http: HttpClient) { }

    async getFunciones():Promise<string[]>{
        let url=environment.urlApiPlantillas;
        let request ="api/plantilla/funciones";
        return firstValueFrom(this._http.get<string[]>(url+request));
    }

    async getEmpleadosAsync(funcion: string):Promise<Plantilla[]>{
        let url=environment.urlApiPlantillas;
        let request ="/api/Plantilla/PlantillaFuncion/"+funcion;
        return firstValueFrom(this._http.get<Plantilla[]>(url+request));
    }

    async getPlantillaFunciones(funciones:Array<string>):Promise<Plantilla[]>{
        let content="";
        for(let fun of funciones){
            content+="funcion="+fun+"&";
        }
        content=content.substring(0,content.length-1);
        let url=environment.urlApiPlantillas;
        let request ="/api/Plantilla/PlantillaFunciones?"+content;
        return firstValueFrom(this._http.get<Plantilla[]>(url+request));
    }
}