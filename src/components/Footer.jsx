
const Footer = () => { 
    
  return (
    <footer className="relative bg-gray-900 text-white py-4 mt-auto mb-0">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Cinema Wala. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="#" className="text-blue-400 hover:underline">
            X
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-400 hover:underline">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;