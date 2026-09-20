import { defineStore } from 'pinia';

// 🔑 CARTO Basemaps 金鑰（由 .env.local 的 VUE_APP_CARTO_KEY 提供）
// 未設定時圖磚會被 CARTO 蓋上 "API KEY REQUIRED" 浮水印，申請：https://carto.com/basemaps/apikey/
const CARTO_KEY = process.env.VUE_APP_CARTO_KEY || '';

// CARTO 免費方案要求地圖上必須保留 CARTO 與 OpenStreetMap 的來源標註
const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

const cartoUrl = (path) =>
  `https://{s}.basemaps.cartocdn.com/${path}/{z}/{x}/{y}{r}.png?key=${CARTO_KEY}`;

export const useDefineStore = defineStore('define', {
  state: () => ({
    selectedBasemap: 'carto_light_labels', // 當前選中的底圖
    // 地圖視圖狀態
    mapView: {
      center: [25.051474, 121.557989], // 地圖中心點 [緯度, 經度] - 台北市中心
      zoom: 11, // 縮放等級
    },
    basemaps: [
      {
        label: 'OpenStreetMap',
        value: 'osm',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      },
      {
        label: 'Esri Street',
        value: 'esri_street',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      },
      {
        label: 'Esri Topo',
        value: 'esri_topo',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      },
      {
        label: 'Esri World Imagery',
        value: 'esri_imagery',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      },
      {
        label: 'Google Maps 街道',
        value: 'google_road',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      },
      {
        label: 'Google Maps 衛星',
        value: 'google_satellite',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      },
      {
        label: '國土規劃中心電子地圖',
        value: 'nlsc_emap',
        url: 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}',
      },
      {
        label: '國土規劃中心正射影像',
        value: 'nlsc_photo',
        url: 'https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/GoogleMapsCompatible/{z}/{y}/{x}',
      },
      {
        label: '地形圖',
        value: 'terrain',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      },
      {
        label: 'Carto Light',
        value: 'carto_light_labels',
        url: cartoUrl('light_all'),
        attribution: CARTO_ATTRIBUTION,
      },
      {
        label: 'Carto Dark',
        value: 'carto_dark_labels',
        url: cartoUrl('dark_all'),
        attribution: CARTO_ATTRIBUTION,
      },
      {
        label: 'Carto Voyager',
        value: 'carto_voyager',
        url: cartoUrl('rastertiles/voyager'),
        attribution: CARTO_ATTRIBUTION,
      },
      {
        label: '白色地圖',
        value: 'blank',
        url: '',
      },
      {
        label: '黑色底圖',
        value: 'black',
        url: '',
      },
    ],
  }),
  actions: {
    setSelectedBasemap(value) {
      this.selectedBasemap = value;
    },
    setMapView(center, zoom) {
      this.mapView.center = center;
      this.mapView.zoom = zoom;
    },
  },
});
