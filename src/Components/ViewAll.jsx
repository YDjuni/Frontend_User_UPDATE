import axios from "axios";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "../App.css";

export default function Search() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <div>
      <div className="well" />
      <div className="content-top mb-24">
        <div className="row grid grid-rows grid-flow-col gap-4 mx-24">
          <div className="container h-auto">
            <div className="content-title mt-24 pb-10 border-b-8 w-96  border-yellow-600 text-5xl text-left font-extrabold text-textColor">
              <h1>Refreshing</h1>
            </div>
            <div className="content-subtitle text-start text-textColor mt-5 w-[35rem] ">
              Tidak ada salahnya kalau kamu merasa lelah atau bosan terhadap apa
              yang kamu kerjakan. Cobalah untuk beristirahat sebentar, lakukan
              hobi atau liburan agar pikiran bersih dan kamu bisa kembali
              semangat bekerja.
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-start pb-32 md:place-items-center">
        <Card className="mt-24 h-44 w-3/5 bg-gray-200 mb-40 sm:mx-auto">
          <div className="text-3xl text-black mt-5">
            Telusuri Dengan Cepat ?
          </div>
          <div className="flex mx-auto mt-12">
            <div className="flex border border-purple-200 rounded">
              <input
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <button className="px-4 text-white bg-purple-600 border-l rounded">
                Search
              </button>
            </div>
          </div>
        </Card>
        <Card className="flex-row w-full max-w-[70rem] m-3 h-48">
          <CardHeader
            shadow={false}
            floated={false}
            className="w-1/5 shrink-0 m-0 rounded-r-none"
          >
            <img
              src="https://unsplash.it/400/200"
              alt="image"
              className="w-96 h-48 object-cover"
            />
          </CardHeader>
          <CardBody className="w-4/5">
            <Typography variant="h4" color="blue-gray" className=" text-start ">
              Lyft launching cross-platform service this week
            </Typography>
            <a href="#" className="inline-block content-end w-full text-end">
              <Button
                variant="text"
                className="flex items-end gap-4 mt-20  ml-auto  "
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
