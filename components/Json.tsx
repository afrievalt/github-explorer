import React from "react";
import { ReactNode } from "react";

type Props = {
  data: { [T: string]: any };
};

function Json(props: Props) {
  const { data } = props;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Json;
