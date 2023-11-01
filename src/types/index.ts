export type Key = {
  color: string;
  title: string;
};

export type Point = {
  id?: number;
  title: string;
  key: string;
  subtitle?: string;
  description?: string;
  office?: string;
  countryCode?: string;
  phoneNumber?: string;
  openingHours?: [string, string];
  gender?: string;
  formattedKey?: string;
  position?: [number, number, number];
}

export type Floor = {
  id: number;
  points: Point[];
}

export type IconProps = {
  handleClick: (status: boolean) => void;
  classValue?: string;
};