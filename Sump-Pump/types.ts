
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GroundingSource {
  web?: {
    uri: string;
    title: string;
  };
}
