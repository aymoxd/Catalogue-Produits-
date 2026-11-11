import { createContext, useContext, useEffect, useMemo, useState } from "react";

// نخزن المستخدم لتشارك حالة الدخول بين صفحة الدخول والمسارات المحمية.
const AuthContext = createContext(null);
const AUTH_STORAGE_KEY = "react-tp-auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_STORAGE_KEY);
  }, [user]);

  const value = useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    login: (email) => setUser({ email }),
    logout: () => setUser(null),
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// نُبقي hook هنا مع السياق لتجنب إنشاء ملفات إضافية في بنية المشروع.
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}

