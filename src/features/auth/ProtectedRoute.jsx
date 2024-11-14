import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { db } from "../../firebase"; // Assume `db` is your Firestore instance
import { doc, getDoc } from "firebase/firestore";
import LoadingPage from "../loading/LoadingPage";
import { useAuth } from "../../contexts/AuthProvider";

export default function ProtectedRoute() {
  const [isAdmin, setIsAdmin] = useState(null);
  const { user, loading } = useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      if (user && !loading) {
        // Corrected to !loading
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        console.log(userData);
        setIsAdmin(userData?.role === "admin");
      } else if (!user && !loading) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [user, loading]); // Including db as a dependency for clarity

  if (loading) return <LoadingPage message="Getting Current User" />;

  if (isAdmin === null)
    return <LoadingPage message="Checking User Authority" />;

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}
