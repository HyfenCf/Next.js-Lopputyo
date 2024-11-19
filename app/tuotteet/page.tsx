import Link from "next/link";
import CustomTable from "../components/CustomTable";

const productColumns = ["Tuotekoodi", "Nimi", "Hinta", "Varastosaldo"];
const productData = [
  {
    Tuotekoodi: "001",
    Nimi: (
      <Link
        href="/tuotteet/web-design-package"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Web Design Package
      </Link>
    ),
    Hinta: "$500.00",
    Varastosaldo: 10,
  },
  {
    Tuotekoodi: "002",
    Nimi: (
      <Link
        href="/tuotteet/custom-development-service"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Custom Development Service
      </Link>
    ),
    Hinta: "$1500.00",
    Varastosaldo: 5,
  },
  {
    Tuotekoodi: "003",
    Nimi: (
      <Link
        href="/tuotteet/seo-optimization-service"
        className="text-blue-500 underline hover:text-blue-700"
      >
        SEO Optimization Service
      </Link>
    ),
    Hinta: "$300.00",
    Varastosaldo: 20,
  },
];

export default function Tuotteet() {
  return (
    <div className="bg-white bg-opacity-80 min-h-screen pt-16 pb-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Tuotteet
      </h1>

      {/* Table container */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <CustomTable
          title="Tuotteet"
          columns={productColumns}
          data={productData}
        />
      </div>
    </div>
  );
}
