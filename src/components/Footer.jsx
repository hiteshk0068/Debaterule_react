import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2 text-gray-300">JOIN OUR TEAM</h3>
          <ul className="space-y-1">
            <li><a href="https://discord.gg/5Kbg8vGVm2">Discord</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="https://www.linkedin.com/in/hiteshk0068">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-300">EXPERTISE</h3>
          <ul className="space-y-1">
            <li><a href="#">Results</a></li>
            <li><a href="#">Notable Students</a></li>
            <li><a href="#">Why Debate?</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-300">RESOURCES</h3>
          <ul className="space-y-1">
            <li><a href="https://www.youtube.com/@DebateRule">YouTube</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-300">ABOUT US</h3>
          <ul className="space-y-1">
            <li><a href="#">Staff</a></li>
            <li><a href="#">What Sets Us Apart</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Values</a></li>
            <li><a href="#">Achievements</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-300">NEED GUIDANCE?</h3>
          <ul className="space-y-1">
            <li><a href="#">Email</a></li>
            <li><a href="#">Schedule Private Call</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10">
        <p>Copyright © DebateRule LLC. All Rights Reserved.</p>
        <p>
          Built with love by{" "}
          <a
            href="https://www.linkedin.com/in/hiteshk0068"
            className="underline font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hitesh Kumar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
