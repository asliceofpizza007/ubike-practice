import L, { LatLngExpression } from 'leaflet'
import MapInitializer from './MapInitializer'
import MapMarkerLayer from './MapMarkerLayer'
import MapMarker from './MapMarker'
import { MapConfig } from '@/config/map.config'
import { UBikeInfo } from '@/config/fetchBikeData'

class UbikeMapFacade {
  private map: L.Map
  private mapInitializer: MapInitializer
  private mapMarkerLayer: MapMarkerLayer
  constructor (
    config: MapConfig,
    mapRef: HTMLElement|null,
    public tootipTemplate: (data: UBikeInfo) => string
  ) {
    if (mapRef === null) {
      throw new Error('map ref is null type')
    }
    this.map = L.map(mapRef)
    this.mapInitializer = new MapInitializer(this.map, config)
    this.mapMarkerLayer = new MapMarkerLayer(this.map)

    this.mapInitializer.initialize()
  }

  public pinStations (data: UBikeInfo[]): void {
    const markers = data.map(info => {
      const marker = MapMarker.createMarker(info.latLng)
      marker.bindTooltip(this.tootipTemplate(info))

      return marker
    })

    this.mapMarkerLayer.addMarkers(markers)
  }

  public flyTo (latLng: LatLngExpression): void {
    if (this.map === null) {
      throw new Error('Map is not correctly initialized')
    }
    this.map.flyTo(latLng)
  }

  public clearStations (): void {
    this.mapMarkerLayer.clear()
  }
}

export default UbikeMapFacade
