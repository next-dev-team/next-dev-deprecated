interface IBlog {
  meta: Meta;
  data: Datum[];
}

interface Datum {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: Links;
}

interface Links {
  previous?: any;
  current: string;
  next: string;
}
