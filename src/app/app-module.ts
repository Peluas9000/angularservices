import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CocheApiComponents } from './components/coche-api-components/coche-api-components';
import { ServiceCoches } from './services/service.coches';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { ServicePlantillas } from './services/service.plantillas';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    MenuComponent,
    PersonasApiComponent,
    CocheApiComponents,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas,
  ],
  bootstrap: [App],
})
export class AppModule {}
