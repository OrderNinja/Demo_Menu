
import { Navigate } from "react-router-dom";

// This is the main entry point, which redirects to our landing page
const Index = () => {
  return <Navigate to="/landing" replace />;
};

export default Index;
