fetch('https://api.alquran.cloud/v1/quran')
  .then((response) => response.json())
  .then((quran) => {
    for (let i = 0; i < quran.data.surahs.length; i++) {
      let surah = quran.data.surahs[i];
      console.log(surah.name);
      for (let j = 0; j < surah.ayahs.length; j++) {
        let ayah = surah.ayahs[j];
        console.log(ayah.text);
      }
    }
  });
