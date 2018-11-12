export const findTrees = (lat, lon) => {
  const newLat = lat + .001
  const newLon = lon - .001

  console.log("Lat: ", lat, "NewLat: ", newLat)
  console.log("Lon: ", lon, "NewLon: ", newLon)

  if (lat) {
    return fetch(`https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$where=latitude >= ${lat} AND latitude <= ${newLat} AND longitude >= ${newLon} AND longitude <= ${lon}`)
    .then(r => r.json())
  }
}
