import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">About StudyCycle</h2>
          <p>
            StudyCycle connects students and tutors to streamline study session scheduling, resource sharing, and user management. By integrating these functionalities into a single platform, we aim to enhance collaboration, improve access to study materials, and ensure effective management of educational activities.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <ul>
            <li className="mb-2">Study Session Scheduling</li>
            <li className="mb-2">Resource Sharing</li>
            <li className="mb-2">User Management</li>
            <li className="mb-2">Enhanced Collaboration Tools</li>
            <li className="mb-2">Effective Educational Activity Management</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: support@studycycle.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="flex mt-4">
            <a href="https://facebook.com/studycycle" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/studycycle" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/studycycle" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/studycycle" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p>&copy; {new Date().getFullYear()} StudyCycle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
