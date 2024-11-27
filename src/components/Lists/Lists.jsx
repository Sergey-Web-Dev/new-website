import clsx from "clsx";
import List from "../List/List";

const Lists = ({ className, data }) => {
  return (
    <div className={className}>
      {data.map(({ id, style, name }) => (
        <List
          key={id}
          className="navbar__list"
          name={name}
          style={clsx(style, {
            "navbar__link font-poppins text-sm font-normal  uppercase tracking-widest":
              style === undefined,
          })}
          url="../../index.tsx"
        />
      ))}
    </div>
  );
};

export default Lists;
