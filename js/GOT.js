function playVideo() {
    vid.play();
  }


  function stopVideo() {
    vid.pause();
    vid.currentTime = 0;
  }


  function rewindTrack() {
  // rewind the current track to the beginning
    vid.currentTime = 0;
  }



  function setHouseData(name, desc) {
      houseName.textContent = House ${name};
      houseDescription.textContent = desc;
  }

  function setVideoSource(house) {

    let targetSource = video/House-${house.charAt(0).toUpperCase() + house.slice(1)}.mp4;


    vid.src = targetSource;

    vid.load();
    playVideo();
  }

  function animateBanner(event) {
    if (event.target.className.includes('sigilContainer')) {
      let multiplier = event.target.dataset.offset,
          offsetWidth = 600;
      // 0, 600, 1200, 1800px depending on the math
      banner.style.right = ${multiplier * offsetWidth}px;
    }
  }

  function popLightBox(event) { 
    // add a class to open the lightBox
    if (event.target.className.includes('sigilContainer')) {
      lightBox.classList.add('show-lightbox');


      let targetHouse = event.target.className.split(" ")[1];
      setVideoSource(targetHouse);

      setHouseData(houseInfo[event.target.dataset.offset][0], houseInfo[event.target.dataset.offset][1]);

      setTimeout(function(){lightBox.classList.add('show-lightbox')}, 1500);

      lightBox.querySelector('.close').addEventListener('click', () => {
        stopVideo();

        lightBox.classList.remove('show-lightbox');


      })
    }
  }



  sigils.addEventListener('click', animateBanner);
  sigils.addEventListener('click', popLightBox);

  controlButtons[0].addEventListener("click",playVideo);
  controlButtons[1].addEventListener("click",stopVideo);
  controlButtons[2].addEventListener("click",rewindTrack);

})();