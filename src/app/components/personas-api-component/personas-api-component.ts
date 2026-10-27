import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit{
  public personas!:Array<Persona>;
  constructor(private _cdr:ChangeDetectorRef,private _service:ServicePersonas) {
  }



  async ngOnInit(): Promise<void> {
    this._service.getPersonas().subscribe( {
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener las personas:', error);
      }
    })
    

/*    try{
      this.personas=await this._service.getPersonasAsync();
    this._cdr.detectChanges();
    
    }catch(error){
      console.error('Error al obtener las personas:', error);
    }*/
    /*
    //Si devolvemos una promesa con la peticion , nos subscribimos a su promesa
    this._service.getPeronasPromesa().then((response)=>{
      this.personas=response;
      this._cdr.detectChanges();
    })
  }
*
  //Si devolvemos un Observable  con la peticion , nos subscribimos a su promesa 
/*
    this._service.getPersonas().subscribe((response) => {
      console.log(response);
      this.personas=response;
      this._cdr.detectChanges();
    });
}
    */
  
  
    
}

}
