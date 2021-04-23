import React from "react";

import { ArrayComponent } from "../../../components/Array";
import { ObjectComponent } from "../../../components/Object";
import { BooleanComponent } from "../../../components/Boolean";
import { NumberComponent } from "../../../components/Number";
import { StringComponent } from "../../../components/String";
import { NullComponent } from "../../../components/Null";

import { isJSONString } from "../../../helpers";

const INITIAL_SPACE = 4;

const createNumberComponent = ({ key = null, value, spacing, showKey }) => {
  return (
    <NumberComponent
      key={`number-component-${value}-${key}-${spacing}`}
      valueKey={key}
      value={value}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createNullComponent = ({ key = null, spacing }) => {
  return (
    <NullComponent
      key={`null-component-${key}-${spacing}`}
      valueKey={key}
      space={spacing}
    />
  );
};

const createStringComponent = ({ key = null, value, spacing, showKey }) => {
  return (
    <StringComponent
      key={`string-component-${value}-${key}-${spacing}`}
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
      key={`boolean-component-${value}-${key}-${spacing}`}
      valueKey={key}
      value={value}
      space={spacing}
      showKey={showKey}
    />
  );
};

const createObjectComponent = ({ key, value, spacing }) => {
  return (
    <ObjectComponent
      key={`object-component-${value}-${key}-${spacing}`}
      valueKey={key}
      value={value}
      callback={createTypesComponent}
      space={spacing}
    />
  );
};

const createArrayComponent = ({ key = null, items, spacing }) => {
  return (
    <ArrayComponent
      key={`array-component-${items.length}-${key}-${spacing}`}
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
    return createObjectComponent({ key, value, spacing });
  }

  return null;
};

const createData = (data) => {
  if (data && isJSONString(data)) {
    const parsedJSON = JSON.parse(data);
    return Object.keys(parsedJSON).map((key) => {
      const value = parsedJSON[key];
      return createTypesComponent({
        key,
        value,
        spacing: INITIAL_SPACE,
        showKey: true,
      });
    });
  }

  return null;
};

const JSONViewer = ({ json, show }) => {
  if (show) {
    const outputJSON = createData(json);

    return (
      <>
        {outputJSON && (
          <div>
            <span>{"{"}</span>
            {outputJSON}
            <span>{"}"}</span>
          </div>
        )}
      </>
    );
  }
  return null;
};

export default JSONViewer;
