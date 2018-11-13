export const findTrees = (lat, lon) => {
  const newLat = lat + .001
  const newLon = lon - .001

  if (lat) {
    return fetch(`https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$where=latitude >= ${lat} AND latitude <= ${newLat} AND longitude >= ${newLon} AND longitude <= ${lon}`)
    .then(r => r.json())
  }
}

export const findImage = (query) => {
  console.log('Query in findImage', query)
    return  fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&width=200&height=300&wbptterms=description&gpssearch=${query}&gpslimit=1`)
    .then(r => r.json())
}
