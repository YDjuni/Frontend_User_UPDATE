import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function Teams() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="conatiner-title text-6xl font-semibold border-b-8 mx-auto w-96  border-yellow-600">
          Teams
        </div>
        <div className="container-body mt-20 grid grid-cols-3 gap-12">
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('yuda.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Yuda Juni P.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="yuda1.jpg"
              />
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('kemekbg.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Zaldi Fadillah Z.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="kemek.jpg"
              />
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('kotonbg.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                UI/UX Designer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Reyhan Fajar N.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="koton1.jpg"
              />
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('sipetbg1.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                UI/UX Designer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Vedro Naza F.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="sipet11.jpg"
              />
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('wildanbg.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                Full Stack Developer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Wildan Khoiru R. N. W.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="wildan11.jpg"
              />
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="shadow-lg shadow-blue-gray-500 relative grid h-[38rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('sipetbg.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                Full Stack Developer
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Rizky A.
              </Typography>
              <Avatar
                size="xxl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="rizky1.jpg"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Teams;
