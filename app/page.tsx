import TableDesktop from "./components/tableDesktop";
import TableMobile from "./components/TableMobile";

export default function Home() {
  return (
    <div className="p-5 h-screen bg-gray-100">
      <TableDesktop />
      <TableMobile />
    </div>
  );
}
