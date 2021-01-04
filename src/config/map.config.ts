import { LatLngExpression } from 'leaflet'

export type MapConfig = {
  coordinate: LatLngExpression,
  zoomLv: number,
  tileLayerURL: string,
  containerID: string,
}

export default {
  coordinate: [25.0330, 121.5654],
  zoomLv: 15,
  tileLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  containerID: 'map'
} as MapConfig
