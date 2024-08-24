import { Calendar, Car, Heart, CalendarDays, Layers } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Vehiculos",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Items Mantenimiento",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Plan Mantenimiento",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Layers,
    label: "Administrar Vehiculos",
    href: "/manage",
  },
  {
    icon: CalendarDays,
    label: "Administrar Plan",
    href: "/all-cars",
  },
];
