type NavLinkProps = {
  label: string;
  href: string;
  active?: boolean;
};

const NavLink = ({ label, href, active = false }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={active ? "nav-link-active" : "nav-link"}
    >
      {label}
    </a>
  );
};

export default NavLink;
