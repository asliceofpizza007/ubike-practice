import L from 'leaflet'
import { MapConfig } from '@/config/map.config'

declare namespace UbikeMap {
  export interface Initializer {
    readonly map: L.Map
    readonly config: MapConfig
    initialize(): void
  }

  export interface Marker {
    marker: L.Marker
    bindTooltip(content: string): void
  }

  export interface MarkerLayer {
    readonly map: L.Map
    readonly layer: L.LayerGroup
    addMarker(marker: Marker): void
    addMarkers(markers: Marker[]): void
    clear(): void
  }
}
