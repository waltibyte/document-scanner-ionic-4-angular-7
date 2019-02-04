import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageviewPage } from './imageview';

@NgModule({
  declarations: [
    ImageviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageviewPage),
  ],
})
export class ImageviewPageModule {}
