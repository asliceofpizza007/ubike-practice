<template>
  <div class="map-wrapper">
    <div id="map" />
    <div class="input-wrapper">
      <label for="district">
        選擇行政區
      </label>
      <select
        id="district"
        v-model="currentDistrict"
        name="district"
        @change="onChange"
      >
        <option
          v-for="district in districtsInfo"
          :key="district"
          :value="district"
        >
          {{ district }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import L, { LayerGroup, icon, Map } from 'leaflet'
import mapConfig from '@/config/map.config'
import fetchBikeData from '@/config/fetchBikeData'
import { districts } from '@/config/districtData'

export default defineComponent({
  name: 'Map',
  setup () {
    const currentDistrict = ref(districts[0])
    const districtsInfo = ref(districts)
    let markerLayer: LayerGroup
    let map: Map

    const updateUBikeMap = async () => {
      const data = await fetchBikeData()
      const selectedData = data.filter(info => {
        return info.regionName === currentDistrict.value
      })

      const markers = selectedData.map(data => {
        const {
          latLng,
          regionName,
          stationName,
          totalBikes,
          availableBikes
        } = data
        const marker = new L.Marker(latLng, {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: require('@img/bicycle-rider.png')
          })
        })
        marker.bindTooltip(`
          <p>${regionName} - ${stationName}</p>
          <p>總車輛數： ${totalBikes}</p>
          <p>可使用車輛數： ${availableBikes}</p>
        `)

        marker.on('mouseover', () => {
          marker.openTooltip()
        })
        marker.on('mouseout', () => {
          marker.closeTooltip()
        })
        return marker
      })
      markerLayer = L.layerGroup(markers)
      markerLayer.addTo(map)
    }

    onMounted(() => {
      const {
        coordinate,
        zoomLv,
        tileLayerURL,
        containerID
      } = mapConfig
      map = L.map(containerID)
      map.setView(coordinate, zoomLv)
      L.tileLayer(tileLayerURL).addTo(map)
      updateUBikeMap()
    })

    const onChange = async () => {
      markerLayer.remove()
      updateUBikeMap()
    }
    return {
      currentDistrict,
      districtsInfo,
      onChange
    }
  }
})
</script>
<style lang="scss" scoped>
.map-wrapper {
  position: relative;

  #map {
    width: 100vw;
    height: 100vh;
  }

  .input-wrapper {
    position: absolute;
    top: 10pt;
    right: 10pt;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.3rem 0.5rem;
    border: 2pt;

    label[for="district"] {
      color: #fff;
      vertical-align: middle;
      margin-right: 8pt;
    }

    select {
      outline: 0;
    }
  }
}
</style>
