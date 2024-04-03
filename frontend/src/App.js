import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import UserRegister from "./pages/user/UserRegister"
import UserLogin from "./pages/user/UserLogin"
import FetchAudios from "./pages/admin/audio/FetchAudios";
import AudioDetails from "./pages/admin/audio/AudioDetails";
import CreateAudio from "./pages/admin/audio/CreateAudio";
import SearchAudio from "./pages/admin/audio/SearchAudio";
import UserProfile from "./pages/user/UserProfile";
import AdminProfile from "./pages/admin/AdminProfile";
import UserAudios from "./pages/user/UserAudios";
import CreatePlaylists from "./pages/user/CreatePlaylist";
import UserPlaylists from "./pages/user/UserPlaylists";
import UserAudioDetails from "./pages/user/UserAudioDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home}></Route>
        {/* admin */}
        <Route path="/admin/login" Component={AdminLogin}></Route>
        <Route path="/admin/profile" Component={AdminProfile}></Route>
        <Route path="/admin/audios" Component={FetchAudios}></Route>
        <Route path="/admin/audio-details/:_id" Component={AudioDetails}></Route>
        <Route path="/admin/create-audio" Component={CreateAudio}></Route>
        <Route path="/admin/search-audios" Component={SearchAudio}></Route>
        {/* user */}
        <Route path="/user/register" Component={UserRegister}></Route>
        <Route path="/user/login" Component={UserLogin}></Route>
        <Route path="/user/profile" Component={UserProfile}></Route>
        <Route path="/user/audios" Component={UserAudios}></Route>
        <Route path="/user/playlists" Component={UserPlaylists}></Route>
        <Route path="/user/create-playlist" Component={CreatePlaylists}></Route>
        <Route path="/user/audio-details/:_id" Component={UserAudioDetails}></Route>
        {/* <Route path="/user/playlist/:id" Component={PlaylistDetails}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
