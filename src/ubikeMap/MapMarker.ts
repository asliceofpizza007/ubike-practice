import L, { LatLngExpression, icon } from 'leaflet'
import { UbikeMap } from './map'

class MapMarker implements UbikeMap.Marker {
  public marker: L.Marker
  private constructor (coord: LatLngExpression) {
    this.marker = L.marker(coord, {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: require('@img/bicycle-rider.png')
      })
    })
  }

  static createMarker (coord: LatLngExpression): MapMarker {
    return new MapMarker(coord)
  }

  public bindTooltip (content: string): void {
    const { marker } = this
    marker.bindTooltip(content)

    marker.on('mousetover', () => {
      marker.openTooltip()
    })

    marker.on('mousetout', () => {
      marker.closeTooltip()
    })
  }
}

export default MapMarker
