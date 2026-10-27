import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit{
  

    arrayFunciones:Array<string>;
    arrayPlantilla:Array<Plantilla>;
    @ViewChild('selectFuncion') selectFuncion!:ElementRef;
    
    constructor(private _cdr:ChangeDetectorRef,private _service:ServicePlantillas ){
        this.arrayFunciones=new Array<string>();
        this.arrayPlantilla=new Array<Plantilla>();
    
    }

    async gente():Promise<void>{

        this.arrayPlantilla= await this._service.getEmpleadosAsync(this.selectFuncion.nativeElement.value);
        this._cdr.detectChanges();
        
    }
    async ngOnInit(): Promise<void> {
        this.arrayFunciones=await this._service.getFunciones();
        this._cdr.detectChanges();
        
    }

    async mostrarPlantilla():Promise<void>{
    let aux =[];
    for (let opcion of this.selectFuncion.nativeElement.selectedOptions) {
      if(opcion.selected){
        aux.push(opcion.value);
      }
      this.arrayPlantilla=await this._service.getPlantillaFunciones(aux);
      this._cdr.detectChanges();
    }
    }

    


}
