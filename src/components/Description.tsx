import * as S from "./style";
import { IDescription } from "./type";

export const Description = ({ value }: IDescription) => {
  return (
    <S.Description title={value.title}>
      <h1>{value.title}</h1>
      {value.value.map((title) => {
        return <p>{title}</p>;
      })}
    </S.Description>
  );
};
