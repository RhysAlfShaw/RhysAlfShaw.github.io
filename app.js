const fetchNASAData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=idtYmA8NK7GnPuXtkT8VRLj82SOzCwwi42K50DRl`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      console.log(data.hdurl)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const displayData = data => {
    document.getElementById("body").style.backgroundImage = 'url('+data.hdurl+')';
}

  fetchNASAData()