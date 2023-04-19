import { Hexagon, Image, Menu, X, type Icon as LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  menu: Menu,
  close: X,
  logo: Hexagon,
  image: Image,
};

export type Icons = keyof typeof Icons;
