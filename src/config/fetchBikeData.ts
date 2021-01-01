import { LatLngExpression } from 'leaflet'

type SourceType = {
  sno: string, // 站點代號
  sna: string, // 場站名稱(中文)
  tot: string, // 場站總停車格
  sbi: string, // 場站目前車輛數
  sarea: string, // 場站區域(中文)
  mday: string, // 資料更新時間
  lat: string, // 緯度
  lng: string, // 經度
  ar: string, // 地區
  sareaen: string, // 場站區域(英文)
  snaen: string, // 場站名稱(英文)
  aren: string, // 地址(英文)
  bemp: string, // 空位數量
  act: string, // 全站禁用狀態
}

export type UBikeInfo = {
  availableBikes: number, // 目前車輛數 (sbi)
  totalBikes: number, // 所有車輛格數 (tot)
  latLng: LatLngExpression, // 經緯度 ([lat, lng])
  regionName: string, // 站場區域 (sarea)
  stationName: string // 站點名稱 (sna)
}

export default async function fetchBikeData () {
  const url = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json'
  const res = await fetch(url)
  const { retVal } = await res.json()
  const source = (Object.keys(retVal).map(key => retVal[key] as SourceType))
  const bikeData = source.map(info => {
    return {
      availableBikes: parseInt(info.sbi, 10),
      totalBikes: parseInt(info.tot, 10),
      latLng: [
        parseFloat(info.lat),
        parseFloat(info.lng)
      ] as LatLngExpression,
      regionName: info.sarea,
      stationName: info.sna
    } as UBikeInfo
  })
  return bikeData
}
