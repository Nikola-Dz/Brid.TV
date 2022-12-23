checkIfOutstream = (player) => {
  // Deki said if the name attribute of the player object has "OSPlayer" in it, this is an outstream. Only way to differentiate between an outstream and player. True for outstream, false for player.
  return player.name.includes("OSPlayer") ? true : false
}

checkIfCarousel = (player) => {
  return player.hasOwnProperty('Carousel')
}

/*
// TODO: Started working on friendly iframe detection
var i, frames;
frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; ++i)
{
  //console.log(frames[i])
  var innerDoc = frames[i].contentDocument || frames[i].contentWindow.document;
  //console.log(innerDoc);

}
*/

// TODO: Add support here for players located in friendly iframes. This is gonna be sex.
if (typeof Brid === "undefined") {
  console.log("No Brid players found on page. If the Brid player is in an iframe, this debug script will not be able to give you debug data for the player.");
} else {
  if (typeof bridPlayers === "undefined") {
    bridPlayers = document.getElementsByClassName("brid");
    let bridEnv = "https:"+$bp(bridPlayers[0].id).assets.URLconfig.service;

    // Uncomment below line to enable display of first player object in console.
    //console.log($bp(bridPlayers[0].id));

    for (let i = 0; i < bridPlayers.length; i++) {
      let bridHostType = "INTERNALLY"
      let bridStreamType = "VOD/MP4";
      let playerObjs = $bp(bridPlayers[i].id);
      console.log("Player "+(i+1));
      console.log("Owner ID: %c" + playerObjs.assets.config.Partner.user_id, "font-weight: bold;");
      console.log ("Partner ID: %c"+playerObjs.assets.config.Partner.id, "font-weight: bold;");
      console.log ("Player ID: %c"+playerObjs.assets.config.id, "font-weight: bold;");
      console.log ("Autoplay: "+playerObjs.assets.config.autoplay+" --- Inview: "+playerObjs.assets.config.autoplayInview+" --- %"+playerObjs.assets.config.autoplayInviewPct);
      console.log ("Sticky: %c"+playerObjs.assets.config.slide_inview, "font-weight: bold;", " --- Mobile sticky disabled: "+playerObjs.assets.config.slide_inview_mobile);

      if (checkIfOutstream(playerObjs)) {
        console.log("%cBrid Outstream player detected!.", "color:red;font-weight: bold;");
        console.log ("JSON Config URL: "+bridEnv+"/services/unit/"+playerObjs.assets.config.id+".json");
      }
      else {
        if (playerObjs.videos.length == 0) {
          console.log("%cVideo list is empty. No videos to display. Check for content GEO targeting.", "color:red;font-weight: bold;");
        }
        else {
          if (playerObjs.currentSource.source.hasOwnProperty('streaming') || playerObjs.currentSource.source.sd.includes(".m3u8")) {
            bridStreamType = "STREAMING/HLS";
          }
          if (!playerObjs.currentSource.source.sd.includes("cdn.brid.tv")) {
            bridHostType = "EXTERNALLY";
          }
          console.log("Video playing is %c"+bridHostType+" hosted and is "+bridStreamType, "font-weight: bold;");
        }

        if (checkIfCarousel(playerObjs)) {
          console.log ("Carousel ID: %c"+playerObjs.assets.carousel, "font-weight: bold;");
          console.log ("Carousel JSON Config URL: "+bridEnv+"/services/get/carousel/"+playerObjs.assets.config.id+"/"+playerObjs.assets.carousel+".json");
        }

        if (typeof playerObjs.assets.config.playlist === 'undefined') {
            console.log ("Video ID: %c"+playerObjs.videos.id, "font-weight: bold;");
            console.log ("Video JSON Config URL: "+bridEnv+"/services/get/video/"+playerObjs.assets.config.id+"/"+playerObjs.videos.id+".json");
        }
        else {
            if (typeof playerObjs.assets.config.playlist === 'object') {
                switch (playerObjs.assets.config.playlist.mode) {
                    case "latest":
                        console.log ("Latest playlist used: "+bridEnv+"/services/get/latest/"+playerObjs.assets.config.id+"/0/1/25/0.json");
                        break;
                    case "channel":
                        console.log ("Latest playlist by channel used. Channel ID: "+playerObjs.assets.config.playlist.id);
                        console.log ("JSON Config URL: "+bridEnv+"/services/get/channel/"+playerObjs.assets.config.id+"/"+playerObjs.assets.config.playlist.id+"/1/25/0.json");
                        break;
                    case "tag":
                        console.log ("Latest playlist by tag used. Tag: "+playerObjs.assets.config.playlist.id);
                        console.log ("JSON Config URL: "+bridEnv+"/services/get/tag/"+playerObjs.assets.config.id+"/"+playerObjs.assets.config.playlist.id+"/1/25/0.json");
                        break;
                    default:
                        console.log("Not able to recognize playlist.");
                    }
            }
            else {
                console.log ("Playlist ID: %c"+playerObjs.assets.config.playlist, "font-weight: bold;");
                console.log("JSON Config URL: "+bridEnv+"/services/get/playlist/"+playerObjs.assets.config.id+"/"+playerObjs.assets.config.playlist+".json");
            }
        }
      }
      console.log("%cPlayer ADS Object", "color:red; font-size: 20px");
      if (playerObjs.assets.config.hasOwnProperty('Ad')) {
        for (let j = 0; j < playerObjs.assets.config.Ad.length; j++) {
          console.dir(playerObjs.assets.config.Ad[j]);
        }
      }
      console.log ("------------------------------------------------------------------------------");
    }
  } else {
    console.log("Script already run! Exiting gracefully.");
  }
}