"use client";

import Box from "@mui/material/Box";
import Stack, { stackClasses } from "@mui/material/Stack";
import MuiMarkdown from "mui-markdown";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface MarkdownProps extends PropsWithChildren {
  imageSrc: string;
}

export default function Markdown(props: MarkdownProps) {
  function rewriteImageSrc(src: string) {
    // If src is a relative path (doesn't start with http)
    if (!/^https?:\/\//.test(src)) {
      return `${props.imageSrc}${src.replace(/^(\.\/|\/)/, "")}?raw=true`;
    }
    return src;
  }
  return (
    <Box sx={{ [`&>.${stackClasses.root}`]: { gap: 2 } }}>
      <MuiMarkdown
        overrides={{
          img: (elementProps) => {
            const src = rewriteImageSrc(
              typeof elementProps.src === "string" ? elementProps.src : ""
            );
            return (
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%" }}
              >
                <Image
                  alt={elementProps.alt ?? ""}
                  height={1000}
                  src={src}
                  style={{
                    height: "unset",
                    width: "50%",
                  }}
                  width={1000}
                />
              </Stack>
            );
          },
        }}
      >
        {props.children}
      </MuiMarkdown>
    </Box>
  );
}
