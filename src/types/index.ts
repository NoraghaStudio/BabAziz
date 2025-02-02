export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  image: string;
  category: string;
  description: string;
  descriptionAr: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'accepted' | 'completed' | 'rejected';
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  createdAt: Date;
}