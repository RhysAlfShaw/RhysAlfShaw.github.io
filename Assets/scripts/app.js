const fetchNASAData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=idtYmA8NK7GnPuXtkT8VRLj82SOzCwwi42K50DRl`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
      document.getElementById("body").style.backgroundImage = 'url(Assets/images/james-webb1.png)';
    }
  }
  
  const displayData = data => {
    try {
    document.getElementById("body").style.backgroundImage = 'url('+data.hdurl+')';
    document.getElementById("title").textContent = 'Image Title: '+data.title;
    document.getElementById("date").textContent = 'Date: '+data.date;
    document.getElementById("explanation").textContent = data.explanation;
    document.getElementById("link-img").href = data.hdurl;
    document.getElementById("copyright").textContent = 'Copyright: '+ data.copyright;
    } catch (error) {
      document.getElementById("body").style.backgroundImage = 'url('+data.hdurl+')';
    }
  }

fetchNASAData()