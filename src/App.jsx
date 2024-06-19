import './App.css';
import ProfileSeg from './components/Profile-1';
import mary from './assets/Mary2S.jpg';
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
        bio="Mary Scott is a seasoned software engineer with over 10 years of experience in building robust web applications. With a Bachelor’s degree in Computer Science from MIT and a Master’s degree in Data Science from Stanford, Mary has a strong foundation in both theoretical and practical aspects of technology. At Google, she led a team that developed an award-winning machine learning algorithm that improved search engine accuracy by 30%."
        
      />

      <ProfileSeg
        profilePic={james}
        name="James Scott"
        age={25}
        bio="James Scott is a visionary product manager with a track record of driving growth for SaaS products. At Salesforce, he spearheaded the development of a CRM tool that increased customer retention by 25%. James is also an active member of the Product Management community, contributing to blogs and hosting webinars."
      />

      <ProfileSeg
        profilePic={lilian}
        name="Lilian Ivy"
        age={31}
        bio="Lilian Ivy is an innovative tech leader and entrepreneur with a keen eye for emerging technologies. With a degree in Software Engineering from Carnegie Mellon University, Lilian co-founded a successful startup that developed a cutting-edge IoT platform to streamline smart home integration. Her work has been featured in TechCrunch and Wired. As a speaker at international tech conferences, she shares insights on blockchain’s potential to revolutionize cybersecurity."
      />

      <ProfileSeg
        profilePic={martin}
        name="Martin Musk"
        age={24}
        bio="Martin Musk is a cybersecurity expert with a decade of experience in protecting enterprise-level networks. As a Certified Ethical Hacker, he has helped Fortune 500 companies thwart cyber threats. Martin’s innovative approach to security has earned him recognition from the Cybersecurity Excellence Awards"
      />
    </div>
  );
}

export default App;
