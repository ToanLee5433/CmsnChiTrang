// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "@dotlottie/player-component";
import "./App.css";
import { Cake } from "./components/Cake";
import { CakeActions } from "./components/CakeActions";


// const version = import.meta.env.PACKAGE_VERSION;

const src = new URL("/assets/hbd2.mp3", import.meta.url).href;



function App() {
  const [candleVisible, setCandleVisible] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(new Audio(src));
  const microphoneStreamRef = useRef<MediaStream | undefined>(undefined);

  const [playing, setPlaying] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showCake, setShowCake] = useState(true);

  const [name] = useState("CMSN CHỊ TRANG");

  // Debug: Log playing state
  useEffect(() => {
    console.log("🎵 Playing state changed:", playing);
  }, [playing]);

  // Debug: Log showBackground state
  useEffect(() => {
    console.log("🖼️ ShowBackground state changed:", showBackground);
  }, [showBackground]);

  // Add/remove background class to body
  useEffect(() => {
    if (playing) {
      document.body.classList.add('with-background');
    } else {
      document.body.classList.remove('with-background');
    }
  }, [playing]);

  const lightCandle = useCallback(() => setCandleVisible(true), []);



  const startAudio = useCallback(() => {
    console.log("🎵 Starting audio and showing background image");
    console.log("🖼️ Setting showBackground to true");
    setPlaying(true);
    setShowBackground(true);
    setShowCake(false); // Ẩn bánh kem
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  const start = useCallback(() => {
    lightCandle();
  }, [lightCandle]);

  const blowCandles = useCallback(async (stream: MediaStream) => {
    try {
      microphoneStreamRef.current = stream;

      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.fftSize = 2048;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const detectBlow = () => {
        analyser.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
        const threshold = 43;

        // Chỉ thổi nến khi đã thắp nến (candleVisible = true)
        if (average > threshold && candleVisible) {
          setCandleVisible(false);
          // Phát nhạc khi nến tắt và chưa phát nhạc
          if (!musicStarted) {
            setMusicStarted(true);
            startAudio();
          }
        }
      };

      setInterval(detectBlow, 100);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, [musicStarted, startAudio, candleVisible]);



  const onEnded = useCallback(() => { }, []);



  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        if (stream) {
          blowCandles(stream);
        }
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    })();

    return () => {
      if (microphoneStreamRef.current) {
        microphoneStreamRef.current
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, [blowCandles]);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        justifyContent: "space-between",
        // border: "1px solid red",
      }}
    >
                     {/* Main Image */}
        {showBackground && (
          <img
            src="/assets/background.jpg"
            alt="Main Image"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "opacity 1s ease-in-out",
              zIndex: -1,
            }}
            onLoad={() => console.log("🖼️ Background image loaded successfully!")}
            onError={(e) => console.error("❌ Error loading background image:", e)}
          />
        )}
      

      <audio {...{ src, ref: audioRef, preload: "auto", onEnded }} />

                           <div>
          {/* Fixed name display */}
                    <div
             style={{
               position: "absolute",
               top: "30%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               zIndex: 40,
               fontSize: "2rem",
               color: "#FFD700",
               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
               fontWeight: "bold",
               textAlign: "center",
               visibility: showBackground ? "visible" : "hidden",
             }}
           >
             {name}
           </div>
          
          {/* Instruction text when candle is lit */}
          {candleVisible && !showBackground && (
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 50,
                fontSize: "1.5rem",
                color: "#FF6B35",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                fontWeight: "bold",
                textAlign: "center",
                animation: "pulse 2s infinite",
              }}
            >
              Chị hãy thổi nến đi
            </div>
          )}
          
          {showCake && <Cake {...{ candleVisible }} />}
        </div>

                                                       <div
           style={{
             position: "absolute",
             top: 0,
             left: "50%",
             transform: "translateX(-50%)",
           }}
         >
                    <dotlottie-player
              src="/assets/hbd.lottie"
              autoplay
              loop
                           style={{
                 zIndex: 100,
                 visibility: showBackground ? "visible" : "hidden",
                 width: 400,
               }}
            />
         </div>

                                                                                                               <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
                     <dotlottie-player
               src="/assets/confetti.lottie"
               autoplay
               loop
                            style={{
                  zIndex: 90,
                  visibility: showBackground ? "visible" : "hidden",
                  width: 400,
                }}
             />
          </div>

                    <div
         style={{
           position: "absolute",
           bottom: "1.25%",
           left: "50%",
           transform: "translateX(-50%)",
           visibility: showBackground ? "hidden" : "visible",
         }}
       >
                   <CakeActions
            {...{
              start,
              candleVisible,
            }}
          />
       </div>

      {/* <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "non",
        }}
      >
        {version}
      </div> */}
    </div>
  );
}

export default App;
