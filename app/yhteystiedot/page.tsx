"use client";

import dynamic from "next/dynamic";
import CustomTable from "../components/CustomTable";

const DynamicMap = dynamic(() => import("../components/Map"), { ssr: false });

const columns = ["Nimi", "Sähköposti", "Puhelin", "Tehtävä"];
const staffData = [
  {
    Nimi: "Matti Meikäläinen",
    Sähköposti: "matti@nextweb.fi",
    Puhelin: "+358 40 1234567",
    Tehtävä: "Toimitusjohtaja",
  },
  {
    Nimi: "Anna Virtanen",
    Sähköposti: "anna@nextweb.fi",
    Puhelin: "+358 40 9876543",
    Tehtävä: "Web-suunnittelija",
  },
  {
    Nimi: "Pekka Korhonen",
    Sähköposti: "pekka@nextweb.fi",
    Puhelin: "+358 40 5555555",
    Tehtävä: "Asiakaspalvelu",
  },
];
export default function Yhteystiedot() {
  return (
    <div className="bg-white bg-opacity-80 min-h-screen pt-16">
      <h1 className="text-3xl text-center font-bold">Yhteystiedot</h1>

      <div className="text-center mb-8 mt-3 bg-white bg-opacity-85 rounded-3xl shadow-lg max-w-md mx-auto pt-4 pb-4">
        <p className="text-xl">NextWeb Solutions Oy</p>
        <p>Hevosenkengänkatu, 06100 Porvoo</p>
        <p>info@nextwebsolutions.fi</p>
        <p>+045 1234567</p>
      </div>

      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="overflow-x-auto rounded-lg pt-10 px-8 sm:px-16 pb-8 w-2/3">
          <CustomTable
            title="Yrityksen henkilöstö"
            columns={columns}
            data={staffData}
          />
        </div>

        <div className="flex flex-col justify-center items-center bg-white bg-opacity-85 shadow-lg rounded-2xl w-96 pt-4 pb-4">
          <h1 className="text-2xl pb-4">Sijainti</h1>
          <div className="w-full h-72 rounded-lg overflow-hidden relative p-8">
            <DynamicMap />
          </div>
        </div>
      </div>
    </div>
  );
}
