/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename: 'Mutation';
  createSearchHistoryEntry: SearchHistory;
};


export type MutationCreateSearchHistoryEntryArgs = {
  queryString: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename: 'Query';
  searchHistoryList?: Maybe<Array<SearchHistory>>;
};

export type SearchHistory = {
  __typename: 'SearchHistory';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  queryString: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GetSearchHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSearchHistoryQuery = { __typename: 'Query', searchHistoryList?: Array<{ __typename: 'SearchHistory', id: string, queryString: string, createdAt: string, userId: string }> | null };


export const GetSearchHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSearchHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchHistoryList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"queryString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>;