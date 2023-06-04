import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Teams from "./Teams";

function Profil() {
  return (
    <div>
      <figure className="relative h-full w-full mt-14">
        <img className="h-full w-full " src="c1.jpg" alt="nature image" />
        <figcaption className="absolute bottom-52 left-2/4 flex h-52 w-[calc(100%-45rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/80 py-4 px-6 shadow-lg shadow-black/50 saturate-200 backdrop-blur-sm">
          <div className="mx-auto">
            <Typography
              className="text-[5rem] font-extrabold"
              color="blue-gray"
            >
              TENTANG KAMI
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              everything is well
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="mt-28">
        <div className="bg-gray-50">
          <div className="container mx-auto bg-gray-50">
            <p className="text-justify p-20 ">
              <strong className="text-6xl">E</strong>ndless Journey adalah
              website yang berisi mengulas objek wisata dan kuliner yang populer
              di daerah YOGYAKARTA,
              <br />
              <br />
              <p className="">
                Tujuan di buatnya website ini bukan hanya untuk para wisatawan
                namun juga masyarakat indonesia yang belum mengenal lebih dalam
                tentang wisata di yogyakarta.Tak terkecuali pada sektor wisata,
                keberadaan website sangat dibutuhkan untuk menjangkau lebih
                banyak audiens sehingga dapat memajukan usaha dan dunia wisata.
                Simak beberapa manfaat website wisata berikut:
              </p>
              <br />
              <ul class="list-disc pl-5">
                <li>
                Mengenalkan budaya dan tradisi ke seluruh dunia
                </li>
                <li>
                Merekomendasikan tempat wisata
                </li>
                <li>
                Memudahkan visitor dalam pemesanan online
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-52">
        <Teams/>
      </div>
    </div>
  );
}

export default Profil;
