export interface User {
  token: string;
  expired: number;
  refreshToken: string;
  userId: string;
  tokenType: string;
  username: string;
  branchName: string;
  roles: Role[];
  admin: boolean;
}

export interface Role {
  name: string;
}


export interface MenuItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}