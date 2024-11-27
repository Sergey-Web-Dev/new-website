const List = ({ id, className, name, style, url }) => {
  return (
    <div className={className}>
      <a href={url} className={style}>
        {name}
      </a>
    </div>
  );
};

export default List;
