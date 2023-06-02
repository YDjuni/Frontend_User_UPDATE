import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
 
export default function Jobs() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4 mt-20 -mb-56 ml-56">
      <Card className="rounded-none mt-6 w-80  ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="gudeg.jpg" alt="" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button  onClick={() => navigate("/Produk")} className="transition ease-in-out delay-150">Baca Selengkapnya</Button>
      </CardFooter>
    </Card>
    <Card className="rounded-none mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="gudeg.jpg" alt="" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    <Card className="rounded-none mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="gudeg.jpg" alt="" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>    
    </div>
  );
}