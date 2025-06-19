import React from 'react'
import DebateCard from './DebateCard';
import { useNavigate } from 'react-router-dom';

export function Blogs() {
  const navigate = useNavigate();
  return (
    <div className='  flex shrink-0'>
      <DebateCard
        image="https://imagef2.promeai.pro/process/do/3f59d593fcefa97b802d2f41aeaead02.webp?sourceUrl=/g/p/gallery/publish/2025/01/23/31dcc83978ee4081966765f66522e706.jpg&x-oss-process=image/watermark,image_ZGVmYXVsdA,t_100,P_20,g_south,y_55/format,webp&sign=eb15340d13abd5914c62afc675cc1094" 
        title="How To Debate"
        description="How to debate effectively and win arguments?"
        buttonText="READ MORE"
        onClick={() => navigate('/Page3')}
      />

      <DebateCard
        image="https://imagef2.promeai.pro/process/do/3f59d593fcefa97b802d2f41aeaead02.webp?sourceUrl=/g/p/gallery/publish/2025/01/23/31dcc83978ee4081966765f66522e706.jpg&x-oss-process=image/watermark,image_ZGVmYXVsdA,t_100,P_20,g_south,y_55/format,webp&sign=eb15340d13abd5914c62afc675cc1094" 
        title="Logical Fallacies"
        description="What are logical fallacies and how to avoid them?"
        buttonText="READ MORE"
        onClick={() => navigate('/Page4')}
      />


    </div>
  )
}

export default Blogs