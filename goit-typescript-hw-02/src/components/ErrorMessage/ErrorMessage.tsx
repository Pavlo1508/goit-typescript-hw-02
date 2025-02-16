import s from "./ErrorMessage.module.css";
import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <div>
      <p className={s.error}>
        Sorry, we don&#x27;t have an image for you :( Please change your
        request.
      </p>
    </div>
  );
};

export default ErrorMessage;
