// hooks/useUserRole.js
import { useEffect, useState } from "react";

const useUserRole = (email) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://my-portfolio-server-theta-ivory.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [email]);

  return { role, loading };
};

export default useUserRole;
