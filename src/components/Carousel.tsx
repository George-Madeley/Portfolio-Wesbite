"use client";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack, { StackProps } from "@mui/material/Stack";
import React, { ChangeEvent, useCallback, useState } from "react";

export default function Carousel(props: StackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = React.Children.count(props.children);

  const handleChange = useCallback(
    (_: ChangeEvent<unknown>, page: number) => setActiveIndex(page - 1),
    []
  );

  const children = React.Children.toArray(props.children);

  return (
    <Stack
      {...props}
      sx={{
        ...props.sx,
        overflow: "hidden",
      }}
    >
      <Box height="100%" width="100%">
        <Stack
          direction="row"
          height="100%"
          justifyContent="start"
          sx={{
            position: "relative",
            width: `calc(100% * ${children.length})`,
            transform: `translateX(calc(-100% * ${activeIndex / children.length}))`,
            transition: "transform 200ms ease-in-out",
          }}
        >
          {children.map((child, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              {child}
            </Box>
          ))}
        </Stack>
      </Box>
      <Pagination
        count={itemCount}
        onChange={handleChange}
        page={activeIndex + 1}
      />
    </Stack>
  );
}
