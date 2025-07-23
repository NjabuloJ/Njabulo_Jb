const { fana } = require('../njabulo/fana');
const axios = require('axios');
const fs = require('fs');

fana({
  nomCom: "findsong",
  categorie: "music",
  reaction: "🎵"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    repondre(`Please send a video to identify the song`);

    zk.on('message', async (m) => {
      if (m.from === dest && m.message.videoMessage) {
        const video = await zk.downloadMediaMessage(m);
        repondre(`Do you want to identify the song from the video? Please respond with "yes" or "no"`);

        zk.on('message', async (m) => {
          if (m.from === dest && m.body.toLowerCase() === 'yes') {
            const apiKey = 'YOUR_RAPIDAPI_KEY';
            const shazamApi  'https://shazam.p.rapidapi.com/songs/detect';                              

                                                                       
            const audioFile = await extractAudioFromVideo(video);
            const formData = new FormData();
            formData.append('//sh=azam.p.rapidapi.com/songs/detect';

            // Assuming you have a function to extract audio from video
            const audioFile = await extractAudioFromVideo(video);
            const formData = new FormData();
            formData.append('audio', fs.createReadStream(audioFile));

            const headers = {
              'X-RapidAPI-Key': apiKey,
              'Content-Type': 'multipart/form-data',
            };

            const response = await axios.post(shazamApi, formData, { headers });
            const songName = response.data.track.title;
            const artist = response.data.track.subtitle;
            const youtubeChannel = `https://www.youtube.com/results?search_query=${songName}+${artist}`;                                                               

            repondre(`🎵 Song Name: ${songName}\n👨‍🎤 Artist: ${artist}\n📹 YouTube Channel: ${youtubeChannel}`);
          } else if (m.from === dest && m.body.toLowerCase() === '//www.youtube.com/results?search_query=${songName}+${artist = ${artist}`;

            repondre(`🎵 Song Name: ${songName}\n👨‍🎤 Artist: ${artist}\n📹 YouTube Channel: ${youtubeChannel}`);
          } else if (m.from === dest && m.body.toLowerCase() === 'no') {
            repondre('Song identification cancelled');
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
    repondre('Song not recognized');
  }
});

// Function to extract audio from video (you need to implement this)
async function extractAudioFromVideo(video) {
  // Your implementation here
  // For example, using FFmpeg:
  // const ffmpeg = require('fluent-ffmpeg');
  // const audioFile = 'audio.mp3';
  // ffmpeg(video)
  //   .setFormat('mp3')
  //   .save(audioFile)
  //   .on('end', () => {
  //     resolve(audioFile);
  //   })
  //   .on('error', (err) => {
  //     reject(err);
  //   });
}