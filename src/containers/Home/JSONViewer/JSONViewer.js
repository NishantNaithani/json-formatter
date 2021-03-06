import React from "react";

import { ArrayComponent } from "../Array";
import { ObjectComponent } from "../Object";

import { BooleanComponent } from "../../../components/Boolean";
import { NumberComponent } from "../../../components/Number";
import { StringComponent } from "../../../components/String";
import { NullComponent } from "../../../components/Null";

import { isJSONString } from "../../../helpers";

const createNumberComponent = ({ key = null, value, spacing, showKey }) => {
  return (
    <NumberComponent
      key={`number-component-${Date.now()}-${key}`}
      valueKey={key}
      value={value}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createNullComponent = ({ key = null, spacing, showKey }) => {
  return (
    <NullComponent
      key={`null-component-${Date.now()}-${key}`}
      valueKey={key}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createStringComponent = ({ key = null, value, spacing, showKey }) => {
  return (
    <StringComponent
      key={`string-component-${Date.now()}-${key}`}
      valueKey={key}
      value={value}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createBooleanComponent = ({ key = null, value, spacing, showKey }) => {
  return (
    <BooleanComponent
      key={`boolean-component-${Date.now()}-${key}`}
      valueKey={key}
      value={value}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createObjectComponent = ({ key, value, spacing, showKey }) => {
  return (
    <ObjectComponent
      key={`object-component-${Date.now()}-${key}`}
      valueKey={key}
      value={value}
      callback={createTypesComponent}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createArrayComponent = ({ key = null, items, spacing }) => {
  return (
    <ArrayComponent
      key={`array-component-${Date.now()}-${key}`}
      valueKey={key}
      value={items}
      callback={createTypesComponent}
      space={spacing}
    />
  );
};

const createTypesComponent = ({ key, value, spacing, showKey }) => {
  if (value === null) {
    return createNullComponent({ key, value, spacing, showKey });
  }

  if (typeof value === "number") {
    return createNumberComponent({ key, value, spacing, showKey });
  }

  if (typeof value === "string") {
    return createStringComponent({ key, value, spacing, showKey });
  }

  if (typeof value === "boolean") {
    return createBooleanComponent({ key, value, spacing, showKey });
  }

  if (Array.isArray(value)) {
    return createArrayComponent({ key, items: value, spacing });
  }

  if (typeof value === "object" && value !== null) {
    return createObjectComponent({ key, value, spacing, showKey });
  }

  return null;
};

const createData = (data) => {
  if (data && isJSONString(data)) {
    const parsedJSON = JSON.parse(data);
    return (
      <ObjectComponent
        key={`object-component-main-${Date.now()}`}
        value={parsedJSON}
        callback={createTypesComponent}
        space={0}
        initial
      />
    );
  }

  return null;
};

const JSONViewer = ({
  json,
  show,
  error,
  errorMessage = "JSON string is not valid!",
}) => {
  if (show) {
    const outputJSON = createData(json);

    return <>{outputJSON && <div>{outputJSON}</div>}</>;
  }

  if (error) {
    return <div>{errorMessage}</div>;
  }

  return null;
};

export default JSONViewer;
