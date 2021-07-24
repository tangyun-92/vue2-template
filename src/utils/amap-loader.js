import AMapLoader from '@amap/amap-jsapi-loader'

const Loader = AMapLoader.load({
  key: '07c1501cb2917cc05948c9f51d135e13', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', //  指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: [] //  插件列表
})

export default Loader