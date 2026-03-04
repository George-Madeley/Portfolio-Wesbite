"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ReactNode, useCallback, useState } from "react";

interface CopyButtonProps extends Omit<IconButtonProps, "onClick"> {
  text: string;
  label: string;
}

export default function CopyButton({
  text,
  label,
  ...iconButtonProps
}: CopyButtonProps) {
  const [clicked, setClicked] = useState<"error" | "success" | "idle">("idle");

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setClicked("success");
    } catch {
      setClicked("error");
    } finally {
      setTimeout(() => {
        setClicked("idle");
      }, 2000);
    }
  }, [text]);

  return (
    <Tooltip aria-label={`Copy ${label}`} title="Copy">
      <IconButton {...iconButtonProps} onClick={handleClick}>
        {
          (
            {
              success: <CheckCircleIcon color="success" />,
              error: <CheckCircleIcon color="error" />,
              idle: <ContentCopyIcon />,
            } satisfies Record<typeof clicked, ReactNode>
          )[clicked]
        }
      </IconButton>
    </Tooltip>
  );
}
