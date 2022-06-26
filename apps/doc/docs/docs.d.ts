declare type Nav = {
  title: string;
  path?: string;
  children?: { title: string; path: string }[];
}[];

declare type Menu = Record<
  string,
  {
    title?: string;
    children?: string[];
    path?: string;
  }[]
>;
