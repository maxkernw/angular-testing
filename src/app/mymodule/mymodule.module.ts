import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { MyModuleConfig } from './mymodule.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureComponent],
  exports: [FeatureComponent],
  providers: [{ provide: MyModuleConfig, useValue: {
    prefix: 'Default Prefix'
  }}]
})
export class MymoduleModule { }
