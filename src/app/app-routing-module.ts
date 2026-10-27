import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CocheApiComponents } from './components/coche-api-components/coche-api-components';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

const routes: Routes = [
  {
    path: 'comics',
    component: ComicsComponent
  },
  {path:"personas",component:PersonasApiComponent},
  {path:"coches",component:CocheApiComponents},
  {path:"plantillas",component:PlantillaFuncionSimpleComponent},
  {path:"plantillas-multiple",component:PlantillaFuncionMultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
