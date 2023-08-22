import React from "react";
import { LuContact } from "react-icons/lu";
import { BiHome } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ShoppingBagIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const items = [
  { name: "Home", icon: <BiHome />, to: "/" },
  { name: "Products", icon: <MdProductionQuantityLimits />, to: "/products" },
  { name: "Cart", icon: <BsCart2 />, to: "/cart" },
  { name: "About Us", icon: <FcAbout />, to: "/about-us" },
  { name: "Log Out", icon: <PowerIcon />, to: "/" },
];

const menuItems = [
  {
    name: "instagram",
    icon: <FaInstagram />,
    to: "/",
  },
  {
    name: "telegram",
    icon: <FaTelegramPlane />,
    to: "/",
  },
  {
    name: "whatsApp",
    icon: <FaWhatsapp />,
    to: "/",
  },
];

export default function SidebarContent() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-[300px] max-w-[20rem] p-2 py-0 my-0 shadow-xl shadow-blue-gray-900/5 bg-[#ede9fe]">
      <div className="mb-2 p-1"></div>
      <List>
        {items.map((item) => (
          <Link to={item.to}>
            <ListItem>
              <ListItemPrefix>
                <div className="h-5 w-5 text-xl">{item.icon}</div>
              </ListItemPrefix>
              {item.name}
            </ListItem>
          </Link>
        ))}
        <hr className="my-2 border-blue-gray-300" />
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <LuContact className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Contact Us
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {menuItems.map((item) => (
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <div className="mr-2">{item.icon}</div>
                  {item.name}
                </ListItem>
              ))}
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}
