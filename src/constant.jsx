import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const SIDEMENU = [
  { name: "Dashboard", link: "/dashboard", icon: <DashboardIcon /> },
  { name: "Doctors", link: "/doctors", icon: <MedicalServicesIcon /> },
  { name: "Patients", link: "/patients", icon: <PeopleIcon /> },
  { name: "Appointment", link: "/appointement", icon: <CalendarMonthIcon /> },
];

export const DOCTORS = [
  {
    name: "Dr. Manan Tandon",
    stream: "Sexologist",
    joining_date: "16 July, 2025",
    img: "/images/profile/manan.jpg",
  },
  {
    name: "Dr. Suman Thakur",
    stream: "Boobologist",
    joining_date: "4 January, 2025",
    img: "/images/profile/suman.jpg",
  },
  {
    name: "Dr. Ankit Gurjar",
    stream: "Testologist",
    joining_date: "14 June, 2025",
    img: "/images/profile/ankit.jpg",
  },
];
