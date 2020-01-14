
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Shape",
        "possibleTypes": [
          {
            "name": "Square"
          },
          {
            "name": "Rectangle"
          },
          {
            "name": "Circle"
          }
        ]
      }
    ]
  }
};
      export default result;
    