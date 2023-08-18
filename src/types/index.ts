export interface JobItem {
  job_id: string;
  job_title: string;
  job_country: string;
  employer_logo: string;
  employer_name: string;
  job_description?: string;
  job_google_link?: string;
  job_highlights?: {
    Qualifications?: string[];
    Responsibilities?: string[];
  };
}
