import { BiHome, BiUser, BiCog } from "react-icons/bi";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiDollarSign,
  FiMail,
  FiSettings,
  FiGrid,
  FiUser,
} from "react-icons/fi";

const iconMap = {
  // bi
  BiHome,
  BiUser,
  // fi
  FiGrid,
  FiHome,
  FiUsers,
  FiBook,
  FiDollarSign,
  FiMail,
  FiSettings,
};

export const DynamicIcon = ({ iconName }) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return <FiDollarSign size={20} />; // icono por defecto
  }

  return <IconComponent size={20} />;
};
