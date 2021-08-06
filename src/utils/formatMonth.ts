import { format } from "date-fns";

export const formatMonth = (date: string | Date): string => {
  return format(new Date(date), "MMM");
};
