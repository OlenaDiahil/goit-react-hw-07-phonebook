// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const contactsApi = createApi({
//     reducerPath: "contactsApi",
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://6500383418c34dee0cd484f6.mockapi.io'}),
//     endpoints: (builder) => ({
//         fetchContacts: builder.query({
//             query: () => '/contacts',
//             providesTags: ['Contacts'],
//         }),
//         addContact: builder.mutation ({
//             query: (body) => ({
//                 url: "/contacts",
//                 method: "POST",
//                 body,    
//             }),
//             invalidatesTags: ['Contacts'],
//         }),
//         removeContact: builder.mutation ({
//             query: (id) => ({
//                 url: `/contacts${id}`,
//                 method: "DELETE",
//                 id,    
//             }),
//             invalidatesTags: ['Contacts'],
//         })
//     }),
// });

// export const { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;