<template>
  <div class="map-wrapper">
    <div
      id="map"
      ref="map"
    />
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
import { LatLngExpression } from 'leaflet'
import mapConfig from '@/config/map.config'
import fetchBikeData, { UBikeInfo } from '@/config/fetchBikeData'
import { districts, districtLatLngMap } from '@/config/districtData'
import UbikeMapFacade from '@/ubikeMap/UbikeMapFacade'

export default defineComponent({
  name: 'Map',
  setup () {
    const currentDistrict = ref(districts[0])
    const districtsInfo = ref(districts)
    const map = ref(null as HTMLElement | null)
    let mapFacade: UbikeMapFacade

    const updateUBikeMap = async () => {
      const data = await fetchBikeData()
      const selectedData = data.filter(info => {
        return info.regionName === currentDistrict.value
      })

      mapFacade.pinStations(selectedData)

      const tmp = districtLatLngMap.get(currentDistrict.value)
      let latLng: LatLngExpression
      if (tmp !== undefined) {
        latLng = tmp
        mapFacade.flyTo(latLng)
      }
    }

    onMounted(() => {
      mapFacade = new UbikeMapFacade(
        mapConfig,
        map.value,
        function (info: UBikeInfo) {
          const {
            regionName,
            stationName,
            totalBikes,
            availableBikes
          } = info
          return `
            <p>${regionName} - ${stationName}</p>
            <p>總車輛數： ${totalBikes}</p>
            <p>可使用車輛數： ${availableBikes}</p>
          `
        }
      )
      updateUBikeMap()
    })

    const onChange = async () => {
      mapFacade.clearStations()
      updateUBikeMap()
    }
    return {
      map,
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
