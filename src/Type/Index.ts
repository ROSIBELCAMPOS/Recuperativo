export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  temario: string[];
  duration: string;
  modality: string;
  price: string;
  facilitator: Facilitator;
}

export interface Facilitator {
  name: string;
  bio: string;
}