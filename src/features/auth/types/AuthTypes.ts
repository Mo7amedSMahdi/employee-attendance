// AuthTypes.ts

export interface User {
    id: string;
    username: string;
    email: string;
}
  
export interface LoginCredentials {
    usernameOrEmail: string;
    password: string;
}
  
export interface AuthContextType {
    user: User | null;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
}
