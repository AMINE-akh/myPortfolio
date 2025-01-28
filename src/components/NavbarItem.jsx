/* eslint-disable react/prop-types */
const NavbarItem = ({ Icon, href, label }) => {
  return (
    <div className=" relative group">
      <a href={href}>
        <div className="relative hover:scale-110 transition-all">
          <Icon className="group-hover:text-white" size={22} />
        </div>
      </a>
      <p className="bg-neutral-500/5 w-max py-1 px-2 opacity-0 left-1/2 -translate-x-1/2 top-11 text-sm font-medium rounded cursor-default invisible group-hover:visible group-hover:opacity-100 absolute transition-all">
        {label}
      </p>
    </div>
  );
};

export default NavbarItem;
