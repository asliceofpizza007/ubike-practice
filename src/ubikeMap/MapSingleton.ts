import L from 'leaflet'
import mapConfig from '../config/map.config'

class MapSingleton {
  public readonly map = L.map(mapConfig.containerID)
  constructor () {
    if (this.map === null) {
      console.warn('Map is not exist')
    }
  }

  private static Instance: L.Map | null = new MapSingleton().map

  static getInstance (): L.Map | null {
    return this.Instance
  }
}

export default MapSingleton
