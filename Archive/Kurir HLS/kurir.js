playerInit = $bp("kurirVodPlayer", {
        
        "id" : "<?=$playerKey?>", // PlayerID
        "width" : "16",
        "height" : "9",
        "video" : "1185700", // Ovo se ne koristi posto ide drugi source
        "autoplay" : true,
        "muted" : false
    
    }, function(){
        
        $bp(selector).src({
            
            "src" : videoUrl.replace('.m3u8', '.mp4')
        });
    });


    $bp("myDiv", config,  function(){
        $bp().src({
            "src" : "https://cdn.brid.tv/live/partners/264/sd/685723.mp4",
            "title" : "Test video title",
            "monetize" : false
        });
    });


playerInit = $bp("kurirVodPlayer", {

        "id":"<?=$playerKey?>", // PlayerID
        "width":"16",
        "height":"9",
        "video": {
        
            "Video": [ // Drugi source
            
                {
                    "source": {
                    
                        "ld": "240p_mp4_video_url",
                        "sd": "360p_mp4_video_url",
                        "hsd": "480p_mp4_video_url",
                        "hd": "720p_mp4_video_url"
                    }
                }
            ]
        },
        
        "autoplay" : true, 
        "muted" : false
    });