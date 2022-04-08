import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://624c258f44505084bc5a1266.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contact', id })),
              { type: 'Contact', id: 'LIST' },
            ]
          : [{ type: 'Contact', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Contact', id }],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),
  }),
});

export const useQueryState = contactsApi.endpoints.fetchContacts.useQueryState;

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
