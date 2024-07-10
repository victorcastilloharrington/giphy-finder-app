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
  clearSearchHistory: Scalars['Boolean']['output'];
  createSearchHistoryEntry: SearchHistory;
};


export type MutationClearSearchHistoryArgs = {
  userId: Scalars['String']['input'];
};


export type MutationCreateSearchHistoryEntryArgs = {
  queryString: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename: 'Query';
  searchHistoryList?: Maybe<Array<SearchHistory>>;
};


export type QuerySearchHistoryListArgs = {
  userId: Scalars['String']['input'];
};

export type SearchHistory = {
  __typename: 'SearchHistory';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  queryString: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GetSearchHistoryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetSearchHistoryQuery = { __typename: 'Query', searchHistoryList?: Array<{ __typename: 'SearchHistory', id: string, queryString: string, createdAt: string, userId: string }> | null };

export type CreateHistoryEntryMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  queryString: Scalars['String']['input'];
}>;


export type CreateHistoryEntryMutation = { __typename: 'Mutation', createSearchHistoryEntry: { __typename: 'SearchHistory', id: string, queryString: string, createdAt: string, userId: string } };

export type ClearHistoryMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ClearHistoryMutation = { __typename: 'Mutation', clearSearchHistory: boolean };


export const GetSearchHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSearchHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchHistoryList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"queryString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>;
export const CreateHistoryEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createHistoryEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"queryString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSearchHistoryEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"queryString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"queryString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"queryString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateHistoryEntryMutation, CreateHistoryEntryMutationVariables>;
export const ClearHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"clearHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearSearchHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<ClearHistoryMutation, ClearHistoryMutationVariables>;