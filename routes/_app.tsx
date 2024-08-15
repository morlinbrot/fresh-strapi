import { type PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en-US">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Testing out Deno's Fresh with Strapi."
        />
        <title>fresh-strapi</title>
        <link rel="stylesheet" href={asset("/styles.css")} media="screen" />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
