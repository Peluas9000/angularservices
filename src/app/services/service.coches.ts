import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Coche } from "../models/coche";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { }

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request="webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url+request));
    }
    
}