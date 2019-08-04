export default function MapLoader () {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src =
        'https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=d75f851c947e19673fb0730975c3fdc7&plugin=AMap.Autocomplete,AMap.PlaceSearch'
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}
