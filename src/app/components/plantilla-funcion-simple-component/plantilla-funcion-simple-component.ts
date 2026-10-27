import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})


export class PlantillaFuncionSimpleComponent implements OnInit {

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

    

}
