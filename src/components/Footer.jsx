import React from 'react';

function Footer() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700 text-center">
      <p>&copy; {new Date().getFullYear()} Kolekrs</p>
      <div className="mt-5">
        <a href="#" className="text-gray-400 hover:text-orange-500 mx-3">
          Terms of Service
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-500 mx-3">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
