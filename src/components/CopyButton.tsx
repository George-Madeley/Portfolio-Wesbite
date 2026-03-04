"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useCallback, useState } from "react";

interface CopyButtonProps extends Omit<IconButtonProps, "onClick"> {
  text: string;
  label: string;
}

export default function CopyButton({
  text,
  label,
  ...iconButtonProps
}: CopyButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(text);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }, [text]);

  return (
    <Tooltip aria-label={`Copy ${label}`} title="Copy">
      <IconButton {...iconButtonProps} onClick={handleClick}>
        {clicked ? <CheckCircleIcon /> : <ContentCopyIcon />}
      </IconButton>
    </Tooltip>
  );
}
