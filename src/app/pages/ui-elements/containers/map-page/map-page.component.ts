import { Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent {
  public lat = -37.813179;
  public lng = 144.950259;
  public zoom = 12;
}
