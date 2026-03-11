import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { CinemaDetail, SearchResult } from "../types";
import { APIKEY, BASEURL } from "./api-constant";

export const getSearchCinema = (
  SEARCH_TERM?: string,
  PAGE_NUMBER?: number,
  SEARCH_YEAR?: number,
) => {
  const searchTermQuery = `${SEARCH_TERM ? `&s=${SEARCH_TERM}` : ""}`;
  const pageQuery = `${PAGE_NUMBER ? `&page=${PAGE_NUMBER}` : `&page=1`}`;
  const searchYearQuery = `${SEARCH_YEAR ? `&y=${SEARCH_YEAR}` : ""}`;

  const APIURL = `${BASEURL}${APIKEY}${searchTermQuery}${pageQuery}${searchYearQuery}`;

  // console.log('APIURL: ', APIURL)

  return useQuery({
    queryKey: [SEARCH_TERM, PAGE_NUMBER, SEARCH_YEAR],
    queryFn: async () => {
      const response = await axios.get(APIURL);
      const data: unknown = await response.data;
      return data as SearchResult;
    },
    enabled: SEARCH_TERM !== undefined,
    // && SEARCH_TERM !== ''
  });
};

// export const getCinemaDetail = (CINEMA_ID?: string, PLOT_LENGTH?: 'short' | 'full') => {

//     const cinemaQuery = `&i=${CINEMA_ID}`
//     const plotLengthQuery = `&plot=${PLOT_LENGTH}`
//     const APIURL = `${BASEURL}${APIKEY}${cinemaQuery}${plotLengthQuery}`

//     return useQuery({
//         queryKey: [CINEMA_ID],
//         queryFn: async () => {
//             const response = await axios.get(APIURL)
//             const data: unknown = await response.data
//             return data as CinemaDetail
//         },
//         enabled: CINEMA_ID !== undefined && PLOT_LENGTH !== undefined
//     })

// }

// 1. Raw fetch function — used in queryFn
export const fetchCinemaDetail = async (
  CINEMA_ID: string,
  PLOT_LENGTH: "short" | "full",
) => {
  const APIURL = `${BASEURL}${APIKEY}&i=${CINEMA_ID}&plot=${PLOT_LENGTH}`;
  const response = await axios.get(APIURL);
  return response.data as CinemaDetail;
};

// 2. Keep your existing hook for the DetailPage — now calls fetchCinemaDetail
export const getCinemaDetail = (
  CINEMA_ID?: string,
  PLOT_LENGTH?: "short" | "full",
) => {
  return useQuery({
    queryKey: [CINEMA_ID],
    queryFn: () => fetchCinemaDetail(CINEMA_ID!, PLOT_LENGTH!),
    enabled: CINEMA_ID !== undefined && PLOT_LENGTH !== undefined,
  });
};
