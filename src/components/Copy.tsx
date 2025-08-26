"use client";

import { useCallback, useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CopyProps {
  text: string;
  label: string;
}

export default function Copy(props: CopyProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(props.text);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }, [props.text]);

  return (
    <Tooltip aria-label={`Copy ${props.label}`} title="Copy">
      <IconButton onClick={handleClick}>
        {clicked ? <CheckCircleIcon /> : <ContentCopyIcon />}
      </IconButton>
    </Tooltip>
  );
}
