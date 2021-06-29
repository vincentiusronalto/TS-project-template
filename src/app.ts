export default function start() {
	
	const videoPlayer = <HTMLVideoElement>(document.querySelector('#videoElement'));
	const audioPlayer = <HTMLVideoElement>(document.querySelector('#audioElement'));

	let stopBtn = document.getElementById("stopVideo");
	let playBtn = document.getElementById("playVideo");
	
	function play() {
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true, audio:true })
				.then(function (stream) {
					videoPlayer.srcObject = stream;
				})
				.catch(function (err0r) {
				console.log("Something went wrong!");
				});
			}
	  }

	function stop() {
		stopVideo();
		stopAudio();
	  }

	  function stopVideo(){
		let stream = <MediaStream>videoPlayer.srcObject!;
		let tracks = stream.getTracks()!;
		tracks[0].stop();
		videoPlayer.srcObject = null;	
		return 0;
	  }

	  function stopAudio(){
		let stream = <MediaStream>audioPlayer.srcObject!;
		let tracks = stream.getAudioTracks()!;
		tracks[0].stop();
		return 0;
	  }

	  
	
	  stopBtn!.addEventListener('click',stop);
	  playBtn!.addEventListener('click',play);


	}
	

	

start();
