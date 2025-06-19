import React from 'react';
import DebateCard from './DebateCard';


export function Youtubecards() {
  return (

<div className='flex shrink-0'>


<DebateCard
        image="https://imagef2.promeai.pro/process/do/3f59d593fcefa97b802d2f41aeaead02.webp?sourceUrl=/g/p/gallery/publish/2025/01/23/31dcc83978ee4081966765f66522e706.jpg&x-oss-process=image/watermark,image_ZGVmYXVsdA,t_100,P_20,g_south,y_55/format,webp&sign=eb15340d13abd5914c62afc675cc1094" 
        title="How To Present Your Arguments"
        description="What are logical fallacies and how to avoid them?"
        buttonText="WATCH VIDEO"
        onClick={() => window.open('https://youtu.be/-pCINP8GVQg?si=OUm91TP7XrZLjelO', '_blank')}

      />

      <DebateCard
        image="https://imagef2.promeai.pro/process/do/3f59d593fcefa97b802d2f41aeaead02.webp?sourceUrl=/g/p/gallery/publish/2025/01/23/31dcc83978ee4081966765f66522e706.jpg&x-oss-process=image/watermark,image_ZGVmYXVsdA,t_100,P_20,g_south,y_55/format,webp&sign=eb15340d13abd5914c62afc675cc1094" 
        title="How To Debate Intelligently"
        description="What are logical fallacies and how to avoid them?"
        buttonText="WATCH VIDEO"
        onClick={() => window.open('https://youtu.be/2DTNWbMlEhE?si=vTv9hAimWyhe4jEt', '_blank')}

      />

</div>
  )
}

export default Youtubecards;