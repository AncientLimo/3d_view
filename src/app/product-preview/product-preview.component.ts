import { NgtLight } from '@angular-three/core';
import { NgtPointLightModule } from '@angular-three/core/lights';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit, asNativeElements } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera } from 'three';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  


  SeatMaterial1: MeshStandardMaterial | undefined;
  SeatMaterial2: MeshStandardMaterial | undefined;
  SeatMaterial3: MeshStandardMaterial | undefined;
  SeatMaterial4: MeshStandardMaterial | undefined;
  SeatMaterial5: MeshStandardMaterial | undefined;
  SeatMaterial6: MeshStandardMaterial | undefined;
  color1:string='';
  rotate1:boolean =true;
  control!:NgtSobaOrbitControls;
  flag:string='all';

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  Seat = this.gltfLoaderService.load('assets/CAR_seat6.glb');
 

  SeatLoaded(object: Object3D):void {
    this.SeatMaterial1 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('04_Bottom_seat')).material;
    this.SeatMaterial2 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('05_Bottom_sides')).material;
    this.SeatMaterial3 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('06_Back_seat')).material;
    this.SeatMaterial4 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('07_Seat_back_sides')).material;
    this.SeatMaterial5 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('08_Upper_neck')).material;
    this.SeatMaterial6 = <MeshStandardMaterial>(<Mesh>object.getObjectByName('09_Header')).material; 
    
    this.editAll(this.selectedColor)
    
 
  }
  
  
  editAll(changed: string):void{

    this.SeatMaterial1!.color.setHex(parseInt(changed.substring(1), 16));
    this.SeatMaterial2!.color.setHex(parseInt(changed.substring(1), 16));
    this.SeatMaterial3!.color.setHex(parseInt(changed.substring(1), 16));
    this.SeatMaterial4!.color.setHex(parseInt(changed.substring(1), 16));
    this.SeatMaterial5!.color.setHex(parseInt(changed.substring(1), 16));
    this.SeatMaterial6!.color.setHex(parseInt(changed.substring(1), 16));


  }


  SeatReady(object:Object3D):void{
    console.log(object)

  }


  toggle(control: NgtSobaOrbitControls):void{
    this.rotate1 = !this.rotate1
    const orbitControls = control.controls;
    orbitControls.autoRotate = this.rotate1;
  }

  ngOnInit() {
  }
  orbitControls = undefined;
  
  controlsReady(controls: NgtSobaOrbitControls):void {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 4;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 1.4;
    camera.position.setY(3);
    
  }

  applyColorToMaterial(changed: string):void {
  
console.log(this.flag)

    if(this.flag == 'all'){
      this.editAll(changed)
    }
    if (this.flag=='bottom-seat') {
      this.SeatMaterial1!.color.setHex(parseInt(changed.substring(1), 16));
    }
    if (this.flag=='bottom-sides') {
      this.SeatMaterial2!.color.setHex(parseInt(changed.substring(1), 16));
    }
    if (this.flag=='back-seat') {
      this.SeatMaterial3!.color.setHex(parseInt(changed.substring(1), 16));
    }
    if (this.flag=='seat-back-sides') {
      this.SeatMaterial4!.color.setHex(parseInt(changed.substring(1), 16));
    }
    if (this.flag=='upper-neck') {
      this.SeatMaterial5!.color.setHex(parseInt(changed.substring(1), 16));
    }
    if (this.flag=='header') {
      this.SeatMaterial6!.color.setHex(parseInt(changed.substring(1), 16));
    }

  }

  colors:string[] = [
    '#98958e', '#243D8C', '#992c25', '#7b674f', '#5a1a18', '#a11f2a', 
  ];
  selectedColor = this.colors[0];

  parts:string[] = [
    'Bottom_seat','Bottom_sides','Back_seat','Seat_back_sides', 'Upper_neck','Header'
  ]
  selectedPart = this.parts[0];


}
