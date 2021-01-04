import L from 'leaflet'
import { UbikeMap } from './map'
import { MapConfig } from '../config/map.config'

class MapInitializer implements UbikeMap.Initializer {
  constructor (
    public readonly map: L.Map,
    public readonly config: MapConfig
  ) {}

  public initialize (): void {
    const {
      map,
      config
    } = this
    const {
      coordinate,
      zoomLv,
      tileLayerURL
    } = config

    map.setView(coordinate, zoomLv)

    L.tileLayer(tileLayerURL).addTo(map)
  }
}

export default MapInitializer
