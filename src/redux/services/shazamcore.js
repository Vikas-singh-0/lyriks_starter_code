import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key','febfce206cmshae0927f2fdcf5c9p1670fdjsn1ad082b7572e');
			return headers;
		},
	}),
	endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `/infos`,
    }),
  }),
});

export const {
	useGetTopChartsQuery
} = shazamCoreApi;


