import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-white text-center py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h3 className="font-bold mb-2">Main</h3>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Work With Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">My Gear</h3>
            <ul>
              <li>Learn</li>
              <li>Courses</li>
              <li>Tutorials</li>
              <li>Notes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Refund</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Social</h3>
            <ul>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-4">&copy; 2025 Takniki Niga. All rights reserved.</p>
    </footer>
  );
};
