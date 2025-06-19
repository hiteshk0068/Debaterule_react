import React from 'react'
import DebateCard from './DebateCard';
import { useNavigate } from 'react-router-dom';

function Debatetopics() {
  const navigate = useNavigate();
  return (

    <div className=' flex shrink-0'>
      
            <DebateCard
              image="https://media.istockphoto.com/id/1183183791/photo/talented-female-artist-works-on-abstract-oil-painting-using-paint-brush-she-creates-modern.jpg?s=1024x1024&w=is&k=20&c=Q5sZsCEVALEyYXdlicsb95mjck4-HrnPsXSsyqlo_Jk=" 
              title="Free Will"
              description="Do you think you are taking the actual decision?"
              buttonText="JOIN THE DEBATE"
              onClick={() => navigate('/Page1')}
              />
      
            <DebateCard
              image="https://imagef2.promeai.pro/process/do/3f59d593fcefa97b802d2f41aeaead02.webp?sourceUrl=/g/p/gallery/publish/2025/01/23/31dcc83978ee4081966765f66522e706.jpg&x-oss-process=image/watermark,image_ZGVmYXVsdA,t_100,P_20,g_south,y_55/format,webp&sign=eb15340d13abd5914c62afc675cc1094" 
              title="Free Will"
              description="Do you think you are taking the actual decision?"
              buttonText="JOIN THE DEBATE"
              onClick={() => navigate('/Page2')}
            />
      


    </div>
  )
}

export default Debatetopics;