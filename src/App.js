import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Tik Tok App</h1>

      <div className="app__videos">
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="My channel 1"
          description="Vid description 1"
          song="My song"
					likes={123}
					messages={234}
					shares={345}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          channel="My channel 2"
          description="Vid description 2"
          song="My song"
					likes={111}
					messages={222}
					shares={333}
        />
      </div>
    </div>
  );
}

export default App;
