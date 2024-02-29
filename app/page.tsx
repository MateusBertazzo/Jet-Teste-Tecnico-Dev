import TableDesktop from "./components/tableDesktop";
import TableMobile from "./components/TableMobile";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <TableDesktop />
      <TableMobile />
    </div>
  );
}
