import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Kategori_M() {
  return (
    <div>
    <figure className="relative h-full w-full mt-14">
      <img className="h-full w-full " src="kategori2.jpg" alt="nature image" />
      <figcaption className="absolute bottom-52 left-2/4 flex h-52 w-[calc(100%-45rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/80 py-4 px-6 shadow-lg shadow-black/50 saturate-200 backdrop-blur-sm">
        <div className="mx-auto">
          <Typography className="text-[5rem] font-extrabold" color="blue-gray">
            KULINER JOGJA
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
          everything is well
          </Typography>
        </div>
      </figcaption>
    </figure>
    <div className="content-top mb-24">
        <div className="row grid grid-rows grid-flow-col gap-4 mx-24">
          <div className="container h-auto">
            <div className="content-title mt-24 pb-10 border-b-8 w-96  border-yellow-600 text-5xl text-left font-extrabold text-textColor">
              <h1>Makan</h1>
            </div>
            <div className="content-subtitle text-start text-textColor mt-5 w-[35rem] ">
            "Food is our common ground, a universal experience".
            </div>
          </div>
        </div>
      </div>
      <div className="mt-52">
      <div className="grid place-items-start pb-32 md:place-items-center">
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
    </div>
    
  );
}

export default Kategori_M;
