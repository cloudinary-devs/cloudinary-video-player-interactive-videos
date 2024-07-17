import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <>
      <VideoPlayer
        id="doc-player"
        publicIds={{
          main: 'docs/my_video',
          top: 'https://res.cloudinary.com/demo/video/upload/docs/my_video_top_zoom.mp4',
          bottom:
            'https://res.cloudinary.com/demo/video/upload/docs/my_video_bottom_zoom.mp4',
        }}
      />
    </>
  );
}

export default App;
