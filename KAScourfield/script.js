async function getPublicDriveFile(fileId) {
    /**
     * Retrieves the contents of a publicly shared file on Google Drive.
     * 
     * @param {string} fileId - The ID of the file on Google Drive.
     * @returns {Promise<Blob>} - The contents of the file.
     */
    try {
      const url = `https://drive.google.com/uc?export=view&id=${fileId}`;
      const response = await fetch(url);
  
      if (response.status === 200) {
        return await response.blob();
      } else {
        throw new Error(`Failed to retrieve file. Status code: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Failed to retrieve file: ${error.message}`);
    }
  }
  
  (async () => {
    // Example usage
    const fileId = '143q7H8F5qcfAk-ojyWu5d314vFl4fThN'; // Replace with the actual file ID
  
    try {
      const fileContent = await getPublicDriveFile(fileId);
  
      // Create a new image element
      const img = document.createElement('img');
      img.src = URL.createObjectURL(fileContent);
  
      // Append the image to the "slideImage" div
      const slideImageDiv = document.querySelector('.slideImage');
      slideImageDiv.appendChild(img);
  
      console.log('Image added to the slideImage div successfully!');
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();