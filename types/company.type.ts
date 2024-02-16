import { IUser } from "./user.types";
import { IWorkhour } from "./workhour.type";

export interface ICompany {
  id: string;
  name: string;
  dbUrl: string | null;
  email: string;
  address: string;
  image: string;
  Workhours: IWorkhour[];
  Users: IUser[];
}
