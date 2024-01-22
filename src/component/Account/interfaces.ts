export interface NavLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
}

export interface MyAccountProps {
  onSubmit: (formData: MyFormData) => void;
}
export interface MyFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  city: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SidebarProps {}

export interface OrderStatusProps {}

export interface DeliveryInfoProps {}

export interface NotificationsProps {}

export interface FavoritesProps {}

export interface LogoutProps {}
