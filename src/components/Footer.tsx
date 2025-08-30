import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">NIRAMYA</span>
                <p className="text-sm text-gray-400 -mt-1">Free from Illness</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A multilingual, AI-enabled telemedicine platform bringing quality healthcare 
              to rural India through innovative technology and compassionate care.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-400">Smart India Hackathon 2025</p>
              <p className="text-sm text-gray-400">Problem Statement ID: 25018</p>
              <p className="text-sm text-gray-400">Team: Debug Thugs</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link to="/workflow" className="text-gray-300 hover:text-blue-400 transition-colors">Workflow</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-blue-400 transition-colors">Impact</Link></li>
              {/* <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</Link></li> */}
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">niramya@debugthugs.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Nabha, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NIRAMYA. All rights reserved. Built for Smart India Hackathon 2025.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Privacy Policy</span>
            <span className="text-sm text-gray-400">Terms of Service</span>
            <span className="text-sm text-gray-400">Healthcare Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;