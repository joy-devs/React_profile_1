import './App.css';
import ProfileSeg from './components/Profile-1';
import mary from './assets/mary.jpg';
import james from './assets/James.png'; 
import lilian from './assets/lilian.jpg';
import martin from './assets/martin.jpg';

function App() {
  return (
    <div className='ProfileSection'>
      <ProfileSeg
        profilePic={mary}
        name="Mary Scott"
        age={28}
        bio="I am a passionate software developer"
      />

      <ProfileSeg
        profilePic={james}
        name="James Scott"
        age={25}
        bio="I am a passionate software engineer"
      />

      <ProfileSeg
        profilePic={lilian}
        name="Lilian Ivy"
        age={31}
        bio="I am a passionate software engineer"
      />

      <ProfileSeg
        profilePic={martin}
        name="Martin Musk"
        age={24}
        bio="I am a passionate software engineer"
      />
    </div>
  );
}

export default App;
