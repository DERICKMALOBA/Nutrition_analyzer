import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: support@nutritrack.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Nutri Street, Healthy City</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-lg">
            <a href="https://facebook.com" className="hover:text-white">Facebook</a>
            <a href="https://twitter.com" className="hover:text-white">Twitter</a>
            <a href="https://instagram.com" className="hover:text-white">Instagram</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NutriTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
