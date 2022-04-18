import React from "react";
import { StyledTable, THead, TBody, TH, TR, TD } from "./styled";

export const Table = ({ data, header }) => {
  return (
    <StyledTable>
      <THead>
        <TR>
          {header
            ? header.map((it, index) => (
                <TH key={index + it.label}>{it.label}</TH>
              ))
            : null}
        </TR>
      </THead>
      <TBody>
        {data
          ? data.map((it, index) => (
              <TR key={index + it.move.name}>
                <TD>{index + 1}</TD>
                <TD>{it.move.name}</TD>
              </TR>
            ))
          : null}
      </TBody>
    </StyledTable>
  );
};
