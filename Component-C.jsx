import { Fname, Passion } from "./src/App";

export default function Component_C() {
  return (
    <div>
      <Fname.Consumer>
        {(fname) => {
          return (
            <>
              <Passion.Consumer>
                {(passion) => {
                  return (
                    <>
                      My Name is MS {fname} and my Passion is to playing{" "}
                      {passion}
                    </>
                  );
                }}
              </Passion.Consumer>
            </>
          );
        }}
      </Fname.Consumer>
    </div>
  );
}
