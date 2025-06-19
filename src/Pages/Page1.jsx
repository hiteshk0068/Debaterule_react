import React from 'react'
import Collection_card from '../components/Collection_card';
import CommentSection from '../components/CommentSection';
import Page_title from '../components/Page_title';



const Page1 = () => {



    const answerLinks = [
      {
        text: "Two Astrophysicists Debate Free Will (YT)",
        href: "https://youtu.be/LXvv6CbGg8A?si=FDEjN-ajDFuE_esx",
      },
      {
        text: "The Illusion of Free Will (YT)",
        href: "https://youtu.be/2_BTVN68-ZA?si=OrIG2PqX7V2IERtu",
      },
      {
        text: "Wikipedia",
        href: "https://en.wikipedia.org/wiki/Free_will",
      },
      {
        text: "Internet Encyclopedia of Philosophy",
        href: "https://iep.utm.edu/freewill/",
      },
    ];

    const opinionLinks = [
      {
        text: "The Free Will Debate: A Philosophical Overview",
        href: "#/page1",
      },
      {
        text: "Free Will and Determinism: A Modern Perspective",
        href: "#/page1",
      },
      {
        text: "The Science of Free Will",
        href: "#/page1",
      },
    ];

    const LibraryLinksbyuser = [
      {
        text: "Free Will and Moral Responsibility",
        href: "#/page1",
      },
      {
        text: "The Neuroscience of Free Will",
        href: "#/page1",
      },
      {
        text: "Free Will in the Age of AI",
        href: "#/page1",
      },
    ];


  
    return (
<div>
  <div className='w-full h-fit bg-sky-100 flex justify-around items-top  '>
    <div className='w-fit h-fit m-6  flex-wrap '>
      <div>
        
        <Collection_card
          title="Default Library"
          links={answerLinks}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>

      <div>
        <Collection_card
          title="Library Submitted by you"
          links={LibraryLinksbyuser}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>

      <div>
        <Collection_card
          title="Opinion Articles"
          links={opinionLinks}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>
    </div>
 

    <div className='p-2 w-fit flex justify-around mt-5 h-fit  flex-wrap '>
      <Page_title
        title="Welcome to Discussion"
        subtitle="The place where ideas evolve"
        bgColor="bg-gradient-to-r from-purple-600 to-pink-500"
        textColor="text-white"
      />
      


        {/* for comment section */}
      
      
      
        <CommentSection />
      
    </div>


    <div className='w-fit h-fit  align-top   flex-wrap p-6'>
      <div>
        <Collection_card
          title="Default Library"
          links={answerLinks}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>

      <div>
        <Collection_card
          title="Library Submitted by you"
          links={LibraryLinksbyuser}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>

      <div>
        <Collection_card
          title="Opinion Articles"
          links={opinionLinks}
          moreLink={{ text: "View More", href: "#/page1" }}
        />
      </div>
    </div>
    
  </div>
</div>  

    

    




  

  
  );
  

 



};






export default Page1









