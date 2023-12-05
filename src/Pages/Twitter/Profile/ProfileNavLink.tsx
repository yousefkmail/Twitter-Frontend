import { NavLink } from "react-router-dom";

interface ProfileNavLinkProps {
  to: string;
  content: string;
}
const ProfileNavLink = ({ to, content }: ProfileNavLinkProps) => {
  return (
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "var(--website-secondary-color)",
              textAlign: "center",
              flexGrow: "1",
              padding: "20px",
              fontWeight: "bolder",
            }
          : {
              color: "white",
              textAlign: "center",
              flexGrow: "1",
              padding: "20px",
            }
      }
      to={to}
    >
      {content}
    </NavLink>
  );
};

export default ProfileNavLink;
