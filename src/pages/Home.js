import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';

const Home = ({ onSearchSubmit, videos }) => {
  return (
    <div className="bg-[#1E1E1E]">
      <Navbar onSearch={onSearchSubmit} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default Home;
