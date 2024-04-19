export interface NavLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
}

export interface NavLinkPropsMobile {
  to: string;
  text: string;
  icon: React.ReactNode;
  updateCurrentMenuItem: (text: string) => void;
  currentMenuItem: string;
}

export interface MyAccountProps {}
export interface MyFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  city: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SidebarProps {
  initialMenuItem: string;
}

export interface IconProps {
  className?: string;
  color?: string;
}

export interface BreadcrumbsProps {
  path: string;
}

export interface OrderStatusProps {}

export interface DeliveryInfoProps {}

export interface NotificationsProps {}

export interface FavoritesProps {}

export interface LogoutProps {}
