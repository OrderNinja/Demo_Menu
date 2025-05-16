
import { Navigate } from "react-router-dom";

// This is the main entry point, which just redirects to our landing page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
