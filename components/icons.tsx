import {
  Clock4,
  Diamond,
  Gem,
  Hexagon,
  Image,
  Menu,
  Send,
  Target,
  X,
  type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  menu: Menu,
  close: X,
  logo: Hexagon,
  image: Image,
  diamond: Diamond,
  gem: Gem,
  send: Send,
  clock: Clock4,
  target: Target,
};

export type Icons = keyof typeof Icons;
