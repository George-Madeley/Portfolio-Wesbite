"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ToggleChevron.css";

interface ToggleChevronProps {
  id: number;
}

export function ToggleChevron(props: ToggleChevronProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("projectId") === String(props.id);

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("projectId") === String(props.id)) {
      params.delete("projectId");
    } else {
      params.set("projectId", String(props.id));
    }
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [pathname, props.id, router, searchParams]);

  return (
    <div
      className={`toggle-chevron ${isOpen ? "toggle-chevron-open" : ""}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}
