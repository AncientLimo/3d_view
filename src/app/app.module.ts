import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLight, NgtPointLightModule, NgtSpotLight, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ObjectLoader } from 'three';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    NgtSpotLightModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
