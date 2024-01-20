function ListGroup() {
  const items = ["Home", "QR code", "Event list", "Upload_pic"];

  return (
    <>
      <h1>list</h1>

      <p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item,index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
