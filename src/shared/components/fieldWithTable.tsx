import React from "react";

import { Container } from "./container";

type FieldConfig =
  | {
      hasColumns: true;
      rows: IRow[];
    }
  | {
      hasColumns: false;
      rows: string[];
    };
interface IRow {
  title: string;
  desc: string;
}
interface Props {
  className?: string;
  title: string;
  config: FieldConfig;
}

export const FieldWithTable: React.FC<Props> = ({
  className,
  title,
  config,
}) => {
  return (
    <div className={className}>
      <Container>
        <h2 className="mb-[30px] text-[18px] font-medium text-[#DADADB]">
          {title}
        </h2>

        <div className="flex flex-col gap-2 text-[12px] text-[#ACACAC]">
          {config.hasColumns && (
            <>
              {config.rows.map((row) => (
                <div className="grid grid-cols-2 gap-2" key={row.title}>
                  <p>{row.title}</p>
                  <p>{row.desc} </p>
                </div>
              ))}
            </>
          )}
          {!config.hasColumns && (
            <>
              {config.rows.map((row) => (
                <p key={row}>{row}</p>
              ))}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
