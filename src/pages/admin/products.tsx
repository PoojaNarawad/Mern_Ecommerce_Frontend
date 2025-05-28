import { ReactElement, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import TableHOC from "../../Components/admin/TableHOC";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img = "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61cFB2OrkCL._SY355_.jpg";
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const img3 = "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71ftBTXfsbL._AC_UL480_FMwebp_QL65_.jpg";
const img4 = "https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg"

const arr: Array<DataType> = [
 
  {
    photo: <img src={img} alt="Shoes" />,
    name: "eMeet S600 4K Webcam for Streaming",
    price: 2166,
    stock: 619,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img3} alt="Shoes" />,
    name: "Saregama Carvaan Premium Hindi - Portable Music Player",
    price: 1365,
    stock: 1119,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img4} alt="Shoes" />,
    name: "Fire TV Stick HD",
    price: 4499,
    stock: 444,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
];

const Products = () => {
  const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Products",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
