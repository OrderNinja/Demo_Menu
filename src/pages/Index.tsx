
import { Navigate } from "react-router-dom";

// This is the main entry point, which now redirects to our QR code page
const Index = () => {
  return <Navigate to="/qr" replace />;
};

export default Index;
