import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { File } from '@ionic-native/file';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var scan;


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  dirPath: string;
  defaultDir: string = 'mydoc';
  imageName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  takePick() {
    scan.scanDoc(1, this.onSuccess, this.onFail);
  }

  selectGallery() {
    scan.scanDoc(0, this.onSuccess, this.onFail);
  }

  onSuccess(imageURI) {

    this.imageName =  imageURI.substr(imageURI.lastIndexOf('/') + 1);
    let tempPath = imageURI.substr(0, imageURI.lastIndexOf('/') + 1);

    alert('imageName'+ JSON.stringify(this.imageName) + 'tempPath:'+ JSON.stringify(tempPath));

  //var image = document.getElementById('myImage') as HTMLImageElement;
  /*  if (!this.file.checkDir(this.file.applicationStorageDirectory,this.defaultDir)) {
      let store = this.file.createDir(this.file.applicationStorageDirectory, this.defaultDir, true);
      store.then(data => {
        this.dirPath = data.toURL();
        this.file.readAsDataURL(this.dirPath, imageURI);
      })
    }
    else {
      let store = this.file.createDir(this.file.applicationStorageDirectory, this.defaultDir, true);
      store.then(data => {
        this.dirPath = data.toURL();
        this.file.readAsDataURL(this.dirPath, imageURI);
      })

    }
    //image.src = imageURI;
    */
    //alert('image url: ' + JSON.stringify(imageURI));
  }

  onFail(message) {
    alert('Failed because: ' + message);
  }
/*
  onSuccessgal(imageURI) {
    var image = document.getElementById('myImage') as HTMLImageElement;
    image.src = imageURI;
  }

  onFailgal(message) {
    alert('Failed because: ' + message);
  }
*/
}
