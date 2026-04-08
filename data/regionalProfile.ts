export type RegionKey = "uk" | "india";

export type RegionalProfile = {
  label: string;
  email: string;
  phone: string;
  location: string;
  cvUrl: string;
  cvDownloadName: string;
};

export const regionalProfile: Record<RegionKey, RegionalProfile> = {
  uk: {
    label: "UK",
    email: "arisettynithin@gmail.com",
    phone: "+44 7768480265",
    location: "London (Open to Relocate)",
    cvUrl: "/cv/nithin-arisetty-uk.pdf",
    cvDownloadName: "Nithin Arisetty BI UK.pdf"
  },
  india: {
    label: "India",
    email: "nithinarisetty@gmail.com",
    phone: "+91 8919339975",
    location: "London (Open to Relocate)",
    cvUrl: "/cv/nithin-arisetty-india.pdf",
    cvDownloadName: "Nithin Arisetty BI IND.pdf"
  }
};
