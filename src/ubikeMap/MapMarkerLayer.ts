import L from 'leaflet'
import { UbikeMap } from './map'

class MapMarkerLayer implements UbikeMap.MarkerLayer {
  public readonly layer = L.layerGroup()
  constructor (
    public readonly map: L.Map
  ) {
    this.layer.addTo(map)
  }

  addMarker (m: UbikeMap.Marker): void {
    m.marker.addTo(this.layer)
  }

  addMarkers (mArr: UbikeMap.Marker[]): void {
    mArr.forEach(m => {
      this.addMarker(m)
    })
  }

  clear (): void {
    this.layer.clearLayers()
  }
}

export default MapMarkerLayer
