import {
  ClipboardType,
  Clock4,
  Coins,
  Component,
  Diamond,
  Gem,
  HeartHandshake,
  Hexagon,
  Image,
  Menu,
  Paintbrush,
  Send,
  SunMedium,
  Target,
  User,
  X,
  type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  menu: Menu,
  close: X,
  logo: Component,
  image: Image,
  diamond: Diamond,
  gem: Gem,
  send: Send,
  clock: Clock4,
  target: Target,
  hexagon: Hexagon,
  clipboard: ClipboardType,
  paintbrush: Paintbrush,
  sun: SunMedium,
  coins: Coins,
  user: User,
  handshake: HeartHandshake,
};

export type Icons = keyof typeof Icons;
