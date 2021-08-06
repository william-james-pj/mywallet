import { format } from "date-fns";

export const formatDateYear = (date: string): string => {
  return format(new Date(date), "dd/MMM");
};
