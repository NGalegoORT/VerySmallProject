type ComponentType =
  | "layout.hero-section"
  | "component.card"
  | "component.in-line"
  | "layout.fila"
  | "component.sitios"
  | "layout.formulario"
  | "component.carrousel";


export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
}

export interface LinkProps {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
}

export type Block =
  | HeroSectionProps
  | CardProps
  | InLineProps
  | FilaCardProps
  | FormularioProps
  | CarruselProps;


interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export interface HeroSectionProps extends Base<"layout.hero-section"> {
  id: number;
  heading: string;
  subHeading: string;
  image: ImageProps;
  cta?: LinkProps;
}

export interface CardProps extends Base<"component.card">{
  id: number;
  title: string;
  description: string;
  autor: string;
  image?: ImageProps;
}

export interface InLineProps extends Base<"component.in-line">{
  id: number;
  title: string;
  subTitle: string;
}

export interface FilaCardProps extends Base<"layout.fila">{
  id: number;
  fila: {
  title: string,
  subTitle: string,
  }[];
}

export interface FormularioProps extends Base<"layout.formulario">{
  id: number;
  title: string;
  description?: string;
  email?: string;
  campo:{
    nameField: string;
    placeHolder: string;
  }[];
  link:{
    href: string;
    label: string;
    isExternal: boolean;
  }[];
}

export interface CarruselProps extends Base<"component.carrousel">{
  id: number;
  title: string;
  image:{
    id: number;
    url: string;
  }[];
}

//---------------------------------------------------------
/*

export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  visible_on: SiteVisibility;
}

export interface EventProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  price: string;
  startDate: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}


export interface InfoBlockProps extends Base<"blocks.info-block"> {
  theme: "turquoise" | "orange";
  reversed?: boolean;
  headline: string;
  content: string;
  image: ImageProps;
  cta?: LinkProps;
}

export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
  headline: string;
  excerpt: string;
  link: LinkProps;
  image: ImageProps;
}

export interface SubscribeProps extends Base<"blocks.subscribe"> {
  headline: string;
  content: string;
  placeholder: string;
  buttonText: string;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

*/