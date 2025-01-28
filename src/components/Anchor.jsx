const Anchor = ({ Icon, href }) => {
  return (
    <a href={href}>
      <div className="text-white bg-orange-600 p-3 rounded-xl hover:text-neutral-800 transition-all flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
        <Icon size={24} />
      </div>
    </a>
  );
};


export default Anchor;
