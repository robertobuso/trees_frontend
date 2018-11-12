export const findTrees = (lat, lon) => {
  const newLat = lat + .001
  const newLon = lon - .001

  if (lat) {
    return fetch(`https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$where=latitude >= ${lat} AND latitude <= ${newLat} AND longitude >= ${newLon} AND longitude <= ${lon}`)
    .then(r => r.json())
  }
}

export const findImage = () => {
    return  fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=File:Albert%20Einstein%20Head.jpg&prop=imageinfo&&iiprop=url&iiurlwidth=220&format=json')
    .then(r => r.json())
}
