/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getShapeQueryType
// ====================================================

export interface getShapeQueryType_shape_Square {
  __typename: "Square";
  sideLen: number;
}

export interface getShapeQueryType_shape_Rectangle {
  __typename: "Rectangle";
  width: number;
  height: number;
}

export interface getShapeQueryType_shape_Circle {
  __typename: "Circle";
  radius: number;
}

export type getShapeQueryType_shape = getShapeQueryType_shape_Square | getShapeQueryType_shape_Rectangle | getShapeQueryType_shape_Circle;

export interface getShapeQueryType {
  shape: getShapeQueryType_shape | null;
}
