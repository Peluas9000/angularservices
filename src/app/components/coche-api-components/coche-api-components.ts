import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-coche-api-components',
  standalone: false,
  styleUrl: './coche-api-components.css',
  templateUrl: './coche-api-components.html',
})
export class CocheApiComponents implements OnInit{
public arrayCoches!:Array<Coche>;

constructor(private _cdr:ChangeDetectorRef,private _service:ServiceCoches) {

}



 
    async ngOnInit(): Promise<void> {
      this.arrayCoches=await this._service.getCochesAsync();
      this._cdr.detectChanges();
    }

}
