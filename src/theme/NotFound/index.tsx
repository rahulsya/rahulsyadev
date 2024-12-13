import React from "react";
import NotFound from "@theme-original/NotFound";
import type NotFoundType from "@theme/NotFound";
import type { WrapperProps } from "@docusaurus/types";
import Layout from "@theme/Layout";

type Props = WrapperProps<typeof NotFoundType>;

export default function NotFoundWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout title="Page Not Found">
        <div className="flex flex-col items-center">Not found Page</div>
      </Layout>
      {/* <NotFound {...props} /> */}
    </>
  );
}
