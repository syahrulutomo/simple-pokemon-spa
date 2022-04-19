import React, {useEffect, useState} from "react";
import {StyledTable, THead, TBody, TH, TR, TD} from "./styled";

export const Table = ({data, header}) => {
  const [mappedData, setMappedData] = useState();

  useEffect(() => {
    if (data && header) {
      const dataWithMatchedColumn = data.map((it, index) => (
        <TR key={Math.random() + index + it[header[0]["key"]]}>
          {header.map((h, index) => {
            return (
              <TD key={Math.random() + index + it[h["key"]]}>{it[h["key"]]}</TD>
            );
          })}
        </TR>
      ));
      setMappedData(dataWithMatchedColumn);
    }
  }, [header, data]);

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
      <TBody>{mappedData ? mappedData : null}</TBody>
    </StyledTable>
  );
};
