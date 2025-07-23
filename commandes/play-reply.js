const { fana } = require("../njabulo/fana");
const axios = require('axios');
const ytSearch = require('yt-search');

fana({
  nomCom: "song",
  aliases: ["play", "audio"],
  categorie: "download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre('😡Yo stop slacking! Give me a query, like .play Justin Bieber');
    return;
  }

  const query = arg.join(" ");

  try {
    const searchResults = await ytSearch(query);
    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    const message = `*Douzzy-MD 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n` +
      `╭───────────────◆\n` +
      `│⿻ *Title:* ${firstVideo.title}\n` +
      `│⿻ *Quality:* mp3 (128kbps)\n` +
      `│⿻ *Duration:* ${firstVideo.duration.timestamp}\n` +
      `│⿻ *Viewers:* ${firstVideo.views}\n` +
      `│⿻ *Uploaded:* ${firstVideo.ago}\n` +
      `│⿻ *Artist:* ${firstVideo.title}\n` +
      `╰────────────────◆\n` +
      `⦿ *Direct Yt Link:* ${videoUrl}\n` +
      `Reply With: *1* To Download Audio 🎶 *2* To Download Audio Document 📄`;

    repondre(message);

    zk.on('message', async (msg) => {
      if (msg.body === '1') {
        // Download audio
        const apis = [
          `https:                                                                                 
          `//api-rin-tohsaka.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
          `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
          `https:                                                                               
          `//www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
          `https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
          `https:                                                                      
        ];

        let downloadData;
        for (const api of apis) {
          try {
            const response = await axios.get(api);
            downloadData = response.data;
            if (downloadData.success) break;
          } catch (error) {
            console.error('Error fetching data from API:', error);
          }
        }

        if (downloadData && downloadData.success) {
          const downloadUrl = downloadData.result.download_url;
          const messagePayload = {
            caption: `//api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`
        ];

        let downloadData;
        for (const api of apis) {
          try {
            const response = await axios.get(api);
            downloadData = response.data;
            if (downloadData.success) break;
          } catch (error) {
            console.error('Error fetching data from API:', error);
          }
        }

        if (downloadData && downloadData.success) {
          const downloadUrl = downloadData.result.download_url;
          const messagePayload = {
            caption: `\n*NJABULO JB AUDIOS*\n > Njabulo Jb`,
            audio: { url: downloadUrl },
            mimetype: 'audio/mp4',
            contextInfo: {
              footer: "*Njabulo Jb*, developed by Njabulo",
              gifPlayback: true,
              externalAdReply: {
                title: "Njabulo Jb",
                body: firstVideo.title,
                mediaType: 1,
                thumbnailUrl: firstVideo.thumbnail,
                sourceUrl: videoUrl,
                renderLargerThumbnail: true,
                showAdAttribution: true,
              },
            },
          };

          await zk.sendMessage(dest, messagePayload, { quoted: ms });
        } else {
          repondre('Failed to retrieve download URL.');
        }
      } else if (msg.body === '2') {
                                  
                                                   
        repondre('Downloading audio document...');
      }
    });
  } catch (error) {
    console.error('Error during download process:', error);
    repondre(`// Download audio document
        // Add logic for downloading audio document
        repondre('Downloading audio document...');
      }
    });
  } catch (error) {
    console.error('Error during download process:', error);
    repondre(`Download failed due to an error: ${error.message || error}`);
  }
});